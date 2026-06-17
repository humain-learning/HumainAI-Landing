'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function PilotModelSP() {
  const questions = [
    "Were the learning outcomes measurable at the levels we agreed?",
    "Did your teachers feel competent to deliver this independently after 14 weeks?",
    "Were parent responses positive?",
    "Is the integration with the existing timetable sustainable?"
  ];

  const pilotStructure = [
    { label: "Scope", text: "1 to 2 grades, typically Grade 6 to Grade 8, of one school campus." },
    { label: "Duration", text: "14 weeks (one full term)." },
    { label: "Faculty", text: "3-5 teachers (covered by an abbreviated 4-week pilot training, not the full 12-week certification)." },
    { label: "Assessment", text: "Pre-pilot baseline. Mid-pilot review. End-of-pilot evaluation against agreed criteria." }
  ];

  return (
    <section className="relative w-full bg-[#f9faf7] py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            A 14-week AI literacy pilot for your school: structure, costs, and decision points
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            We strongly recommend a 14-week pilot before a full-school commitment. The pilot lets your academic leadership evaluate Humain on the dimensions that matter to your school, on a defined timeline, with defined success criteria, and at a defined cost.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-[#e8efe0] shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-[#5e714e] mb-6">
                Pilot structure
              </h3>
              <ul className="space-y-4">
                {pilotStructure.map((item, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="font-sans font-bold text-charcoal whitespace-nowrap w-24 flex-shrink-0">
                      {item.label}:
                    </span>
                    <span className="font-sans text-charcoal/80">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#5e714e]/10 rounded-2xl p-6 border border-[#5e714e]/20"
            >
              <h3 className="font-display text-lg font-bold text-[#5e714e] mb-2">
                Indicative pilot cost
              </h3>
              <p className="font-sans text-base text-charcoal/90 font-medium">
                Rs. 4,50,000 to Rs. 8,00,000 depending on cohort size and depth. This is fully credited toward a subsequent full-school engagement if the pilot proceeds to scale.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-[#e8efe0] shadow-sm h-full flex flex-col"
          >
            <h3 className="font-display text-xl font-bold text-terracotta mb-6">
              Decision points
            </h3>
            <ul className="space-y-4 mb-8 flex-1">
              {questions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#fdfaf6] border border-[#e7a572]/20">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-terracotta text-white font-bold text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-charcoal/90 font-medium">
                    {q}
                  </p>
                </li>
              ))}
            </ul>
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed p-6 bg-[#f9faf7] rounded-xl border border-[#e8efe0] italic">
              If the answers to all four questions are yes, we recommend moving to Phase 2 implementation. If any answer is no, we recommend either a focused remediation or a clean separation. We do not believe in forcing a fit. Three of the schools we ran pilots with did not proceed to scale; that outcome is the right one when the fit is not there.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
