'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function WhatIsFramework() {
  const authors = [
    {
      img: '/assets/images/e1.png',
      name: 'Manit Jain',
      role: 'M.Ed Harvard, Co-founder',
      label: 'Author',
    },
    {
      img: '/assets/images/e5.png',
      name: 'Ankur Dahiya',
      role: 'DTU, Program Head',
      label: 'Author',
    },
    {
      img: '/assets/images/e3.png',
      name: 'Dr. Tapaswini Sahu',
      role: 'PhD JNU, M.Phil Cambridge',
      label: 'Reviewer',
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#e8efe0]"
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-[#5e714e]" />
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal">
              What is the Humain AI Literacy Framework?
            </h2>
          </div>

          <div className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium mb-10 space-y-4">
            <p>
              The Humain AI Literacy Framework is a six-pillar curriculum that defines what students from Class 3 to Class 12 need to learn about artificial intelligence. It covers four capacities at once: knowing what AI is and how it works, knowing where AI fails and how to evaluate it, using AI productively without surrendering judgement, and recognising the ethical, social, and emotional stakes of doing so.
            </p>
            <p>
              The framework is built on three global references — the OECD AI Literacy Framework, the UNESCO AI Competency Framework for Students, and the European Commission AI Literacy Framework — then rebuilt for India. It aligns with NEP 2020, NCF 2023, the NCERT skill-subject curriculum, and the CBSE, ICSE, and state-board syllabuses.
            </p>
            <p>
              It is the curriculum behind Humain Champs, the live AI literacy course certified by E-Cell IIT Kharagpur. The full 32-page reference is published here and may be downloaded as a PDF in English and Hindi.
            </p>
          </div>

          {/* Authors & Reviewer */}
          <div className="border-t border-[#e8efe0] pt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 mb-6">Authors &amp; Reviewer</p>
            <div className="flex flex-col sm:flex-row gap-6">
              {authors.map((a) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  {/* Real photo */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#e8efe0] flex-shrink-0 shadow-sm">
                    <img
                      src={a.img}
                      alt={`${a.name}, ${a.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-display font-bold text-sm text-charcoal">{a.name}</p>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#e8efe0] text-[#5e714e] text-[10px] font-bold uppercase tracking-wider">
                        {a.label}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-charcoal/50">{a.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-charcoal/30 mt-6">Last reviewed 28 May 2026</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
