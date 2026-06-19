'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MotionCard, MotionHeading } from '../shared/SchoolsMotion';
import { sp } from '../shared/schoolsTheme';

const pillars = [
  {
    num: 1,
    name: 'AI Foundations',
    desc: 'Learn what AI is, how it works, where it is used, and its limitations.',
  },
  {
    num: 2,
    name: 'Ethics, Safety and Responsibility',
    desc: 'Understand bias, privacy, misinformation, data protection, and responsible AI use.',
  },
  {
    num: 3,
    name: 'Learning with AI',
    desc: 'Learn how to use AI tools responsibly to support learning, research, and academic success.',
  },
  {
    num: 4,
    name: 'Creating with AI',
    desc: 'Create images, audio, videos, and projects while developing creativity and originality.',
  },
  {
    num: 5,
    name: 'Agents and Automation',
    desc: 'Build AI workflows, automations, and practical AI agents for real-world tasks.',
  },
  {
    num: 6,
    name: 'Human Intelligence in the Age of AI',
    desc: 'Strengthen critical thinking, judgement, communication, and other uniquely human skills.',
  },
];

export default function LearnerOutcomesSP() {
  return (
    <section className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionWhite}`}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 max-w-3xl">
          <MotionHeading className="font-display mb-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
            The six pillars of the Humain AI Literacy Framework
          </MotionHeading>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg leading-relaxed text-charcoal/80"
          >
            The Humain AI Literacy Framework helps schools build AI knowledge, skills, ethics, creativity, and critical
            thinking through six progressive pillars.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <MotionCard
              key={pillar.num}
              delay={0.06 * idx}
              className={`group relative overflow-hidden ${sp.cardAlt} p-6 ${sp.cardHover}`}
            >
              <div className="absolute -right-2 -top-4 select-none font-display text-7xl font-black text-sage/15 transition-colors duration-300 group-hover:text-terracotta/15">
                0{pillar.num}
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              <h3 className="relative mb-2 font-display text-xl font-bold text-sage transition-colors group-hover:text-terracotta">
                {pillar.name}
              </h3>
              <p className="relative font-sans text-sm leading-relaxed text-charcoal/80 md:text-base">{pillar.desc}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
