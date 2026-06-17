'use client';

import React from 'react';

export default function AuthorReviewerStripPH() {
  return (
    <section className="w-full bg-white border-y border-[#e8efe0] py-6">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-6">
        
        {/* Avatars */}
        <div className="flex -space-x-4">
          <img 
            src="/assets/images/e3.png" 
            alt="Ankur Dahiya, Delhi Technological University graduate, Program Head at Humain Learning AI and author of the parent hub content." 
            className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm bg-white"
          />
          <img 
            src="/assets/images/e5.png" 
            alt="Dr. Tapaswini Sahu, PhD Educational Psychology JNU and M.Phil Cambridge, Academic Director at Humain Learning AI." 
            className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm bg-white"
          />
        </div>

        {/* Text */}
        <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed text-center md:text-left flex-1">
          <strong>Authored by Ankur Dahiya</strong>, Program Head, Delhi Technological University graduate, with eight years of CBSE classroom teaching. 
          {' '}<strong>Reviewed by Dr. Tapaswini Sahu</strong>, PhD Educational Psychology JNU and M.Phil Cambridge, Academic Director.
        </p>

      </div>
    </section>
  );
}

