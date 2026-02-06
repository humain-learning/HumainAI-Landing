'use client';
import { useState, useEffect, useMemo } from 'react';

export interface DiscountTier {
    durationHours: number;
    discountPercent: number;
}

export interface TieredPricingConfig {
    originalPrice: number;
    startDate: string; // ISO string in IST (YYYY-MM-DDTHH:mm:ss)
    discountTiers: DiscountTier[];
}

export interface TieredDiscountResult {
    isActive: boolean;           // true if a discount tier is currently active
    isExpired: boolean;          // true if all tiers have expired
    isNotStarted: boolean;       // true if offer hasn't started yet
    currentTierIndex: number;    // -1 if not active
    discountPercent: number;     // 0 if no discount active
    discountedPrice: number;     // same as original if no discount
    originalPrice: number;
    tierEndTime: Date | null;    // end time of current tier (for countdown)
    timeRemaining: number;       // milliseconds remaining in current tier
}

// Convert IST date string to UTC Date object
function istToUtc(istDateString: string): Date {
    // Parse the string as UTC by appending 'Z', then subtract 5:30 to convert from IST to UTC
    // IST is UTC+5:30, so to get UTC we subtract 5 hours 30 minutes
    const asUtc = new Date(istDateString + 'Z');
    return new Date(asUtc.getTime() - (5.5 * 60 * 60 * 1000));
}

export function useTieredDiscount(config: TieredPricingConfig): TieredDiscountResult {
    const [mounted, setMounted] = useState(false);
    const [now, setNow] = useState<Date | null>(null);

    // Only set the time after mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
        setNow(new Date());
    }, []);

    // Update current time every second
    useEffect(() => {
        if (!mounted) return;

        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [mounted]);

    const result = useMemo(() => {
        // Return loading state until mounted
        if (!now) {
            return {
                isActive: false,
                isExpired: false,
                isNotStarted: true,
                currentTierIndex: -1,
                discountPercent: 0,
                discountedPrice: config.originalPrice,
                originalPrice: config.originalPrice,
                tierEndTime: null,
                timeRemaining: 0,
            };
        }

        const startTimeUtc = istToUtc(config.startDate);
        const currentTime = now.getTime();
        const startTime = startTimeUtc.getTime();

        // Check if offer hasn't started yet
        if (currentTime < startTime) {
            return {
                isActive: false,
                isExpired: false,
                isNotStarted: true,
                currentTierIndex: -1,
                discountPercent: 0,
                discountedPrice: config.originalPrice,
                originalPrice: config.originalPrice,
                tierEndTime: null,
                timeRemaining: 0,
            };
        }

        // Calculate elapsed time since start
        const elapsedMs = currentTime - startTime;
        const elapsedHours = elapsedMs / (1000 * 60 * 60);

        // Find the active tier
        let cumulativeHours = 0;
        for (let i = 0; i < config.discountTiers.length; i++) {
            const tier = config.discountTiers[i];
            
            // Handle indefinite discounts (durationHours = 0)
            if (tier.durationHours === 0) {
                // Indefinite tier - active forever once reached
                const discountedPrice = Math.round(
                    config.originalPrice * (1 - tier.discountPercent / 100)
                );

                return {
                    isActive: true,
                    isExpired: false,
                    isNotStarted: false,
                    currentTierIndex: i,
                    discountPercent: tier.discountPercent,
                    discountedPrice,
                    originalPrice: config.originalPrice,
                    tierEndTime: null,  // No end time for indefinite discount
                    timeRemaining: 0,
                };
            }

            const tierEndHours = cumulativeHours + tier.durationHours;

            if (elapsedHours < tierEndHours) {
                // This tier is active
                const tierEndTimeMs = startTime + (tierEndHours * 60 * 60 * 1000);
                const tierEndTime = new Date(tierEndTimeMs);
                const timeRemaining = tierEndTimeMs - currentTime;
                const discountedPrice = Math.round(
                    config.originalPrice * (1 - tier.discountPercent / 100)
                );

                return {
                    isActive: true,
                    isExpired: false,
                    isNotStarted: false,
                    currentTierIndex: i,
                    discountPercent: tier.discountPercent,
                    discountedPrice,
                    originalPrice: config.originalPrice,
                    tierEndTime,
                    timeRemaining,
                };
            }

            cumulativeHours = tierEndHours;
        }

        // All tiers have expired
        return {
            isActive: false,
            isExpired: true,
            isNotStarted: false,
            currentTierIndex: -1,
            discountPercent: 0,
            discountedPrice: config.originalPrice,
            originalPrice: config.originalPrice,
            tierEndTime: null,
            timeRemaining: 0,
        };
    }, [now, config]);

    return result;
}
