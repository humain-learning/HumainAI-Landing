'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MotionHeading } from '../shared/SchoolsMotion';
import { sp } from '../shared/schoolsTheme';

const rows = [
  {
    obligation: 'Verifiable parental consent',
    response: 'Collected through a documented parent-portal flow, not a tick box.',
  },
  {
    obligation: 'Purpose limitation',
    response: 'Every purpose is named, and data collection is kept to the minimum required.',
  },
  {
    obligation: 'Data residency and security',
    response: "All children's data is stored on Indian servers and not transferred abroad.",
  },
  {
    obligation: 'Access, correct and erase',
    response:
      'Handled through the parent portal. Humain operates as data processor under a signed Data Processing Agreement.',
  },
];

export default function DPDPComplianceSP() {
  return (
    <section className={`relative w-full py-16 md:py-24 ${sp.section} ${sp.sectionWhite}`}>
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-16">
        <MotionHeading className="font-display mb-4 text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal md:text-4xl lg:text-[42px]">
          DPDP Act 2023 compliance: your school&apos;s legal position
        </MotionHeading>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-10 max-w-3xl text-center font-sans text-base leading-relaxed text-charcoal/80 md:text-lg"
        >
          Indian schools are data fiduciaries under the DPDP Act 2023 when they process children&apos;s data. A school AI
          programme must be compliant by design. This is a summary, not legal advice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.2 }}
          whileHover={{ boxShadow: '0 12px 40px rgba(170, 193, 145, 0.12)' }}
          className={`overflow-x-auto ${sp.card}`}
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className={sp.tableHead}>
                <th className="w-2/5 p-5 font-display text-base font-bold text-sage">Obligation</th>
                <th className="p-5 font-display text-base font-bold text-terracotta">How Humain meets it</th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm text-charcoal/80 md:text-base">
              {rows.map((row, idx) => (
                <motion.tr
                  key={row.obligation}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.05 * idx }}
                  className={sp.tableRow}
                >
                  <td className="p-5 align-top font-semibold text-charcoal">{row.obligation}</td>
                  <td className="p-5 align-top leading-relaxed">{row.response}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
