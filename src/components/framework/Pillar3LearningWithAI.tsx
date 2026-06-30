'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Pillar3LearningWithAI() {
  const tableData = [
    {
      well: "NotebookLM summarises chapter, student compares to textbook",
      badly: "ChatGPT writes the essay, student copies"
    },
    {
      well: "ChatGPT generates practice questions for board exam",
      badly: "ChatGPT answers the board exam questions"
    },
    {
      well: "Student asks \"why\" three times before accepting an answer",
      badly: "Student accepts the first confident answer"
    }
  ];

  return (
    <section id="learning-with-ai" className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
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
            Pillar 3. Learning with AI: using AI as a study partner that sparks curiosity, not as a shortcut
          </motion.h2>
        </div>

        {/* 40-word Snippet */}
        <aside className="bg-[#f9faf7] border-l-4 border-terracotta p-6 rounded-r-2xl mb-10 w-full max-w-3xl shadow-sm">
          <p className="font-sans text-lg md:text-xl text-[#0a1e3f] font-semibold">
            Learning with AI is the third pillar of the Humain framework. Students learn to use NotebookLM, ChatGPT, and Gemini as study partners, not as homework shortcuts. The skill is asking better questions, not getting faster answers.
          </p>
        </aside>

        {/* Body (~280 words) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-lg text-charcoal/80 leading-relaxed font-medium space-y-6 max-w-4xl mb-12"
        >
          <p>
            The goal of this pillar is to navigate the "long middle" frame: the productive space between "I will not touch AI" and "AI did my homework". We teach students how to use AI for <span className="font-bold">summarisation</span>, <span className="font-bold">retrieval</span>, and <span className="font-bold">active recall</span> without compromising their own cognitive effort.
          </p>
          <p>
            The tactics evolve by grade band. Class 6-8 students use AI to generate <span className="font-bold">spaced repetition</span> flashcards. Class 9-10 students use <span className="font-bold">NotebookLM</span> on textbook PDFs to build a closed-system <span className="font-bold">RAG</span> (Retrieval-Augmented Generation) study buddy for CBSE/ICSE board prep. Class 11-12 students use <span className="font-bold">ChatGPT</span> and <span className="font-bold">prompt engineering</span> to interrogate their practice answers against marking schemes.
          </p>
          <p>
            A core competency here is <span className="font-bold">citation hygiene</span>. Students must "show their work" when they use AI assistance, learning how to document their prompts and AI inputs transparently. Before accepting any AI output, students are trained on a four-question protocol: <span className="italic">Where did this come from? Who decided this is true? What is missing? Is this the right kind of answer for my question?</span>
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="w-full max-w-4xl mb-10 overflow-hidden rounded-2xl border border-[#e8efe0] shadow-sm">
          <table className="w-full text-left font-sans text-base">
            <thead className="bg-[#f9faf7] border-b border-[#e8efe0]">
              <tr>
                <th className="px-6 py-4 font-bold text-sage w-1/2">Using AI well</th>
                <th className="px-6 py-4 font-bold text-terracotta w-1/2">Using AI badly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8efe0] bg-white">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#f9faf7]/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-charcoal/90">{row.well}</td>
                  <td className="px-6 py-4 font-medium text-charcoal/70">{row.badly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep-dive Link */}
        <div className="bg-[#f9faf7] rounded-xl p-6 border border-[#e8efe0] w-full max-w-4xl">
          <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-2">Deep-dive</h4>
          <Link 
            href="/framework/learning-with-ai" 
            className="font-semibold text-sage hover:text-[#4a5a3e] transition-colors inline-flex items-center text-lg"
          >
            Read the full Pillar 3: Learning with AI page
            <svg className="ml-2 w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
