'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const steps = [
  { title: 'Sit beside her, not across from her.', text: 'Use AI together in a shared family space.' },
  { title: 'Start by asking, not telling.', text: 'Ask what AI she already uses and what she trusts it for.' },
  { title: 'Show her one failure.', text: 'Let her catch the AI getting a fact wrong, so she learns to verify.' },
  { title: 'Agree three simple rules together.', text: 'What to never share, when to verify, and what AI is not allowed to do.' },
  { title: 'Have a five-minute check-in.', text: 'Ask what she used AI for this week, and what she chose not to use it for.' },
];

export default function TeachAIAtHomePH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: heading + outro */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-4"
            >
              How to teach your child AI at home: a simple method for parents who are new to it
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-5"
            >
              You do not need to know AI to teach your child to use it well. You need a method. Here is the one
              Humain gives parents who are starting from zero.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-5"
            >
              This is how parents can teach AI without being experts. The first conversation is listening. The full
              method, with a script for each step, is in the free Parents Guide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/parents/how-to-teach-my-child-ai"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                Read the full guide: how to teach my child AI
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: steps */}
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * idx }}
                className="flex items-start gap-4 bg-[#f9faf7] rounded-2xl border border-[#e8efe0] px-5 py-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-terracotta text-white font-display font-bold text-sm mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-charcoal">{step.title}</p>
                  <p className="font-sans text-sm text-charcoal/70 mt-0.5">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
