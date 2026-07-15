'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function ShouldChildLearnAIPH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: main content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
            >
              Should my child learn AI? A straight answer for parents
            </motion.h2>

            <motion.aside
              data-snippet="should-my-child-learn-ai"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-[#f9faf7] p-5 mb-5 border-l-[6px] border-[#e7a572] shadow-sm"
            >
              <div className="font-display text-[10px] font-extrabold tracking-wider text-terracotta uppercase mb-2">Direct Answer</div>
              <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium leading-relaxed">
                Yes. Your child should learn AI the way they learned to read. AI literacy is now a basic skill, not an optional one. It's no longer a question of whether to teach it, but how and when.              </p>
            </motion.aside>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-5"
            >
              The honest answer is yes, and it has little to do with whether your child wants to be an engineer. 
              By the time your child finishes Class 12, AI will sit inside almost every job, course, and exam they encounter. Learning AI is not about coding.
              It is about judgement: knowing when to trust an answer, when to question it, and what a machine cannot do for them. An early start builds an edge that's hard to catch up on later 
            </motion.p>
         </div>

          {/* Right: visual reasons why */}
          <div className="space-y-15">
            {[
              { icon: 'graduation', title: 'Every career', text: 'By class 12, AI sits inside almost every job, course, and exam they meet.' },
              { icon: 'balance', title: 'Judgement over tools', text: 'It is not about coding. It is knowing when to trust an answer, when to question it.' },
              { icon: 'clock', title: 'Start early', text: 'A child who starts early carries an advantage a child who waits does not.' },
              // { icon: 'checklist', title: 'Free first step', text: 'If still deciding, start with the free Parents Guide and decide for yourself.' },
            ].map((item, i) => {
              const getIcon = (iconType: string) => {
                switch(iconType) {
                  case 'graduation':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C6.228 6.228 2 10.228 2 15s4.228 8.772 10 8.772 10-4.228 10-8.772C22 10.228 17.772 6.228 12 6.253" />
                      </svg>
                    );
                  case 'balance':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3M7 12L4 9m6 0l3-3 3 3m0-6L9 3m6 0v15M9 3v15" />
                      </svg>
                    );
                  case 'clock':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    );
                  case 'checklist':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3" />
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
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4 bg-[#f9faf7] rounded-2xl border border-[#e8efe0] px-5 py-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-charcoal mb-0.5">{item.title}</div>
                    <p className="font-sans text-sm text-charcoal/70">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
