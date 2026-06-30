'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Pillar4CreatingWithAI() {
  return (
    <section id="creating-with-ai" className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 flex flex-col items-start">
        
        {/* Header */}
        <div className="w-full flex items-center gap-4 mb-6">
          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-sage mt-1" />
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0a1e3f]"
          >
            Pillar 4. Creating with AI: turning imagination into images, videos, stories, and projects. Human-first, AI-second.
          </motion.h2>
        </div>

        {/* 40-word Snippet */}
        <aside className="bg-white border-l-4 border-terracotta p-6 rounded-r-2xl mb-10 w-full max-w-3xl shadow-sm">
          <p className="font-sans text-lg md:text-xl text-[#0a1e3f] font-semibold">
            Creating with AI is the fourth pillar of the Humain framework. Students use Midjourney, Canva AI, ElevenLabs, Runway, and Suno to make images, video, voice, and music. The brief is human. The judgement is human. The tools are AI.
          </p>
        </aside>

        {/* Body (~250 words) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium space-y-6 max-w-4xl mb-12"
        >
          <p>
            This pillar shifts students from consumers of <span className="font-bold">generative AI</span> to directors of it. We teach <span className="font-bold">prompt engineering</span> not as a coding exercise, but as a discipline of creative articulation. The tool stack is professional-grade: <span className="font-bold">Midjourney</span> and <span className="font-bold">Canva AI</span> for <span className="font-bold">image generation</span>, <span className="font-bold">Krea</span> for real-time visual exploration, <span className="font-bold">Suno</span> for music, <span className="font-bold">ElevenLabs</span> for <span className="font-bold">voice synthesis</span>, and <span className="font-bold">Runway</span> for <span className="font-bold">video generation</span>.
          </p>
          <p>
            The capstone of this module is a one-minute AI-generated video commercial. Students learn that the AI does the rendering, but the human does the work. They are graded on the brief writing process, their creative direction, and their editorial judgement in assembling the final cut.
          </p>
          <p>
            We heavily emphasise <span className="font-bold">AI ethics in creative work</span>. Students learn the mechanics of <span className="font-bold">attribution</span> and credit—understanding when a piece of <span className="font-bold">derivative work</span> crosses the line, when they must declare "made with AI", and when the AI is simply a brush in their hand.
          </p>
          <p>
            Crucially, we root this in the Indian creative context. Students practice generating regional language voice work, culturally accurate festival visuals, and prompts that navigate Western-biased training data to produce authentically Indian output.
          </p>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
          <div className="bg-white rounded-xl p-6 border border-[#e8efe0] shadow-sm flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-2">Student creation showcase</h4>
            <Link 
              href="/student-stories" 
              className="font-semibold text-terracotta hover:text-[#d6925c] transition-colors inline-flex items-center text-sm md:text-base"
            >
              See real student AI creations from Humain Champs
              <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-[#e8efe0] shadow-sm flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-2">Deep-dive</h4>
            <Link 
              href="/framework/creating-with-ai" 
              className="font-semibold text-sage hover:text-[#4a5a3e] transition-colors inline-flex items-center text-sm md:text-base"
            >
              Read the full Pillar 4: Creating with AI page
              <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
