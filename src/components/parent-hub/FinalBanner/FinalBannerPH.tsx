'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalBannerPH() {
  return (
    <section className="relative w-full bg-[#aac191] py-12 md:py-16 border-t border-[#e6e6e6] overflow-hidden">
      
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#e7a572] blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#333333] blur-3xl opacity-10 pointer-events-none" />
      
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-16 text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white mb-6"
        >
          The age of AI is here.<br className="hidden md:block" /> Make sure your child is ready.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link 
            href="https://pages.razorpay.com/humainchamps"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-terracotta text-white font-sans font-bold text-lg shadow-lg shadow-terracotta/30 hover:bg-[#d6925c] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Enroll in Humain Champs (Rs. 14,750)
          </Link>
          
          <Link 
            href="/resources/parents-guide"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-sans font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Download the free Parents Guide to AI
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}



