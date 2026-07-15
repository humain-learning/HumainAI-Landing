'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const highlights = [
  '15 hours of live, instructor-led learning.',
  'Covers all six pillars of AI literacy.',
  'Build a personalised AI project or AI agent.',
  'Hands-on experience with leading AI tools.',
  'Small, interactive batches for personalised attention.',
  'E-Cell IIT Kharagpur participation certificate.',
];

export default function AICoursesForDaughtersPH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: heading + paragraph + image */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-4"
            >
              AI courses for my child in India: why Class 8 to 12 is the right time to start
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-6"
            >
              Humain Champs is a live AI literacy programme designed to help students build the skills, confidence, and knowledge needed to thrive in an AI-powered world. Based on the Humain AI Literacy Framework, the programme combines hands-on learning with real-world AI applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/images/groupof.png"
                alt="Group of students learning AI together"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </motion.div>
          </div>

          {/* Right: 6 bullet points */}
          <div className="space-y-10">
            {highlights.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.07 * i }}
                className="flex items-start gap-4 bg-white rounded-2xl border border-[#e8efe0] px-5 py-4 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
