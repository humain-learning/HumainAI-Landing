'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function DownloadsPH() {
  return (
    <section className="relative w-full bg-[#f9faf7] py-12 md:py-16 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        
        <div className="flex-1 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Free Parents Guide to AI for Indian families (12-page PDF, English and Hindi)
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-6"
          >
            Twelve pages, written by educators with two decades in Indian K-12 classrooms. What AI actually does. 
            How to talk to your child about it. What to allow and what to push back on. The five questions to ask 
            before you let an AI model in the house. A printable family rules sheet for the fridge.
          </motion.p>
        </div>

        {/* Two-up download grid */}
        <div className="flex-1 w-full flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
          
          {/* English Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-[#e8efe0] shadow-sm flex flex-col items-center text-center w-full sm:w-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-[#aac191]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-lg text-charcoal mb-1">English version</h3>
            <p className="font-sans text-sm text-charcoal/60 mb-6">12 pages. No email gate.</p>
            <Link 
              href="/downloads/parents-guide.pdf"
              className="mt-auto w-full py-3 px-4 rounded-full font-sans font-bold text-sm text-white bg-[#aac191] hover:bg-[#96b17c] transition-colors shadow-lg shadow-[#aac191]/20"
            >
              Download (English)
            </Link>
          </motion.div>

          {/* Hindi Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-[#e8efe0] shadow-sm flex flex-col items-center text-center w-full sm:w-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-4 text-terracotta">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-lg text-charcoal mb-1">हिंदी संस्करण</h3>
            <p className="font-sans text-sm text-charcoal/60 mb-6">12 पृष्ठ. No email gate.</p>
            <Link 
              href="/hi/downloads/parents-guide.pdf"
              className="mt-auto w-full py-3 px-4 rounded-full font-sans font-bold text-sm text-white bg-terracotta hover:bg-[#d6925c] transition-colors shadow-lg shadow-terracotta/20"
            >
              हिंदी में डाउनलोड करें
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}


