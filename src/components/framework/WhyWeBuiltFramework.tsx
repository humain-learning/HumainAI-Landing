'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function WhyWeBuiltFramework() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left: Text Content */}
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold leading-[1.15] text-[#0a1e3f] mb-6"
          >
            Why a sixth framework? Because no existing AI literacy framework was built for India's classrooms.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium space-y-5"
          >
            <p>
              When we started Humain, we didn't want to write a new framework. We looked closely at the OECD's technical rigor, UNESCO's competency focus, and the EU's ethical guidelines. They are excellent pieces of scholarship. But a direct translation into an Indian classroom fails almost immediately.
            </p>
            <p>
              Global frameworks do not account for the four-stage structure of the NCF 2023 (Foundational to Secondary). They do not map to the specific practical-exam requirements of CBSE and ICSE boards. They are not built for bilingual delivery, nor do they address the stringent requirements of India's DPDP Act 2023 for children's data. Most importantly, they do not account for the unique, high-stakes relationship Indian parents have with education and technology.
            </p>
            <p>
              We needed a framework that could survive contact with a Class 8 classroom in Delhi. To build it, we relied on our two decades of experience running Indian K-12 schools. The pedagogical foundation is the heritage of experiential learning pioneered at Heritage Xperiential Learning Schools. The result is a synthesis: global rigor, translated into an Indian reality, and tested in live classrooms.
            </p>
          </motion.div>
        </div>

        {/* Right: Pull Quote */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-shrink-0 w-full md:w-80 lg:w-96 bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] relative"
        >
          <svg className="absolute top-6 left-6 w-10 h-10 text-[#d4af37]/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="relative z-10 pt-6">
            <p className="font-display text-xl font-bold text-charcoal leading-snug italic mb-6">
              "We did not invent six pillars to make a logo. We arrived at six because every major framework we studied (OECD, UNESCO, the European Commission, MIT Media Lab) eventually circles the same six capacities, but none of them puts them in one place for K-12. So we did."
            </p>
            <footer className="font-sans text-sm text-charcoal/70">
              <span className="font-bold block text-charcoal">Manit Jain</span>
              Co-founder, Humain Learning AI
            </footer>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
