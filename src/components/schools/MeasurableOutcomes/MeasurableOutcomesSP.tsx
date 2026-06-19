'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function MeasurableOutcomesSP() {
  const categories = [
    {
      title: "Student outcomes (CBSE pilot, Grade 6-8, n=480)",
      items: [
        { strong: "Critical evaluation", text: "Majority of pilot learners could identify three or more AI errors in a controlled task after eight weeks." },
        { strong: "Project completion", text: "Eighty percent of pilot students built and presented a working AI project by end of Term 2." },
        { strong: "Pillar progression", text: "Five out of six pillar measures showed improvement above the school's baseline assessment." },
        { strong: "Spillover to other subjects", text: "Class teachers report higher quality of class discussion across non-AI subjects too." }
      ]
    },
    {
      title: "Teacher outcomes (Cohort 1, September 2025, n=124)",
      items: [
        { strong: "Re-teaching rate", text: "Ninety-two percent of certified teachers re-taught their Humain module within 30 days of finishing the certification." },
        { strong: "Parent communication", text: "Teachers report increased confidence in addressing parent questions about AI." },
        { strong: "School brand", text: "Two of five participating schools added a \"Humain-certified teacher\" line to their school admissions material." }
      ]
    },
    {
      title: "Parent outcomes",
      items: [
        { strong: "Aggregate rating", text: "4.5 stars from 200-plus parents across pilot cohorts. Independent verification at /reviews." },
        { strong: "Retention to next year", text: "Eighty-four percent of pilot parents continued from the pilot term into the next academic year." },
        { strong: "Compliance", text: "No DPDP-related complaints received during the pilot window." }
      ]
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-grey">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Measurable outcomes from a Humain AI literacy programme in CBSE and ICSE schools
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            Below are the outcomes our pilot schools have measured. These are not modelled estimates. They are observed in four CBSE schools in Delhi-NCR and Bengaluru and one ICSE school in Pune, between October 2025 and March 2026. The full pilot methodology is at /research/pilot-2025. Outcomes are illustrative and your school's results will depend on implementation quality, existing staff capacity, and student baseline.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-start mb-16">
          
          {/* Text Content */}
          <div className="flex-1 w-full space-y-12">
            {categories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <h3 className="font-display text-xl font-bold text-terracotta mb-6 border-b border-grey pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-sage mt-2"></span>
                      <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                        <strong className="text-charcoal">{item.strong}:</strong> {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Visual Content */}
          <div className="hidden lg:flex flex-1 w-full flex-col items-center justify-center sticky top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-[500px] bg-grey/25 rounded-3xl p-8 border border-grey shadow-sm flex flex-col items-center"
            >
              
              <div className="w-full flex flex-col gap-3">
                <Link 
                  href="/research/pilot-2025"
                  className="inline-flex items-center text-sage font-semibold hover:text-terracotta transition-colors group text-sm"
                >
                  Read the full pilot methodology
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  href="/research/teacher-cohort-1"
                  className="inline-flex items-center text-sage font-semibold hover:text-terracotta transition-colors group text-sm"
                >
                  Read the teacher cohort methodology
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
