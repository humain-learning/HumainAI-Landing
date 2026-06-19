'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MotionHeading, SPButton } from '../shared/SchoolsMotion';
import { sp } from '../shared/schoolsTheme';

export default function WhatIsAILiteracySP() {
  return (
    <section className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionWhite}`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 md:px-12 lg:flex-row lg:gap-16 lg:px-16">
        <div className="flex-1">
          <MotionHeading className="font-display mb-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
            What is AI literacy for schools?
          </MotionHeading>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
            className="font-sans mb-8 text-base leading-relaxed text-charcoal/80 md:text-lg"
          >
            AI literacy for schools is a structured programme that helps students in Classes 8–12 understand, use,
            evaluate, and apply AI responsibly. Aligned with CBSE, ICSE, IB, State Boards, NCF 2023, and NEP 2020, it
            combines student learning, teacher training, assessments, certifications, and implementation support to build
            future-ready AI skills across the school.
          </motion.p>

          <SPButton href="/book-a-demo" variant="terracotta">
            Start Your School&apos;s AI Literacy Journey
          </SPButton>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
          className="w-full max-w-md flex-shrink-0 lg:max-w-lg rounded-2xl overflow-hidden"
        >
          <Image
            src="/assets/images/whatisailiteracy.png"
            alt="Students and teachers in an AI literacy classroom session"
            width={500}
            height={375}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
