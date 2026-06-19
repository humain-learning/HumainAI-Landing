'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SPButton } from '../shared/SchoolsMotion';
import '../shared/schools.css';

export default function FinalBannerSP() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sage/20 blur-3xl schools-blob" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-48 w-48 rounded-full bg-terracotta/15 blur-3xl schools-blob-delayed" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.01 }}
          className="rounded-[2rem] bg-sage p-10 text-center text-white shadow-xl shadow-sage/25 md:p-14"
        >
          <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight md:text-4xl">
            Prepare Your School for the AI Era
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-lg text-white/85">
            Equip students and teachers with the skills needed for an AI-driven future.
          </p>
          <SPButton href="/book-a-demo" variant="terracotta" size="lg">
            Book a School Demo
          </SPButton>
        </motion.div>
      </div>
    </section>
  );
}
