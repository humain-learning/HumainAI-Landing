'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function AICoursesForDaughtersPH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: text */}
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
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-4"
            >
              Parents ask us directly, so we will answer directly. AI is not a subject for one type of student.
              Every child in Class 8 to 12 is capable, and every child benefits from starting early, while they are
              still forming their sense of what they are good at.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-4"
            >
              The risk is not ability — it is being quietly left out: children who are not encouraged into AI early are
              the ones who arrive at college or work behind. An AI course is one of the simplest ways to close that
              gap before it opens. Humain Champs runs small, mixed, and interactive batches, where the instructor
              knows your child by name and her ideas get equal air.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-5"
            >
              Some of our strongest student AI projects have come from students who did not think of themselves
              as technical at all. If your child is in Class 8, 9, 10, 11, or 12, the best time to start is now. The free
              Parents Guide includes a short section on what to look for in any AI course.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/resources/parents-guide"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                Read what to look for in an AI course
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: highlights */}
          <div className="space-y-3">
            {[
              { icon: 'family', stat: 'Every child', text: 'AI is not a subject for one type of student. Class 8–12, any stream.' },
              { icon: 'trophy', stat: 'Strong projects', text: 'Some of the strongest AI projects come from students who did not think of themselves as technical.' },
              { icon: 'person', stat: 'Max 12 students', text: 'Small-batch. The instructor knows your child by name. Her ideas get equal air.' },
              { icon: 'time', stat: 'Start now', text: 'Class 8, 9, 10, 11, or 12 — the best time to start is now, before the gap opens.' },
            ].map((item, i) => {
              const getIcon = (iconType: string) => {
                switch(iconType) {
                  case 'family':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z" />
                      </svg>
                    );
                  case 'trophy':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    );
                  case 'person':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    );
                  case 'time':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-[#e8efe0] px-5 py-4 shadow-sm"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#aac191] mb-0.5">{item.stat}</div>
                    <p className="font-sans text-sm text-charcoal/70">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
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

        </div>
      </div>
    </section>
  );
}
