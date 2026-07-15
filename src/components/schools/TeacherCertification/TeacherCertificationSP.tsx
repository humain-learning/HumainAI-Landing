'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MotionHeading } from '../shared/SchoolsMotion';
import ImagePlaceholderSP from '../shared/ImagePlaceholderSP';
import { sp } from '../shared/schoolsTheme';

const features = [
  '4-week certification programme',
  'Live online training',
  'Six AI literacy pillars',
  'Classroom implementation',
  'Assessment design',
  'DPDP-compliant practices',
  'Individual or school cohorts',
];

export default function TeacherCertificationSP() {
  return (
    <section className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionWhite}`}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <MotionHeading className="font-display mb-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
              Teacher Certification for CBSE and ICSE Schools
            </MotionHeading>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1 }}
              className="font-sans mb-8 text-lg leading-relaxed text-charcoal/80"
            >
              Train your teachers to confidently deliver AI literacy across classrooms.
            </motion.p>

            <ul className="space-y-3">
              {features.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4, borderColor: 'rgba(170, 193, 145, 0.6)' }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.06 * idx }}
                  className={`flex items-start gap-3 rounded-xl border border-grey bg-grey/20 px-4 py-3 transition-all duration-300 hover:shadow-sm hover:shadow-sage/10`}
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-sans text-base text-charcoal/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/assets/images/collaborative.png"
              alt="Teacher certification for CBSE and ICSE schools - AI literacy training"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
