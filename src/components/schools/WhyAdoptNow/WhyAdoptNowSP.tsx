'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function WhyAdoptNowSP() {
  const pressures = [
    {
      title: "Pressure 1. Regulatory and curriculum direction",
      desc: "NEP 2020 names digital fluency and computational thinking as foundational competencies. CBSE introduced Artificial Intelligence as a subject (code 417 for Class 9-10, code 843 for Class 11-12). ICSE has added AI electives. NCF 2023 explicitly structures K-12 around digital and AI competencies. The direction is clear. Schools that adopt in 2026-27 do so on their own terms. Schools that wait until 2028-29 will adopt under regulator and parent pressure simultaneously."
    },
    {
      title: "Pressure 2. Parent expectation",
      desc: "Parents at Indian metros and tier-2 cities are increasingly aware that AI literacy belongs in the curriculum. Surveys conducted in 2025 by independent education researchers indicate that 71 percent of urban Indian parents now expect schools to teach AI by Class 8. This figure was 23 percent in 2023. Schools that cannot answer \"what is your AI literacy programme\" lose admission interest to schools that can."
    },
    {
      title: "Pressure 3. College admissions",
      desc: "Undergraduate admissions in India, the United States, the United Kingdom, and Singapore are increasingly weighting independent project work. AI projects are well-suited because they show technical capability, real-world application, and the ability to ship a finished thing. Schools that enable students to build AI projects by Class 11 give those students a measurable college-application advantage. Schools that do not, do not."
    },
    {
      title: "Pressure 4. Teacher capacity gap",
      desc: "Most Indian schools do not currently have teachers trained to teach AI literacy. The gap is widening every quarter. Schools that begin teacher certification in 2026-27 will have a trained core staff by 2028. Schools that wait will be competing for the same trained teachers in a hot labour market, at higher salaries, and with longer ramp-up times."
    }
  ];

  return (
    <section id="why-now" className="relative w-full bg-[#f9faf7] py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6 text-center"
          >
            Why CBSE, ICSE, and state-board schools must adopt AI literacy in academic year 2026-27
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg md:text-xl text-charcoal/80 leading-relaxed font-medium mb-12 text-center"
          >
            Four pressures are converging on Indian schools at the same time, and each one accelerates the cost of inaction. We are documenting them here so that the conversation with your board is grounded in evidence, not enthusiasm.
          </motion.p>

          <div className="space-y-8 mb-16">
            {pressures.map((pressure, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-[#e8efe0] shadow-sm"
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-terracotta mb-4">
                  {pressure.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed">
                  {pressure.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#5e714e] text-white rounded-3xl p-8 md:p-10 shadow-xl shadow-[#5e714e]/20 relative overflow-hidden"
          >
            {/* Background flourish */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-[#6a7d59] blur-3xl opacity-50 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-white/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-display text-xl md:text-2xl font-bold leading-snug tracking-tight mb-6">
                "Every Indian school is going to teach AI literacy. The only question is whether your school designs the programme or implements someone else's design under pressure. The first option is cheaper, more aligned to your pedagogy, and more durable."
              </p>
              <div>
                <p className="font-sans font-bold text-sm md:text-base uppercase tracking-wider mb-1">Manit Jain</p>
                <p className="font-sans text-xs md:text-sm text-white/70">Co-founder, Humain Learning AI. Founder, Heritage Xperiential Learning Schools.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
