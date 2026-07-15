'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function IndianCurriculumMapping() {
  const mappings = [
    {
      board: "NEP 2020",
      detail: "The Humain framework satisfies the digital fluency and computational thinking strands of NEP 2020. Pillars 1, 3, and 5 map directly to the NEP 2020 competencies for the 21st-century Indian learner.",
      pillars: ["Pillar 1", "Pillar 3", "Pillar 5"]
    },
    {
      board: "NCF 2023",
      detail: "The full Humain framework is structured around the four NCF 2023 stages: Foundational (Class 1–2), Preparatory (Class 3–5), Middle (Class 6–8), and Secondary (Class 9–12). Schools using NCF 2023 as their transition framework can embed Humain as the AI literacy component without additional structural work.",
      pillars: ["All six pillars"]
    },
    {
      board: "CBSE AI (codes 417 and 843)",
      detail: "Pillars 1, 4, and 5 align directly with the CBSE AI syllabus for Class 9-10 (code 417) and Class 11-12 (code 843). The Humain capstone assessment can be submitted as the CBSE practical component without modification.",
      pillars: ["Pillar 1", "Pillar 4", "Pillar 5"]
    },
    {
      board: "ICSE Computer Applications and AI electives",
      detail: "Pillars 1, 3, and 5 map to the ICSE Computer Applications curriculum and the ICSE AI elective. Schools running parallel CBSE and ICSE streams can run a single Humain programme across both without redundancy.",
      pillars: ["Pillar 1", "Pillar 3", "Pillar 5"]
    },
    {
      board: "State boards",
      detail: "Current cross-walked alignments include the Maharashtra State Board, Tamil Nadu State Board, and Karnataka SSLC. Gujarat, Telangana, and West Bengal alignments are in active development.",
      pillars: ["Pillar 1", "Pillar 2", "Pillar 3"]
    },
    {
      board: "NCERT skill-subject framework",
      detail: "The Humain assessment rubrics align with the NCERT skill-subject framework for Computer Science and AI. Schools using NCERT textbooks as primary references can integrate Humain modules without textbook replacement.",
      pillars: ["Pillar 1", "Pillar 3", "Pillar 4"]
    }
  ];

  return (
    <section id="curriculum" className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1e3f] mb-4"
          >
            Indian curriculum mapping: NEP 2020, NCF 2023, CBSE, ICSE, and state boards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto"
          >
            The Humain framework was designed against the Indian curriculum from the start, not retrofitted. The full 24-page mapping deck is a free download from this page.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mappings.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * idx }}
              className="bg-[#f9faf7] rounded-2xl p-7 border border-[#e8efe0] shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-xl font-bold text-[#0a1e3f] mb-3">{m.board}</h3>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-4">{m.detail}</p>
              <div className="flex flex-wrap gap-2">
                {m.pillars.map((p, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full bg-sage/10 text-sage font-sans font-semibold text-xs border border-sage/20">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
