'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function PeerReferencesSP() {
  const cases = [
    {
      title: "Case 1. CBSE school, Delhi-NCR. 1,200 students.",
      body: "Implemented Humain across Grades 6 to 10 from October to December 2025. Eighty percent of those students completed and presented an AI project by the end of the term. The school has continued with all grades for the academic year 2026-27. Principal: Dr. Vijay Khanna.",
      quote: "\"We piloted Humain across Grades 6 to 10 in Term 2. Eighty percent of those students built and presented an AI project by the end of the term. We have continued with all grades for the academic year 2026-27.\""
    },
    {
      title: "Case 2. ICSE school, Pune. 800 students.",
      body: "Implemented Humain across Class 9 and Class 10 only, with a teacher-led model. Outcomes: 92 percent teacher retention of the Humain module after the pilot. Continuing into a second academic year."
    },
    {
      title: "Case 3. CBSE school, Bengaluru. 1,800 students.",
      body: "Implemented as a Phase 1 pilot, Grade 7 only, and chose not to proceed to Phase 2 scale. The reason cited was a parallel CBSE programme already in place. Humain supported the clean separation. We do not consider this an unsuccessful engagement; we consider it the correct outcome when the fit is not there."
    },
    {
      title: "Case 4. State-board school, Karnataka. 600 students.",
      body: "Implemented across Class 6 to Class 9 in a Kannada-medium school, with curriculum mapping to the Karnataka SSLC framework. Currently in Year 2."
    },
    {
      title: "Case 5. Multi-campus CBSE chain. Five campuses, 4,200 students total.",
      body: "Phase 1 pilot at one campus, Phase 2 scale across all five campuses on an 18-month timeline. Currently in Phase 4 of the 5-phase model. Single point of contact at chain HQ; campus-level academic leads."
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Schools that have implemented the Humain AI Literacy Programme
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg md:text-xl text-charcoal/80 leading-relaxed font-medium"
          >
            Five anonymised case studies below. Two named principals are willing to take a peer-school principal call directly; their contact details are released after a signed NDA and confirmation that the call is a procurement-level conversation, not a sales prospect call.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cases.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] shadow-sm flex flex-col"
            >
              <h3 className="font-display text-xl font-bold text-[#5e714e] mb-4">
                {c.title}
              </h3>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed flex-1">
                {c.body}
              </p>
              {c.quote && (
                <div className="mt-6 pt-6 border-t border-[#e8efe0]">
                  <p className="font-display text-lg font-bold text-terracotta leading-snug italic">
                    {c.quote}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-[#5e714e] font-semibold hover:text-[#4a5a3e] transition-colors group text-sm md:text-base"
          >
            Read full case studies (NDA required for procurement-level access)
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
