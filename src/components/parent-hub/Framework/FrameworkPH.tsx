'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function FrameworkPH() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const pillars = [
    {
      label: 'PILLAR 01',
      title: 'AI Foundations',
      content: 'Your child learns what AI actually is, how it gets its answers, and why it sometimes invents things with confidence. A child who understands AI will not mistake confidence for accuracy.',
      color: '#aac191',
    },
    {
      label: 'PILLAR 02',
      title: 'Ethics, Safety & Responsibility',
      content: 'Recognise bias, evaluate misinformation, protect data under the DPDP Act 2023, and refuse harmful uses. Covers deepfakes in school WhatsApp groups, beauty filters, and AI tools that record everything she types.',
      color: '#e7a572',
    },
    {
      label: 'PILLAR 03',
      title: 'Learning with AI',
      content: 'Use NotebookLM, ChatGPT, and Gemini as study partners, not homework shortcuts. Make CBSE or ICSE practice harder, not easier. Ask better questions, not get faster answers.',
      color: '#aac191',
    },
    {
      label: 'PILLAR 04',
      title: 'Creating with AI',
      content: 'Make images, videos, voices, and projects with Midjourney, Canva AI, and ElevenLabs. Human-first: she writes the brief, makes the creative decisions. AI-second: it is the tool, not the author.',
      color: '#e7a572',
    },
    {
      label: 'PILLAR 05',
      title: 'Agents & Automation',
      content: 'From Class 8 onwards, build AI agents. By the end of Humain Champs she has a personal AI agent that drills her on her syllabus, summarises chapters, and sends a study briefing every morning. She keeps it forever.',
      color: '#aac191',
    },
    {
      label: 'PILLAR 06',
      title: 'Human Intelligence in the Age of AI',
      content: 'The three abilities AI cannot do for her: emotional intelligence, metacognition, curiosity and craft. This is the spine of the Humain framework. No other AI literacy programme names this pillar. We think that is a mistake.',
      color: '#e7a572',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs font-bold tracking-[0.15em] text-[#aac191] uppercase mb-3"
          >
            The Framework
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-3"
          >
            The six pillars of AI literacy your child needs, explained for parents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base md:text-lg text-charcoal/70"
          >
            Each pillar in one sentence and what it means for your child at home. Full 32-page framework at{' '}
            <Link href="https://humainlearning.ai/framework" target="_blank" className="text-[#aac191] font-semibold hover:text-terracotta underline">
              humainlearning.ai/framework
            </Link>.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * index, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setSelectedPillar(selectedPillar === index ? null : index)}
              className={`group relative flex flex-col p-6 rounded-2xl cursor-pointer transition-all duration-400 overflow-hidden ${
                selectedPillar === index
                  ? 'shadow-2xl border-2'
                  : 'shadow-sm hover:shadow-xl border border-[#e8efe0]'
              }`}
              style={{
                background: selectedPillar === index ? `${pillar.color}10` : '#f9faf7',
                borderColor: selectedPillar === index ? pillar.color : '#e8efe0',
              }}
            >
              {/* Top accent */}
              <div 
                className={`absolute top-0 left-0 h-1.5 transition-all duration-500 ease-in-out ${
                  selectedPillar === index ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
                style={{ background: pillar.color }} 
              />

              {/* Number watermark */}
              <motion.div 
                className="absolute -bottom-4 -right-2 font-display text-[100px] font-black opacity-[0.06] select-none pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-300" 
                style={{ color: pillar.color }}
              >
                0{index + 1}
              </motion.div>

              {/* Hover overlay reveal */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                  selectedPillar === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}
                style={{ background: `linear-gradient(135deg, ${pillar.color}05 0%, ${pillar.color}10 100%)` }} 
              />

              <div className="relative z-10">
                <div 
                  className="font-display text-[10px] font-extrabold tracking-[0.15em] mb-3 group-hover:scale-110 transition-transform duration-300 origin-left" 
                  style={{ color: pillar.color }}
                >
                  {pillar.label}
                </div>
                <h3 
                  className="font-display text-lg font-bold text-charcoal mb-3 leading-tight group-hover:text-terracotta transition-colors duration-300"
                  style={{ color: selectedPillar === index ? pillar.color : 'inherit' }}
                >
                  {pillar.title}
                </h3>
                <p 
                  className={`font-sans text-sm leading-relaxed transition-all duration-300 ${
                    selectedPillar === index 
                      ? 'text-charcoal font-medium' 
                      : 'text-charcoal/70 group-hover:text-charcoal'
                  }`}
                >
                  {pillar.content}
                </p>
                
                {/* Click hint */}
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: selectedPillar === index ? 1 : 0, 
                    height: selectedPillar === index ? 'auto' : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 pt-3 border-t transition-all overflow-hidden"
                  style={{ borderColor: `${pillar.color}30` }}
                >
                  <p className="font-sans text-xs text-charcoal/60 font-semibold" style={{ color: pillar.color }}>✓ Selected</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
