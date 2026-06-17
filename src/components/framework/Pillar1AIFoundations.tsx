'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Pillar1AIFoundations() {
  const tableData = [
    {
      grade: "Class 3 to Class 5",
      learn: "Pattern recognition, simple classifiers, \"AI is not a brain\"",
      tools: "Teachable Machine, NotebookLM (read-only)"
    },
    {
      grade: "Class 6 to Class 8",
      learn: "Training data, why models invent facts, bias",
      tools: "ChatGPT, Gemini, classifier exercises"
    },
    {
      grade: "Class 9 to Class 10",
      learn: "Model evaluation, prompt iteration",
      tools: "ChatGPT, Gemini, Claude, comparison rubrics"
    },
    {
      grade: "Class 11 to Class 12",
      learn: "Model cards, architecture basics, prompt engineering",
      tools: "Multiple LLMs, NotebookLM, Perplexity"
    }
  ];

  return (
    <section id="ai-foundations" className="relative w-full py-16 md:py-24 bg-white border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 flex flex-col items-start">
        
        {/* Header */}
        <div className="w-full flex items-center gap-4 mb-6">
          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#5e714e] mt-1" />
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0a1e3f]"
          >
            Pillar 1. AI Foundations: knowing what AI is, how it works, and where its limits lie
          </motion.h2>
        </div>

        {/* 40-word Snippet */}
        <aside className="bg-[#f9faf7] border-l-4 border-terracotta p-6 rounded-r-2xl mb-10 w-full max-w-3xl">
          <p className="font-sans text-lg md:text-xl text-[#0a1e3f] font-semibold">
            AI Foundations is the first pillar of the Humain AI Literacy Framework. It teaches students what AI is, how machine learning models produce answers, and where AI fails. Foundation for every other pillar.
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
            AI Foundations is the technical literacy that every other pillar depends on. Without a concrete understanding of how a probability machine works, children mistake an AI's confidence for accuracy. Humain teaches them to look under the hood.
          </p>
          <p>
            The concept coverage is rigorous but accessible. We demystify <span className="font-bold">training data</span>, distinguish between <span className="font-bold">supervised learning</span> and unsupervised approaches, and explain what <span className="font-bold">model parameters</span> actually do. Students learn how <span className="font-bold">large language models</span> process <span className="font-bold">tokens</span>, why <span className="font-bold">model hallucination</span> occurs, and how <span className="font-bold">bias</span> infects training data. We clarify the difference between <span className="font-bold">classification</span> (using a <span className="font-bold">classifier</span>) and <span className="font-bold">generative AI</span> vs predictive AI.
          </p>
          <p>
            Learning happens through hands-on activities tailored by grade band. Class 3-5 students train a teachable machine on their own drawings. Class 6-8 students intentionally break a classifier and explain why it failed. Class 9-10 students prompt <span className="font-bold">ChatGPT</span>, <span className="font-bold">Gemini</span>, and <span className="font-bold">Claude</span> simultaneously and compare the outputs. Class 11-12 students read a live model card and critique its safety parameters.
          </p>
          <p>
            This pillar directly maps to the OECD's "Technical Literacy", UNESCO's "Conceptual Understanding", and the EU's "AI Understanding".
          </p>
        </motion.div>

        {/* Grade-band Table */}
        <div className="w-full max-w-4xl mb-10 overflow-x-auto rounded-2xl border border-[#e8efe0] shadow-sm">
          <table className="w-full text-left font-sans text-sm md:text-base whitespace-nowrap md:whitespace-normal">
            <thead className="bg-[#f9faf7] border-b border-[#e8efe0]">
              <tr>
                <th className="px-6 py-4 font-bold text-[#0a1e3f] w-1/4">Grade band</th>
                <th className="px-6 py-4 font-bold text-[#0a1e3f] w-2/4">What students learn</th>
                <th className="px-6 py-4 font-bold text-[#0a1e3f] w-1/4">Tools used</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8efe0] bg-white">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#f9faf7]/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-charcoal">{row.grade}</td>
                  <td className="px-6 py-4 text-charcoal/80">{row.learn}</td>
                  <td className="px-6 py-4 text-charcoal/80">{row.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
          <div className="bg-[#f9faf7] rounded-xl p-6 border border-[#e8efe0] flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-2">Curriculum Hook</h4>
            <Link 
              href="/curriculum/cbse-ai-417" 
              className="font-semibold text-terracotta hover:text-[#d6925c] transition-colors inline-flex items-center"
            >
              CBSE Artificial Intelligence subject (codes 417 and 843)
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-[#f9faf7] rounded-xl p-6 border border-[#e8efe0] flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-2">Deep-dive</h4>
            <Link 
              href="/framework/ai-foundations" 
              className="font-semibold text-[#5e714e] hover:text-[#4a5a3e] transition-colors inline-flex items-center"
            >
              Read the full Pillar 1: AI Foundations page
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
