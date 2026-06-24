import React from 'react';

export default function TrustBar() {
  return (
    <div className="bg-[#333333] py-[26px] px-5 md:px-16">
      <div className="max-w-[1100px] mx-auto flex flex-wrap sm:flex-nowrap items-center gap-y-2 sm:gap-y-0">
        
        <div className="flex-1 text-center px-3 py-2 w-1/2 sm:w-auto relative after:content-none sm:[&+&]:after:content-[''] sm:[&+&]:after:absolute sm:[&+&]:after:left-0 sm:[&+&]:after:top-1/2 sm:[&+&]:after:-translate-y-1/2 sm:[&+&]:after:h-7 sm:[&+&]:after:w-px sm:[&+&]:after:bg-white/10">
          <span className="block font-display text-[1.3rem] font-extrabold text-[#AAC191] tracking-[-0.5px]">CBSE</span>
          <span className="block font-sans text-[0.68rem] font-normal text-white/40 mt-0.5 tracking-[0.3px]">ICSE Aligned</span>
        </div>

        <div className="flex-1 text-center px-3 py-2 w-1/2 sm:w-auto relative after:content-none sm:[&+&]:after:content-[''] sm:[&+&]:after:absolute sm:[&+&]:after:left-0 sm:[&+&]:after:top-1/2 sm:[&+&]:after:-translate-y-1/2 sm:[&+&]:after:h-7 sm:[&+&]:after:w-px sm:[&+&]:after:bg-white/10">
          <span className="block font-display text-[1.3rem] font-extrabold text-[#AAC191] tracking-[-0.5px]">NEP</span>
          <span className="block font-sans text-[0.68rem] font-normal text-white/40 mt-0.5 tracking-[0.3px]">2020 Ready</span>
        </div>

        <div className="flex-1 text-center px-3 py-2 w-1/2 sm:w-auto relative after:content-none sm:[&+&]:after:content-[''] sm:[&+&]:after:absolute sm:[&+&]:after:left-0 sm:[&+&]:after:top-1/2 sm:[&+&]:after:-translate-y-1/2 sm:[&+&]:after:h-7 sm:[&+&]:after:w-px sm:[&+&]:after:bg-white/10">
          <span className="block font-display text-[1.3rem] font-extrabold text-[#AAC191] tracking-[-0.5px]">2,400+</span>
          <span className="block font-sans text-[0.68rem] font-normal text-white/40 mt-0.5 tracking-[0.3px]">Students Trained</span>
        </div>

        <div className="flex-1 text-center px-3 py-2 w-1/2 sm:w-auto relative after:content-none sm:[&+&]:after:content-[''] sm:[&+&]:after:absolute sm:[&+&]:after:left-0 sm:[&+&]:after:top-1/2 sm:[&+&]:after:-translate-y-1/2 sm:[&+&]:after:h-7 sm:[&+&]:after:w-px sm:[&+&]:after:bg-white/10">
          <span className="block font-display text-[1.3rem] font-extrabold text-[#AAC191] tracking-[-0.5px]">4.4</span>
          <span className="block font-sans text-[0.68rem] font-normal text-white/40 mt-0.5 tracking-[0.3px]">Parent Rating</span>
        </div>

        <div className="flex-1 text-center px-3 py-2 w-1/2 sm:w-auto relative after:content-none sm:[&+&]:after:content-[''] sm:[&+&]:after:absolute sm:[&+&]:after:left-0 sm:[&+&]:after:top-1/2 sm:[&+&]:after:-translate-y-1/2 sm:[&+&]:after:h-7 sm:[&+&]:after:w-px sm:[&+&]:after:bg-white/10">
          <span className="block font-display text-[1.3rem] font-extrabold text-[#AAC191] tracking-[-0.5px]">Free</span>
          <span className="block font-sans text-[0.68rem] font-normal text-white/40 mt-0.5 tracking-[0.3px]">No Hidden Cost</span>
        </div>

      </div>
    </div>
  );
}
