'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const benefits = [
  { icon: 'robot', title: 'An AI agent.', desc: 'A working AI agent personalised to her grade, board (CBSE / ICSE / state), and subjects. She builds it herself and keeps it after the course.' },
  { icon: 'certificate', title: 'E-Cell IIT Kharagpur certificate.', desc: 'Participation certificate from the entrepreneurship cell of India\'s oldest IIT.' },
  { icon: 'tools', title: 'Fifteen-plus real AI tools.', desc: 'Hands-on use of ChatGPT, Gemini, NotebookLM, Midjourney, Canva AI, Krea, ElevenLabs, Runway, Suno, n8n, and more.' },
  { icon: 'users', title: 'Small and interactive batches.', desc: 'Small enough that the instructor knows your child by name.' },
];

export default function HumainChampsPitchPH() {
  return (
    <section id="courses" className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: text + price */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-4"
            >
              Humain Champs: the AI literacy course for your Class 8 to 12 child
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-5"
            >
              Humain Champs is the live implementation of the Humain AI Literacy Framework for students in Class 8
              to Class 12. Fifteen hours of live instruction. Six modules covering all six pillars. Eight sessions.
              A capstone AI agent your child builds and keeps forever. An E-Cell IIT Kharagpur Hackathon certificate.
              Small and interactive batches.
            </motion.p>

            {/* Price box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-[#e8efe0] p-5 mb-5 shadow-sm"
            >
              <div className="font-display text-[10px] font-extrabold tracking-wider text-[#aac191] uppercase mb-3">Price &amp; Enrollment</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display text-4xl font-black text-charcoal">Rs. 14,750</span>
                <span className="font-sans text-sm text-charcoal/50">for the full course</span>
              </div>
              <Link
                href="https://pages.razorpay.com/humainchamps"
                target="_blank"
                className="flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-terracotta text-white font-sans font-bold text-sm shadow-lg shadow-terracotta/30 hover:bg-[#d6925c] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Enroll your child in Humain Champs (Rs. 14,750)
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/humain-champs"
                className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm"
              >
                View cohort dates
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: benefits */}
          <div className="space-y-3">
            <div className="font-display text-xs font-bold tracking-[0.15em] text-[#aac191] uppercase mb-2">What your child receives</div>
            {benefits.map((item, idx) => {
              const getIcon = (iconType: string) => {
                switch(iconType) {
                  case 'robot':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 5h6m-3 6h.01M8 15h8M5 9h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V7a2 2 0 012-2h6a2 2 0 012 2v2" />
                      </svg>
                    );
                  case 'certificate':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    );
                  case 'tools':
                    return (
                      <svg className="w-5 h-5 text-[#aac191]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    );
                  case 'users':
                    return (
                      <svg className="w-5 h-5 text-[#e7a572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 8.646 4 4 0 010-8.646M12 16H8m0 0a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4m-4 0h8" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * idx }}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-[#e8efe0] px-5 py-4 shadow-sm"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-charcoal">{item.title}</p>
                    <p className="font-sans text-sm text-charcoal/70 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { v: '15hrs', l: 'Live instruction' },
                { v: '8', l: 'Sessions' },
                { v: '15+', l: 'AI tools' },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-[#aac191]/10 border border-[#aac191]/20 p-3 text-center">
                  <div className="font-display text-lg font-extrabold text-[#aac191]">{s.v}</div>
                  <div className="font-sans text-[10px] text-charcoal/60 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
