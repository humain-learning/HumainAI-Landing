'use client';

import React from 'react';

export default function InstructorsCollage() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center gap-12">
          
          {/* Top Section: Heading and Text description */}
          <div className="flex flex-col justify-center items-center text-center max-w-3xl">
            <div className="h-[3px] w-12 bg-sage rounded-full mb-3 mx-auto" />
            <span className="font-display text-xs font-extrabold tracking-widest text-[#5e714e] uppercase select-none">
              YOUR INSTRUCTORS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal leading-tight mt-2 mb-4 tracking-tight">
              Taught by educators who've been in real classrooms
            </h2>
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              Not tech bros who learned AI yesterday. <br className="hidden md:block" />
              Real educators with 10–20 years of experience, now combining classroom expertise with cutting-edge AI skills.
            </p>
          </div>

          {/* Bottom Section: Pre-composed Instructors Collage Graphic */}
          <div className="flex items-center justify-center relative w-full">
            <div className="relative w-full max-w-3xl hover:scale-[1.01] transition duration-300 select-none">
              <img
                src="/assets/images/Instructorslp.png"
                alt="Humain Champs Instructors Collage"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
