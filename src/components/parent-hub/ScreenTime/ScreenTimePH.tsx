'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function ScreenTimePH() {
  const [activeTab, setActiveTab] = useState<'active' | 'passive'>('active');

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
              Screen time vs AI learning in India: how to keep your child&apos;s AI use balanced
            </motion.h2>

            <motion.aside
              data-snippet="screen-time-vs-ai-learning"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-[#f4f7f2] p-5 border-l-[6px] border-[#aac191] shadow-sm mb-5"
            >
              <div className="font-display text-[10px] font-extrabold tracking-wider text-[#aac191] uppercase mb-2">Direct Answer</div>
              <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium leading-relaxed">
                Not all screen time is equal. A child building an AI project is not doing the same thing as a child
                scrolling a feed. The goal is balanced AI use: short, active, supervised sessions that produce
                something, not passive hours.
              </p>
            </motion.aside>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-5"
            >
              Screen time is the first worry most Indian parents raise, and it is a fair one. But the screen-time
              conversation misses a distinction that matters. Thirty minutes spent training a model, writing a brief, or
              checking an AI answer is active and creative. Thirty minutes spent watching auto-played videos is not.
              Humain keeps AI learning to thirty to forty-five minutes a week for younger children, in shared family
              spaces, with a clear output at the end. If AI screen time concerns you, the answer is not zero — it is structure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/parents/screen-time-vs-ai-learning"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                Read more on screen time vs AI learning
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: contrast cards with toggle */}
          <div className="space-y-4">
            {/* Toggle Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-2 bg-[#f9faf7] p-1.5 rounded-full w-full"
            >
              <button
                onClick={() => setActiveTab('active')}
                className={`flex-1 py-2.5 px-4 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'active'
                    ? 'bg-[#aac191] text-white shadow-lg shadow-[#aac191]/30'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Active
                </span>
              </button>
              <button
                onClick={() => setActiveTab('passive')}
                className={`flex-1 py-2.5 px-4 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'passive'
                    ? 'bg-terracotta text-white shadow-lg shadow-terracotta/30'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Passive
                </span>
              </button>
            </motion.div>

            {/* Active Card */}
            <AnimatePresence mode="popLayout">
              {activeTab === 'active' && (
                <motion.div
                  key="active"
                  layoutId="content-card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-2xl bg-[#f3f6f1] border border-[#c8d6bc] p-5 hover:shadow-lg hover:border-[#aac191] transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#aac191]" />
                    <span className="font-display text-sm font-extrabold tracking-wider text-[#aac191] uppercase">Active — encouraged</span>
                  </div>
                  <ul className="space-y-2.5 font-sans text-sm text-charcoal/80">
                    {['Training a model or testing its limits', 'Writing a prompt, then editing the output', 'Checking an AI answer against a textbook', 'Building a personal study agent'].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 group hover:text-[#aac191] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 text-[#aac191] flex-shrink-0 group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Passive Card */}
            <AnimatePresence mode="popLayout">
              {activeTab === 'passive' && (
                <motion.div
                  key="passive"
                  layoutId="content-card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-2xl bg-red-50/60 border border-red-100 p-5 hover:shadow-lg hover:border-terracotta transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-terracotta" />
                    <span className="font-display text-sm font-extrabold tracking-wider text-terracotta uppercase">Passive — push back on</span>
                  </div>
                  <ul className="space-y-2.5 font-sans text-sm text-charcoal/80">
                    {['Auto-played videos without a goal', 'Letting AI complete homework while scrolling', 'Open-ended chatting with no output', 'Using AI in private, without check-ins'].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 group hover:text-terracotta transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 text-terracotta flex-shrink-0 group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-[#aac191] p-4 text-center group hover:shadow-lg transition-all"
            >
              <div className="font-display text-2xl font-extrabold text-white group-hover:scale-105 transition-transform">30–45 min/week</div>
              <div className="font-sans text-sm text-white/70 mt-1">Humain's recommended AI session length for younger children</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/images/girlstudying.png"
                alt="Girl studying with AI learning tools"
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
