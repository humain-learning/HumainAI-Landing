'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function CurriculumMappingSP() {
  const mappings = [
    {
      title: "CBSE Artificial Intelligence (subject codes 417 and 843)",
      body: "The Humain framework maps directly to the CBSE AI syllabus for Class 9-10 (code 417) and Class 11-12 (code 843). Pillars 1 (AI Foundations), 4 (Creating with AI), and 5 (Agents and Automation) align with the CBSE AI assessment rubric. The Humain capstone assessment artefact can be submitted as the CBSE AI subject's practical component without modification."
    },
    {
      title: "ICSE Computer Applications and AI electives",
      body: "Pillars 1, 3 (Learning with AI), and 5 map to the ICSE Computer Applications curriculum and the AI elective. The Humain assessment artefact maps to the ICSE practical-exam format. Schools running parallel ICSE and CBSE streams can run a single Humain framework across both streams without redundancy."
    },
    {
      title: "State boards",
      body: "Current cross-walked alignments include the Maharashtra State Board, the Tamil Nadu State Board, and the Karnataka SSLC. Gujarat, Telangana, and West Bengal alignments are in active development. State boards with skill-subject frameworks already published have priority. Schools running other state boards can request a custom mapping during Step 2."
    },
    {
      title: "NEP 2020 and NCF 2023",
      body: "Pillars 1, 3, and 5 satisfy the NEP 2020 digital fluency and computational thinking strands. The full Humain framework is structured around the four NCF 2023 stages (Foundational, Preparatory, Middle, Secondary). Schools planning their NCF 2023 transition can use the Humain framework as the AI literacy component of that transition without additional structural work."
    },
    {
      title: "NCERT skill-subject framework",
      body: "The Humain assessment rubrics align with the NCERT skill-subject framework for Computer Science and AI. Schools using NCERT textbooks as primary references can integrate Humain modules without textbook replacement."
    }
  ];

  return (
    <section id="curriculum" className="relative w-full bg-[#f9faf7] py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Curriculum mapping for AI literacy: CBSE 417 and 843, ICSE Computer Applications, NEP 2020, NCF 2023
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg md:text-xl text-charcoal/80 leading-relaxed font-medium"
          >
            The framework was designed against the Indian curriculum from the start, not retrofitted. Below is the mapping summary. The full 24-page mapping deck is available as a free download from this page.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-start">
          
          <div className="flex-1 w-full flex flex-col gap-6">
            {mappings.map((mapping, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-[#e8efe0] shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-terracotta mb-3">
                  {mapping.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed">
                  {mapping.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Column */}
          <div className="hidden lg:flex w-full lg:w-1/3 flex-col items-center gap-10 sticky top-32">
            
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full text-center"
            >
              <Link 
                href="/downloads/curriculum-mapping-deck.pdf"
                className="inline-flex w-full items-center justify-center px-6 py-4 rounded-full bg-[#5e714e] text-white font-sans font-bold text-sm shadow-lg shadow-[#5e714e]/30 hover:bg-[#4a5a3e] transition-all duration-300"
              >
                Download the 24-page Deck
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Mobile CTA */}
        <div className="w-full mt-10 text-center lg:hidden">
          <Link 
            href="/downloads/curriculum-mapping-deck.pdf"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#5e714e] text-white font-sans font-bold text-base shadow-lg shadow-[#5e714e]/30"
          >
            Download the 24-page Curriculum Mapping Deck
          </Link>
        </div>

      </div>
    </section>
  );
}
