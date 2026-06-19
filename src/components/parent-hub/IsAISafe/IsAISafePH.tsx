'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const tableData = [
  { safe: "Child is Class 8 or older and uses it with a parent's knowledge", unsafe: 'Child is under Class 8 and uses it alone' },
  { safe: 'Child has been taught to verify before trusting an AI answer', unsafe: 'Child accepts the first confident answer as true' },
  { safe: "Child never pastes personal data into the chat", unsafe: 'Child pastes her name, school, photos, or board enrollment number' },
  { safe: 'You see what your child is using AI for each week', unsafe: 'AI use is private from you, every day' },
  { safe: 'Family has agreed rules about AI for homework', unsafe: 'Homework rules with AI have never been discussed' },
];

export default function IsAISafePH() {
  const [hoveredCondition, setHoveredCondition] = useState<number | null>(null);

  return (
    <section id="safety" className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-5"
            >
              Is AI safe for children in India? AI safety for kids, answered directly
            </motion.h2>

            <motion.aside
              data-snippet="chatgpt-safe-kids"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-[#f9faf7] p-5 border-l-[6px] border-[#e7a572] shadow-sm"
            >
              <div className="font-display text-[10px] font-extrabold tracking-wider text-terracotta uppercase mb-2">Direct Answer</div>
              <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium leading-relaxed">
                AI can be safe for kids when used with adult supervision and clear guidelines. Younger children (under Class 8) should always use AI with a parent in the room. From Class 8 onwards, with the right framework, children can use AI productively and safely.
              </p>
            </motion.aside>
          </div>

          {/* Right column — photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative w-full h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src="/assets/images/girlstudying.png"
              alt="Girl studying with AI on a laptop"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-[#e8efe0] shadow-sm bg-white"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="w-1/2 p-5 bg-[#f3f6f1] border-b border-r border-[#e8efe0] font-display font-bold text-[#aac191] text-base">
                  <span className="flex items-center gap-2"><svg className="w-4 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> When AI is reasonably safe</span>
                </th>
                <th className="w-1/2 p-4 bg-red-50/40 border-b border-[#e8efe0] font-display font-bold text-terracotta text-base">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> When it is not</span>
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-lg text-charcoal/80">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 border-b border-r border-[#e8efe0] align-top">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#aac191] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{row.safe}</span>
                    </div>
                  </td>
                  <td className="p-4 border-b border-[#e8efe0] align-top">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{row.unsafe}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
