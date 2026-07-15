'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function DownloadDeckSP() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-grey">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Download the 24-page Curriculum Mapping Deck (free)
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            Twenty-four pages. The full mapping of the Humain framework to CBSE Artificial Intelligence (codes 417 and 843), ICSE Computer Applications and AI electives, the Maharashtra, Tamil Nadu, and Karnataka state-board frameworks, NEP 2020 digital fluency strands, and the NCERT skill-subject framework. Designed for academic heads and curriculum directors to read before the Step 2 workshop.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: English */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-grey/25 rounded-3xl p-8 lg:p-10 border border-grey shadow-sm flex flex-col items-center text-center transition-shadow hover:shadow-md hover:shadow-sage/10"
          >
            <div className="w-20 h-24 bg-white border-2 border-grey rounded-lg shadow-md mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-4 bg-terracotta" />
              <span className="font-display font-bold text-charcoal/30 text-xs mt-2">PDF</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-charcoal mb-2">English version</h3>
            <p className="font-sans text-base text-charcoal/80 mb-8">24 pages</p>
            <Link 
              href="/downloads/curriculum-mapping-deck.pdf"
              className="inline-flex w-full items-center justify-center px-8 py-4 rounded-full bg-terracotta text-white font-sans font-bold text-base shadow-lg shadow-terracotta/30 hover:brightness-95 transition-all duration-300"
            >
              Download the Curriculum Mapping Deck (English)
            </Link>
          </motion.div>

          {/* Card 2: Hindi */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-grey/25 rounded-3xl p-8 lg:p-10 border border-grey shadow-sm flex flex-col items-center text-center transition-shadow hover:shadow-md hover:shadow-sage/10"
          >
            <div className="w-20 h-24 bg-white border-2 border-grey rounded-lg shadow-md mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-4 bg-sage" />
              <span className="font-display font-bold text-charcoal/30 text-xs mt-2">PDF</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Hindi summary. हिंदी सारांश.</h3>
            <p className="font-sans text-base text-charcoal/80 mb-8">8 pages</p>
            <Link 
              href="/downloads/curriculum-mapping-deck-hindi.pdf"
              className="inline-flex w-full items-center justify-center px-8 py-4 rounded-full bg-sage text-white font-sans font-bold text-base shadow-lg shadow-sage/30 hover:brightness-95 transition-all duration-300"
            >
              हिंदी में सारांश डाउनलोड करें
            </Link>
          </motion.div>

        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-sans text-xs text-charcoal/50 max-w-3xl"
        >
          Note. B2B email gate: capture school name, role, board (CBSE / ICSE / state / IB), and grade range. Used to route the lead to a senior team member and to pre-populate the Step 1 demo conversation. No marketing spam; the next contact will be a personal email from the assigned team member.
        </motion.p>

      </div>
    </section>
  );
}
