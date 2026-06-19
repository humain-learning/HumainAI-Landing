'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MotionHeading, TimelineDot } from '../shared/SchoolsMotion';
import ImagePlaceholderSP from '../shared/ImagePlaceholderSP';
import { sp } from '../shared/schoolsTheme';

const steps = [
  {
    step: 'Step 1',
    title: 'School Demo',
    desc: 'Understand the framework, curriculum alignment, and implementation roadmap.',
  },
  {
    step: 'Step 2',
    title: 'Curriculum Mapping Workshop',
    desc: "Map AI literacy to your school's timetable, subjects, and assessment plans.",
  },
  {
    step: 'Step 3',
    title: 'Teacher Training',
    desc: 'Train teachers and coordinators before launching the programme for students.',
  },
];

export default function EngagementModelSP() {
  return (
    <section className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionAlt}`}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <MotionHeading className="font-display mb-12 text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
          How Humain Works With Your School
        </MotionHeading>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 6 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.1 * idx, type: 'spring', stiffness: 120 }}
                className="group relative border-l-2 border-grey pl-10"
              >
                <div className="absolute -left-[9px] top-0">
                  <TimelineDot active={idx === 0} />
                </div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-terracotta">
                  {item.step}
                </span>
                <h3 className="mb-2 font-display text-xl font-bold text-charcoal transition-colors group-hover:text-sage md:text-2xl">
                  {item.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-charcoal/80">{item.desc}</p>
              </motion.div>
            ))}
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
              src="/assets/images/principaleducator.png"
              alt="How Humain works with your school - School engagement process"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
