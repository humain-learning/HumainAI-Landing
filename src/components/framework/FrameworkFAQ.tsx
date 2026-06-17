'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FrameworkFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the Humain AI Literacy Framework?",
      a: "The Humain AI Literacy Framework is a six-pillar curriculum that defines what K-12 students in India need to know, do, and question about artificial intelligence. It is built on the OECD, UNESCO, and EU AI literacy frameworks, and aligned with India's NEP 2020, NCF 2023, CBSE, and ICSE curricula."
    },
    {
      q: "Who wrote the Humain AI Literacy Framework?",
      a: "The framework was co-authored by Manit Jain (M.Ed Harvard Graduate School of Education, co-founder Heritage Xperiential Learning Schools) and Ankur Dahiya (Delhi Technological University, Program Head at Humain Learning AI). It was reviewed by Dr. Tapaswini Sahu, PhD Educational Psychology JNU, M.Phil Cambridge."
    },
    {
      q: "Is the framework free to download?",
      a: "Yes. The 32-page PDF is free to download in English and Hindi with no email gate and no follow-up communications unless you choose to subscribe. It is published under a Creative Commons Attribution 4.0 International licence."
    },
    {
      q: "How is the Humain framework different from the OECD, UNESCO, and EU frameworks?",
      a: "The global frameworks provide the academic foundation. The Humain framework adds three things they do not include: Pillar 6 (Human Intelligence in the Age of AI, covering emotional intelligence, metacognition, and curiosity-and-craft), a full India-specific curriculum alignment (CBSE, ICSE, NEP 2020, NCF 2023, DPDP Act 2023), and a bilingual (English and Hindi) grade-band outcome structure for the four NCF 2023 stages."
    },
    {
      q: "What age group is the framework designed for?",
      a: "The framework covers all four NCF 2023 stages: Foundational (Class 1-2, ages 6-8), Preparatory (Class 3-5, ages 8-11), Middle (Class 6-8, ages 11-14), and Secondary (Class 9-12, ages 14-18). Each pillar has differentiated learner outcomes for each stage."
    },
    {
      q: "Is the framework aligned with the CBSE AI syllabus?",
      a: "Yes. Pillars 1 (AI Foundations), 4 (Creating with AI), and 5 (Agents and Automation) align directly with the CBSE AI subject codes 417 (Class 9-10) and 843 (Class 11-12). The Humain capstone assessment artefact can be submitted as the CBSE AI practical component without modification."
    },
    {
      q: "Does the framework address India's DPDP Act 2023?",
      a: "Yes. Pillar 2 (Ethics, Safety and Responsibility) includes a dedicated section on children's data rights under the DPDP Act 2023. Students learn what verifiable parental consent means, what data fiduciaries are obliged to protect, and how to exercise their rights under the Act."
    },
    {
      q: "Can the framework be used by schools without adopting the Humain Champs programme?",
      a: "Yes. The framework is a public document and may be used by any school, teacher, or parent independently. The Humain Champs programme is Humain's own structured delivery of the framework over 16 hours, but schools can implement the framework using their own teachers and resources, with or without Humain's support."
    },
    {
      q: "What is Pillar 6 and why is it unique?",
      a: "Pillar 6 is Human Intelligence in the Age of AI. It covers the three capacities AI cannot replicate: emotional intelligence (Goleman, 1995), metacognition (Flavell, 1979), and curiosity-and-craft (Csikszentmihalyi, 1996). No other AI literacy framework we are aware of names this as a standalone pillar. We made it the spine of our framework because every other competency eventually bottoms out into a human choice, and that choice requires a human who knows herself."
    },
    {
      q: "How long does it take a student to complete the Humain framework?",
      a: "The Humain Champs programme covers all six pillars in 16 hours of live instruction over 8 weeks. Students who self-study using the PDF can work through the framework at their own pace. The grade-band tables provide a structure for self-directed study at each NCF 2023 stage."
    },
    {
      q: "Is the framework available in languages other than English and Hindi?",
      a: "The current published versions are English and Hindi. Translations into Tamil, Kannada, Telugu, Marathi, Bengali, and Gujarati are planned for 2026. Schools requiring translations for state-board contexts can contact the Humain team for a timeline."
    },
    {
      q: "How does the Humain framework connect to the E-Cell IIT Kharagpur Hackathon?",
      a: "The Humain Champs capstone project—a personalised AI Study Agent built by the student in Pillar 5—is the submission for the E-Cell IIT Kharagpur Hackathon. Completion of the Humain Champs programme results in a jointly issued E-Cell IIT Kharagpur and Humain Learning AI certificate."
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12">

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1e3f] mb-4"
          >
            Frequently asked questions about the Humain AI Literacy Framework
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * idx }}
              className="bg-white rounded-2xl border border-[#e8efe0] shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-display font-bold text-lg text-[#0a1e3f] pr-4 leading-snug">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#e8efe0] flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-[#5e714e] border-[#5e714e] rotate-45' : 'bg-white group-hover:border-[#5e714e]'}`}>
                  <svg className={`w-4 h-4 transition-colors ${openIndex === idx ? 'text-white' : 'text-charcoal/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-7 pb-6 font-sans text-base text-charcoal/80 leading-relaxed border-t border-[#f0f0f0] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
