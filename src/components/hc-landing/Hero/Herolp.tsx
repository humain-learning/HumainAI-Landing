'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactUsModal } from './ContactUsModal';
import { EnrolledPopup } from './EnrolledPopup';

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
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-12 md:pt-20 lg:pt-24">
      {/* Background soft glow elements */}
      {/* <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-sage/5 blur-[120px]" /> */}
      {/* <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-terracotta/5 blur-[150px]" /> */}

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
                GRADES 8 - 12
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-[58px]">
                Enable your child to
                <span className="relative inline-block text-terracotta underline decoration-4">
                  Learn, Create & Think
                </span>
                using AI.
              </h1>
            </div>

            {/* Subheading Description */}
            <p className="font-sans text-base md:text-lg leading-relaxed text-charcoal/80 max-w-2xl">
              Humain Champs is India's most credible AI learning course. Live online classes with a hackathon certified by E-Cell 
              IIT Kharagpur, real AI tools like ChatGPT & Gemini, and a Harvard-pedigree 
              founder. No coding needed.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col md:flex-row sm:items-center text-sm gap-4 pt-2 ">
              {/* Enroll Now Button */}
              <motion.a
                href="https://pages.razorpay.com/humainchamps"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex cursor-pointer items-center justify-between gap-3 rounded-full bg-terracotta py-2 pr-2 pl-6 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
              >
                <span className="font-display text-base font-bold tracking-wide whitespace-nowrap">Enroll Now</span>
                <span className="rounded-full bg-white px-4 py-2 font-display text-sm font-extrabold text-terracotta border border-terracotta/10">
                  ₹11,800
                </span>
              </motion.a>

              {/* Request Callback Button */}
              <motion.button
                onClick={() => setShowModal(true)}
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
                <span>Full refund after first session if not satisfied, zero questions asked</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm md:text-base text-charcoal/70">
                <CheckIcon />
                <span>Rated 4.5★ by 200+ parents · Small batches</span>
              </div>
            </div>

            {/* Testimonial Popup Card */}
            {/* <motion.div
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
            </motion.div> */}

          </div>

          {/* Right Column: Clipped image & Badges */}
          <div className="relative flex justify-center lg:col-span-5">
            
            {/* The Image Container */}
            <div className="relative w-full max-w-[480px]">
              
              {/* Main Parents Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full"
              >
                <img
                  src="/assets/images/parentslp.png"
                  alt="Family studying AI together"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* Floating Leaf Brain Logo Badge (Top-Right) */}
              <motion.img
                src="/assets/images/leaflp.png"
                alt="AI Leaf Badge"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120, damping: 15 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-[1%] -right-[1%] w-[32%] z-10 drop-shadow-lg cursor-pointer"
              />

              {/* SVG Connecting Line */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M -2.8 63.3 L -2.8 80.3"
                  fill="none"
                  stroke="#5e714e"
                  strokeWidth="1.2"
                  strokeOpacity="0.45"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
              </svg>

              {/* Floating green text badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute top-[61%] left-[-7%] z-20 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm cursor-default"
              >
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#5e714e]">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-display text-[9.5px] font-extrabold tracking-wider text-[#5e714e] whitespace-nowrap">
                  NO CODING NEEDED
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute top-[69.5%] left-[-7%] z-20 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm cursor-default"
              >
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#5e714e]">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-display text-[9.5px] font-extrabold tracking-wider text-[#5e714e] whitespace-nowrap">
                  LIVE CLASSES
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute top-[78%] left-[-7%] z-20 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm cursor-default"
              >
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#5e714e]">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-display text-[9.5px] font-extrabold tracking-wider text-[#5e714e] whitespace-nowrap">
                  IIT CERTIFICATE
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Modal Dialog for callback request form */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            {/* Modal Backdrop overlay to close when clicking outside */}
            <div 
              className="absolute inset-0 cursor-default" 
              onClick={() => setShowModal(false)} 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 md:p-10 max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors duration-200 cursor-pointer"
                aria-label="Close form"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <ContactUsModal onClose={() => setShowModal(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <EnrolledPopup />
    </section>
  );
}
