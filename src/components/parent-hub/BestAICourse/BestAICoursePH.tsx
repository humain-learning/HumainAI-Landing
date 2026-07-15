'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const checks = [
  { title: 'Does it teach judgement, not just tools?', text: 'The best AI program teaches when not to use AI, not only how.' },
  { title: 'Is it live and small-batch?', text: 'A class your child can speak in beats a recorded video.' },
  { title: 'Does your child build something she keeps?', text: 'Look for a real project, like a personal AI agent.' },
  { title: 'Is it certified?', text: 'A recognised certificate, such as one from E-Cell IIT Kharagpur, signals quality.' },
  { title: "Is your child's data protected?", text: 'The best AI course is DPDP-compliant and stores data in India.' },
];

export default function BestAICoursePH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: heading + intro + link */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-4"
            >
              The best AI course for my child: what to look for, Class 8 to Class 12
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-4"
            >
              Every parent wants the best AI course for their child, whether she is in Class 8, 9, 10, 11, or 12. Here is a
              short checklist to judge any course, ours included.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-5"
            >
              Humain Champs is built to pass this checklist for Class 8 to Class 12. Compare it against any other AI
              program for your child using the five points above.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/parents/best-ai-course-for-my-child"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                See why parents pick Humain Champs
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: checklist */}
          <div className="space-y-3">
            {checks.map((check, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * idx }}
                className="flex items-start gap-4 bg-[#f9faf7] rounded-2xl border border-[#e8efe0] px-5 py-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#aac191]/10 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-charcoal">{check.title}</p>
                  <p className="font-sans text-sm text-charcoal/70 mt-0.5">{check.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
