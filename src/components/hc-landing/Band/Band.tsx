'use client';

import React from 'react';
import SecondaryButton from "ui/SecondaryButton";

export const Band = () => {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    let targetStr = typeof window !== 'undefined' ? localStorage.getItem('hc_camp_timer_target') : null;
    let targetTime = targetStr ? parseInt(targetStr, 10) : 0;

    const now = Date.now();
    if (!targetTime || targetTime < now) {
      // evergreen countdown: set to 1 day, 18 hours, and 30 minutes from now
      targetTime = now + (1 * 24 + 18) * 60 * 60 * 1000 + 30 * 60 * 1000;
      if (typeof window !== 'undefined') {
        localStorage.setItem('hc_camp_timer_target', targetTime.toString());
      }
    }

    const interval = setInterval(() => {
      const current = Date.now();
      const diff = targetTime - current;

      if (diff <= 0) {
        // rollover another 24h evergreen period
        const newTarget = Date.now() + 24 * 60 * 60 * 1000;
        if (typeof window !== 'undefined') {
          localStorage.setItem('hc_camp_timer_target', newTarget.toString());
        }
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sage w-full sticky bottom-0 text-white py-3 z-[10000] shadow-[0_-4px_10px_rgba(0,0,0,0.12)] px-6">
      <div className="flex flex-col sm:flex-row w-full md:max-w-7xl items-center justify-between mx-auto gap-4 sm:gap-6">
        
        {/* Left Side: Header & Urgency Indicator */}
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-ping shrink-0" />
          <p className="font-display text-sm sm:text-base font-extrabold tracking-tight text-white">
            Summer Camp Filling Fast! <span className="font-sans text-xs sm:text-sm font-normal text-white/80 ml-1.5 hidden md:inline">Enroll before batches close.</span>
          </p>
        </div>

        {/* Right Side: Dynamic Countdown Timer (Transparent White) & CTA Button */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          
          {/* Dynamic timer in custom transparent white tags */}
          <div className="flex items-center gap-1.5 select-none font-mono">
            {/* Days */}
            <div className="bg-white/12 border border-white/15 px-2 py-1 rounded-lg text-center min-w-[34px]">
              <span className="block font-display text-xs sm:text-sm font-extrabold leading-none text-white">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="block font-sans text-[7px] uppercase tracking-wider text-white/70 mt-0.5 leading-none">
                d
              </span>
            </div>
            
            <span className="font-sans text-xs font-bold text-white/40">:</span>

            {/* Hours */}
            <div className="bg-white/12 border border-white/15 px-2 py-1 rounded-lg text-center min-w-[34px]">
              <span className="block font-display text-xs sm:text-sm font-extrabold leading-none text-white">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="block font-sans text-[7px] uppercase tracking-wider text-white/70 mt-0.5 leading-none">
                h
              </span>
            </div>

            <span className="font-sans text-xs font-bold text-white/40">:</span>

            {/* Minutes */}
            <div className="bg-white/12 border border-white/15 px-2 py-1 rounded-lg text-center min-w-[34px]">
              <span className="block font-display text-xs sm:text-sm font-extrabold leading-none text-white">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="block font-sans text-[7px] uppercase tracking-wider text-white/70 mt-0.5 leading-none">
                m
              </span>
            </div>

            <span className="font-sans text-xs font-bold text-white/40">:</span>

            {/* Seconds */}
            <div className="bg-white/15 border border-white/20 px-2 py-1 rounded-lg text-center min-w-[34px] animate-pulse">
              <span className="block font-display text-xs sm:text-sm font-extrabold leading-none text-[#ffd3b4]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="block font-sans text-[7px] uppercase tracking-wider text-[#ffd3b4]/80 mt-0.5 leading-none">
                s
              </span>
            </div>
          </div>

          {/* Enroll Button */}
          <SecondaryButton text="Enroll Now" target="https://pages.razorpay.com/humainchamps" newTab />

        </div>

      </div>
    </div>
  );
};
