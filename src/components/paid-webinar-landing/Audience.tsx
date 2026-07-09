'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { audienceData } from './data/audience';

export default function Audience() {
  const [activeTab, setActiveTab] = useState<'students' | 'parents'>('students');
  const card = audienceData[activeTab];

  return (
    <section className="bg-white px-5 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-[#333333] md:text-4xl">
          Who this is for
        </h2>
        <p className="mt-2 text-center text-[#333333]/60">
          Built for students, designed with parents in mind.
        </p>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('students')}
          className={`rounded-full px-6 py-2.5 font-display font-bold transition-colors ${
            activeTab === 'students'
              ? 'bg-[#333333] text-white'
              : 'border border-[#E6E6E6] bg-white text-[#333333]'
          }`}
        >
          Students
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('parents')}
          className={`rounded-full px-6 py-2.5 font-display font-bold transition-colors ${
            activeTab === 'parents'
              ? 'bg-[#333333] text-white'
              : 'border border-[#E6E6E6] bg-white text-[#333333]'
          }`}
        >
          Parents
        </button>
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl">
        <motion.div
          key={activeTab}
          initial={{ x: activeTab === 'parents' ? 500 : -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <div className="relative min-h-[320px] md:min-h-[420px]">
            <Image src={card.image} alt={card.title} fill className="object-cover" />
          </div>

          <div
            className="flex flex-col justify-center p-8 md:p-10"
            style={{ backgroundColor: card.bgColor }}
          >
            <h3 className="font-display text-2xl font-extrabold text-white">{card.title}</h3>

            <ul className="mt-5 space-y-3">
              {card.bullets.map((bullet, index) => (
                <li key={`${card.title}-${index}`} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-white">
                      <path d="M5 12.5 9.5 17 19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm leading-snug text-white">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
