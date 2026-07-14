'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: 'At what age should my child start learning about AI?',
    a: 'The OECD AI Literacy Framework suggests starting at age 8. We start at Class 8, which is the foundational age for structured AI literacy. Below Class 8, the conversation on AI belongs at home, and our free Parents Guide is built to support that. From Class 8 onwards, students can reliably distinguish prediction from fact, train their own classifiers, and build projects that meet CBSE or ICSE practical-exam standards.',
  },
  {
    q: 'What if my child uses AI to do her homework?',
    a: 'She will. The question is whether she does it consciously, with your knowledge, and within rules you have agreed. We do not recommend banning AI for homework. We recommend agreeing rules and reviewing them weekly. The section on this page (What to allow, what to push back on) gives a starting list. Print it. Put it on the fridge.',
  },
  {
    q: 'Should I let my child use AI tools like ChatGPT?',
    a: 'Conditional yes. AI tools are safe for a Class 8 or older child who knows what AI is, verifies before trusting, and never pastes personal data into the chat. For younger children, use AI only with you in the room. The AI safety section of this page covers the conditions in detail.',
  },
  {
    q: 'How do I talk to my child about AI?',
    a: 'Start by asking. Not telling. Ask her what AI she uses, where she uses it, and what she trusts it for. The first conversation is listening. The second conversation is the five questions from the parent checklist section of this page. The third conversation is agreeing rules together',
  },
  {
    q: 'What if I do not understand AI myself?',
    a: 'That is fine. You do not need to understand AI to teach your child to use it well. You need to be in the room while she learns and ask her good questions now and then. Humain teaches the framework, your child uses the tools. You do not need to be present for every session, but you should be kept in the loop with a quick weekly check-in.',
  },
];

export default function FAQPH() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Left sticky label */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-sm font-bold tracking-[0.15em] text-[#aac191] uppercase mb-3"
              >
                FAQ
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-extrabold leading-[1.15] tracking-tight text-charcoal mb-4"
              >
                AI for kids in India: 10 questions Indian parents ask, answered
              </motion.h2>
            </div>
          </div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-2"
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#e8efe0] rounded-2xl overflow-hidden bg-[#f9faf7] transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-display font-bold text-base text-charcoal pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-[#e8efe0] flex items-center justify-center text-[#aac191]">
                    {openIndex === idx ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 font-sans text-sm text-charcoal/80 leading-relaxed border-t border-[#e8efe0]/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
