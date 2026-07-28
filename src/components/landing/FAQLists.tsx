'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';

const ENTITY_FAQ = [
  {
    title: 'What is Humain Learning?',
    content: (
      <div>
        Humain Learning is an Indian AI literacy course provider for Class 8-12 students and teachers, operated by
        Eduxa Consulting. The work runs across two programmes (HumainChamps for students and HumainEducators for
        teachers) and is built on the six-pillar Humain AI Literacy Framework adapted from UNESCO, OECD, and EU
        references.
      </div>
    ),
  },
  {
    title: 'Who are the courses for?',
    content: (
      <div>
        HumainChamps is for Indian students in Class 8-12 (age 13+). HumainEducators is for working school teachers.
        School-side institutional partnerships route through the{' '}
        <Link className="text-secondary-color underline underline-offset-4" href="/schools">
          for-schools page
        </Link>
        . Parents start at{' '}
        <Link className="text-secondary-color underline underline-offset-4" href="/parenthub">
          for-parents
        </Link>
        ; teachers and direct enrollers can also self-enrol from the HumainEducators course page.
      </div>
    ),
  },
  {
    title: 'Do students need any coding experience?',
    content: (
      <div>
        No—students do not need any coding experience to join. The courses are designed for beginners, with step-by-step
        guidance, practical examples, and hands-on activities that build confidence from the first session onward.
      </div>
    ),
  },
  
  {
    title: 'How do I get on a call with you?',
    content: (
      <div>
        <Link
          className="text-secondary-color underline underline-offset-4"
          href="/courses/students/humain-champs?utm_source=humain_site&utm_medium=internal&utm_campaign=homepage&utm_content=faq#callback"
        >
          Request a callback
        </Link>{' '}
        on the HumainChamps page, WhatsApp{' '}
        <a
          className="text-secondary-color underline underline-offset-4"
          href="https://wa.me/918130023688?text=I%27m%20interested%20in%20Humain%20Learning.%20Coming%20from%20your%20homepage."
          target="_blank"
          rel="noopener noreferrer"
        >
          +91 81300 23688
        </a>
        , or email{' '}
        <a
          className="text-secondary-color underline underline-offset-4"
          href="mailto:hi@humainlearning.ai?subject=Enquiry%20via%20humainlearning.ai"
        >
          hi@humainlearning.ai
        </a>
        .
      </div>
    ),
  },
];

const FAQLists = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-[#F8F1E6]">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 text-[#011813] md:px-8 lg:px-0">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C97D49]">
            QUESTIONS, ANSWERED
          </p>
          <div className="mt-3 h-px w-16 bg-[#C97D49]" />
          <h2 className="mt-4 text-4xl font-black tracking-[-0.02em] text-[#011813] sm:text-5xl">
            AI Literacy Course FAQ
          </h2>
        </div>

        <div className="mx-auto mt-10 w-full max-w-3xl">
          <div className="space-y-3">
            {ENTITY_FAQ.map((faq, idx) => {
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
                    aria-controls={`landing-faq-content-${idx}`}
                  >
                    <span className="pr-4 text-left text-lg font-semibold text-[#011813]">
                      {faq.title}
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
                        id={`landing-faq-content-${idx}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="border-t border-[#f0f0f0] px-4 pb-4 pt-4 text-left text-base leading-relaxed text-[#4B4B4B]">
                          {faq.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQLists;
