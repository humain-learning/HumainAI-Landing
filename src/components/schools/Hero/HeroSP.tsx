'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function HeroSP() {
  return (
    <section className="relative w-full bg-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      
      {/* Background blobs for visual interest */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-[#f9faf7] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] rounded-full bg-[#fdfaf6] blur-3xl opacity-70 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 w-full max-w-3xl lg:max-w-none text-center lg:text-left">
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.1] tracking-tight text-charcoal mb-6"
          >
            AI literacy for schools
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-xl md:text-2xl text-[#5e714e] font-bold leading-snug mb-6"
          >
            An institutional AI literacy programme for CBSE, ICSE, and state-board schools in India. Built by Heritage Xperiential Learning Schools co-founder Manit Jain (M.Ed Harvard). Mapped to CBSE 417 and 843, ICSE Computer Applications and AI electives. Compliant with the DPDP Act 2023.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-lg text-charcoal/80 leading-relaxed mb-8"
          >
            If you are an academic head, principal, or trustee at an Indian school, you are being asked one question by parents, teachers, the board, and accreditors right now: what is your school&apos;s position on AI? This page is the answer.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <div className="w-full sm:w-auto flex flex-col items-center lg:items-start gap-2">
              <Link 
                href="/book-a-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#5e714e] text-white font-sans font-bold text-lg shadow-lg shadow-[#5e714e]/30 hover:bg-[#4a5a3e] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a principal-led demo (30 minutes)
              </Link>
              <p className="text-xs text-charcoal/60 text-center lg:text-left max-w-xs">
                A 30-minute conversation with an academic lead. We walk through framework and curriculum mapping. No sales pressure.
              </p>
            </div>
            
            <div className="w-full sm:w-auto flex flex-col items-center lg:items-start gap-2">
              <Link 
                href="/downloads/curriculum-mapping-deck.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border-2 border-[#e8efe0] text-charcoal font-sans font-bold text-lg hover:border-[#c8d6bc] hover:bg-[#f9faf7] transition-all duration-300"
              >
                Download mapping deck (24 pages)
              </Link>
              <p className="text-xs text-charcoal/60 text-center lg:text-left max-w-xs">
                A 24-page PDF mapping the Humain framework to CBSE 417, ICSE, and NCERT. Single email gate.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="https://wa.me/+918130023688" target="_blank" className="inline-flex items-center text-terracotta font-semibold hover:text-[#d6925c] transition-colors group text-sm md:text-base">
              Talk to Manit Jain directly on WhatsApp
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </div>

        {/* Right Column: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/10 border border-[#e8efe0]">
            {/* Using the available webp image instead of the missing jpg */}
            <img 
              src="/assets/images/for-schools-hero.webp" 
              alt="An Indian school principal and academic head reviewing the Humain AI Literacy Framework curriculum mapping deck."
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>

      {/* Trust Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 mt-16 md:mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-[#e8efe0]">
          
          <div className="flex flex-col gap-2">
            <h4 className="font-display font-bold text-charcoal text-base">Pedagogical credibility</h4>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              Founded by the co-founder of Heritage Xperiential Learning Schools, ranked among India&apos;s top schools for over a decade.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-display font-bold text-charcoal text-base">Curriculum alignment</h4>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              Mapped to CBSE Artificial Intelligence (subject codes 417 and 843), ICSE Computer Applications and AI electives, NEP 2020, NCF 2023.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-display font-bold text-charcoal text-base">DPDP Act 2023 compliant</h4>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              All children&apos;s data stored on Indian servers. Verifiable parental consent. Full audit trail.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-display font-bold text-charcoal text-base">External recognition</h4>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              Student programme implementation certified by E-Cell IIT Kharagpur.
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
