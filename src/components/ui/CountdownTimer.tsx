'use client';
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
    endDate: Date;
    className?: string;
}

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    total: number;
}

function calculateTimeRemaining(endDate: Date): TimeRemaining {
    const now = new Date().getTime();
    const end = endDate.getTime();
    const total = Math.max(0, end - now);

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds, total };
}

function padZero(num: number): string {
    return num.toString().padStart(2, '0');
}

export const CountdownTimer = ({ endDate, className = '' }: CountdownTimerProps) => {
    const [mounted, setMounted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        days: 0, hours: 0, minutes: 0, seconds: 0, total: 1
    });

    // Only start calculating after mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
        setTimeRemaining(calculateTimeRemaining(endDate));
    }, [endDate]);

    useEffect(() => {
        if (!mounted) return;

        const interval = setInterval(() => {
            const remaining = calculateTimeRemaining(endDate);
            setTimeRemaining(remaining);

            if (remaining.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate, mounted]);

    // Don't render anything until mounted (avoids hydration mismatch)
    if (!mounted) {
        return null;
    }

    // Don't render if expired
    if (timeRemaining.total <= 0) {
        return null;
    }

    // Format based on time remaining
    const showDays = timeRemaining.days > 0;

    return (
        <div className={`inline-flex items-center gap-1 font-mono ${className}`}>
            <span className="text-gray-600 text-sm mr-1">Ends in:</span>
            {showDays && (
                <>
                    <span className="bg-sage/20 text-sage px-2 py-1 rounded text-sm font-bold">
                        {timeRemaining.days}d
                    </span>
                    <span className="text-gray-400">:</span>
                </>
            )}
            <span className="bg-sage/20 text-sage px-2 py-1 rounded text-sm font-bold">
                {padZero(timeRemaining.hours)}h
            </span>
            <span className="text-gray-400">:</span>
            <span className="bg-sage/20 text-sage px-2 py-1 rounded text-sm font-bold">
                {padZero(timeRemaining.minutes)}m
            </span>
            <span className="text-gray-400">:</span>
            <span className="bg-sage/20 text-sage px-2 py-1 rounded text-sm font-bold">
                {padZero(timeRemaining.seconds)}s
            </span>
        </div>
    );
};

export default CountdownTimer;
