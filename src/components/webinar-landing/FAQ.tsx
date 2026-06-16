'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: "Is this masterclass really free?",
    a: "Yes — completely free. No credit card, no hidden charges. The live masterclass was originally ₹299 and is now available at no cost. Just book your slot and show up."
  },
  {
    q: "Which classes is this for?",
    a: "Classes 8 to 12, across all boards — CBSE, CISCE, State boards. No prior AI or tech experience is needed. Complete beginners and students who already use ChatGPT both get something new from this session."
  },
  {
    q: "What does my child actually need to join?",
    a: "Just a smartphone or laptop with internet. No software installation needed. We use free AI tools (ChatGPT, Gemini, or Claude) — the free version is enough for everything. No account required on the day; guest access works perfectly."
  },
  {
    q: "Is AI safe for school students? Won't this encourage cheating?",
    a: "Our method is the opposite of cheating. The signature technique — \"don't give me the answer\" — turns AI into a Socratic coach that asks guiding questions. Students think more, not less. We also teach verification habits so students always check AI output against their textbooks. Parents watching consistently say this builds stronger thinking, not weaker."
  },
  {
    q: "Is AI part of the school curriculum in India?",
    a: "Yes. AI is already part of CBSE and CISCE curricula, and is a central pillar of India's NEP 2020 education policy. Schools across India are racing to integrate AI skills — students who learn this now will be significantly ahead of their peers within 1–2 years."
  },
  {
    q: "What if my child misses the live session?",
    a: "We send a replay link along with a prompt cheat-sheet within 2 hours of the live session. That said, the live interactive format — real-time building, live polls, the Prompt Premier League game — is significantly more engaging than a recording."
  },
  {
    q: "What happens after the free masterclass?",
    a: "The masterclass is genuinely useful and complete on its own. Students who want to go further can join the full programme — all subjects, exam-mode training, and a real AI project for their portfolio. Attendees get a special price valid for 48 hours after the session."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[88px] px-5 md:px-16 bg-white" id="faq">
      <div className="max-w-[680px] mx-auto">
        <div className="text-center mb-[52px]">
          <span className="block mb-3.5 font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-[#888888]">
            FAQ
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-[#333333]">
            Common questions
          </h2>
        </div>
        
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E6E6E6]">
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`w-full bg-transparent border-none text-left py-5 font-display font-bold text-[0.92rem] cursor-pointer flex justify-between items-center gap-[18px] transition-colors duration-150 tracking-[-0.1px] ${isOpen ? 'text-[#C97D49]' : 'text-[#333333] hover:text-[#C97D49]'}`}
                >
                  {faq.q}
                  <div className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-250 ${isOpen ? 'rotate-180 border-[#E7A572] bg-[#FDF3EB]' : 'border-[#E6E6E6]'}`}>
                    <svg viewBox="0 0 24 24" className={`w-[9px] h-[9px] stroke-[2.2] fill-none stroke-linecap-round stroke-linejoin-round transition-colors duration-150 ${isOpen ? 'stroke-[#C97D49]' : 'stroke-[#555555]'}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`font-sans text-[0.87rem] text-[#555555] leading-[1.72] overflow-hidden transition-all duration-350 ease-in-out ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
