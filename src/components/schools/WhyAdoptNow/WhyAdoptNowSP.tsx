'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLink, MotionCard, MotionHeading } from '../shared/SchoolsMotion';
import ImagePlaceholderSP from '../shared/ImagePlaceholderSP';
import { sp } from '../shared/schoolsTheme';

const reasons = [
  {
    title: 'Curriculum Alignment',
    text: 'NEP 2020, NCF 2023, and CBSE guidelines encourage AI and digital skills in education.',
  },
  {
    title: 'Parent Expectations',
    text: 'More parents want students to learn AI from middle and senior school.',
  },
  {
    title: 'College Readiness',
    text: 'AI projects and skills can strengthen higher education applications and future career opportunities.',
  },
  {
    title: 'Teacher Development',
    text: 'Demand for AI-trained teachers is growing faster than supply.',
  },
];

export default function WhyAdoptNowSP() {
  return (
    <section id="why-now" className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionAlt}`}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <MotionHeading className="font-display mb-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
              Why CBSE, ICSE and state-board schools should adopt AI literacy in 2026-27
            </MotionHeading>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1 }}
              className="font-sans mb-8 text-lg leading-relaxed text-charcoal/80"
            >
              AI literacy is quickly becoming an essential part of school education in India. Schools that start early
              can build a structured, responsible approach to AI learning rather than rushing to adapt later.
            </motion.p>

            <div className="mb-8 space-y-4">
              {reasons.map((item, idx) => (
                <MotionCard
                  key={item.title}
                  delay={0.08 * idx}
                  className={`${sp.card} ${sp.cardHover} group p-5`}
                >
                  <div className="mb-2 h-1 w-8 rounded-full bg-terracotta transition-all duration-300 group-hover:w-12" />
                  <h3 className="font-display mb-1 text-lg font-bold text-sage">{item.title}</h3>
                  <p className="font-sans text-base leading-relaxed text-charcoal/80">{item.text}</p>
                </MotionCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <ArrowLink href="/schools/nep-2020-aligned-ai-curriculum">See the NEP 2020 aligned AI curriculum</ArrowLink>
              <ArrowLink href="/schools/ncf-2023-ai-curriculum">See the NCF 2023 AI curriculum</ArrowLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/assets/images/whycbse.png"
              alt="Why CBSE, ICSE and state-board schools should adopt AI literacy in 2026-27"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
