'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function WhatIsAILiteracySP() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-8 text-center"
          >
            What is AI literacy for Schools and what should your school adopt?
          </motion.h2>

          {/* Snippet Variant */}
          <motion.aside 
            data-snippet="institutional-ai-literacy"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 border-l-4 border-terracotta pl-6 py-2"
          >
            <p className="font-sans text-xl md:text-2xl text-charcoal/90 font-medium leading-snug">
              <strong className="text-charcoal font-bold">AI literacy for Schools</strong> is a school-wide programme that teaches every student from Class 8 to Class 12 to understand, use, evaluate, and question AI. It is built into the curriculum, not appended as a one-off workshop.
            </p>
          </motion.aside>

          {/* Full answer capsule */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#f9faf7] rounded-2xl p-8 border border-[#e8efe0] shadow-sm mb-6"
          >
            <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-6">
              <strong className="text-charcoal">AI literacy for Schools</strong> is a school-wide programme that teaches every student from Class 3 to Class 12 to understand, use, evaluate, and question artificial intelligence. It is built into the curriculum, not appended to it as a one-off workshop. The Humain AI Literacy Framework defines what this looks like across six pillars and four NCF 2023 stages: Foundational, Preparatory, Middle, and Secondary.
            </p>
            <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-6">
              The framework is mapped to CBSE Artificial Intelligence (subject codes 417 and 843), ICSE Computer Applications and AI electives, and the state-board skill-subject frameworks. The implementation is reviewed against the DPDP Act 2023, which governs how Indian schools handle children&apos;s data.
            </p>
            <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed">
              The programme is delivered as a three-step engagement: a principal-led demo, a curriculum-mapping workshop with academic leadership, and a teacher training week before students log in. Humain Learning AI is operated by Eduxa Consulting Pvt Ltd, founded by Heritage Xperiential Learning Schools co-founder Manit Jain (M.Ed Harvard).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="font-sans text-sm text-charcoal/50 italic">
              Authored by Manit Jain. Reviewed by Dr. Tapaswini Sahu, PhD Educational Psychology JNU, M.Phil Cambridge. Last reviewed 28 May 2026.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
