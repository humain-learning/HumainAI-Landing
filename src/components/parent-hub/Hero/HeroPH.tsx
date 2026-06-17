'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const CheckIcon = () => (
  <svg className="h-4 w-4 text-sage shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const stats = [
  { value: '4.4★', label: '300+ parent reviews' },
  { value: '15hrs', label: 'Live instruction' },
  { value: '6', label: 'AI literacy pillars' },
  { value: 'DPDP', label: 'Act 2023 compliant' },
];

export default function HeroPH() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 md:pt-16 pb-12">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9faf7] via-white to-[#fffcf9] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Left Column */}
          <div className="flex flex-col space-y-5 lg:col-span-7">

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
              <Link href="/resources/parents-guide" className="w-full sm:w-auto inline-block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 rounded-full bg-terracotta py-3.5 px-6 font-display text-sm font-bold text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
                >
                  Get the free Parents Guide (12 pages)
                </motion.button>
              </Link>
              <Link href="https://pages.razorpay.com/humainchamps" target="_blank" className="w-full sm:w-auto inline-block">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#f3f6f1' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-sage bg-white py-3.5 px-6 font-display text-sm font-bold text-[#aac191] transition-all duration-300 hover:border-[#9ab081]"
                >
                  Enroll in Humain Champs · ₹14,750
                </motion.button>
              </Link>
            </div>

            {/* Checklist */}
            <div className="space-y-2 pt-1">
              {[
                'Rated 4.4 stars by 300+ Indian parents',
                'E-Cell IIT Kharagpur certificate',
                'Children\'s data stays in India · DPDP compliant',
                'Free 12-page guide · no email gate',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-charcoal/70">
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats + Image */}
          <div className="relative flex flex-col items-center lg:col-span-5 gap-5">
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
                  <div className="font-sans text-xs text-charcoal/60 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[420px]"
            >
              <img
                src="/assets/images/parents-img.png"
                alt="Family studying AI together"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* WhatsApp CTA */}
            <Link href="https://wa.me/918130023688" target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors">
              <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Talk to us on WhatsApp
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
