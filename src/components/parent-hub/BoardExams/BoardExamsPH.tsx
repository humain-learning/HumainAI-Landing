'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function BoardExamsPH() {
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
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-5"
            >
              AI for board exam students in India: how to use AI for Class 10 and Class 12 prep
            </motion.h2>

            <motion.aside
              data-snippet="ai-for-board-exams"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white p-5 mb-5 border-l-[6px] border-[#aac191] shadow-sm"
            >
              <div className="font-display text-[10px] font-extrabold tracking-wider text-[#aac191] uppercase mb-2">Direct Answer</div>
              <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium leading-relaxed">
                Used well, AI makes board prep harder, not easier. The right use of AI for a Class 10 or Class 12
                board student is to generate tougher practice, mark her answers against the rubric, and find the
                gaps. Not to write the answers.
              </p>
            </motion.aside>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-5"
            >
              Board exams are where the AI question gets serious for Indian parents. The fear is that a child will use
              AI to shortcut her CBSE or ICSE prep. The opportunity is the opposite. The line is simple: AI may
              build the practice, your child must do the thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/parents/ai-for-board-exam-students"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                Read more on AI for board exam students
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: how-to cards */}
          <div className="space-y-3">
            <div className="font-display text-xl font-bold tracking-[0.15em] text-[#aac191] uppercase mb-2">How a Class 10 / 12 student uses AI well</div>
            {[
              { tool: 'NotebookLM', use: 'Summarise a chapter, then test herself against it' },
              { tool: 'AI prompting', use: 'Generate board-pattern questions a level above her comfort' },
              { tool: 'AI marking', use: 'Ask AI to mark a practice answer against the marking scheme' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 bg-white rounded-2xl border border-[#e8efe0] px-5 py-4 shadow-sm"
              >
                <div className="flex-shrink-0 rounded-xl bg-[#aac191] px-2.5 py-1">
                  <span className="font-display text-[20px] font-extrabold text-white tracking-wide">{item.tool}</span>
                </div>
                <p className="font-sans text-em text-charcoal/80 mt-0.5">{item.use}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-terracotta/10 border border-terracotta/20 px-5 py-4"
            >
              <p className="font-sans text-sm text-charcoal/80 font-semibold">
                The rule: AI may build the practice. Your child must do the thinking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/images/studyboy.png"
                alt="Student studying with AI dashboard for board exam preparation"
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
