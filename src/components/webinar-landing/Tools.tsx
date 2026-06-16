import React from 'react';

export default function Tools() {
  return (
    <section className="py-[88px] px-5 md:px-16 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-[52px]">
          <span className="block mb-3.5 font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-[#4A6335]">
            Your AI Study System
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold tracking-[-0.8px] leading-[1.15] mb-3.5 text-[#333333]">
            AI study system built by you.<br />Used every single day.
          </h2>
          <p className="font-sans text-[0.95rem] text-[#555555] max-w-[580px] leading-[1.72]">
            You don't watch a demo. You build. Every student leaves with a personal AI study system they can use from tonight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative overflow-hidden bg-white border border-[#E6E6E6] rounded-[10px] p-[28px_22px] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(0,0,0,0.07)] hover:border-[#AAC191] hover:-translate-y-0.5 group">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#AAC191] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
            <span className="block font-sans text-[0.65rem] font-medium tracking-[1.8px] uppercase text-[#888888] mb-4">
              Tool 01
            </span>
            <div className="w-[46px] h-[46px] rounded-[10px] bg-[#EFF5E9] flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#6E8E55] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/></svg>
            </div>
            <div className="font-display font-extrabold text-[0.98rem] tracking-[-0.2px] mb-2 text-[#333333]">
              Smart Timetable Generator
            </div>
            <div className="font-sans text-[0.84rem] text-[#555555] leading-[1.62] mb-4">
              A personalised study plan built around your exam dates, your weak subjects, and your life — sports practice included.
            </div>
          </div>

          <div className="relative overflow-hidden bg-white border border-[#E6E6E6] rounded-[10px] p-[28px_22px] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(0,0,0,0.07)] hover:border-[#AAC191] hover:-translate-y-0.5 group">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#AAC191] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
            <span className="block font-sans text-[0.65rem] font-medium tracking-[1.8px] uppercase text-[#888888] mb-4">
              Tool 02
            </span>
            <div className="w-[46px] h-[46px] rounded-[10px] bg-[#EFF5E9] flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#6E8E55] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><line x1="9" y1="18" x2="15" y2="18"/></svg>
            </div>
            <div className="font-display font-extrabold text-[0.98rem] tracking-[-0.2px] mb-2 text-[#333333]">
              Photo-to-Notes Machine
            </div>
            <div className="font-sans text-[0.84rem] text-[#555555] leading-[1.62] mb-4">
              Snap any textbook page — get crisp 5-line notes, key terms, and a memory trick for the hardest concept in 90 seconds.
            </div>
          </div>

          <div className="relative overflow-hidden bg-white border border-[#E6E6E6] rounded-[10px] p-[28px_22px] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(0,0,0,0.07)] hover:border-[#AAC191] hover:-translate-y-0.5 group">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#AAC191] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
            <span className="block font-sans text-[0.65rem] font-medium tracking-[1.8px] uppercase text-[#888888] mb-4">
              Tool 03
            </span>
            <div className="w-[46px] h-[46px] rounded-[10px] bg-[#EFF5E9] flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#6E8E55] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="13" y2="14"/></svg>
            </div>
            <div className="font-display font-extrabold text-[0.98rem] tracking-[-0.2px] mb-2 text-[#333333]">
              24/7 Doubt Solver
            </div>
            <div className="font-sans text-[0.84rem] text-[#555555] leading-[1.62] mb-4">
              A personal tutor that coaches you to find the answer yourself — available at 11 pm the night before any exam.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          <div className="text-center p-[32px_20px] bg-[#333333] rounded-[10px]">
            <span className="block font-display text-5xl font-extrabold text-[#AAC191] tracking-[-2px] leading-none">3</span>
            <span className="block font-sans text-[0.78rem] text-white/45 mt-2 leading-[1.5]">AI tools in your study system — built by you, today</span>
          </div>
          <div className="text-center p-[32px_20px] bg-[#333333] rounded-[10px]">
            <span className="block font-display text-5xl font-extrabold text-[#AAC191] tracking-[-2px] leading-none">80%</span>
            <span className="block font-sans text-[0.78rem] text-white/45 mt-2 leading-[1.5]">Of study time typically wasted on re-reading (memory science)</span>
          </div>
          <div className="text-center p-[32px_20px] bg-[#333333] rounded-[10px]">
            <span className="block font-display text-5xl font-extrabold text-[#AAC191] tracking-[-2px] leading-none">95%</span>
            <span className="block font-sans text-[0.78rem] text-white/45 mt-2 leading-[1.5]">Of students have never used AI to study properly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
