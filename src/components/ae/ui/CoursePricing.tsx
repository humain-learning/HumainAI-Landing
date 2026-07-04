'use client';

import { useEffect, useState } from 'react';
import CountdownTimer from '@/components/ui/CountdownTimer';

type CoursePricingProps = {
    isActive: boolean;
    discountPercent: number;
    originalPrice: number;
    discountedPrice: number;
    gstLabel: string;
    containerClassName: string;
    strikePriceClassName: string;
    priceClassName: string;
    discountedPriceClassName: string;
    gstClassName: string;
    showTimer: boolean;
    timerEndDate?: Date;
    formatLocale?: string;
};

export default function CoursePricing({
    isActive,
    discountPercent,
    originalPrice,
    discountedPrice,
    gstLabel,
    containerClassName,
    strikePriceClassName,
    priceClassName,
    discountedPriceClassName,
    gstClassName,
    showTimer,
    timerEndDate,
    formatLocale,
}: CoursePricingProps) {
    const [nowTimestamp, setNowTimestamp] = useState(Date.now());

    useEffect(() => {
        if (!showTimer || !timerEndDate || !isActive) return;

        const endTimestamp = timerEndDate.getTime();
        if (Date.now() >= endTimestamp) {
            setNowTimestamp(Date.now());
            return;
        }

        const intervalId = setInterval(() => {
            const currentTimestamp = Date.now();
            setNowTimestamp(currentTimestamp);

            if (currentTimestamp >= endTimestamp) {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [showTimer, timerEndDate, isActive]);

    const isExpired = Boolean(timerEndDate && nowTimestamp >= timerEndDate.getTime());
    const effectiveIsActive = isActive && !isExpired;

    const formatPrice = (value: number) => {
        if (!formatLocale) return value;
        return value.toLocaleString(formatLocale);
    };

    const formattedOriginalPrice = formatPrice(originalPrice);
    const formattedDiscountedPrice = formatPrice(discountedPrice);

    return (
        <div className={containerClassName}>
            {effectiveIsActive && (
                <div className="mb-2">
                    <span className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-bold">
                        {discountPercent}% OFF
                    </span>
                </div>
            )}
            {effectiveIsActive ? (
                <>
                    <span className={strikePriceClassName}>&#8377;{formattedOriginalPrice}</span>
                    <span className={discountedPriceClassName}>&#8377;{formattedDiscountedPrice}</span>
                </>
            ) : (
                <span className={priceClassName}>&#8377;{formattedOriginalPrice}</span>
            )}
            <span className={gstClassName}>{gstLabel}</span>
            {showTimer && timerEndDate && effectiveIsActive && (
                <div className="mt-3">
                    <CountdownTimer endDate={timerEndDate} />
                </div>
            )}
        </div>
    );
}
