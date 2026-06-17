'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function DPDPComplianceSP() {
  const obligations = [
    {
      title: "Obligation 1. Verifiable parental consent",
      desc: "Schools running any AI programme involving children must obtain verifiable parental consent before processing children's data. A click-through tick box on a child's screen does not satisfy the standard. The Humain platform collects verifiable consent through a parent-portal flow that we have documented for school counsel review."
    },
    {
      title: "Obligation 2. Purpose limitation and minimisation",
      desc: "Children's data may be processed only for the educational purpose stated. The Humain platform names every purpose explicitly in the privacy policy and limits data collection to the minimum required for each pillar's learning objectives. Your school's privacy policy can reference the Humain policy or adopt its language with attribution."
    },
    {
      title: "Obligation 3. Data residency and security",
      desc: "All children's data on the Humain platform is stored on Indian servers, regardless of the AI tool in use. Cross-border data transfer is restricted under the Act, and Humain does not transfer children's data out of India. Security audit reports are available on request under NDA."
    },
    {
      title: "Obligation 4. Right to access, correct, and erase",
      desc: "Parents have the right to access, correct, and erase their child's data. The Humain platform implements these rights through the parent portal. Standard turnaround under the Act is 30 days; typical Humain turnaround is 5 business days. Your school is the data fiduciary; Humain operates as data processor under a Data Processing Agreement."
    },
    {
      title: "Data Processing Agreement template",
      desc: "A Data Processing Agreement (DPA) template aligned to the DPDP Act 2023 is included in the engagement package and can be reviewed by your school counsel during Step 1. The DPA clarifies fiduciary and processor roles, data residency, sub-processor approval, breach notification, and audit rights. We have not yet had a school counsel decline to sign the DPA."
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            DPDP Act 2023 compliance for schools running AI programmes
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            Indian schools are data fiduciaries under the DPDP Act 2023 when they collect, store, or process children's personal data. Any AI programme your school runs needs to be compliant by design, not retrofitted after a parental complaint or a regulator inquiry. The four obligations that matter most are below. This is not legal advice. We recommend your school counsel review any implementation against these obligations.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {obligations.map((ob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className={`bg-[#f9faf7] rounded-2xl p-8 border border-[#e8efe0] ${idx === 4 ? 'md:col-span-2' : ''}`}
            >
              <h3 className="font-display text-xl font-bold text-[#5e714e] mb-3">
                {ob.title}
              </h3>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                {ob.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-terracotta text-white rounded-3xl p-8 md:p-10 shadow-xl shadow-terracotta/20 relative overflow-hidden w-full max-w-4xl"
        >
          {/* Background flourish */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-[#df935c] blur-3xl opacity-50 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <img 
              src="/assets/images/e3.png" 
              alt="Dr. Tapaswini Sahu"
              className="w-16 h-16 rounded-full border-2 border-white mb-6 object-cover"
            />
            <p className="font-display text-xl md:text-2xl font-bold leading-snug tracking-tight mb-6">
              "Most schools we talk to underestimate the DPDP exposure they already have, and overestimate the exposure that adding AI literacy creates. A well-designed programme reduces both. A poorly-designed programme adds to both."
            </p>
            <div>
              <p className="font-sans font-bold text-sm md:text-base uppercase tracking-wider mb-1">Dr. Tapaswini Sahu</p>
              <p className="font-sans text-xs md:text-sm text-white/80">Academic Director, Humain Learning AI. PhD Educational Psychology JNU, M.Phil Cambridge.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
