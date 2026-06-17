'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

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

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-4"
            >
              The actual answer is conditional. AI is safe for your child when three conditions are met.
            </motion.p>

            <div className="space-y-3">
              {[
                { text: 'Your child knows what AI is and that it can invent facts.', detail: 'This prevents your child from blindly trusting AI outputs as gospel truth.' },
                { text: "Your child knows what never to share with an AI tool (real name, school name, address, photos, family information, board enrollment number).", detail: 'Data protection is essential. Teach her what personal information to guard.' },
                { text: 'You and your child agree on what AI is allowed to do and what it is not.', detail: 'Clear family rules prevent accidental misuse and build responsibility.' },
              ].map((cond, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  onHoverStart={() => setHoveredCondition(i)}
                  onHoverEnd={() => setHoveredCondition(null)}
                  className="flex items-start gap-3 bg-[#f3f6f1] rounded-xl px-4 py-3 group hover:bg-[#e8efe0] transition-all"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#aac191] flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-[10px]">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-sm text-charcoal/80 group-hover:text-[#aac191] transition-colors">{cond.text}</p>
                    {hoveredCondition === i && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-sans text-xs text-charcoal/60 mt-2 italic pl-3 border-l-2 border-[#aac191]"
                      >
                        💡 {cond.detail}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <Link
                href="/parents/is-ai-safe-for-children-india"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                Read more: is AI safe for children in India
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
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
                <th className="w-1/2 p-4 bg-[#f3f6f1] border-b border-r border-[#e8efe0] font-display font-bold text-[#aac191] text-base">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> When AI is reasonably safe</span>
                </th>
                <th className="w-1/2 p-4 bg-red-50/40 border-b border-[#e8efe0] font-display font-bold text-terracotta text-base">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> When it is not</span>
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm text-charcoal/80">
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
