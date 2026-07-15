'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const pillars = [
  {
    id: 'ai-foundations',
    num: 1,
    name: 'AI Foundations',
    def: 'Teaches students what AI is, how models work, and where AI fails. Foundation for every other pillar.',
    mapping: 'OECD · UNESCO · EU',
  },
  {
    id: 'ethics-safety',
    num: 2,
    name: 'Ethics, Safety & Responsibility',
    def: 'Recognise bias, evaluate misinformation, protect data under DPDP 2023, and refuse harmful AI uses.',
    mapping: 'OECD · UNESCO · EU',
  },
  {
    id: 'learning-with-ai',
    num: 3,
    name: 'Learning with AI',
    def: 'Use AI as a study partner that sparks curiosity and deeper thinking, not as a homework shortcut.',
    mapping: 'OECD · UNESCO',
  },
  {
    id: 'creating-with-ai',
    num: 4,
    name: 'Creating with AI',
    def: 'Turn imagination into images, videos, stories, and projects. Human brief. AI tools. Human judgement.',
    mapping: 'UNESCO',
  },
  {
    id: 'agents-automation',
    num: 5,
    name: 'Agents & Automation',
    def: 'Design personal study agents with zero-code tools (n8n, ChatGPT API). Build the IIT Kharagpur capstone.',
    mapping: 'UNESCO',
  },
  {
    id: 'human-intelligence',
    num: 6,
    name: 'Human Intelligence in AI',
    def: 'EQ, metacognition, and curiosity-and-craft: the capacities AI cannot replicate. Unique to Humain.',
    mapping: 'Unique to Humain',
  },
];

export default function SixPillarsAtGlance() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-16 flex flex-col items-center">

        <div className="w-full text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            The six pillars of AI literacy explained
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            Six capacities every K-12 student must build to navigate an AI-native world — from technical understanding to human wisdom.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.a
              key={pillar.num}
              href={`#${pillar.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx % 2) }}
              className="relative overflow-hidden bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Watermark number — sole number indicator */}
              <div className="absolute -top-12 -right-6 font-display font-black text-[180px] leading-none text-charcoal opacity-[0.04] select-none pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.06]">
                {pillar.num}
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="font-display text-xl md:text-2xl font-bold text-sage mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage mt-0.5" />
                  {pillar.name}
                </h3>

                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-6 flex-grow">
                  {pillar.def}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#e8efe0]">
                  <span className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider">
                    {pillar.mapping}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-terracotta group-hover:translate-x-1 transition-transform">
                    Details
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
{/* 
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/framework"
            className="inline-flex items-center text-terracotta font-semibold hover:text-[#d6925c] transition-colors group text-sm md:text-base"
          >
            Read the full Humain AI Literacy Framework (32-page PDF)
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div> */}

      </div>
    </section>
  );
}
