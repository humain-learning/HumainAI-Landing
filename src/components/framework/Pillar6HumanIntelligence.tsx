'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Pillar6HumanIntelligence() {
  const citations = [
    {
      author: "Goleman, D.",
      year: "1995",
      title: "Emotional Intelligence: Why It Can Matter More Than IQ",
      publisher: "Bantam Books"
    },
    {
      author: "Flavell, J. H.",
      year: "1979",
      title: "Metacognition and cognitive monitoring",
      publisher: "American Psychologist, 34(10), 906–911"
    },
    {
      author: "Csikszentmihalyi, M.",
      year: "1996",
      title: "Creativity: Flow and the Psychology of Discovery and Invention",
      publisher: "Harper Collins"
    }
  ];

  return (
    <section id="human-intelligence" className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 flex flex-col items-start">

        {/* Header */}
        <div className="w-full flex items-center gap-4 mb-6">
          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage mt-1" />
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0a1e3f]"
          >
            Pillar 6. Human Intelligence in the Age of AI: the capacities AI cannot replicate
          </motion.h2>
        </div>

        {/* Unique-to-Humain badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] font-sans font-semibold text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Unique to the Humain framework. Not found in OECD, UNESCO, or EU frameworks.
          </span>
        </div>

        {/* 40-word Snippet */}
        <aside className="bg-white border-l-4 border-[#d4af37] p-6 rounded-r-2xl mb-10 w-full max-w-3xl shadow-sm">
          <p className="font-sans text-lg md:text-xl text-[#0a1e3f] font-semibold">
            Human Intelligence in the Age of AI is the sixth and defining pillar of the Humain framework. It covers emotional intelligence, metacognition, and curiosity-and-craft: the capacities AI cannot replicate and students must actively protect.
          </p>
        </aside>

        {/* Body + Pull Quote */}
        <div className="flex flex-col lg:flex-row gap-12 w-full mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 font-sans text-lg text-charcoal/80 leading-relaxed font-medium space-y-6"
          >
            <p>
              No other AI literacy framework names this pillar. Every other framework ends at technical competency and ethical awareness. We don't. We ask: after a student learns what AI can do, what does that mean for what she must become? Our answer is three sub-pillars grounded in academic research.
            </p>
            <p>
              The first sub-pillar is <span className="font-bold">emotional intelligence</span>, built on Goleman's research into the five components: self-awareness, self-regulation, motivation, empathy, and social skills. We teach these not as abstract capacities but as practical tools for working alongside AI systems that simulate empathy without possessing it.
            </p>
            <p>
              The second is <span className="font-bold">metacognition</span>, grounded in Flavell's (1979) foundational research on thinking about thinking. We teach students to interrogate their own reasoning process, especially in moments when an AI has given a confident but wrong answer.
            </p>
            <p>
              The third is <span className="font-bold">curiosity-and-craft</span>, grounded in Csikszentmihalyi's research on creativity and flow. We make a direct argument to students: the most AI-proof skill is the relentless curiosity to ask the question that hasn't been asked yet, and the patience to do the work that produces something genuinely new.
            </p>
          </motion.div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-80 bg-white rounded-3xl p-8 border border-[#e8efe0] shadow-sm relative"
          >
            <svg className="absolute top-6 left-6 w-10 h-10 text-[#d4af37]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="relative z-10 pt-6">
              <p className="font-display text-lg font-bold text-charcoal leading-snug italic mb-6">
                "We made Pillar 6 the spine of our framework because every other competency eventually bottoms out into a human choice. And that choice requires a human who knows herself."
              </p>
              <footer className="font-sans text-sm text-charcoal/70">
                <span className="font-bold block text-charcoal">Manit Jain</span>
                Co-founder, Humain Learning AI
              </footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Academic Citation Block */}
        <div className="w-full max-w-4xl bg-white rounded-2xl border border-[#e8efe0] shadow-sm p-8 mb-10">
          <h3 className="font-display text-xl font-bold text-[#0a1e3f] mb-6">Academic foundations for Pillar 6</h3>
          <div className="space-y-4">
            {citations.map((c, idx) => (
              <div key={idx} className="font-sans text-sm text-charcoal/80 leading-relaxed border-l-2 border-[#e8efe0] pl-4">
                <span className="font-bold">{c.author}</span> ({c.year}). <em>{c.title}</em>. {c.publisher}.
              </div>
            ))}
          </div>
        </div>

        {/* Deep-dive Link */}
        <div className="bg-[#f9faf7] rounded-xl p-6 border border-[#e8efe0] w-full max-w-4xl">
          <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-2">Deep-dive</h4>
          <Link
            href="/framework/human-intelligence"
            className="font-semibold text-sage hover:text-[#4a5a3e] transition-colors inline-flex items-center text-lg"
          >
            Read the full Pillar 6: Human Intelligence page
            <svg className="ml-2 w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
