'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function ManitCredibilitySP() {
  const credentials = [
    {
      title: "Heritage Xperiential Learning Schools",
      body: "Manit co-founded Heritage Xperiential Learning Schools in 2001. The schools are CBSE-affiliated. They have been consistently ranked among India's top schools for over a decade in the EducationWorld and Education Times annual rankings. The Heritage pedagogy pioneered experiential learning in India, and that pedagogy informs every Humain framework decision."
    },
    {
      title: "NEP 2020 and policy work",
      body: "Manit served on the policy consultation that shaped NEP 2020's digital-fluency and computational-thinking strands. He continues to advise on the NCF 2023 transition for CBSE schools. The Humain framework is built to anticipate, not chase, the regulatory direction."
    },
    {
      title: "FICCI ARISE School Education Committee",
      body: "Manit chairs the FICCI ARISE School Education Committee, which represents private Indian schools at the policy table. The conversations Humain has with regulators, boards, and accreditors happen within this committee structure, not outside it."
    },
    {
      title: "M.Ed Harvard Graduate School of Education",
      body: "Manit holds an M.Ed from the Harvard Graduate School of Education. The academic foundation matters less than the 25 years of post-Harvard implementation in Indian classrooms, but both are part of the credential set."
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-grey">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left: Image & Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full flex flex-col items-center lg:items-start"
        >
          <div className="relative w-full max-w-sm mb-8 flex items-end justify-center">
            <img 
              src="/assets/Website Assets/Founder.png" 
              alt="Manit Jain, M.Ed Harvard, co-founder of Humain Learning AI and co-founder of Heritage Xperiential Learning Schools."
              className="w-full h-auto object-contain drop-shadow-xl"
              style={{ background: 'transparent' }}
            />
          </div>

          <div className="bg-white rounded-2xl p-8 border border-grey shadow-sm relative">
            <svg className="absolute top-4 left-4 w-8 h-8 text-sage/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-display text-lg font-bold text-charcoal leading-snug italic relative z-10 pt-4">
              "I have made every mistake an Indian school principal can make. The Humain framework is the design I wish someone had handed me 25 years ago."
            </p>
          </div>
        </motion.div>

        {/* Right: Credentials Text */}
        <div className="flex-1 w-full text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            About Manit Jain: 25 years of running Indian schools, NEP 2020 advisor, FICCI ARISE Chair
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium mb-12"
          >
            The credibility test for any school AI programme is straightforward. The people designing it should have run an Indian school before. They should have made the decisions you are making, on a calendar you recognise, against the boards you answer to. Manit Jain has done that for 25 years.
          </motion.p>

          <div className="flex flex-col gap-8 text-left">
            {credentials.map((cred, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (0.1 * idx) }}
              >
                <h3 className="font-display text-xl font-bold text-sage mb-2">
                  {cred.title}
                </h3>
                <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                  {cred.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
