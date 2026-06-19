'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function FamilyBriefPH() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        
        <div className="flex-1 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            The Humain Family Brief: what your child learned this week, in five minutes
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed"
          >
            Every Friday morning, a one-page summary lands in your inbox. What pillar your child worked on this 
            week. What tools she used. What she built. One conversation prompt to use at the weekend. One short 
            reading for you, if you want it. Five minutes total. English or Hindi, your choice.
          </motion.p>
        </div>

        {/* Visual Card Column */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md bg-[#fffcf9] rounded-3xl border border-[#e7a572]/30 shadow-xl shadow-[#e7a572]/10 overflow-hidden relative"
          >
            {/* Top color bar */}
            <div className="h-2 w-full bg-terracotta" />
            
            <div className="p-8">
              {/* Date stamp */}
              <div className="font-display text-sm font-extrabold tracking-widest text-terracotta uppercase mb-6 flex items-center justify-between">
                <span>Humain Family Brief</span>
                <span>Friday, Oct 20</span>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6 leading-tight">
                This week: Pillar 3, Learning with AI
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#aac191] mt-2 flex-shrink-0" />
                  <p className="font-sans text-sm text-charcoal/80">
                    <strong className="text-charcoal block">What she did:</strong>
                    Explored NotebookLM to test its summarisation limits on her history textbook.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#aac191] mt-2 flex-shrink-0" />
                  <p className="font-sans text-sm text-charcoal/80">
                    <strong className="text-charcoal block">What she made:</strong>
                    Built a personal study guide comparing the AI&apos;s summary to her own class notes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e7a572] mt-2 flex-shrink-0" />
                  <p className="font-sans text-sm text-charcoal/80">
                    <strong className="text-terracotta block">Weekend prompt:</strong>
                    &quot;Did NotebookLM miss any important details from chapter 4?&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-[#e8efe0] px-8 py-4 flex items-center justify-between">
              <span className="font-sans text-sm text-charcoal/50 font-medium">
                Humain Learning AI
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-sm uppercase tracking-wider font-bold text-[#aac191] bg-[#f9faf7] px-2 py-1 rounded-md">
                Available in English &amp; Hindi
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


