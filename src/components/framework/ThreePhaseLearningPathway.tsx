'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function ThreePhaseLearningPathway() {
  const phases = [
    {
      num: "01",
      label: "Assess",
      title: "Where are you now?",
      desc: "Begin with our free online diagnostic. Students answer 20 questions that measure their baseline across all six pillars. Parents receive a personalised AI Literacy Report Card showing strengths, gaps, and the recommended starting point.",
      tools: ["Free diagnostic (20 mins)", "AI Literacy Report Card", "Personalised pillar gap map"],
      cta: { label: "Take the free diagnostic", href: "/diagnostic" },
      color: "border-terracotta",
      badge: "bg-terracotta/10 text-terracotta"
    },
    {
      num: "02",
      label: "Learn",
      title: "Build all six pillars.",
      desc: "Humain Champs is a 16-hour live programme delivered in small cohorts over 8 weeks. Six modules map to the six pillars. Sessions run twice a week, 2 hours each, with a live instructor and a maximum of 15 students per cohort. The programme concludes with a capstone project: a personalised AI Study Agent built by the student using professional tools.",
      tools: ["16 hours of live instruction", "Max 15 students per cohort", "E-Cell IIT Kharagpur certificate"],
      cta: { label: "Enroll in Humain Champs (Rs. 11,800)", href: "https://pages.razorpay.com/humainchamps" },
      color: "border-[#5e714e]",
      badge: "bg-[#5e714e]/10 text-[#5e714e]"
    },
    {
      num: "03",
      label: "Apply",
      title: "Use AI in the real world.",
      desc: "After Humain Champs, students join the Humain alumni network and receive access to the Humain Champs WhatsApp community, monthly AI tool briefings, the E-Cell IIT Kharagpur Hackathon invitation, and early access to new Humain programmes for Class 11 and 12.",
      tools: ["Alumni network access", "Monthly AI tool briefings", "Hackathon invitation"],
      cta: { label: "Learn about the Humain alumni programme", href: "/alumni" },
      color: "border-[#d4af37]",
      badge: "bg-[#d4af37]/10 text-[#d4af37]"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1e3f] mb-4"
          >
            The three-phase AI literacy learning pathway: Assess, Learn, Apply
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto"
          >
            The Humain framework is a document. The pathway is how you act on it.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-terracotta via-[#5e714e] to-[#d4af37] opacity-20 z-0" />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * idx }}
              className={`flex-1 flex flex-col bg-[#f9faf7] rounded-3xl p-8 border-t-4 ${phase.color} border border-[#e8efe0] shadow-sm hover:shadow-md transition-shadow z-10`}
            >
              {/* Phase badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`inline-block px-3 py-1 rounded-full font-sans font-bold text-xs uppercase tracking-wider ${phase.badge}`}>
                  Phase {phase.num}
                </span>
                <span className="font-display font-extrabold text-xl text-charcoal/20">{phase.label}</span>
              </div>

              <h3 className="font-display text-2xl font-extrabold text-[#0a1e3f] mb-4">{phase.title}</h3>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-6 flex-grow">{phase.desc}</p>

              {/* Tools list */}
              <ul className="space-y-2 mb-8">
                {phase.tools.map((tool, i) => (
                  <li key={i} className="flex items-center gap-2 font-sans text-sm text-charcoal/70">
                    <svg className="w-4 h-4 text-[#5e714e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {tool}
                  </li>
                ))}
              </ul>

              <Link
                href={phase.cta.href}
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-full bg-white border-2 border-[#e8efe0] text-[#0a1e3f] font-sans font-bold text-sm hover:border-[#5e714e] hover:text-[#5e714e] transition-all"
              >
                {phase.cta.label}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

