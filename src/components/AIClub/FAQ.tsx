'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    title: 'What is the Humain AI Club?',
    content:
      'A flexible AI programme as per the school schedule for Grades 3 to 12, with weekly classes, monthly challenges, LMS access, and an annual E-Cell IIT Kharagpur certified hackathon.',
  },
  {
    title: 'Which grades is the AI club for?',
    content:
      'Three batches run in parallel: Grades 3 to 5, Grades 6 to 8, and Grades 9 to 12. Each batch needs a minimum of 30 students.',
  },
  {
    title: 'What certificate do students receive?',
    content:
      'Every enrolled student who takes part in the annual hackathon receives an official E-Cell IIT Kharagpur certificate, recognised nationally and internationally.',
  },
  {
    title: 'What does the school need to provide?',
    content:
      'A computer lab for weekly sessions, one teacher as club coordinator, space for hackathon day, and communication of the programme to parents.',
  },
  {
    title: 'Do teachers need to prepare or teach the content?',
    content:
      'No. Humain Learning designs and delivers the curriculum, and sends a coach to school to launch the club.',
  },
  {
    title: 'How long is the commitment?',
    content:
      'One academic year, with a minimum of 20 students per batch.',
  },
];

const AIClubFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-[#171717] md:text-4xl">
            AI club for schools: frequently asked questions
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * idx }}
                className="overflow-hidden rounded-xl bg-[#FAF6F0] shadow-sm"
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
};

export default AIClubFAQ;