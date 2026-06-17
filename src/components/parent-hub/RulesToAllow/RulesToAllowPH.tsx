'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

const tableData = [
  {
    allow: 'Using NotebookLM to summarise a chapter, then comparing the summary to the textbook',
    pushback: 'Using AI to write a board-exam essay and submitting it as her own',
    allowHint: 'Verification teaches critical thinking',
    pushbackHint: 'Academic dishonesty violates trust',
  },
  {
    allow: 'Using AI to generate practice questions for board prep',
    pushback: 'Using AI to answer board questions during a test',
    allowHint: 'AI as study aid builds understanding',
    pushbackHint: 'Cheating undermines learning',
  },
  {
    allow: 'Using Canva AI to design a school project poster',
    pushback: 'Using AI to write the entire project including the research',
    allowHint: 'AI supports creativity and design',
    pushbackHint: 'AI replacement prevents learning',
  },
  {
    allow: 'Using AI to write a first draft and then editing it heavily',
    pushback: 'Using AI to write the final draft with no editing',
    allowHint: 'Editing develops writing skills',
    pushbackHint: 'No learning happens passively',
  },
  {
    allow: 'Talking to AI about a homework concept she did not understand',
    pushback: 'Asking AI to do her homework while she does something else',
    allowHint: 'AI as tutor clarifies confusion',
    pushbackHint: 'Engagement required for learning',
  },
  {
    allow: 'Using Suno to make a song for a school cultural event',
    pushback: 'Using AI-generated voices to impersonate a teacher or classmate',
    allowHint: 'Creative tool for expression',
    pushbackHint: 'Impersonation violates ethics',
  },
  {
    allow: 'Sharing family photos with Canva AI to design a birthday card',
    pushback: 'Sharing family photos publicly through a public AI tool',
    allowHint: 'Private use is safe and controlled',
    pushbackHint: 'Public sharing risks privacy',
  },
];

export default function RulesToAllowPH() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e6e6e6]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="max-w-2xl mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-3"
          >
            AI rules for Indian parents: what to allow and what to push back on
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed"
          >
            A short, practical list of decisions you will have to make. Each comes from real conversations Humain
            has had with Indian parents in Delhi NCR, Mumbai, Bengaluru, Pune, and Chennai. None is final.
          </motion.p>
        </div>

        {/* Rules Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-[#e6e6e6] shadow-sm bg-white mb-5"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="w-1/2 p-4 bg-green-50/60 border-b border-r border-[#e6e6e6] font-display font-bold text-[#aac191] text-base">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Allow without much worry</span>
                </th>
                <th className="w-1/2 p-4 bg-red-50/40 border-b border-[#e6e6e6] font-display font-bold text-terracotta text-base">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> Push back firmly</span>
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm text-charcoal/80">
              {tableData.map((row, idx) => (
                <motion.tr 
                  key={idx} 
                  className="hover:bg-gray-50/50 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <td 
                    className="p-4 border-b border-r border-[#e6e6e6] align-top group"
                    onMouseEnter={() => setHoveredCell(`allow-${idx}`)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#aac191]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#aac191]/20 transition-colors">
                        <svg className="w-3 h-3 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="group-hover:text-[#aac191] transition-colors block">{row.allow}</span>
                        {hoveredCell === `allow-${idx}` && (
                          <motion.span 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="text-[11px] text-[#aac191] font-semibold mt-1.5 block"
                          >
                            💡 {row.allowHint}
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td 
                    className="p-4 border-b border-[#e6e6e6] align-top group"
                    onMouseEnter={() => setHoveredCell(`pushback-${idx}`)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-terracotta/10 flex items-center justify-center mt-0.5 group-hover:bg-terracotta/20 transition-colors">
                        <svg className="w-3 h-3 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="group-hover:text-terracotta transition-colors block">{row.pushback}</span>
                        {hoveredCell === `pushback-${idx}` && (
                          <motion.span 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="text-[11px] text-terracotta font-semibold mt-1.5 block"
                          >
                            ⚠️ {row.pushbackHint}
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed max-w-3xl"
        >
          Print this list and put it on the fridge. The first column is roughly what Pillar 3 (Learning with AI) covers
          in Humain Champs. The second column is roughly what Pillar 2 (Ethics, Safety and Responsibility) covers.
        </motion.p>

      </div>
    </section>
  );
}

