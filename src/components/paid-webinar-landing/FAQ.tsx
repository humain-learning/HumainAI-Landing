'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from './data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white px-5 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-[#333333] md:text-4xl">
          Questions parents ask us
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.id} className="overflow-hidden rounded-xl border border-[#E6E6E6] bg-white">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-display text-[0.95rem] font-bold text-[#333333]">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${
                    isOpen ? 'bg-[#E7A572]' : 'bg-[#EFF5E9]'
                  }`}
                >
                  <span className={`text-lg leading-none ${isOpen ? 'text-white' : 'text-[#5e714e]'}`}>
                    +
                  </span>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-[#333333]/65">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
