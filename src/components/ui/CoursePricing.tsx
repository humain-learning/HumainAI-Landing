'use client';

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
    const formatPrice = (value: number) => {
        if (!formatLocale) return value;
        return value.toLocaleString(formatLocale);
    };

    const formattedOriginalPrice = formatPrice(originalPrice);
    const formattedDiscountedPrice = formatPrice(discountedPrice);

    return (
        <div className={containerClassName}>
            {isActive && (
                <div className="mb-2">
                    <span className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-bold">
                        {discountPercent}% OFF
                    </span>
                </div>
            )}
            {isActive ? (
                <>
                    <span className={strikePriceClassName}>&#8377;{formattedOriginalPrice}</span>
                    <span className={discountedPriceClassName}>&#8377;{formattedDiscountedPrice}</span>
                </>
            ) : (
                <span className={priceClassName}>&#8377;{formattedOriginalPrice}</span>
            )}
            <span className={gstClassName}>{gstLabel}</span>
            {showTimer && timerEndDate && (
                <div className="mt-3">
                    <CountdownTimer endDate={timerEndDate} />
                </div>
            )}
        </div>
    );
}
