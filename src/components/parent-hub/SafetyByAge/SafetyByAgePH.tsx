'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const tableData = [
  {
    grade: 'Class 3 to Class 5',
    use: 'AI used only with a parent in the room',
    role: 'Teach, not supervise from a distance',
    teach: 'AI is not a brain; it is a pattern recogniser',
  },
  {
    grade: 'Class 6 to Class 8',
    use: 'AI used in shared family space; parent on the side',
    role: 'Co-learn; ask "what did you use AI for this week"',
    teach: 'Verification habits; data hygiene',
  },
  {
    grade: 'Class 9 to Class 10',
    use: 'AI used independently for study; parent reviews at month-end',
    role: 'Coach; check projects, not chats',
    teach: 'Productive use; CBSE/ICSE practice with NotebookLM',
  },
  {
    grade: 'Class 11 to Class 12',
    use: 'AI used as a study partner with full independence',
    role: 'Mentor; check outcomes, trust process',
    teach: 'Building, citing, and refusing the wrong uses',
  },
];

export default function SafetyByAgePH() {
  const [expandedGrade, setExpandedGrade] = useState<number | null>(null);

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
            AI safety by age for Indian children: a grade-by-grade guide for parents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed"
          >
            Children develop the judgement to handle AI in stages, in the same way they develop the judgement to
            handle a smartphone or a bicycle. Below is the grade-by-grade guidance Humain teaches in the parent
            training that accompanies Humain Champs.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-[#e6e6e6] shadow-sm bg-white mb-5"
        >
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-sage">
                {[`Grade band`, `AI use`, `Parent role`, `What to teach first`, ``].map((h) => (
                  <th key={h} className="p-4 border-r border-white/20 last:border-r-0 font-display font-bold text-white tracking-wide uppercase text-xs">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-sans text-sm text-charcoal/80">
              {tableData.map((row, idx) => (
                <React.Fragment key={idx}>
                  <motion.tr 
                    onClick={() => setExpandedGrade(expandedGrade === idx ? null : idx)}
                    className="hover:bg-[#fafaf8] transition-colors cursor-pointer group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <td className="p-4 border-b border-r border-[#e6e6e6]">
                      <div className="flex items-center gap-3">
                        {/* Grade progression indicator */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-white text-xs" style={{
                          background: `linear-gradient(135deg, ${idx <= 1 ? '#aac191' : '#e7a572'}, ${idx <= 1 ? '#c8d6bc' : '#f0b89d'})`
                        }}>
                          {idx + 1}
                        </div>
                        <span className="font-semibold text-charcoal group-hover:text-[#aac191] transition-colors whitespace-nowrap">{row.grade}</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-r border-[#e6e6e6] group-hover:text-[#aac191] transition-colors">{row.use}</td>
                    <td className="p-4 border-b border-r border-[#e6e6e6] group-hover:text-[#aac191] transition-colors">{row.role}</td>
                    <td className="p-4 border-b border-[#e6e6e6] group-hover:text-[#aac191] transition-colors font-medium">{row.teach}</td>
                    <td className="p-4 border-b border-[#e6e6e6] text-center">
                      <motion.svg 
                        className="w-5 h-5 text-[#aac191] mx-auto"
                        animate={{ rotate: expandedGrade === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </motion.svg>
                    </td>
                  </motion.tr>
                  
                  {/* Expandable Detail Row */}
                  <AnimatePresence>
                    {expandedGrade === idx && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <td colSpan={5} className="p-0 border-b border-[#e6e6e6]">
                          <motion.div 
                            className="bg-[#f9faf7] p-6 border-l-4" 
                            style={{ borderColor: idx <= 1 ? '#aac191' : '#e7a572' }}
                          >
                            <div className="max-w-3xl mx-auto space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-white border border-[#e8efe0] hover:border-[#aac191] transition-colors">
                                  <div className="font-display text-xs font-bold text-[#aac191] uppercase mb-2">AI Use Pattern</div>
                                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{row.use}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white border border-[#e8efe0] hover:border-terracotta transition-colors">
                                  <div className="font-display text-xs font-bold text-terracotta uppercase mb-2">Your Role</div>
                                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{row.role}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white border border-[#e8efe0] hover:border-[#aac191] transition-colors">
                                  <div className="font-display text-xs font-bold text-[#aac191] uppercase mb-2">Teaching Focus</div>
                                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{row.teach}</p>
                                </div>
                              </div>
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-xs text-charcoal/60 italic pt-2"
                              >
                                💡 Click to collapse. This progression helps build judgment gradually as your child matures.
                              </motion.p>
                            </div>
                          </motion.div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
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
          <strong className="text-terracotta font-semibold">At Humain</strong>, we have implemented this guidance with our own children and across 300-plus families in
          our Humain Champs cohorts. It is not absolute. Adjust for your child's maturity and the level of support
          available in your home. The principle is that judgement is built, not granted.
        </motion.p>

      </div>
    </section>
  );
}


