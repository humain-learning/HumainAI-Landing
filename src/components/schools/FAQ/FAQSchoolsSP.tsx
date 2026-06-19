'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MotionHeading } from '../shared/SchoolsMotion';
import { sp } from '../shared/schoolsTheme';

const faqs = [
  {
    q: 'How long does implementation take?',
    a: 'Implementation timelines vary by school and are tailored to specific requirements, goals, and rollout plans following demo discussions.',
  },
  {
    q: 'How does Humain fit with existing curricula?',
    a: 'Humain complements existing CBSE, ICSE, IB, and State Board curricula and can be integrated across subjects.',
  },
  {
    q: 'Is Humain compliant with the DPDP Act 2023?',
    a: 'Yes. Humain follows DPDP-compliant practices and supports responsible handling of student data.',
  },
  {
    q: 'Can we start with a pilot programme?',
    a: 'Yes. Schools can begin with a pilot before deciding on a full-scale implementation.',
  },
];

export default function FAQSchoolsSP() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={`w-full py-16 md:py-24 ${sp.section} ${sp.sectionWhite}`}>
      <div className="mx-auto w-full max-w-3xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <MotionHeading className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl">
            FAQ
          </MotionHeading>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ scale: isOpen ? 1 : 1.01 }}
                className={`overflow-hidden ${sp.cardAlt} transition-shadow duration-300 ${isOpen ? 'shadow-md shadow-sage/10' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-grey/20"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-charcoal">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? '#aac191' : '#ffffff', color: isOpen ? '#ffffff' : '#aac191' }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-grey`}
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="border-t border-grey px-5 pb-5 pt-3 font-sans text-sm leading-relaxed text-charcoal/80 md:text-base">
                        {faq.a}
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
