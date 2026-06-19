'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const questions = [
  { q: 'Does my child know that AI is a probability machine, not a brain?', pillar: 'Pillar 1' },
  { q: 'Does my child verify what AI tells her before she trusts it?', pillar: 'Pillar 1–2' },
  { q: 'Does my child know what to never share with an AI tool?', pillar: 'Pillar 2' },
  { q: 'Does my child use AI to think harder, not less?', pillar: 'Pillar 3' },
  { q: 'Does my child know which capacities AI cannot do for her?', pillar: 'Pillar 6' },
];

export default function FiveQuestionsPH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e6e6e6]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: questions */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
            >
              The five questions every parent should ask about their child and AI
            </motion.h2>

            <div className="space-y-3 mb-6">
              {questions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * idx }}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-[#e6e6e6] px-5 py-4 shadow-sm"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-terracotta text-white font-display font-bold text-sm mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-base text-charcoal/90 font-medium leading-snug">{item.q}</p>
                    <span className="inline-block mt-1 font-display text-sm font-extrabold tracking-wider text-[#aac191] uppercase">{item.pillar}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/resources/parents-guide"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#aac191] text-white font-sans font-semibold text-xl shadow-lg shadow-[#aac191]/30 hover:bg-[#96b17c] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Get the free Parents Guide to AI (12 pages)
              </Link>
            </motion.div>
          </div>

          {/* Right: explanation */}
          <div className="space-y-4">
            

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-terracotta/10 border border-terracotta/20 p-5"
            >
              <div className="font-display text-[20px] font-extrabold tracking-wider text-terracotta uppercase mb-2">In the free Parents Guide</div>
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed">
                The full version of these five questions, with conversation prompts for each, is in the free 12-page Parents Guide to AI. No email gate. PDF downloads on submit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-white border border-[#e6e6e6] p-5"
            >
              <div className="font-display text-[20px] font-extrabold tracking-wider text-[#aac191] uppercase mb-2">Quick parent check-in</div>
              <p className="font-sans text-lg text-charcoal/80 italic leading-relaxed">
                "What did you use AI for this week – and what did you decide <em>not</em> to use it for?"
              </p>
              <p className="font-sans text-sm text-charcoal/50 mt-2">Ask this every Friday. That conversation is the curriculum.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/images/fivequestions.png"
                alt="Five questions every parent should ask about their child and AI"
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

