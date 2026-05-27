'use client';

import React from 'react';
import { RequestCallbackModal } from './RequestCallbackModal';

export default function BottomCTA() {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    // Sync with the exact same timer as Band.tsx
    let targetStr = typeof window !== 'undefined' ? localStorage.getItem('hc_camp_timer_target') : null;
    let targetTime = targetStr ? parseInt(targetStr, 10) : 0;

    const now = Date.now();
    if (!targetTime || targetTime < now) {
      targetTime = now + (1 * 24 + 18) * 60 * 60 * 1000 + 30 * 60 * 1000;
      if (typeof window !== 'undefined') {
        localStorage.setItem('hc_camp_timer_target', targetTime.toString());
      }
    }

    const interval = setInterval(() => {
      const current = Date.now();
      const diff = targetTime - current;

      if (diff <= 0) {
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
    <section className="w-full bg-[#e7a572] py-20 md:py-28 overflow-hidden relative">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Headings */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold !text-white leading-tight tracking-tight mb-5 drop-shadow-sm">
          Your child's peers are learning AI.
          <br className="hidden sm:block" />
          Will yours be ahead or behind?
        </h2>
        
        <p className="font-sans text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-14 drop-shadow-sm">
          The  batches are filling fast. Don't let your child miss the summer that could change their academic trajectory.
        </p>

        {/* Large Countdown Timer */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-14 font-mono select-none">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="bg-white/15 border border-white/20 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl min-w-[70px] sm:min-w-[90px] backdrop-blur-sm shadow-sm flex items-center justify-center">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
            </div>
            <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80 mt-3">
              Days
            </span>
          </div>

          <span className="font-display text-3xl sm:text-4xl font-bold text-white/50 -mt-6">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-white/15 border border-white/20 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl min-w-[70px] sm:min-w-[90px] backdrop-blur-sm shadow-sm flex items-center justify-center">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80 mt-3">
              Hours
            </span>
          </div>

          <span className="font-display text-3xl sm:text-4xl font-bold text-white/50 -mt-6">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-white/15 border border-white/20 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl min-w-[70px] sm:min-w-[90px] backdrop-blur-sm shadow-sm flex items-center justify-center">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80 mt-3">
              Mins
            </span>
          </div>

          <span className="font-display text-3xl sm:text-4xl font-bold text-white/50 -mt-6">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-white/15 border border-white/20 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl min-w-[70px] sm:min-w-[90px] backdrop-blur-sm shadow-sm flex items-center justify-center animate-pulse">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80 mt-3">
              Secs
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full mb-8">
          
          {/* Enroll Now Primary Button */}
          <a
            href="https://pages.razorpay.com/humainchamps"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full sm:w-auto bg-white rounded-full pl-6 pr-1.5 py-1.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="font-display text-[15px] sm:text-base font-extrabold text-[#e7a572] mr-4">
              Enroll Now
            </span>
            <div className="bg-[#e7a572] rounded-full px-4 py-2.5">
              <span className="font-display text-[13px] sm:text-[14px] font-extrabold text-white leading-none">
                ₹11,800
              </span>
            </div>
          </a>

          {/* Request a Callback Secondary Outline Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center border-2 border-white/90 bg-transparent hover:bg-white/10 rounded-full px-8 py-3.5 transition-all duration-300 group"
          >
            <span className="font-display text-[15px] sm:text-base font-extrabold text-white group-hover:scale-105 transition-transform duration-300">
              Request a Callback
            </span>
          </button>

        </div>

       

      </div>
      
      <RequestCallbackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
