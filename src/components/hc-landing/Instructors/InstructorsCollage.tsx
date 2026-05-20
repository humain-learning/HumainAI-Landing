'use client';

import React from 'react';

export default function InstructorsCollage() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Text description */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left">
            <div className="h-[3px] w-12 bg-sage rounded-full mb-3" />
            <span className="font-display text-xs font-extrabold tracking-widest text-[#5e714e] uppercase select-none">
              YOUR INSTRUCTORS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal leading-tight mt-2 mb-4 tracking-tight">
              Taught by educators who've been in real classrooms
            </h2>
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed max-w-md">
              Not tech bros who learned AI yesterday. Real educators with 10–20 years of
              experience, now combining classroom expertise with cutting-edge AI skills.
            </p>
          </div>

          {/* Right Column: Pre-composed Instructors Collage Graphic */}
          <div className="lg:col-span-7 flex items-center justify-center relative w-full">
            <div className="relative w-full max-w-[580px] hover:scale-[1.01] transition duration-300 select-none">
              <img
                src="/assets/Website Assets/Instructors.png"
                alt="Humain Champs Instructors Collage"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
