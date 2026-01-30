'use client';
import { useState, useEffect } from 'react';
import { tieredPricing as localTieredPricing } from '@/components/courses-teachers/humain-educators/data/heroFeatures';

export interface DiscountTier {
    durationHours: number;
    discountPercent: number;
}

export interface TieredPricingConfig {
    originalPrice: number;
    startDate: string;
    discountTiers: DiscountTier[];
}

interface UsePricingConfigResult {
    config: TieredPricingConfig;
    isLoading: boolean;
    isRemote: boolean; // true if using remote config, false if using local fallback
}

export function usePricingConfig(): UsePricingConfigResult {
    const [config, setConfig] = useState<TieredPricingConfig>(localTieredPricing);
    const [isLoading, setIsLoading] = useState(true);
    const [isRemote, setIsRemote] = useState(false);

    useEffect(() => {
        async function fetchConfig() {
            try {
                const response = await fetch('/api/pricing-config', {
                    cache: 'no-store',
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch config');
                }

                const { data } = await response.json();
                
                if (data && data.originalPrice && data.startDate && data.discountTiers) {
                    setConfig(data);
                    setIsRemote(true);
                }
                // If data is null or invalid, keep using local fallback
            } catch (error) {
                console.error('Error fetching pricing config, using local fallback:', error);
                // Keep using local fallback
            } finally {
                setIsLoading(false);
            }
        }

        fetchConfig();
    }, []);

    return { config, isLoading, isRemote };
}
