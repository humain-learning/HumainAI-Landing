'use client';

import React from 'react';

// Custom check icon inside a solid green circle
const GreenCheckCircle = () => (
  <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-sage text-white mt-0.5 select-none shadow-sm">
    <svg
      className="h-3 w-3 stroke-[3]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default function Credential() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content & Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">

            {/* Top Indicator Category */}
            <div className="h-[3px] w-12 bg-sage rounded-full mb-3" />
            <span className="font-display text-xs font-extrabold tracking-widest text-[#5e714e] uppercase select-none">
              THE CERTIFICATE
            </span>

            {/* Title */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal leading-tight mt-2 mb-4 tracking-tight">
              A credential that actually matters
            </h2>

            {/* Subtitle description */}
            <p className="font-sans text-sm md:text-base text-charcoal/80 mb-8 max-w-xl leading-relaxed">
              The E- Cell IIT Kharagpur certificate isn't participation ribbon — It's earned by
              submitting a real AI project to the E-Cell IIT Kharagpur Hackathon,
              judged by one of India's premier engineering institutions.
            </p>

            {/* Value checklist */}
            <div className="flex flex-col space-y-4 max-w-xl">

              {/* Item 1 */}
              <div className="flex items-start gap-3.5">
                <GreenCheckCircle />
                <p className="font-sans text-sm md:text-[15px] leading-relaxed text-charcoal/80">
                  <span className="font-bold text-charcoal">E-Cell IIT Kharagpur</span> issued by the entrepreneurship cell of one of India's oldest and most respected engineering institutes.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3.5">
                <GreenCheckCircle />
                <p className="font-sans text-sm md:text-[15px] leading-relaxed text-charcoal/80">
                  <span className="font-bold text-charcoal">10+ real tools mastered</span> ChatGPT, Gemini, NoteBook LM, Canva AI, Heygen, N8N and more.
                </p>
              </div>


              {/* Item 5 */}
              <div className="flex items-start gap-3.5">
                <GreenCheckCircle />
                <p className="font-sans text-sm md:text-[15px] leading-relaxed text-charcoal/80">
                  <span className="font-bold text-charcoal">Small student batches</span> personal
                  attention, not a lecture hall.
                </p>
              </div>

            </div>

            <a
              href="https://pages.razorpay.com/humainchamps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta text-white rounded-full font-semibold px-6 py-3.5 shadow-md hover:shadow-lg transition duration-200 hover:scale-[1.02] active:scale-[0.98] mt-8 flex items-center gap-2 select-none cursor-pointer"
            >
              <span>Enroll to Earn the Certificate</span>
              <svg
                className="h-4.5 w-4.5 stroke-[2.5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

          </div>

          {/* Right Column: framed certificate layout with organic leaf backdrop */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-12 lg:py-0">

            {/* The relative outer wrapper sizing */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-[4/5] flex items-center justify-center select-none">

              {/* Asymmetrical leaf-shaped backdrop in soft warm orange/apricot */}
              <div
                className="absolute -bottom-6 -left-6 w-[90%] h-[90%] bg-[#e7a572] -z-10 shadow-inner rounded-[160px_60px_160px_60px]"
              />

              {/* Solid elegant black photo frame housing the Certificate image */}
              <div className="relative border-[12px] border-[#1d1d1f] bg-[#1d1d1f] rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.01] transition duration-300 w-full h-full flex items-center justify-center">
                <img
                  src="/assets/Website Assets/Certificate-new.png"
                  alt="E- Cell IIT Kharagpur AI Hackathon Certificate Mockup"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
