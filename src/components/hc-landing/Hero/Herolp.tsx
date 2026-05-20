'use client';

import React from 'react';
import { motion } from 'motion/react';

// Custom inline SVGs for premium look
const CheckIcon = () => (
  <svg
    className="h-4 w-4 text-sage shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const BrainChipIcon = () => (
  <svg
    className="h-10 w-10 text-white"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle connections */}
    <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="2.5" strokeDasharray="4 6" opacity="0.8" />
    
    {/* Brain shape with neural pathways */}
    <path
      d="M38 50C38 42 42 38 48 38C50 38 50 40 52 40C54 40 54 38 56 38C62 38 66 42 66 50C66 58 62 62 56 62C54 62 54 60 52 60C50 60 50 62 48 62C42 62 38 58 38 50Z"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M52 40V60M48 38C48 32 40 32 40 38M56 38C56 32 64 32 64 38M48 62C48 68 40 68 40 62M56 62C56 68 64 68 64 62"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Microchip nodes */}
    <rect x="49" y="47" width="6" height="6" rx="1.5" fill="white" />
    <circle cx="52" cy="34" r="2.5" fill="white" />
    <circle cx="52" cy="66" r="2.5" fill="white" />
    <circle cx="34" cy="50" r="2.5" fill="white" />
    <circle cx="70" cy="50" r="2.5" fill="white" />
    
    {/* Subtle paths */}
    <path d="M49 50H36M55 50H68" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Herolp() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAF9] py-12 md:py-20 lg:py-24">
      {/* Background soft glow elements */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-sage/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-terracotta/5 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col space-y-6 md:space-y-8 lg:col-span-7">
            
            {/* Header Chips/Badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="flex items-center gap-1.5 rounded-full bg-[#aac1911a] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#5e714e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e714e]" />
                E-CELL IIT-K CERTIFIED
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-[#aac1911a] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#5e714e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e714e]" />
                ONLINE
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-[#aac1911a] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#5e714e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e714e]" />
                GRADES 8ᵀᴴ - 12ᵀᴴ
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-[58px]">
                Your child builds a{' '}
                <span className="relative inline-block text-terracotta">
                  working AI agent
                  <span className="absolute bottom-1 left-0 h-[4px] w-full rounded-full bg-terracotta/40" />
                </span>{' '}
                in 6 weeks.
              </h1>
            </div>

            {/* Subheading Description */}
            <p className="font-sans text-base md:text-lg leading-relaxed text-charcoal/80 max-w-2xl">
              Humain Champs is India's most credible AI summer camp. Live online classes with E-Cell 
              IIT Kharagpur certification, real AI tools like ChatGPT & Gemini, and a Harvard-pedigree 
              founder. No coding needed.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Enroll Now Button */}
              <motion.a
                href="https://pages.razorpay.com/humainchamps"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex cursor-pointer items-center justify-between gap-3 rounded-full bg-terracotta py-2 pr-2 pl-6 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
              >
                <span className="font-display text-base font-bold tracking-wide">Enroll Now</span>
                <span className="rounded-full bg-white px-4 py-2 font-display text-sm font-extrabold text-terracotta border border-terracotta/10">
                  ₹11,800
                </span>
              </motion.a>

              {/* Request Callback Button */}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#f3f6f1' }}
                whileTap={{ scale: 0.98 }}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-sage bg-white py-3.5 px-6 font-display text-base font-bold text-[#5e714e] transition-all duration-300 hover:border-[#9ab081]"
              >
                Request a Callback
              </motion.button>
            </div>

            {/* Highlights bullet points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm md:text-base text-charcoal/70">
                <CheckIcon />
                <span>Full refund after first 2 sessions If not satisfied, zero questions asked</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm md:text-base text-charcoal/70">
                <CheckIcon />
                <span>Rated 4.5★ by 200+ parents · Small batches</span>
              </div>
            </div>

            {/* Testimonial Popup Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3.5 rounded-2xl border border-[#ece4df] bg-white p-3.5 shadow-sm shadow-[#ffe9d7]/50 max-w-[340px]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta font-display text-base font-bold text-white">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold text-charcoal">Aryan M.</span>
                <span className="font-sans text-xs text-charcoal/60">
                  Just enrolled in the Morning Batch · Mumbai
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clipped image & Badges */}
          <div className="relative flex justify-center lg:col-span-5">
            
            {/* The Image Container */}
            <div className="relative w-full max-w-[480px]">
              
              {/* Asymmetrical leaf shape frame */}
              <div className="relative overflow-hidden rounded-[160px_60px_160px_60px] border-[6px] border-white shadow-xl shadow-sage/10">
                <img
                  src="/assets/images/parents-img.png"
                  alt="Family studying AI together"
                  className="h-full w-full object-cover aspect-[4/5] object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Leaf Brain Logo Badge (Top-Right) */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                className="absolute -top-3 -right-3 z-10 flex h-20 w-20 items-center justify-center rounded-[40px_0px_40px_40px] bg-sage shadow-md"
              >
                <BrainChipIcon />
              </motion.div>

              {/* Floating green text badges (Left Edge) */}
              <div className="absolute top-[40%] -left-6 z-10 flex flex-col gap-3">
                {[
                  { text: 'NO CODING NEEDED', delay: 0.6 },
                  { text: 'LIVE CLASSES', delay: 0.7 },
                  { text: 'IIT CERTIFICATE', delay: 0.8 },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: badge.delay, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-1.5 rounded-full border border-sage/20 bg-white/95 px-4 py-2 shadow-md shadow-sage/5 backdrop-blur-sm cursor-default"
                  >
                    <CheckIcon />
                    <span className="font-display text-[10px] font-extrabold tracking-wider text-[#5e714e]">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
