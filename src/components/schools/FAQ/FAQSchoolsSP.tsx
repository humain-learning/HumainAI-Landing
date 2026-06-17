'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSchoolsSP() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. How long does it take from initial conversation to fully scaled student rollout?",
      a: "Eight to twelve months for a single-campus school. Fourteen to eighteen months for a multi-campus chain. The bottleneck is teacher training capacity, not platform readiness. Section 11 of this page has the full phase structure."
    },
    {
      q: "2. What does the engagement cost?",
      a: "Pricing is quote-based against enrolment, board mix, and grade range. Indicative annual programme cost ranges from approximately Rs. 6 lakh for a small school running a single board to Rs. 75 lakh for a large multi-board chain. Section 12 has indicative bands. We provide a written quote within 5 business days of the Step 1 demo."
    },
    {
      q: "3. We already have a CS curriculum. How does this integrate?",
      a: "The Humain framework is not a CS curriculum. It is a literacy framework that maps onto CS class time where you already teach AI, and onto English, Social Studies, Art, and Pastoral Care class time where AI literacy belongs but is not currently taught. Most pilot schools deliver Humain across 6-8 subject periods per week without replacing any existing CS content."
    },
    {
      q: "4. What is the DPDP Act 2023 exposure my school takes on by adopting Humain?",
      a: "Less than your school takes on by adopting most free AI tools. Humain operates as a data processor under a signed Data Processing Agreement aligned to the DPDP Act 2023. All children's data is stored on Indian servers. Verifiable parental consent is collected through the parent portal. Section 7 of this page is the deep-dive. We have not yet had a school counsel decline to sign the DPA."
    },
    {
      q: "5. Can my school customise the framework for our pedagogy?",
      a: "Yes. The six pillars are non-negotiable; the framework would lose coherence if any pillar were dropped. The delivery within each pillar is heavily customisable. Schools running Montessori-influenced lower primary, IB Middle Years Programme, or strong religious-studies traditions have all customised Humain delivery without compromising the framework structure. We facilitate the customisation during Step 2 workshop."
    },
    {
      q: "6. We are a state-board school. Do you support our board?",
      a: "Currently confirmed mappings: Maharashtra State Board, Tamil Nadu State Board, Karnataka SSLC. In active development: Gujarat, Telangana, West Bengal. State boards with skill-subject frameworks already published have priority. For other state boards, we will build a custom mapping during Step 2 at no additional cost during the engagement window."
    },
    {
      q: "7. How do we get our teachers trained without disrupting their existing teaching load?",
      a: "The Humain Teacher Certification is twelve weeks, part-time, designed to fit alongside existing teaching. Live online cohorts run in evenings and on Saturdays. Section 8 of this page covers the three routes: individual sponsorship, closed cohort, school-wide certification. The 4-week abbreviated pilot training is sufficient for the 14-week pilot."
    },
    {
      q: "8. What if the pilot does not show the outcomes we want?",
      a: "Then we recommend not proceeding to scale. Three of the schools we ran pilots with did not proceed; we facilitated the clean separation in each case. The pilot cost is fully creditable if you proceed to scale, but is not refundable if you do not. The decision criteria are agreed before the pilot starts, not after."
    },
    {
      q: "9. Can we speak to a school you currently work with?",
      a: "Yes, after Step 1. Reference calls are arranged with two principals who have signed peer-reference releases. The conversation is principal-to-principal, with no Humain team member on the call. We release the reference contact after the Step 1 demo and an NDA, to protect our reference principals' time."
    },
    {
      q: "10. What happens to our data if we decide to discontinue?",
      a: "Children's data is returned to your school or deleted within 30 days of discontinuation notice, per the Data Processing Agreement. Aggregated, anonymised pilot data may be retained for our research publications (under /research/*) with prior school consent and full anonymisation. No personally identifying data is retained."
    },
    {
      q: "11. Who at Humain will my school work with after the contract is signed?",
      a: "A named senior member of the Humain team is assigned to your school account, typically a former principal or academic head with 10-plus years of school leadership experience. The same person stays with your school across the engagement lifecycle. Your school does not get rotated through a customer success queue."
    },
    {
      q: "12. How do we begin?",
      a: "Book a thirty-minute principal-led demo through this page. We respond within 1 business day to schedule. We expect the demo to be attended by you, your academic head, and one senior subject head. The written follow-up from the demo is the document that goes to your trustees for Phase 1 approval."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#f9faf7] py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-16">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            AI literacy programme for schools: 12 questions principals and academic heads ask
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * Math.min(idx, 10) }}
              className="bg-white border border-[#e8efe0] rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-[#fdfaf6] transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="font-display font-bold text-lg md:text-xl text-charcoal">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#e8efe0] transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-[#5e714e] border-[#5e714e] text-white' : 'text-terracotta bg-white'}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 font-sans text-base md:text-lg text-charcoal/80 leading-relaxed border-t border-[#e8efe0] bg-[#f9faf7]">
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
