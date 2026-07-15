'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Pillar5AgentsAutomation() {
  const showcaseCards = [
    {
      initials: 'AM',
      name: 'Amayerah',
      project: 'AI Study Companion for CBSE Grade 9',
      subject: 'All subjects · Class 9',
    },
    {
      initials: 'DG',
      name: 'Diya Gosain',
      project: 'AI History Tutor for Class 8',
      subject: 'History · Class 8',
    },
    {
      initials: 'TM',
      name: 'Tanay Mohan',
      project: 'AI Essay Writing Assistant',
      subject: 'English · Class 10 & 11',
    },
    {
      initials: 'AK',
      name: 'Avanindra Kumar Singh',
      project: 'AI Chemistry Assistant',
      subject: 'Chemistry · Class 11 & 12',
    },
  ];

  return (
    <section id="agents-automation" className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 flex flex-col items-start">

        {/* Header */}
        <div className="w-full flex items-center gap-4 mb-6">
          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage mt-1" />
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-charcoal"
          >
            Pillar 5. Agents and Automation: designing personal study agents that extend human capabilities
          </motion.h2>
        </div>

        {/* 40-word Snippet */}
        <aside className="bg-[#f9faf7] border-l-4 border-terracotta p-6 rounded-r-2xl mb-10 w-full max-w-3xl shadow-sm">
          <p className="font-sans text-lg md:text-xl text-charcoal font-semibold">
            Agents and Automation is the fifth pillar of the Humain framework. Class 9 and above students learn to build AI agents with n8n and the ChatGPT API. The capstone of Humain Champs is a personalised AI Study Agent, kept forever.
          </p>
        </aside>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium space-y-6 max-w-4xl mb-12"
        >
          <p>
            This pillar represents the pedagogical leap from AI user to AI maker. We introduce students to <span className="font-bold">autonomous AI</span> and <span className="font-bold">automation</span>, shifting from simple prompts to <span className="font-bold">multi-step task</span> execution. The capstone connection is direct: this pillar culminates in the final Humain Champs module and serves as the submission for the{' '}
            <Link href="/humain-champs#capstone" className="text-terracotta font-semibold hover:text-[#d6925c] transition-colors">E-Cell IIT Kharagpur Hackathon capstone</Link>.
          </p>
          <p>
            The tool stack reflects professional environments. Students use <span className="font-bold">n8n</span> for <span className="font-bold">workflow</span> orchestration and the <span className="font-bold">ChatGPT API</span> for reasoning. They integrate Google Sheets and Notion as data sources, and deploy their agents via WhatsApp and Telegram as delivery channels.
          </p>
          <p>
            We teach this through worked examples of real student projects from Humain Champs. Strict ethical guardrails are embedded into the engineering process: students must design agents that respect privacy by design, escalate edge cases to humans, and do not make irreversible decisions without oversight.
          </p>
        </motion.div>

        {/* Student Showcase Cards */}
        <div className="w-full mb-12">
          <h3 className="font-display text-xl font-extrabold text-charcoal mb-6 flex items-center gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#e8efe0] text-sage font-display font-bold text-sm">4</span>
            Real student agents built in Humain Champs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {showcaseCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="relative overflow-hidden bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Watermark initials — sole identifier */}
                <div className="absolute -top-6 -right-4 font-display font-black text-[120px] leading-none text-charcoal opacity-[0.04] select-none pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]">
                  {card.initials}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage" />
                    <div>
                      <p className="font-display font-bold text-sage text-sm">{card.name}</p>
                      <p className="font-sans text-xs text-charcoal/50">{card.subject}</p>
                    </div>
                  </div>
                  <p className="font-sans text-base text-charcoal/80 leading-relaxed font-medium">{card.project}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-terracotta">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    Student project
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deep-dive Link */}
        <div className="bg-[#f9faf7] rounded-xl p-6 border border-[#e8efe0] w-full max-w-4xl">
          <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-2">Deep-dive</h4>
          <Link
            href="/framework/agents-automation"
            className="inline-flex items-center text-terracotta font-semibold hover:text-[#d6925c] transition-colors group text-lg"
          >
            Read the full Pillar 5: Agents and Automation page
            <svg className="ml-2 w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
