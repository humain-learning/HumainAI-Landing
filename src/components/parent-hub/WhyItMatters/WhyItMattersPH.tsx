'use client';

import React from 'react';
import { motion } from 'motion/react';

const milestones = [
  { year: 'NEP 2020', text: 'Names digital fluency as foundational' },
  { year: 'NCF 2023', text: 'Structures K-12 with AI in learning' },
  { year: 'CBSE 417', text: 'AI as a subject from Class 9 onwards' },
  { year: 'DPDP 2023', text: 'Data rights for every Indian child' },
];

export default function WhyItMattersPH() {
  return (
    <section id="why-ai" className="relative w-full bg-white py-8 md:py-12 border-t border-[#e6e6e6]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-charcoal mb-5"
            >
              Why AI literacy is the new reading and numeracy for Indian children
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-4"
            >
              Four years ago, ChatGPT did not exist. Today your child uses AI in homework helpers, in YouTube
              recommendations, in the way her school groups her into classes, in the apps she uses for
              entrance-exam practice. Whether you taught her or not, she is using AI. The question is whether she is
              using it consciously.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-4"
            >
              The Indian school system has accepted that AI literacy belongs in the curriculum. Most Indian parents
              have not yet been told what that actually means for their child.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed"
            >
              <strong className="text-terracotta font-semibold">At Humain</strong>, we wrote this hub for the parent who is asking the right question and getting only
              marketing in return. Below is the framework, the safety guidance, the data rights you have under the
              DPDP Act, the five questions every parent should ask, and the answers we give our own children.
            </motion.p>
          </div>

          {/* Right: Policy timeline cards */}
          <div className="space-y-3">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-[#e6e6e6] px-5 py-4 shadow-sm"
              >
                <div className="flex-shrink-0 rounded-xl bg-sage px-3 py-1.5">
                  <span className="font-display text-xs font-extrabold text-white tracking-wide">{m.year}</span>
                </div>
                <p className="font-sans text-sm text-charcoal/80 font-medium">{m.text}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl bg-terracotta/10 border border-terracotta/20 px-5 py-4"
            >
              <p className="font-sans text-sm text-charcoal/80 italic">
                "ICSE has added AI electives. The system has accepted AI literacy belongs in the curriculum.
                Most parents have not been told what this means for their child."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

