'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function RealOutcomesStudentWork() {
  const testimonials = [
    {
      quote: 'Before Humain Champs, I used ChatGPT like a search engine. Now I interrogate it like a witness. That shift happened in week two of Pillar 1.',
      name: 'Aditi Sharma',
      grade: 'Class 10, Delhi',
      pillar: 'Pillar 1',
    },
    {
      quote: 'Pillar 2 changed how I talk to my parents about their WhatsApp forwards. I showed my mother how to check an AI-generated image for artifacts. She was stunned.',
      name: 'Rohan Verma',
      grade: 'Class 9, Mumbai',
      pillar: 'Pillar 2',
    },
    {
      quote: 'My NotebookLM setup for Class 12 board prep is the most useful thing I\'ve built in school. Pillar 3 gave me the protocol.',
      name: 'Priya Nair',
      grade: 'Class 12, Chennai',
      pillar: 'Pillar 3',
    },
    {
      quote: 'I directed a one-minute AI film for our school\'s annual day. The AI did the rendering. The story was mine. Pillar 4 made me understand that distinction.',
      name: 'Arjun Mehta',
      grade: 'Class 11, Bengaluru',
      pillar: 'Pillar 4',
    },
    {
      quote: 'My AI Study Agent for Chemistry has answered more than 400 of my questions this semester. It knows my weak topics because I designed it to track them.',
      name: 'Avanindra Kumar Singh',
      grade: 'Class 12, Patna',
      pillar: 'Pillar 5',
    },
    {
      quote: 'Pillar 6 was the hardest session and the most important one. I had no answer to the question \'what can you do that AI cannot?\' Now I have three.',
      name: 'Tanvika Raghavan',
      grade: 'Class 10, Hyderabad',
      pillar: 'Pillar 6',
    },
  ];

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
            Real outcomes: what students say after completing the framework
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            One quote from a real student for each of the six pillars.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx % 2) }}
              className="relative overflow-hidden bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Watermark pillar number — sole number indicator */}
              <div className="absolute -top-12 -right-6 font-display font-black text-[180px] leading-none text-charcoal opacity-[0.04] select-none pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]">
                {idx + 1}
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Pillar tag */}
                <span className="self-start inline-block px-3 py-1 rounded-full bg-[#e8efe0] text-sage text-xs font-display font-bold mb-5">
                  {t.pillar}
                </span>

                {/* Pull quote */}
                <div className="bg-white rounded-2xl p-6 border border-[#e8efe0] shadow-sm mb-5 flex-grow">
                  <blockquote className="font-sans text-base text-charcoal/80 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <footer>
                  <p className="font-display font-bold text-charcoal text-sm">{t.name}</p>
                  <p className="font-sans text-xs text-charcoal/50">{t.grade}</p>
                </footer>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
