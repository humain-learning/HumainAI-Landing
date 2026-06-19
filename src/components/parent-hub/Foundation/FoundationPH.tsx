'use client';

import React from 'react';
import { motion } from 'motion/react';

const pillarsShort = [
  { icon: 'brain', label: 'AI Foundations' },
  { icon: 'shield', label: 'Ethics & Safety' },
  { icon: 'book', label: 'Learning with AI' },
  { icon: 'palette', label: 'Creating with AI' },
  { icon: 'robot', label: 'Agents & Automation' },
  { icon: 'heart', label: 'Human Intelligence' },
];

export default function FoundationPH() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-sm font-bold tracking-[0.15em] text-[#aac191] uppercase mb-3"
            >
              The Foundation
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-charcoal mb-5"
            >
              What is AI literacy for children, and why every Indian parent needs to know
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-[#f3f6f1] p-5 border-l-[6px] border-[#aac191] mb-5"
            >
              <div className="font-display text-[10px] font-extrabold tracking-wider text-[#aac191] uppercase mb-2">Answer</div>
              <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium leading-relaxed">
                AI literacy for your child is the ability to understand, use, evaluate, and question AI responsibly.
                For a child in Class 8 to 12 in India, it is a foundational capacity, like reading and numeracy.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed"
            >
              The Humain AI Literacy Framework defines what this looks like at each age, across six pillars — built on OECD, UNESCO, and EU frameworks, rebuilt for India. It aligns with NEP 2020, NCF 2023, and the DPDP Act 2023.
              You do not need to understand AI yourself. You need to be in the room while your child learns.
            </motion.p>
          </div>

          {/* Right: 6 pillar chips */}
          <div className="grid grid-cols-2 gap-3">
            {pillarsShort.map((p, i) => {
              const getIcon = (iconType: string) => {
                switch(iconType) {
                  case 'brain':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    );
                  case 'shield':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    );
                  case 'book':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C6.228 6.228 2 10.228 2 15s4.228 8.772 10 8.772 10-4.228 10-8.772C22 10.228 17.772 6.228 12 6.253" />
                      </svg>
                    );
                  case 'palette':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    );
                  case 'robot':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 5h6m-3 6h.01M8 15h8M5 9h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V7a2 2 0 012-2h6a2 2 0 012 2v2" />
                      </svg>
                    );
                  case 'heart':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 rounded-2xl bg-[#f9faf7] border border-[#e8efe0] px-4 py-3.5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {getIcon(p.icon)}
                  <span className="font-sans text-sm font-semibold text-charcoal/80 leading-tight">{p.label}</span>
                </motion.div>
              );
            })}

            {/* Stat card */}
            <motion.a
              href="https://humainlearning.ai/framework"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, shadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              className="col-span-2 rounded-2xl bg-[#aac191] px-5 py-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="font-display text-2xl font-extrabold text-white">6 Pillars</div>
                <div className="font-sans text-sm text-white/70 mt-0.5">Humain AI Literacy Framework</div>
              </div>
              <div className="text-right">
                <div className="font-display text-lg font-extrabold text-[#d9e3d0]">Class 8–12</div>
                <div className="font-sans text-sm text-white/60 mt-0.5">India-first, NEP 2020 aligned</div>
              </div>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
