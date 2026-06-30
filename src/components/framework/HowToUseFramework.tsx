'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function HowToUseFramework() {
  const cards = [
    {
      role: 'Parents',
      badge: 'P',
      num: 1,
      instructions: [
        'Use Pillar 2 (Ethics, Safety and Responsibility) as a conversation starter with your child about what she shares with AI tools.',
        'Use Pillar 3 (Learning with AI) to evaluate whether your child is using AI to think harder or think less.',
        'Use Pillar 6 (Human Intelligence) as a mirror: are you modelling the curiosity and emotional intelligence you want her to build?',
        'Use the framework to evaluate any AI literacy programme your school is offering. If it doesn\'t cover all six pillars, ask why.',
      ],
      cta: { label: 'Download the Parent Guide', href: '/parenthub' },
    },
    {
      role: 'Teachers',
      badge: 'T',
      num: 2,
      instructions: [
        'Map the framework against your current syllabus using the 24-page curriculum mapping deck (free download below).',
        'Use the Pillar 1 grade-band table to identify the appropriate entry point for your class.',
        'Design a single assessed task that spans Pillars 1 and 2 before introducing Pillars 3 and 4.',
        'Use the Pillar 6 rubric to add a reflection component to every AI-assisted assignment.',
      ],
      cta: { label: 'Download the Curriculum Mapping Deck', href: '#download' },
    },
    {
      role: 'Students',
      badge: 'S',
      num: 3,
      instructions: [
        'Start with Pillar 2. Before you use any AI tool, you should be able to answer: what does this tool know about me, and should it?',
        'Use Pillar 3 as a study protocol. Every time you use ChatGPT or Gemini, you must ask three follow-up questions before you accept the output.',
        'Build towards Pillar 5. The Humain Champs capstone project — your personalised AI Study Agent — is yours to keep forever.',
        'Read Pillar 6 last, and read it carefully. It is the answer to the question your parents are already asking.',
      ],
      cta: { label: 'Enroll in Humain Champs', href: 'https://pages.razorpay.com/humainchamps' },
    },
    {
      role: 'Schools',
      badge: 'Sc',
      num: 4,
      instructions: [
        'Download the 24-page curriculum mapping deck. Check how many of your current AI-related activities map to the six pillars.',
        'Identify your coverage gaps. Most schools cover Pillars 1 and 2 in some form. Almost none cover Pillars 5 and 6.',
        'Request a free 60-minute curriculum-mapping workshop with the Humain team. We will map your current provision against the six pillars and identify the fastest path to full coverage.',
        'Consider the Humain school programme as the AI literacy component of your NEP 2020 or NCF 2023 transition plan.',
      ],
      cta: { label: 'Request a School Demo', href: '/schools/ai-literacy-programme' },
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold text-charcoal mb-4"
          >
            How to use the Humain AI Literacy Framework: a guide for parents, teachers, students, and schools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto"
          >
            The framework is a public document. Here is how each stakeholder can put it to use today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="relative overflow-hidden bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Watermark badge letter — sole identifier */}
              <div className="absolute -top-10 -right-4 font-display font-black text-[140px] leading-none text-charcoal opacity-[0.04] select-none pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]">
                {card.badge}
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage" />
                  <h3 className="font-display text-2xl font-extrabold text-sage">For {card.role}</h3>
                </div>

                <ol className="space-y-4 mb-8 flex-grow">
                  {card.instructions.map((inst, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#e8efe0] text-sage font-display font-bold text-xs mt-0.5">
                        {i + 1}
                      </span>
                      <p className="font-sans text-base text-charcoal/80 leading-relaxed">{inst}</p>
                    </li>
                  ))}
                </ol>

                <Link
                  href={card.cta.href}
                  className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 rounded-full bg-sage text-white font-sans font-bold text-base shadow-lg shadow-sage/30 hover:bg-[#4a5a3e] transition-all"
                >
                  {card.cta.label}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

