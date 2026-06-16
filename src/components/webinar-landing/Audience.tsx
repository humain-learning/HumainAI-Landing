import React from 'react';

export default function Audience() {
  const cards = [
    {
      heading: "Never used AI before?",
      sub: "Perfect. By minute 15, you'll have successfully built something with AI, on your own. No setup, no experience needed — just a phone."
    },
    {
      heading: "Already use ChatGPT?",
      sub: "We guarantee at least two techniques you've never seen. The TAP formula alone changes how you get results from any AI tool."
    },
    {
      heading: "CBSE / CISCE / State Board?",
      sub: "All boards, all subjects. The AI study tools work for Maths, Science, SST, English — built around NCERT and board exam patterns."
    },
    {
      heading: "Parents attending?",
      sub: "You're welcome and encouraged. We run a free parent orientation call for every enrolled student — see exactly what your child learns."
    }
  ];

  return (
    <section className="py-[88px] px-5 md:px-16 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-[52px]">
          <span className="block mb-3.5 font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-[#4A6335]">
            Who It's For
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold tracking-[-0.8px] leading-[1.15] mb-3.5 text-[#333333]">
            Built for every Class 8–12 student in India
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <div key={idx} className="border border-[#E6E6E6] rounded-[10px] p-[22px_20px] bg-white transition-all duration-150 hover:border-[#AAC191] hover:shadow-[0_3px_16px_rgba(0,0,0,0.05)]">
              <div className="font-display font-extrabold text-[0.92rem] mb-1.5 text-[#333333]">
                {card.heading}
              </div>
              <div className="font-sans text-[0.83rem] text-[#555555] leading-[1.6]">
                {card.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
