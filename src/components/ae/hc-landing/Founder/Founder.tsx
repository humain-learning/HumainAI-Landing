'use client';

import React from 'react';

export default function Founder() {
  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading and Biography */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">

            {/* Harvard Alumnus badge indicator */}
            <div className="inline-block rounded-full border border-sage/60 px-3.5 py-1 text-center bg-white shadow-sm select-none">
              <span className="font-display text-[10.5px] font-extrabold tracking-wider text-[#5e714e] uppercase">
                Harvard Alumnus
              </span>
            </div>

            {/* Name */}
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-charcoal leading-tight tracking-tight mt-4">
              Manit Jain
            </h2>

            {/* Title / Role */}
            <span className="block font-display text-xs sm:text-sm font-extrabold text-[#e7a572] leading-snug uppercase tracking-wider mt-1.5 max-w-md">
              Founder, Humain Learning • Founder, The Heritage Xperiential Learning Schools
            </span>

            {/* Orange Separator line */}
            <div className="h-[2px] w-24 bg-[#e7a572] rounded-full my-6" />

            {/* Biography body copy */}
            <div className="space-y-4 max-w-xl font-sans text-sm sm:text-[15px] leading-relaxed text-charcoal/80">
              <p>
                With over <span className="font-bold text-charcoal">25 years of experience</span> in education, our founder Manit – Harvard Alumnus, has worked with schools, teachers, and students across India. He founded The Heritage Xperiential Learning Schools, one of India's most established K–12 school networks.
              </p>
              <p>
                His expertise in combining <span className="font-bold text-charcoal">pedagogy with technology</span> enables us to design learning journeys that prepare students for the <span className="font-bold text-charcoal">AI-first future</span> while staying grounded in values that matter.
              </p>
            </div>

            {/* Bottom outline stats image */}
            <img
              src="/assets/ae_humain_champs/fondersection.png"
              alt="Manit Jain Stats"
              className="mt-10 w-full max-w-[480px] h-auto object-contain"
            />
            {/* <div className="w-full md:w-3/4 grid grid-cols-3 gap-2 md:gap-4 py-5">
              <div className="flex flex-col text-center aspect-square items-center justify-center w-full p-2 md:p-3 rounded-t-full rounded-bl-full border border-terracotta overflow-hidden">
                <h1 className="font-extrabold text-terracotta text-sm sm:text-lg lg:text-2xl leading-tight">25+ Yrs</h1>
                <span className="font-sans text-[9px] sm:text-[11px] lg:text-xs text-charcoal/80 leading-tight mt-1">Education Leadership Experience</span>
              </div>
              <div className="flex flex-col text-center aspect-square items-center justify-center w-full p-2 md:p-3 rounded-t-full rounded-bl-full border border-terracotta overflow-hidden">
                <h1 className="font-extrabold text-terracotta text-sm sm:text-lg lg:text-2xl leading-tight">1,000+</h1>
                <span className="font-sans text-[9px] sm:text-[11px] lg:text-xs text-charcoal/80 leading-tight mt-1">Students trained in AI</span>
              </div>
              <div className="flex flex-col text-center aspect-square items-center justify-center w-full p-2 md:p-3 rounded-t-full rounded-bl-full border border-terracotta overflow-hidden">
                <h1 className="font-extrabold text-terracotta text-sm sm:text-lg lg:text-2xl leading-tight">Harvard</h1>
                <span className="font-sans text-[9px] sm:text-[11px] lg:text-xs text-charcoal/80 leading-tight mt-1">Education background</span>
              </div>
            </div>  */}

          </div>

          {/* Right Column: Portrait and Backdrop */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-12 lg:py-0 w-full">
            <div className="relative w-full aspect-square max-w-[380px] sm:max-w-[420px] flex items-center justify-center">

              {/* Soft organic green circular backdrop */}
              <div className="absolute w-[92%] h-[92%] bg-[#aac191]/30 rounded-full -z-10" />

              {/* Founder image portrait */}
              <img
                src="/assets/images/Screenshot (417).png"
                alt="Manit Jain Founder Profile"
                className="w-[95%] h-auto object-contain pointer-events-none hover:scale-[1.01] transition duration-500 z-10"
              />



            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
