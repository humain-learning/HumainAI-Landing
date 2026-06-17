'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalConversionBanner() {
  const ctas = [
    {
      audience: "For students",
      headline: "Enroll in Humain Champs",
      sub: "16 hours live. Class 8-12. E-Cell IIT Kharagpur certificate. Rs. 11,800.",
      href: "https://pages.razorpay.com/humainchamps",
      primary: true,
    },
    {
      audience: "For parents",
      headline: "Go to the Parent Hub",
      sub: "Understand what AI literacy means for your child's education and future.",
      href: "/parenthub",
      primary: false,
    },
    {
      audience: "For schools",
      headline: "Request a curriculum-mapping workshop",
      sub: "Free 60-minute workshop. Map your current AI provision against the six pillars.",
      href: "/schools/ai-literacy-programme",
      primary: false,
    },
    {
      audience: "For everyone",
      headline: "Download the framework PDF",
      sub: "32 pages. English and Hindi. Free. No email gate.",
      href: "#download",
      primary: false,
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0a1e3f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#5e714e]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-terracotta/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
        >
          The framework is the map.<br />
          <span className="text-[#5e714e]">Humain Champs</span> is how your child walks it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-16"
        >
          Six pillars. Built on OECD, UNESCO, and EU. Aligned with NEP 2020 and NCF 2023. Tested in Indian classrooms. Free to download. Choose what's right for you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ctas.map((cta, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
            >
              <Link
                href={cta.href}
                className={`flex flex-col h-full rounded-2xl p-6 text-left transition-all duration-300 group border ${
                  cta.primary
                    ? 'bg-[#5e714e] border-[#5e714e] hover:bg-[#4a5a3e] shadow-xl shadow-[#5e714e]/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider mb-3 ${cta.primary ? 'text-white/70' : 'text-white/40'}`}>
                  {cta.audience}
                </span>
                <h3 className="font-display font-extrabold text-lg text-white mb-2 leading-snug group-hover:text-white transition-colors">
                  {cta.headline}
                </h3>
                <p className={`font-sans text-sm leading-relaxed flex-grow ${cta.primary ? 'text-white/80' : 'text-white/50'}`}>
                  {cta.sub}
                </p>
                <div className={`mt-4 flex items-center text-sm font-bold gap-1 ${cta.primary ? 'text-white' : 'text-white/40 group-hover:text-white/70'} transition-colors`}>
                  Get started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-sans text-sm text-white/30"
        >
          humainlearning.ai/framework · Last reviewed 28 May 2026 · Dr. Tapaswini Sahu, PhD JNU, M.Phil Cambridge
        </motion.p>

      </div>
    </section>
  );
}

