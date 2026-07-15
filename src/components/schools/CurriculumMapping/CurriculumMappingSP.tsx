'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { MotionHeading, SPButton } from '../shared/SchoolsMotion';
import ImagePlaceholderSP from '../shared/ImagePlaceholderSP';
import { sp } from '../shared/schoolsTheme';

const boardLinks = [
  { label: 'AI Curriculum Alignment for CBSE Schools', href: '/schools/cbse-ai-curriculum-alignment' },
  { label: 'AI Curriculum Alignment for ICSE Schools', href: '/schools/icse-ai-curriculum-alignment' },
  { label: 'AI Curriculum Alignment for IB Schools', href: '/schools/ib-ai-curriculum-alignment' },
];

export default function CurriculumMappingSP() {
  return (
    <section id="curriculum" className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionAlt}`}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <MotionHeading className="font-display mb-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
              Curriculum mapping: CBSE, ICSE, IB, NEP 2020 and NCF 2023
            </MotionHeading>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1 }}
              className="font-sans mb-8 text-base leading-relaxed text-charcoal/80 md:text-lg"
            >
              The Humain AI Literacy Framework is designed to align with Indian and international school curricula. It
              maps to CBSE Artificial Intelligence curriculum requirements (including subject codes 417 and 843), ICSE,
              IB, NEP 2020, and NCF 2023, helping schools integrate AI literacy into existing learning pathways.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.2 }}
            >
              <p className={`${sp.label} mb-4`}>Explore Curriculum Mapping</p>
              <ul className="space-y-3">
                {boardLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="group inline-flex items-center font-sans text-base font-semibold text-charcoal transition-colors hover:text-terracotta"
                    >
                      {link.label}
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <SPButton href="/downloads/curriculum-mapping-deck.pdf" variant="sage" size="sm">
                Download the curriculum mapping deck (24 pages)
              </SPButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/assets/images/cbse.png"
              alt="Curriculum mapping: CBSE, ICSE, IB, NEP 2020 and NCF 2023"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
