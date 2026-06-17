'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function FrameworkComparison() {
  const rows = [
    {
      capacity: "Technical understanding of AI",
      humain: "✓ Pillar 1",
      oecd: "✓",
      unesco: "✓",
      eu: "✓",
    },
    {
      capacity: "Ethics and responsibility",
      humain: "✓ Pillar 2",
      oecd: "✓",
      unesco: "✓",
      eu: "✓",
    },
    {
      capacity: "Learning with AI as study partner",
      humain: "✓ Pillar 3",
      oecd: "Partial",
      unesco: "Partial",
      eu: "—",
    },
    {
      capacity: "Creating with AI tools",
      humain: "✓ Pillar 4",
      oecd: "—",
      unesco: "✓",
      eu: "—",
    },
    {
      capacity: "Designing AI agents and automation",
      humain: "✓ Pillar 5",
      oecd: "—",
      unesco: "Partial",
      eu: "—",
    },
    {
      capacity: "Human intelligence: EQ, metacognition, curiosity",
      humain: "✓ Pillar 6",
      oecd: "—",
      unesco: "—",
      eu: "—",
    },
    {
      capacity: "India-specific curriculum alignment (CBSE, ICSE, NEP)",
      humain: "✓ Full",
      oecd: "—",
      unesco: "—",
      eu: "—",
    },
    {
      capacity: "DPDP Act 2023 compliance",
      humain: "✓ Full",
      oecd: "—",
      unesco: "—",
      eu: "—",
    },
    {
      capacity: "Bilingual delivery (English and Hindi)",
      humain: "✓ Full",
      oecd: "—",
      unesco: "—",
      eu: "—",
    },
  ];

  const getStyle = (val: string) => {
    if (val.startsWith('✓')) return 'text-[#5e714e] font-semibold';
    if (val === 'Partial') return 'text-[#d4af37] font-semibold';
    return 'text-charcoal/30';
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1e3f] mb-4"
          >
            How does the Humain framework compare to OECD, UNESCO, and the EU?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto"
          >
            Global frameworks are the foundation. This table shows what Humain adds for India.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-[#e8efe0] shadow-sm"
        >
          <table className="w-full text-left font-sans text-sm md:text-base">
            <thead className="bg-[#f9faf7] border-b border-[#e8efe0]">
              <tr>
                <th className="px-6 py-5 font-bold text-[#0a1e3f] w-2/5">Capacity</th>
                <th className="px-6 py-5 font-bold text-[#5e714e] text-center">Humain</th>
                <th className="px-6 py-5 font-bold text-charcoal/70 text-center">OECD</th>
                <th className="px-6 py-5 font-bold text-charcoal/70 text-center">UNESCO</th>
                <th className="px-6 py-5 font-bold text-charcoal/70 text-center">EU</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8efe0] bg-white">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#f9faf7]/60 transition-colors">
                  <td className="px-6 py-4 font-medium text-charcoal/80">{row.capacity}</td>
                  <td className={`px-6 py-4 text-center ${getStyle(row.humain)}`}>{row.humain}</td>
                  <td className={`px-6 py-4 text-center ${getStyle(row.oecd)}`}>{row.oecd}</td>
                  <td className={`px-6 py-4 text-center ${getStyle(row.unesco)}`}>{row.unesco}</td>
                  <td className={`px-6 py-4 text-center ${getStyle(row.eu)}`}>{row.eu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-4 text-xs text-charcoal/50 font-sans text-center">
          Sources: OECD AI Literacy Framework (2023); UNESCO AI Competency Framework for Students (2023); European Commission AI Literacy Framework (2022).
        </p>

      </div>
    </section>
  );
}
