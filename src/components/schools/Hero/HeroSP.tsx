'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { DecorativeBlobs, SPButton } from '../shared/SchoolsMotion';
import '../shared/schools.css';

export default function HeroSP() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-12 pb-16 md:pt-20 md:pb-24">
      <DecorativeBlobs />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 md:px-12 lg:flex-row lg:gap-16 lg:px-16">
        <div className="w-full max-w-3xl flex-1 text-center lg:max-w-none lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-grey bg-grey/20 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-sage schools-pulse-ring" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/70">
              CBSE · ICSE · IB · State Boards
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-display mb-6 text-4xl font-black leading-[1.1] tracking-tight text-charcoal md:text-5xl lg:text-[58px]"
          >
            AI Literacy Programme <span className="text-terracotta">for Schools</span> in India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-sans mb-8 text-lg leading-relaxed text-charcoal/80 md:text-xl"
          >
            A structured AI literacy programme for CBSE, ICSE, IB and State Board schools. Help students and teachers
            build practical, responsible AI skills through curriculum-aligned learning, assessments, certifications and
            school-wide implementation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-1 sm:flex-row lg:justify-start"
          >
            <SPButton href="/book-a-demo" variant="sage" size="lg">
              Schedule a School Demo
            </SPButton>
            <SPButton href="/downloads/curriculum-mapping-deck.pdf" variant="outline" size="lg">
              Download the curriculum mapping deck (24 pages)
            </SPButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.25, type: 'spring', stiffness: 120 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="flex w-full flex-1 justify-center lg:justify-end"
        >
          <div className="w-full max-w-[720px] rounded-2xl overflow-hidden shadow-xl shadow-charcoal/5">
            <Image
              src="/assets/images/herosp.png"
              alt="School leadership reviewing the Humain AI literacy programme"
              width={720}
              height={540}
              className="w-full h-auto object-cover"
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
