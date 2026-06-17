'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function EngagementModelSP() {
  const steps = [
    {
      step: "Step 1",
      title: "Principal-led demo (30 minutes)",
      desc: "A thirty-minute video call with the principal, the academic head, and one or two senior faculty if they are available. Manit Jain or another senior member of the Humain leadership team walks through the framework, the curriculum mapping for your board, and the engagement timeline. There is no slide deck unless you prefer one. Questions are taken throughout. The output of the call is a written follow-up document tailored to your school."
    },
    {
      step: "Step 2",
      title: "Curriculum-mapping workshop (half-day, on-site or remote)",
      desc: "A half-day working session with the principal, academic head, heads of department (Mathematics, Science, English, Social Studies, Computer Science), and the head of pastoral care. The Humain curriculum lead facilitates the mapping of the six pillars onto your existing weekly timetable, period structure, and assessment calendar. The output is a draft Year 1 implementation plan that your academic head can take to the trustees for budget approval."
    },
    {
      step: "Step 3",
      title: "Teacher training week (5 days, on-site)",
      desc: "A five-day teacher training week scheduled in the academic break preceding student rollout. The training is delivered by a Humain-certified senior trainer and covers the framework, the six pillars in classroom practice, the assessment rubrics, the technology stack, the DPDP-compliant data handling process, and parent communication. By the end of the week, your staff has the competence and the confidence to start."
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        <div className="w-full text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            How Humain works with your school: a three-step engagement model for academic leadership
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            The engagement model is the same for a 400-student CBSE school and a 4,000-student multi-board chain. The depth of each step varies with school size and grade range; the sequence does not.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-start">
          
          {/* Steps list */}
          <div className="flex-1 w-full space-y-10">
            {steps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="relative pl-8 md:pl-12 border-l-2 border-[#e8efe0]"
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-terracotta border-4 border-white" />
                
                <span className="font-display font-bold text-terracotta text-sm uppercase tracking-wider block mb-1">{item.step}</span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* After Step 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative pl-8 md:pl-12 border-l-2 border-transparent"
            >
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#5e714e] border-4 border-white" />
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#5e714e] mb-3">
                After Step 3: ongoing support
              </h3>
              <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed">
                Quarterly check-ins with academic leadership. Monthly office hours for participating teachers. Half-yearly curriculum review. Annual framework update review with your school named in the released edition. The relationship is treated as a partnership, not a transaction.
              </p>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex w-full max-w-[400px] flex-col items-center justify-center bg-[#f9faf7] rounded-3xl p-10 border border-[#e8efe0] self-stretch"
          >
            {/* Fallback SVG for engagement-three-steps.svg since we don't have the real one */}
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
