'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const rights = [
  {
    title: 'Parental consent',
    body: "Any AI service that processes your child's data must have your verifiable consent. A click-through tick box on the child's screen is not enough. Many free AI tools do not yet meet this standard for Indian children. Humain meets the standard explicitly: we collect verifiable parental consent before any child account is created.",
    details: [
      'Email-based parental verification required',
      'Not just child account checkboxes',
      'Clear opt-in required before data collection',
      'Easy to withdraw consent anytime',
    ],
  },
  {
    title: 'Purpose limitation',
    body: "Your child's data may be processed only for the educational purpose stated. If a free AI tool collects her data for \"improving the service\" without naming what that means, the Act treats that as non-compliant. We name every purpose in our privacy policy.",
    details: [
      'Specific educational purposes only',
      'No vague \"service improvement\" language allowed',
      'No selling data to third parties',
      'No hidden secondary uses',
    ],
  },
  {
    title: 'Right to access and erase',
    body: 'You have the right to access, correct, and erase your child\'s data. At Humain, you can request a copy of everything we hold on your child by emailing hi@humainlearning.ai. We respond within 30 days under the Act, usually within 5 business days in practice.',
    details: [
      'Full data access on request',
      'Corrections and updates possible',
      'Permanent deletion within 30 days',
      'No data retention after deletion',
    ],
  },
  {
    title: 'Data residency',
    body: "Your child's data is stored on servers in India. Cross-border transfer is restricted under the Act, and at Humain we do not transfer children's data out of India. If you are using an AI service registered outside India, ask where the data is stored. Many free AI tools cannot answer this cleanly today.",
    details: [
      'Data stored exclusively in India',
      'No international server transfers',
      'Always ask services where data is stored',
      'Check privacy policies for compliance',
    ],
  },
];

export default function DPDPActPH() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: heading + intro */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-4"
            >
              DPDP Act and AI for kids in India: data rights every Indian parent should know
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-5"
            >
              India&apos;s Digital Personal Data Protection Act 2023 gives your child specific protections that did not exist
              before. We summarise the four that matter most to parents below. None of this is legal advice. The full
              text is at meity.gov.in and the Children&apos;s Data section of the Humain privacy policy is at{' '}
              <Link href="/privacy#children" className="text-[#aac191] font-semibold underline hover:text-terracotta transition-colors">/privacy#children</Link>.
            </motion.p>

            <div className="flex flex-col gap-3">
              <Link
                href="/parents/dpdp-act-ai-children"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                Read more: DPDP Act and AI for kids
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="https://www.meity.gov.in/data-protection-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                Read the DPDP Act 2023 text
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 lg:mt-12 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/images/motherson.png"
                alt="Parent and child learning together with AI safety and data protection"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </motion.div>
          </div>

          {/* Right: rights cards */}
          <div className="grid grid-cols-1 gap-3">
            {rights.map((right, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.08 }}
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className={`rounded-xl overflow-hidden border-l-4 transition-all duration-300 cursor-pointer group ${
                  expandedIdx === idx
                    ? 'bg-[#aac191]/8 border-l-[#aac191] shadow-md'
                    : 'bg-[#f9faf7] border-l-[#e8efe0] hover:bg-white hover:shadow-sm hover:border-l-[#aac191]/60'
                }`}
              >
                <div className="p-5 md:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-start gap-3 flex-1">
                      {/* Icon circle */}
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#aac191]/15 flex items-center justify-center group-hover:bg-[#aac191]/25 transition-colors">
                        {idx === 0 && (
                          <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {idx === 3 && (
                          <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4.586-4.586a2 2 0 012.828 0L16 12m-2-2.414l1.378-1.378a2 2 0 012.828 0L20 10M9 20h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v11a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="font-display text-lg font-bold text-charcoal group-hover:text-[#aac191] transition-colors pt-0.5"
                        animate={{ scale: expandedIdx === idx ? 1.02 : 1 }}
                      >
                        {right.title}
                      </motion.h3>
                    </div>

                    {/* Chevron */}
                    <motion.svg 
                      className="w-5 h-5 text-[#aac191] flex-shrink-0 mt-1"
                      animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </motion.svg>
                  </div>

                  {/* Body text */}
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed group-hover:text-charcoal transition-colors pl-12">
                    {right.body}
                  </p>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {expandedIdx === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-[#aac191]/20 pl-12"
                      >
                        <div className="space-y-3">
                          {right.details.map((detail, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 + i * 0.05 }}
                              className="flex items-start gap-2.5 text-sm"
                            >
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#aac191]/25 flex items-center justify-center mt-0.5">
                                <svg className="w-2.5 h-2.5 text-[#aac191]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-charcoal/75 leading-snug">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
