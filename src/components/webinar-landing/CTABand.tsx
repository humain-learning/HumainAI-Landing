import React from 'react';

export default function CTABand() {
  return (
    <div className="relative overflow-hidden bg-[#E7A572] py-[88px] px-5 md:px-16 text-center">
      <div className="absolute border border-white/20 rounded-full w-[500px] h-[500px] -top-[220px] left-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.7rem)] font-extrabold text-white tracking-[-0.8px] leading-[1.15] mb-3">
          Your child's AI study system<br />starts here. Tonight.
        </h2>
        
        <p className="font-sans text-[0.92rem] text-white/80 mb-8 leading-[1.65]">
          Free live session &middot; 60 minutes &middot; Class 8–12 &middot; All boards &middot; Just a phone
        </p>
        
        <a 
          href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20my%20free%20slot%20for%20the%2010x%20Student%20Masterclass%20on%20June%2020" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-[#C97D49] font-display font-extrabold px-10 py-[18px] text-[1.05rem] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-150 hover:shadow-[0_6px_28px_rgba(0,0,0,0.18)]"
        >
          Book Your Free Slot
        </a>
        
        <div className="mt-[14px] font-sans text-[0.75rem] text-white/55 tracking-[0.3px]">
          No credit card &middot; No form &middot; Just WhatsApp us
        </div>
      </div>
    </div>
  );
}
