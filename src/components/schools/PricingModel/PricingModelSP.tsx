'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MotionHeading, SPButton } from '../shared/SchoolsMotion';
import { sp } from '../shared/schoolsTheme';

const bands = [
  { size: 'Small school' },
  { size: 'Medium school' },
  { size: 'Large school' },
  { size: 'Multi-campus chain' },
];

export default function PricingModelSP() {
  return (
    <section id="pricing" className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionAlt}`}>
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-16">
        <MotionHeading className="font-display mb-4 text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
          Institutional pricing and how to begin
        </MotionHeading>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="mb-10 text-center font-sans text-lg leading-relaxed text-charcoal/80"
        >
          Pricing is tailored to your school&apos;s size, curriculum, and implementation requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.2 }}
          whileHover={{ boxShadow: '0 12px 40px rgba(170, 193, 145, 0.12)' }}
          className={`mb-10 overflow-hidden ${sp.card}`}
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className={sp.tableHead}>
                <th className="p-5 font-display text-base font-bold text-sage">School size</th>
                <th className="p-5 font-display text-base font-bold text-terracotta">Indicative annual programme cost</th>
              </tr>
            </thead>
            <tbody>
              {bands.map((band, idx) => (
                <motion.tr
                  key={band.size}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx }}
                  className={sp.tableRow}
                >
                  <td className="p-5 font-sans font-semibold text-charcoal">{band.size}</td>
                  <td className="p-5 font-sans italic text-charcoal/60">Quoted on request</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <SPButton href="/schools/pricing-and-demo" variant="sage">
            See schools pricing and request a demo
          </SPButton>
        </motion.div>
      </div>
    </section>
  );
}
