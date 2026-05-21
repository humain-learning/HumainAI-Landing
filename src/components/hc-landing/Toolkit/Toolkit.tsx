'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

// Custom Line-Art Teacher/Presenter Icon in white
const PresenterIcon = () => (
  <svg
    className="h-12 w-12 text-white shrink-0 opacity-90"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head and glasses */}
    <circle cx="50" cy="35" r="12" stroke="currentColor" strokeWidth="2.5" />
    <path d="M42 35H58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="45" cy="35" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="55" cy="35" r="3.5" stroke="currentColor" strokeWidth="2" />
    
    {/* Shoulders and Body */}
    <path
      d="M26 78C26 65 34 58 46 58H54C66 58 74 65 74 78"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Presentation Board / Pointer */}
    <path d="M78 28V68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M68 48H88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M64 64L76 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Floating ideas / stars */}
    <path d="M22 34L25 37L22 40L19 37Z" fill="currentColor" opacity="0.7" />
    <circle cx="32" cy="22" r="2" fill="currentColor" opacity="0.8" />
  </svg>
);

// High-fidelity logos rendered directly from the company's official SVG assets in public/assets/images/tools/
const LOGOS_ROW_1 = [
  { name: 'Gemini', src: '/assets/images/tools/gemini.svg' },
  { name: 'Perplexity', src: '/assets/images/tools/perplexity.svg' },
  { name: 'ChatGPT', src: '/assets/images/tools/chatgpt.svg' },
  { name: 'Grok', src: '/assets/images/tools/grok.svg' },
  
];

const LOGOS_ROW_2 = [
  { name: 'n8n', src: '/assets/images/tools/n8n.svg' },
  { name: 'Runway', src: '/assets/images/tools/runway.svg' },
  { name: 'NotebookLM', src: '/assets/images/tools/notebooklm.svg' },
  { name: 'Krea', src: '/assets/images/tools/krea.svg' },
  { name: 'Suno', src: '/assets/images/tools/suno.svg' },
];

export default function Toolkit() {
  return (
    <section className="relative w-full overflow-hidden bg-terracotta py-16 md:py-24">
      {/* Decorative background grid/dots in white with low opacity */}
      <div className="absolute inset-0 -z-10 opacity-[0.05]" 
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 text-center">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center space-y-3.5 mb-12">
          <div className="h-[3px] w-12 bg-white rounded-full" />
          <span className="font-display text-xs font-extrabold tracking-widest !text-white/90">
            THE TOOLKIT
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight !text-white sm:text-4xl md:text-5xl max-w-3xl">
            15+ AI tools your child will master
          </h2>
          <p className="font-sans text-sm md:text-base !text-white/85 max-w-2xl">
            Not just "learn about AI" actually use these tools to create, research, build, and automate.
          </p>
        </div>

        {/* Translucent Banner Card (Zero Coding) */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-white/[0.07] p-6 md:p-8 text-left backdrop-blur-md mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <PresenterIcon />
            <div className="flex flex-col space-y-1">
              <h3 className="font-display text-lg md:text-xl font-extrabold !text-white">
                No coding. No maths. No technical background needed.
              </h3>
              <p className="font-sans text-sm !text-white/80 leading-relaxed">
                If your child can use a smartphone and a laptop, they are ready for Humain Champs. 
                We start from absolute zero.
              </p>
            </div>
          </div>
        </div>

        {/* Double Row Moving Logos Marquee */}
        <div className="space-y-8 md:space-y-12">
          
          {/* Row 1: Left sliding banner */}
          <div className="relative w-full overflow-hidden">
            <Marquee
              gradient={true}
              gradientColor="#e7a572"
              gradientWidth={80}
              speed={45}
              className="py-1 overflow-hidden"
            >
              <div className="flex items-center overflow-hidden">
                {LOGOS_ROW_1.map((logo) => (
                  <div key={logo.name} className="mx-10 flex items-center justify-center select-none">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95 transition-opacity duration-200 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Row 2: Right sliding banner */}
          <div className="relative w-full overflow-hidden">
            <Marquee
              gradient={true}
              gradientColor="#e7a572"
              gradientWidth={80}
              speed={40}
              direction="right"
              className="py-1 overflow-hidden"
            >
              <div className="flex items-center overflow-hidden">
                {LOGOS_ROW_2.map((logo) => (
                  <div key={logo.name} className="mx-10 flex items-center justify-center select-none">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95 transition-opacity duration-200 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

        </div>

      </div>
    </section>
  );
}
