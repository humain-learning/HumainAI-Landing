'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Pillar2EthicsSafety() {
  return (
    <section id="ethics-safety" className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 flex flex-col items-start">
        
        {/* Header */}
        <div className="w-full flex items-center gap-4 mb-6">
          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage mt-1" />
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0a1e3f]"
          >
            Pillar 2. Ethics, Safety and Responsibility: critical awareness of bias, misinformation, privacy, and digital well-being
          </motion.h2>
        </div>

        {/* 40-word Snippet */}
        <aside className="bg-white border-l-4 border-terracotta p-6 rounded-r-2xl mb-10 w-full max-w-3xl shadow-sm">
          <p className="font-sans text-lg md:text-xl text-[#0a1e3f] font-semibold">
            Ethics, Safety and Responsibility is the second pillar of the Humain framework. It teaches students to recognise bias in AI outputs, evaluate misinformation, protect their data under the DPDP Act 2023, and refuse harmful uses of AI.
          </p>
        </aside>

        {/* Flex Container for Body and Pull Quote */}
        <div className="flex flex-col lg:flex-row gap-12 w-full mb-12">
          
          {/* Body (~280 words) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 font-sans text-lg text-charcoal/80 leading-relaxed font-medium space-y-6"
          >
            <p>
              This pillar moves beyond technical understanding into the <span className="font-bold">ethical, social, and emotional stakes</span> of AI deployment. It is structured around four sub-areas: <span className="font-bold">bias and fairness</span>, <span className="font-bold">misinformation and deepfakes</span>, <span className="font-bold">privacy and data protection</span> (specifically the <span className="font-bold">DPDP Act 2023</span>, alongside <span className="font-bold">GDPR</span> and <span className="font-bold">COPPA</span> principles), and <span className="font-bold">digital well-being</span>.
            </p>
            <p>
              We ground these concepts in India-specific cases. Students analyse <span className="font-bold">bias in admissions algorithms</span> using real examples modelled on IITs and IIMs. They examine <span className="font-bold">deepfake misuse</span> cases reported in The Hindu and Hindustan Times. We tackle <span className="font-bold">school WhatsApp group safety</span>, the hidden costs of <span className="font-bold">AI homework helpers</span>, and the mechanics of <span className="font-bold">data harvesting</span>. The focus is always on <span className="font-bold">privacy by design</span> and <span className="font-bold">model misuse</span> prevention.
            </p>
            <p>
              The practical pedagogy relies on case-based learning, Socratic seminars, and role-play exercises, forcing students to negotiate competing interests (e.g., utility versus <span className="font-bold">parental consent</span>) rather than memorising rules. This approach, reviewed by <span className="font-bold">Dr. Tapaswini Sahu</span>, directly connects to her research on adolescent metacognition—equipping students with the self-regulatory skills needed for true <span className="font-bold">AI safety</span>.
            </p>
          </motion.div>

          {/* Pull Quote */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-80 bg-white rounded-3xl p-8 border border-[#e8efe0] shadow-sm relative"
          >
            <svg className="absolute top-6 left-6 w-10 h-10 text-[#d4af37]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="relative z-10 pt-6">
              <p className="font-display text-lg font-bold text-charcoal leading-snug italic mb-6">
                "Children meet AI in places adults rarely think about. The job of this pillar is to make sure they meet it with the questions, not just the tool."
              </p>
              <footer className="font-sans text-sm text-charcoal/70">
                <span className="font-bold block text-charcoal">Dr. Tapaswini Sahu</span>
                Academic Director, Humain Learning AI
              </footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="bg-white rounded-xl p-6 border border-[#e8efe0] shadow-sm flex-1 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Curriculum Hooks</h4>
            <div className="flex flex-col gap-3">
              <Link 
                href="/privacy#children" 
                className="font-semibold text-terracotta hover:text-[#d6925c] transition-colors inline-flex items-center text-sm md:text-base"
              >
                DPDP Act 2023 children's data section
                <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/curriculum/cbse-values" 
                className="font-semibold text-terracotta hover:text-[#d6925c] transition-colors inline-flex items-center text-sm md:text-base"
              >
                CBSE values education curriculum
                <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/curriculum/ncf-2023#ethics" 
                className="font-semibold text-terracotta hover:text-[#d6925c] transition-colors inline-flex items-center text-sm md:text-base"
              >
                NCF 2023 ethical reasoning strand
                <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-[#e8efe0] shadow-sm flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-4">Deep-dive</h4>
            <Link 
              href="/framework/ethics-safety-responsibility" 
              className="font-semibold text-sage hover:text-[#4a5a3e] transition-colors inline-flex items-center text-lg"
            >
              Read the full Pillar 2: Ethics, Safety and Responsibility page
              <svg className="ml-2 w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
