'use client';

import React from 'react';

export default function AuthorStripSP() {
  return (
    <section className="w-full bg-[#f9faf7] border-y border-[#e8efe0] py-6">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-6">
        
        {/* Avatars */}
        <div className="flex -space-x-4 flex-shrink-0">
          <img 
            src="/assets/images/e3.png" 
            alt="Manit Jain, M.Ed Harvard, co-founder of Humain Learning AI and co-founder of Heritage Xperiential Learning Schools." 
            className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm bg-white"
          />
          <img 
            src="/assets/images/e1.png" 
            alt="Dr. Tapaswini Sahu, PhD Educational Psychology JNU and M.Phil Cambridge, Academic Director at Humain Learning AI." 
            className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm bg-white"
          />
        </div>

        {/* Text */}
        <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed text-center md:text-left flex-1">
          <strong>Authored by Manit Jain</strong>, Co-founder of Humain Learning AI, M.Ed Harvard Graduate School of Education, co-founder of Heritage Xperiential Learning Schools, Chair of the FICCI ARISE School Education Committee, NEP 2020 advisor. 
          {' '}<strong>Reviewed by Dr. Tapaswini Sahu</strong>, PhD Educational Psychology JNU, M.Phil Cambridge.
        </p>

      </div>
    </section>
  );
}
