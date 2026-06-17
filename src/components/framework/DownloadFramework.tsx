'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function DownloadFramework() {
  const downloads = [
    {
      langCode: 'EN',
      lang: 'English',
      title: 'The Humain AI Literacy Framework (English)',
      desc: '32 pages. Six pillars. Grade-band outcomes. Curriculum mapping for CBSE, ICSE, NEP 2020, NCF 2023. Research bibliography. Author and reviewer credentials.',
      size: 'PDF, 2.4 MB',
      href: '/downloads/humain-ai-literacy-framework-en.pdf',
    },
    {
      langCode: 'HI',
      lang: 'Hindi',
      title: 'ह्यूमेन एआई साक्षरता ढाँचा (हिंदी)',
      desc: '32 पृष्ठ। छह स्तंभ। ग्रेड-बैंड परिणाम। सीबीएसई, आईसीएसई, एनईपी 2020, एनसीएफ 2023 के लिए पाठ्यक्रम मानचित्रण।',
      size: 'PDF, 2.6 MB',
      href: '/downloads/humain-ai-literacy-framework-hi.pdf',
    },
  ];

  return (
    <section id="download" className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12">

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold text-charcoal mb-4"
          >
            Download the Humain AI Literacy Framework
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            32-page PDF. Free. No email gate. No follow-up spam. Available in English and Hindi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloads.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-[#f9faf7] rounded-3xl p-8 border border-[#e8efe0] border-l-4 border-l-[#5e714e] shadow-sm flex flex-col"
            >
              {/* Language label row */}
              <div className="flex items-center gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#e8efe0] text-[#5e714e] font-display font-bold text-base">
                  {d.langCode}
                </span>
                <div>
                  <p className="font-display font-extrabold text-2xl text-charcoal">{d.lang}</p>
                  <p className="font-sans text-xs text-charcoal/50">{d.size}</p>
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-charcoal mb-3">{d.title}</h3>
              <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-8 flex-grow">{d.desc}</p>

              {/* Download button */}
              <Link
                href={d.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#5e714e] text-white font-sans font-bold text-base shadow-lg shadow-[#5e714e]/30 hover:bg-[#4a5a3e] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF ({d.langCode})
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Attribution note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="font-sans text-sm text-charcoal/50 max-w-2xl mx-auto">
            The Humain AI Literacy Framework is published under a Creative Commons Attribution 4.0 International licence. You may share and adapt it for non-commercial educational purposes with attribution to Humain Learning AI (humainlearning.ai/framework).
          </p>
        </motion.div>

      </div>
    </section>
  );
}
