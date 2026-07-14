'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import PrimaryButton from 'ui/PrimaryButton';
const CheckIcon = () => (
  <svg className="h-4 w-4 text-sage shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const stats: any[] = [
 
];

export default function HeroPH() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 md:pt-16 pb-12">

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Left Column */}
          <div className="flex flex-col space-y-5 lg:col-span-5">

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { dot: '#aac191', bg: '#aac1911a', text: '#aac191', label: 'DPDP ACT 2023 COMPLIANT' },
                { dot: '#aac191', bg: '#aac1911a', text: '#aac191', label: 'CLASS 8 TO CLASS 12' },
                { dot: '#e7a572', bg: '#e7a5721a', text: '#c07a40', label: '4.4★ 300+ PARENTS' },
              ].map((b) => (
                <span key={b.label} className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider" style={{ background: b.bg, color: b.text }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: b.dot }} />
                  {b.label}
                </span>
              ))}
            </div>

            {/* Heading */}
            <div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-[58px]">
                Parents guide <br />
                to AI in <span className="relative inline-block text-terracotta underline decoration-4">India</span>
              </h1>
              <p className="mt-4 font-sans text-base md:text-lg leading-relaxed text-charcoal/80 max-w-xl">
                Practical AI literacy for your Class 8–12 student. Learn to set boundaries, guide their tools, and ensure your child arrives at college AI-fluent.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
              {/* <Link href="/resources/parents-guide" className="w-full sm:w-auto inline-block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 rounded-full bg-terracotta py-3.5 px-6 font-display text-sm font-bold text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
                >
                  Get the free Parents Guide (12 pages)
                </motion.button>
              </Link> */}
                <PrimaryButton text="Enroll in Humain champs" target="/humain-champs"/>
              
            </div>
          
          </div>

          {/* Right Column: Stats + Image */}
          <div className="relative flex flex-col items-center lg:col-span-7 gap-5">
            {/* Stats grid */}
            <div className="w-full grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-2xl bg-[#f9faf7] border border-[#e8efe0] p-4 text-center"
                >
                  <div className="font-display text-2xl font-extrabold text-[#aac191]">{s.value}</div>
                  <div className="font-sans text-sm text-charcoal/60 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-lg"
            >
              <img
                src="/assets/images/parentguide.png"
                alt="Parents Guide to AI"
                className="w-full h-auto object-contain drop-shadow-xl rounded-3xl"
              />
            </motion.div>

           
            
          </div>

        </div>
      </div>
    </section>
  );
}
