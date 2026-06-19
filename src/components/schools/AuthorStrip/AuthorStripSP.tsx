'use client';

import React from 'react';
import { motion } from 'motion/react';
import { spViewport } from '../shared/SchoolsMotion';

export default function AuthorStripSP() {
  return (
    <section className="w-full border-y border-grey bg-white py-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={spViewport}
        transition={{ duration: 0.45 }}
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:px-12 lg:px-16"
      >
        <div className="flex flex-shrink-0 -space-x-4">
          {[
            { src: '/assets/images/e3.png', alt: 'Manit Jain, co-founder of Humain Learning and Heritage Schools' },
            { src: '/assets/images/e1.png', alt: 'Dr. Tapaswini Sahu, Academic Director at Humain Learning' },
          ].map((person, idx) => (
            <motion.img
              key={person.src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, zIndex: 10 }}
              viewport={spViewport}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
              src={person.src}
              alt={person.alt}
              className="h-14 w-14 rounded-full border-2 border-white bg-white object-cover shadow-sm"
            />
          ))}
        </div>
        <p className="flex-1 text-center font-sans text-sm leading-relaxed text-charcoal/80 md:text-left md:text-base">
          Built by Heritage Schools co-founder <strong className="text-sage">Manit Jain</strong>. CBSE 417 mapping.
          DPDP compliant. Reviewed by <strong className="text-sage">Dr. Tapaswini Sahu</strong>, PhD Educational
          Psychology JNU, M.Phil Cambridge.
        </p>
      </motion.div>
    </section>
  );
}
