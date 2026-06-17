'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function LearnerOutcomesSP() {
  const pillars = [
    {
      num: 1,
      name: "AI Foundations",
      outcomes: "By end of Foundational stage (Class 2): the student can identify a pattern and explain that machines recognise patterns differently from humans. By end of Preparatory (Class 5): the student can describe in her own words what training data is. By end of Middle (Class 8): the student can articulate why a language model can be confident and wrong at the same time. By end of Secondary (Class 12): the student can read a model card and critique it."
    },
    {
      num: 2,
      name: "Ethics, Safety and Responsibility",
      outcomes: "By end of Foundational: the student can name three things she would not share with a stranger or with an AI tool. By end of Preparatory: the student can recognise a deepfake when she sees one. By end of Middle: the student can explain what the DPDP Act 2023 protects in her data. By end of Secondary: the student can argue both sides of a real AI ethics case from Indian public discourse and arrive at a defensible position."
    },
    {
      num: 3,
      name: "Learning with AI",
      outcomes: "By end of Foundational: the student can ask a clarifying question when she does not understand. By end of Preparatory: the student uses NotebookLM with a parent or teacher to study from class notes. By end of Middle: the student independently uses ChatGPT and Gemini to generate practice questions for her syllabus. By end of Secondary: the student uses three or more AI tools in concert for board exam preparation and can defend the methodology."
    },
    {
      num: 4,
      name: "Creating with AI",
      outcomes: "By end of Foundational: the student creates a simple AI-generated picture for a class project, with her teacher in the room. By end of Preparatory: the student creates a short AI-generated story with attribution. By end of Middle: the student produces a multi-format creative artefact (image plus audio plus text) for a school exhibition. By end of Secondary: the student ships a one-minute AI-generated video commercial as a module deliverable."
    },
    {
      num: 5,
      name: "Agents and Automation",
      outcomes: "By end of Foundational: not applicable at this stage. By end of Preparatory: the student understands the concept of automation through a real example (a smart-home device or a school attendance system). By end of Middle: the student builds a simple automation using a zero-code tool with teacher supervision. By end of Secondary: the student builds and pitches a personalised AI Study Agent at the E-Cell IIT Kharagpur Hackathon."
    },
    {
      num: 6,
      name: "Human Intelligence in the Age of AI",
      outcomes: "By end of Foundational: the student can name a feeling that she had and a feeling that a classmate had. By end of Preparatory: the student keeps a weekly reflection journal in any format. By end of Middle: the student names a specific situation in which she changed her mind about something and why. By end of Secondary: the student can articulate which capacities AI cannot do for her and why those capacities matter for the career she wants. No other AI literacy framework names this pillar. We have made it the spine of ours."
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            The Humain AI Literacy Framework: six pillars mapped to measurable learner outcomes by grade band
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            Below is each of the six pillars expressed as a measurable learner outcome at the end of each NCF 2023 stage. This is the format your curriculum leadership will want to take into the design conversation. The full 32-page framework reference is at humainlearning.ai/framework.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx % 2) }}
              className="relative overflow-hidden bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Watermark number */}
              <div className="absolute -top-12 -right-6 font-display font-black text-[180px] leading-none text-charcoal opacity-[0.03] select-none pointer-events-none transition-transform group-hover:scale-110 duration-500">
                {pillar.num}
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#5e714e] mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#e8efe0] text-[#5e714e] font-display font-bold text-sm">
                    {pillar.num}
                  </span>
                  {pillar.name}
                </h3>
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed">
                  {pillar.outcomes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            href="/framework"
            className="inline-flex items-center text-terracotta font-semibold hover:text-[#d6925c] transition-colors group text-sm md:text-base"
          >
            Read the full Humain AI Literacy Framework (32-page PDF)
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
