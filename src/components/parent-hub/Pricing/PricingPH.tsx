'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Free',
    price: 'Free',
    subtitle: 'No email gate. No follow-up spam.',
    badge: null,
    features: [
      '12-page Parents Guide to AI (PDF, English and Hindi)',
      'Free baseline assessment for your child',
      'One free lesson from every age band',
    ],
    ctaText: 'Get the free Parents Guide to AI',
    ctaLink: '/resources/parents-guide',
    isPrimary: false,
  },
  {
    name: 'Humain Champs',
    price: 'Rs. 14,750',
    subtitle: 'Full refund after the first session if not satisfied.',
    badge: 'Class 8 to Class 12',
    features: [
      'Fifteen hours of live instruction',
      'Six modules · Eight sessions',
      'AI agent capstone — keeps forever',
      'E-Cell IIT Kharagpur certificate',
      'Small and interactive batches',
    ],
    ctaText: 'Enroll your child in Humain Champs',
    ctaLink: 'https://pages.razorpay.com/humainchamps',
    isPrimary: true,
  },
  {
    name: 'Framework reference',
    price: 'Free',
    subtitle: 'No email gate.',
    badge: null,
    features: [
      '32-page Humain AI Literacy Framework PDF',
      'All six pillars explained',
      'OECD · UNESCO · EU comparison',
      'CBSE / ICSE / state-board mapping',
      'Academic citations',
    ],
    ctaText: 'Download the framework',
    ctaLink: '/downloads/framework.pdf',
    isPrimary: false,
  },
];

export default function PricingPH() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="max-w-2xl mx-auto text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-3"
          >
            AI course pricing for Indian parents: free guide and Rs.&nbsp;14,750 for the flagship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed"
          >
            Three tiers for parents. The first is free forever. The second is the flagship Humain Champs course.
            The third is the framework reference document.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: tier.isPrimary ? 0 : -8 }}
              className={`relative flex flex-col rounded-2xl p-6 border transition-all duration-300 group ${
                tier.isPrimary
                  ? 'bg-[#aac191] border-[#aac191] shadow-2xl shadow-[#aac191]/20 text-white md:-translate-y-3 hover:shadow-3xl'
                  : 'bg-white border-[#e8efe0] shadow-sm hover:shadow-2xl hover:border-[#aac191]/30'
              }`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${tier.isPrimary ? 'bg-gradient-to-br from-white/5 to-transparent' : 'bg-gradient-to-br from-[#aac191]/5 to-transparent'}`} />

              {tier.badge && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-white font-display text-[12px] font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                >
                  {tier.badge}
                </motion.div>
              )}

              <div className="mb-5 flex-1 relative z-10">
                <motion.h3 
                  className={`font-display text-base font-bold mb-3 group-hover:scale-105 transition-transform origin-left ${tier.isPrimary ? 'text-[#d9e3d0]' : 'text-[#aac191]'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tier.name}
                </motion.h3>
                <div 
                  className="font-display text-3xl lg:text-4xl font-black tracking-tight mb-1" 
                  style={{ color: tier.isPrimary ? '#fff' : '#1a1a1a' }}
                >
                  {tier.price}
                </div>
                <p className={`font-sans text-xs font-medium mb-5 ${tier.isPrimary ? 'text-[#d9e3d0]' : 'text-charcoal/50'}`}>
                  {tier.subtitle}
                </p>

                <ul className="space-y-2.5">
                  {tier.features.map((f, fi) => (
                    <motion.li 
                      key={fi} 
                      className="flex items-start gap-2.5"
                    >
                      <motion.svg 
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.isPrimary ? 'text-[#a3b895]' : 'text-[#e7a572]'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <span className={`font-sans text-sm leading-snug ${tier.isPrimary ? 'text-white/90' : 'text-charcoal/80'}`}>
                        {f}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-5 relative z-10">
                <Link
                  href={tier.ctaLink}
                  target={tier.isPrimary ? '_blank' : undefined}
                  className={`flex items-center justify-center w-full py-3.5 px-5 rounded-full font-sans font-bold text-sm transition-all duration-300 group/btn ${
                    tier.isPrimary
                      ? 'bg-white text-[#aac191] hover:bg-[#f9faf7] hover:shadow-lg'
                      : 'bg-[#f9faf7] text-charcoal border border-[#e8efe0] hover:border-[#c8d6bc] hover:bg-[#f3f6f1] hover:shadow-md'
                  }`}
                >
                  {tier.ctaText}
                  <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
