'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function PricingModelSP() {
  const bands = [
    { size: "Small school (under 500 students)", single: "Rs. 6 lakh to Rs. 12 lakh per year", multi: "Rs. 8 lakh to Rs. 16 lakh per year" },
    { size: "Medium school (500 to 1,500 students)", single: "Rs. 12 lakh to Rs. 28 lakh per year", multi: "Rs. 18 lakh to Rs. 36 lakh per year" },
    { size: "Large school (1,500 to 3,500 students)", single: "Rs. 28 lakh to Rs. 55 lakh per year", multi: "Rs. 38 lakh to Rs. 75 lakh per year" },
    { size: "Multi-campus chain (3,500+ students total)", single: "Quoted per campus, scale discount applied", multi: "Quoted per campus, scale discount applied" }
  ];

  const includes = [
    "Full Humain Teacher Certification for participating teachers.",
    "Platform access for all enrolled students on the programme.",
    "Quarterly check-ins and half-yearly curriculum review.",
    "Data Processing Agreement and DPDP compliance support.",
    "Parent communication templates in English and Hindi.",
    "Customised reports for trustees and board."
  ];

  const separates = [
    "Initial pilot (Rs. 4,50,000 to Rs. 8,00,000, credited if you proceed to scale).",
    "On-site Step 2 curriculum-mapping workshop (travel and accommodation only).",
    "On-site Step 3 teacher training week (travel and accommodation only).",
    "Optional custom modules outside the standard six pillars."
  ];

  return (
    <section id="pricing" className="relative w-full bg-[#f9faf7] py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Institutional pricing for AI literacy programmes in Indian schools
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            Pricing is quote-based, against three variables: enrolment, board mix (CBSE / ICSE / state / IB), and grade range (Class 3 to 7, Class 8 to 12, or full Class 3 to 12). We do not publish a fixed price list because no two schools we have worked with have identical needs. We do publish indicative bands so academic heads can begin board-level conversations.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full w-full max-w-5xl overflow-x-auto bg-white rounded-3xl border border-[#e8efe0] shadow-sm mb-16"
        >
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#f9faf7] border-b border-[#e8efe0]">
                <th className="p-6 font-display text-lg font-bold text-terracotta">School size</th>
                <th className="p-6 font-display text-lg font-bold text-[#5e714e]">Single board</th>
                <th className="p-6 font-display text-lg font-bold text-[#5e714e]">Multi-board chain</th>
              </tr>
            </thead>
            <tbody>
              {bands.map((band, idx) => (
                <tr key={idx} className="border-b border-[#e8efe0] last:border-none hover:bg-[#f9faf7]/50 transition-colors">
                  <td className="p-6 font-sans text-base text-charcoal font-bold">{band.size}</td>
                  <td className="p-6 font-sans text-base text-charcoal/80">{band.single}</td>
                  <td className="p-6 font-sans text-base text-charcoal/80">{band.multi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-charcoal mb-6 border-b border-[#e8efe0] pb-3">
              What the annual fee includes
            </h3>
            <ul className="space-y-4">
              {includes.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[#5e714e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-sans text-base text-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-display text-2xl font-bold text-terracotta mb-6 border-b border-[#e8efe0] pb-3">
              What is quoted separately
            </h3>
            <ul className="space-y-4">
              {separates.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0 mt-2"></span>
                  <span className="font-sans text-base text-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-4xl bg-[#fdfaf6] border border-[#e7a572]/20 rounded-2xl p-8"
        >
          <h3 className="font-display text-xl font-bold text-terracotta mb-3">
            Procurement support
          </h3>
          <p className="font-sans text-base text-charcoal/80 leading-relaxed">
            We have worked with school finance teams to support trustee budget approval, PO generation, GST classification, and the typical 30/60/90 invoicing schedules used by Indian schools. The full Humain GST registration and PO acceptance terms are at <Link href="/procurement" className="text-terracotta hover:underline font-bold">/procurement</Link>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
