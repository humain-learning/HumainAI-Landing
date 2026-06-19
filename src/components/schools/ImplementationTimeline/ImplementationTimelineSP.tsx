'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function ImplementationTimelineSP() {
  const phases = [
    {
      title: "Phase 1: Setup (Months 1-2)",
      items: [
        "Principal-led demo.",
        "Curriculum-mapping workshop.",
        "Pilot scope and cost approval by trustees.",
        "Data Processing Agreement signed.",
        "Pilot teacher selection."
      ]
    },
    {
      title: "Phase 2: Pilot (Months 3-6)",
      items: [
        "4-week abbreviated teacher pilot training.",
        "14-week classroom pilot with 1-2 grades.",
        "Mid-pilot review.",
        "End-of-pilot evaluation against the four decision-point questions."
      ]
    },
    {
      title: "Phase 3: Decision (Month 7)",
      items: [
        "Pilot results presented to academic leadership and trustees.",
        "Phase 4 scope, cost, and timeline finalised.",
        "Or: clean separation with no further obligation."
      ]
    },
    {
      title: "Phase 4: Scale (Months 8-12 single campus, 8-18 multi-campus)",
      items: [
        "Full Humain Teacher Certification for all subject teachers who will deliver Humain modules.",
        "Grade-by-grade rollout to all targeted classes.",
        "Quarterly check-ins. Half-yearly curriculum review."
      ]
    },
    {
      title: "Phase 5: Steady state and review (Year 2 onwards)",
      items: [
        "Annual framework update.",
        "Senior staff trained as in-house trainers (train-the-trainer track).",
        "Your school named in the released framework edition."
      ]
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-grey">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            A school-wide AI literacy implementation timeline: from principal demo to fully scaled programme
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium"
          >
            The total elapsed time from initial principal demo to fully scaled student rollout is typically 8 to 12 months for a single-campus school and 14 to 18 months for a multi-campus chain. Below is the phase structure.
          </motion.p>
        </div>

        <div className="w-full relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-grey transform -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {phases.map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className={`flex flex-col md:flex-row items-center justify-between w-full relative md:py-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-sage z-10 items-center justify-center shadow-sm" />
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 bg-grey/25 p-8 rounded-2xl border border-grey shadow-sm relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute top-0 left-8 transform -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-sage z-10 shadow-sm" />
                  
                  <h3 className="font-display text-xl md:text-2xl font-bold text-terracotta mb-4">
                    {phase.title}
                  </h3>
                  <ul className={`space-y-3 ${idx % 2 === 0 ? 'text-left' : 'md:inline-block md:text-left text-left'}`}>
                    {phase.items.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}`}>
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sage mt-2.5"></span>
                        <p className="font-sans text-base text-charcoal/80 leading-relaxed flex-1">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
