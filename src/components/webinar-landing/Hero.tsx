'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const target = new Date('2026-06-20T11:00:00+05:30').getTime();
    
    const tick = () => {
      const diff = target - Date.now();
      const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');
      
      if (diff <= 0) {
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
        return;
      }
      setTimeLeft({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#AAC191] pt-[86px] pb-16 px-5 md:px-16 flex items-center min-h-[80vh]">
      {/* Geometric accent rings */}
      <div className="absolute rounded-full border border-white/20 pointer-events-none w-[560px] h-[560px] -top-[200px] -right-[160px]"></div>
      <div className="absolute rounded-full border border-white/20 pointer-events-none w-[320px] h-[320px] top-[40px] right-[70px]"></div>
      <div className="absolute rounded-full border border-white/10 pointer-events-none w-[140px] h-[140px] bottom-[80px] left-[5%]"></div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-12 items-center">
        
        {/* Left copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/30 border border-white/40 rounded-full py-1.5 pl-2.5 pr-3.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#E7A572] animate-[pulse_1.6s_ease-in-out_infinite]"></div>
            <span className="font-sans text-[0.72rem] font-medium tracking-[1.8px] uppercase text-[#333333]">
              Free Live Masterclass &middot; Upcoming Session &middot; Limited Seats
            </span>
          </div>
          
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#333333] mb-5">
            Your Child Is Already Using AI.<br />
            Is It Working <span className="inline-block bg-[#E7A572] text-white px-2.5 pt-0.5 pb-1 rounded-md">For Them</span> or Against Them?
          </h1>
          
          <p className="font-sans text-base text-[#333333]/75 max-w-[520px] mb-3 leading-relaxed">
            Most students use ChatGPT or Gemini without guidance — like learning to swim without a coach. They struggle, waste time, and get average results. In this live session, your child will learn the techniques that actually make AI a study superpower.
          </p>
          
          <p className="font-sans text-[0.82rem] font-medium text-[#333333]/55 mb-8 tracking-[0.3px]">
            For Class 8–12 students &middot; All boards &middot; Just a smartphone
          </p>
          
          <div className="flex flex-wrap items-center gap-[18px]">
            <a 
              href="#book" 
              className="inline-flex items-center justify-center font-display font-extrabold bg-[#E7A572] text-white px-10 py-[18px] text-[1.05rem] rounded-md shadow-[0_4px_22px_rgba(231,165,114,0.35)] transition-all hover:bg-[#C97D49] hover:-translate-y-[1px] hover:shadow-[0_6px_28px_rgba(231,165,114,0.45)]"
            >
              Book Your Child's Free Slot
            </a>
            <span className="font-sans text-[0.78rem] font-medium text-[#333333]/55 tracking-[0.2px]">
              Free &middot; Originally <s className="opacity-70">₹299</s> &middot; Pan-India
            </span>
          </div>
        </div>

        {/* Right card */}
        <div id="book" className="relative z-10 bg-white rounded-xl py-7 px-6 shadow-[0_16px_52px_rgba(0,0,0,0.13),0_3px_12px_rgba(0,0,0,0.05)] lg:self-end">
          <div className="font-sans text-[0.68rem] font-medium tracking-[2px] uppercase text-[#888888] pb-4 mb-[18px] border-b border-[#E6E6E6]">
            Reserve Your Free Seat
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#EFF5E9] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] stroke-[#6E8E55] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <div className="font-sans text-[0.67rem] font-medium tracking-[0.8px] uppercase text-[#888888]">Date</div>
              <div className="font-display text-[0.88rem] font-bold text-[#333333]">Saturday, 20 June 2026</div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#EFF5E9] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] stroke-[#6E8E55] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>
            </div>
            <div>
              <div className="font-sans text-[0.67rem] font-medium tracking-[0.8px] uppercase text-[#888888]">Time</div>
              <div className="font-display text-[0.88rem] font-bold text-[#333333]">11:00 AM IST &middot; 60 Minutes</div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#EFF5E9] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] stroke-[#6E8E55] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18M12 3a9 9 0 0 0 0 18M3 12h18"/></svg>
            </div>
            <div>
              <div className="font-sans text-[0.67rem] font-medium tracking-[0.8px] uppercase text-[#888888]">Mode</div>
              <div className="font-display text-[0.88rem] font-bold text-[#333333]">Live Online &middot; Pan-India</div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#EFF5E9] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] stroke-[#6E8E55] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <div className="font-sans text-[0.67rem] font-medium tracking-[0.8px] uppercase text-[#888888]">Language</div>
              <div className="font-display text-[0.88rem] font-bold text-[#333333]">English</div>
            </div>
          </div>

          <div className="bg-[#EFF5E9] rounded-lg p-3.5 my-4">
            <div className="font-sans text-[0.65rem] font-medium tracking-[1.5px] uppercase text-[#4A6335] mb-2.5">
              Session begins in
            </div>
            <div className="flex items-end gap-2">
              <div className="flex-1 text-center">
                <span className="block font-display text-[1.8rem] font-extrabold text-[#333333] leading-none">{timeLeft.d}</span>
                <span className="block font-sans text-[0.58rem] font-medium tracking-[0.8px] uppercase text-[#888888] mt-[3px]">Days</span>
              </div>
              <div className="flex-shrink-0 font-display text-[1.5rem] font-bold text-[#AAC191] pb-2.5">:</div>
              <div className="flex-1 text-center">
                <span className="block font-display text-[1.8rem] font-extrabold text-[#333333] leading-none">{timeLeft.h}</span>
                <span className="block font-sans text-[0.58rem] font-medium tracking-[0.8px] uppercase text-[#888888] mt-[3px]">Hrs</span>
              </div>
              <div className="flex-shrink-0 font-display text-[1.5rem] font-bold text-[#AAC191] pb-2.5">:</div>
              <div className="flex-1 text-center">
                <span className="block font-display text-[1.8rem] font-extrabold text-[#333333] leading-none">{timeLeft.m}</span>
                <span className="block font-sans text-[0.58rem] font-medium tracking-[0.8px] uppercase text-[#888888] mt-[3px]">Min</span>
              </div>
              <div className="flex-shrink-0 font-display text-[1.5rem] font-bold text-[#AAC191] pb-2.5">:</div>
              <div className="flex-1 text-center">
                <span className="block font-display text-[1.8rem] font-extrabold text-[#333333] leading-none">{timeLeft.s}</span>
                <span className="block font-sans text-[0.58rem] font-medium tracking-[0.8px] uppercase text-[#888888] mt-[3px]">Sec</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#FDF3EB] rounded-md px-3.5 py-2.5 mb-3.5">
            <span className="font-sans text-[0.75rem] font-medium text-[#555555]">Registration Fee</span>
            <span className="font-display text-[0.95rem] font-extrabold text-[#C97D49]">
              FREE <s className="text-[#888888] font-normal text-[0.78rem] ml-1">₹299</s>
            </span>
          </div>

          
          <div className="mt-2 text-center font-sans text-[0.72rem] font-semibold text-[#C97D49] tracking-[0.3px]">
            Only 47 seats remaining
          </div>
        </div>

      </div>
    </section>
  );
}
