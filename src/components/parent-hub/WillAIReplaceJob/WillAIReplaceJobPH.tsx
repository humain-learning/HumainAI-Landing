'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function WillAIReplaceJobPH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e6e6e6]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: visual with image */}
          <div className="order-2 lg:order-1 flex flex-col gap-4 relative">
            {/* Background image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/assets/images/aifuture.png"
                alt="AI Future Readiness"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Stat overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: 'Jobs AI changes', value: 'Fast', sub: 'faster than removed' },
                { label: 'Habits needed', value: '3', sub: 'curiosity · verify · adapt' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-[#e6e6e6] p-4 text-center shadow-sm"
                >
                  <div className="font-display text-xl font-extrabold text-terracotta">{s.value}</div>
                  <div className="font-sans text-sm text-charcoal/60 mt-0.5">{s.label}</div>
                  <div className="font-sans text-[10px] text-charcoal/40 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
            >
              AI future readiness for your child: will AI replace their job, and how to prepare
            </motion.h2>

            <motion.aside
              data-snippet="will-ai-replace-my-childs-job"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white p-5 mb-5 border-r-[6px] border-[#e7a572] shadow-sm"
            >
              <div className="font-display text-[10px] font-extrabold tracking-wider text-terracotta uppercase mb-2">Direct Answer</div>
              <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium leading-relaxed">
                A person who uses AI well will replace one who cannot. Future readiness
                is not about predicting which jobs survive. It is about raising a child who can learn, adapt, and work
                alongside AI.
              </p>
            </motion.aside>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-5"
            >
              Parents ask us a version of this every week. AI changes jobs faster than it removes them, and the
              children who do well are the ones who can pick up a new tool, judge its output, and keep the human
              parts of the work that AI cannot do. Future-proofing a career is less about choosing the perfect degree
              and more about building the right habits: curiosity, verification, and the confidence to use AI without
              depending on it. That is what the Humain framework calls future readiness, built into every age band.
            </motion.p>

          </div>

        </div>
      </div>
    </section>
  );
}

