'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function TeacherCertificationSP() {
  const structure = [
    { label: "Duration", text: "Twelve weeks, part-time, designed to fit alongside your teachers' existing teaching load." },
    { label: "Format", text: "Live online cohorts, 200-plus certified Humain teachers across India." },
    { label: "Curriculum", text: "All six pillars of the framework. Classroom practice for each. Assessment design. Parent communication. Data handling compliance. Co-learning facilitation." },
    { label: "Output", text: "A recognised certificate. A classroom-ready unit plan mapped to NEP 2020 and NCF 2023. Lifetime access to the certified-teacher community." }
  ];

  const routes = [
    {
      title: "Individual sponsorship",
      desc: "Your school sponsors the certification for one or two teachers per academic year. Cost-effective for small schools.",
      price: "Rs. 35,000 - Rs. 50,000 per teacher"
    },
    {
      title: "Closed cohort",
      desc: "Your school sponsors a cohort of 6-15 teachers as a closed-batch group. Cohort runs at a discount and on your academic calendar.",
      price: "Rs. 28,000 - Rs. 40,000 per teacher"
    },
    {
      title: "School-wide certification",
      desc: "Your school certifies all subject teachers (typically 30-80 teachers) over 18-24 months. Discounted bulk rate. Includes train-the-trainer track so the most capable certified teachers can lead in-house refreshers.",
      price: "Rs. 22,000 - Rs. 32,000 per teacher"
    }
  ];

  return (
    <section className="relative w-full bg-[#f9faf7] py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Teacher certification in AI literacy: training your existing CBSE and ICSE teachers
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            The teacher capacity gap is the single largest implementation risk in any school AI programme. The Humain Teacher Certification is the answer your school does not yet have to deliver itself.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full mb-16">
          
          {/* Left: Programme Structure */}
          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-[#e8efe0] shadow-sm h-full"
            >
              <h3 className="font-display text-2xl font-bold text-[#5e714e] mb-6">
                Programme structure
              </h3>
              <ul className="space-y-6">
                {structure.map((item, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="font-sans font-bold text-charcoal whitespace-nowrap sm:w-28 flex-shrink-0">
                      {item.label}:
                    </span>
                    <span className="font-sans text-charcoal/80">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Routes and Costs */}
          <div className="flex-1 w-full flex flex-col gap-6">
            {routes.map((route, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white rounded-2xl p-6 border border-[#e8efe0] shadow-sm relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-3">
                  <h3 className="font-display text-xl font-bold text-terracotta">
                    {route.title}
                  </h3>
                  <div className="bg-[#fdfaf6] border border-[#e7a572]/30 text-terracotta text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {route.price}
                  </div>
                </div>
                <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                  {route.desc}
                </p>
              </motion.div>
            ))}
            <p className="text-xs text-charcoal/50 italic mt-2">
              * Indicative ranges (final quote is per school against board, enrolment, and grade range)
            </p>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            href="/for-teachers"
            className="inline-flex items-center text-[#5e714e] font-semibold hover:text-[#4a5a3e] transition-colors group text-sm md:text-base"
          >
            See the full Teacher Certification programme
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
