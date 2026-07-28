'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FRAMEWORK_FAQ = [
  {
    title: 'What is the Humain Learning AI methodology?',
    content:
      'A six-pillar AI literacy framework for school students and teachers, informed by the OECD-EU and UNESCO AI literacy frameworks and aligned to NEP 2020, NCF 2023, CBSE and ICSE.',
  },
  {
    title: 'What are the six pillars?',
    content: 'AI Foundations, Ethics, Safety and Responsibility, Learning with AI, Creating with AI, Agents and Automation, and Human Intelligence in the Age of AI.',
  },
  {
    title: 'How is it different from the global frameworks?',
    content: 'It draws on the OECD-EU and UNESCO frameworks, then adds three capacities they underplay: learning with AI, building agents, and the human capacities AI cannot replace. It is also mapped to the Indian curriculum.',
  },
  {
    title: 'Is it aligned with NEP 2020 and CBSE?',
    content: 'Yes. It maps to NEP 2020 and NCF 2023, the CBSE AI subject codes 417 and 843, and the ICSE AI electives.',
  },
  {
    title: 'Who reviews the framework?',
    content: 'It is reviewed by Dr. Tapaswini Sahu, PhD Educational Psychology JNU and M.Phil Cambridge, and updated annually.',
  },
  {
    title: 'How does Humain Champs use it?',
    content: 'Humain Champs is the live implementation of the framework for school students and teachers, certified by E-Cell IIT Kharagpur.',
  },
];

export default function FrameworkFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#FAF6F0] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#E9A772]">
            FAQ
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-[#1A1A1A] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
        </div>

        <div className="mt-10 space-y-3">
          {FRAMEWORK_FAQ.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * idx }}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-left text-lg font-semibold text-[#011813]">
                    {item.title}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 bg-[#E9A772] text-white'
                        : 'bg-[#EAF2E4] text-[#4B6B4D]'
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-[#f0f0f0] px-4 pb-4 pt-4 text-left text-base leading-relaxed text-[#4B4B4B]">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}