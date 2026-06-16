import React from 'react';

export default function Parents() {
  return (
    <section className="py-[88px] px-5 md:px-16 bg-[#EFF5E9]">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-[52px]">
          <span className="block mb-3.5 font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-[#C97D49]">
            For Parents
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold tracking-[-0.8px] leading-[1.15] mb-3.5 text-[#333333]">
            This is the opposite of cheating
          </h2>
          <p className="font-sans text-[0.95rem] text-[#555555] max-w-[580px] leading-[1.72]">
            The method we teach makes your child think more, not less. Here's why parents consistently recommend it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          <div className="bg-white border border-[#E6E6E6] rounded-[10px] p-[26px_22px]">
            <div className="font-sans text-[0.72rem] font-medium tracking-[0.5px] text-[#C97D49] mb-2">
              Safety
            </div>
            <div className="font-display font-extrabold text-[0.95rem] mb-2.5 text-[#333333]">
              Safe & Responsible
            </div>
            <div className="font-sans text-[0.85rem] text-[#555555] leading-[1.65]">
              We teach verification, ethics, and smart-use habits — never blind copying. Our signature "don't give me the answer" technique turns AI into a Socratic coach. Students think more, not less.
            </div>
          </div>
          
          <div className="bg-white border border-[#E6E6E6] rounded-[10px] p-[26px_22px]">
            <div className="font-sans text-[0.72rem] font-medium tracking-[0.5px] text-[#C97D49] mb-2">
              Curriculum
            </div>
            <div className="font-display font-extrabold text-[0.95rem] mb-2.5 text-[#333333]">
              Board & NEP Aligned
            </div>
            <div className="font-sans text-[0.85rem] text-[#555555] leading-[1.65]">
              AI is already in CBSE and CISCE curricula and central to India's NEP 2020 policy. We're teaching tomorrow's core skill, today. Schools are racing to catch up — your child can get ahead now.
            </div>
          </div>
          
          <div className="bg-white border border-[#E6E6E6] rounded-[10px] p-[26px_22px]">
            <div className="font-sans text-[0.72rem] font-medium tracking-[0.5px] text-[#C97D49] mb-2">
              Transparency
            </div>
            <div className="font-display font-extrabold text-[0.95rem] mb-2.5 text-[#333333]">
              You Stay Involved
            </div>
            <div className="font-sans text-[0.85rem] text-[#555555] leading-[1.65]">
              Free parent orientation call before the first class. Progress updates after every module. A final project your child presents to you. You're a partner in this, not an outsider.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
