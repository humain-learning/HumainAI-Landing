'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalBannerSP() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#fdfaf6] blur-3xl opacity-70" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#f9faf7] blur-3xl opacity-70" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-charcoal text-white rounded-[2rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative rings inside the banner */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 rounded-full border border-white/10" />
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">
            Every Indian school will adopt AI literacy in the next three years.
            <br className="hidden lg:block" />
            <span className="text-terracotta"> Choose whether your school designs the programme or implements one under pressure.</span>
          </h2>
          
          <p className="font-sans text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
            Book the demo. Download the deck. Or talk to Manit directly.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
            <Link 
              href="/book-a-demo"
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#5e714e] text-white font-sans font-bold text-lg shadow-lg hover:bg-[#4a5a3e] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a principal-led demo (30 min)
            </Link>
            
            <Link 
              href="/downloads/curriculum-mapping-deck.pdf"
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-sans font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Download the 24-page Deck
            </Link>

            <Link 
              href="https://wa.me/+918130023688"
              target="_blank"
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-terracotta text-white font-sans font-bold text-lg shadow-lg hover:bg-[#df935c] hover:-translate-y-0.5 transition-all duration-300"
            >
              Talk to Manit Jain directly on WhatsApp
            </Link>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
