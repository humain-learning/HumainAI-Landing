'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const pillarData = [
  { num: 1, label: 'AI Foundations' },
  { num: 2, label: 'Ethics & Safety' },
  { num: 3, label: 'Learning with AI' },
  { num: 4, label: 'Creating with AI' },
  { num: 5, label: 'Agents & Automation' },
  { num: 6, label: 'Human Intelligence' },
];

const trustSignals = [
  '200+ parents · 4.5 stars',
  'E-Cell IIT Kharagpur certified',
  'NEP 2020 & NCF 2023 aligned',
];

export default function HeroFramework() {
  return (
    <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 bg-white overflow-hidden border-b border-[#e8efe0]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9faf7] via-white to-white pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">

            {/* Hindi tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-charcoal mb-5"
            >
              The Humain<br />
              <span className="text-[#5e714e]">AI Literacy</span> Framework
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-sans text-lg md:text-xl text-charcoal/70 font-medium max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              The AI literacy framework for K-12 students in India. Six pillars. Built on OECD, UNESCO, and EU. Aligned with NEP 2020 and NCF 2023.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="font-sans text-base text-charcoal/60 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A 32-page reference document, written by educators with two decades of K-12 classroom experience. Reviewed by Dr. Tapaswini Sahu (PhD JNU, M.Phil Cambridge). Free to download — no email gate.
            </motion.p>

            {/* Trust Signals — green dot rows, no emoji */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center lg:items-start gap-2 mb-10"
            >
              {trustSignals.map((t, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm text-charcoal/70 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#5e714e] flex-shrink-0" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#5e714e] text-white font-sans font-bold text-base shadow-lg shadow-[#5e714e]/30 hover:bg-[#4a5a3e] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download free PDF
              </Link>
              <Link
                href="https://pages.razorpay.com/humainchamps"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white border-2 border-[#e8efe0] text-charcoal font-sans font-bold text-base hover:border-terracotta hover:text-terracotta transition-all"
              >
                Enroll in Humain Champs
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

          </div>

          {/* Right: 2x3 pillar grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0 w-full max-w-xs lg:max-w-sm"
            aria-label="The Humain AI Literacy Framework: six pillars for K-12 students in India."
          >
            <div className="bg-[#f9faf7] rounded-2xl border border-[#e8efe0] p-6 shadow-sm">
              <p className="font-display font-bold text-charcoal text-xs uppercase tracking-widest mb-5 text-center">
                Six Pillars
              </p>
              <div className="grid grid-cols-2 gap-3">
                {pillarData.map((p) => (
                  <div
                    key={p.num}
                    className="bg-white rounded-xl border border-[#e8efe0] p-4 flex items-center gap-3 shadow-sm"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#e8efe0] text-[#5e714e] font-display font-bold text-sm">
                      {p.num}
                    </span>
                    <span className="font-display font-bold text-charcoal text-xs leading-tight">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[#e8efe0] text-center">
                <span className="font-sans text-xs text-charcoal/50">
                  OECD · UNESCO · EU · NEP 2020 · NCF 2023
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

