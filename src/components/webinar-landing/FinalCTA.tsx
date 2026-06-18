import React from 'react';

export default function FinalCTA() {
  return (
    <section className="bg-[#333333] py-[88px] px-5 md:px-16 text-center">
      <div className="max-w-[1100px] mx-auto">
        <span className="block text-center mb-4 font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-[#AAC191]">
          Ready to begin
        </span>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-white tracking-[-0.8px] leading-[1.15] mb-2.5">
          Stop studying harder.<br />
          <em className="text-[#AAC191] not-italic">Start studying smarter.</em>
        </h2>
        <p className="font-sans text-[0.9rem] text-white/55 mb-8 leading-[1.65]">
          Give your child the guided AI techniques that thousands of Class 8–12 students across India are already using.<br />
          Free. Live. One session.
        </p>
        
        <a 
          href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20my%20free%20slot%20for%20the%2010x%20Student%20Masterclass%20on%20June%2020" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-display font-extrabold bg-[#E7A572] text-white px-10 py-[18px] text-[1.05rem] rounded-md shadow-[0_4px_22px_rgba(231,165,114,0.35)] transition-all hover:bg-[#C97D49] hover:-translate-y-[1px] hover:shadow-[0_6px_28px_rgba(231,165,114,0.45)]"
        >
          Book Your Child's Free Slot
        </a>
        
        <div className="mt-3.5 font-sans text-[0.72rem] text-white/30 tracking-[0.5px]">
          100% Free &middot; No Form &middot; No Credit Card &middot; No Personal Data Shared with AI Tools
        </div>
      </div>
    </section>
  );
}
