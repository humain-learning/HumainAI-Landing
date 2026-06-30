'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function ResearchFoundations() {
  const citations = [
    {
      author: "OECD",
      year: "2023",
      title: "OECD AI Literacy Framework",
      publisher: "Organisation for Economic Co-operation and Development, Paris"
    },
    {
      author: "UNESCO",
      year: "2023",
      title: "AI Competency Framework for Students",
      publisher: "United Nations Educational, Scientific and Cultural Organization, Paris"
    },
    {
      author: "European Commission",
      year: "2022",
      title: "AI Literacy Framework",
      publisher: "Directorate-General for Education, Youth, Sport and Culture, Brussels"
    },
    {
      author: "Goleman, D.",
      year: "1995",
      title: "Emotional Intelligence: Why It Can Matter More Than IQ",
      publisher: "Bantam Books, New York"
    },
    {
      author: "Flavell, J. H.",
      year: "1979",
      title: "Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry",
      publisher: "American Psychologist, 34(10), 906–911"
    },
    {
      author: "Csikszentmihalyi, M.",
      year: "1996",
      title: "Creativity: Flow and the Psychology of Discovery and Invention",
      publisher: "Harper Collins, New York"
    },
    {
      author: "Sahu, T.",
      year: "2024",
      title: "Metacognitive Awareness in Adolescent Learning in Indian Secondary Schools",
      publisher: "Unpublished doctoral dissertation, Jawaharlal Nehru University, New Delhi"
    },
    {
      author: "Ministry of Education, Government of India",
      year: "2020",
      title: "National Education Policy 2020",
      publisher: "Ministry of Education, New Delhi"
    },
    {
      author: "NCERT",
      year: "2023",
      title: "National Curriculum Framework for School Education 2023",
      publisher: "National Council of Educational Research and Training, New Delhi"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f9faf7] border-b border-[#e8efe0]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12">

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1e3f] mb-4"
          >
            Research foundations and academic references
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto"
          >
            The Humain framework is built on nine primary academic and policy sources. The full bibliography is in the 32-page PDF.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-[#e8efe0] shadow-sm p-8 md:p-10"
        >
          <ol className="space-y-5">
            {citations.map((c, idx) => (
              <li key={idx} className="flex gap-4 group">
                <span className="flex-shrink-0 font-display font-bold text-sage/40 text-sm mt-1 w-5 text-right">
                  {idx + 1}.
                </span>
                <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                  <span className="font-bold text-charcoal">{c.author}</span> ({c.year}). <em>{c.title}</em>. {c.publisher}.
                </p>
              </li>
            ))}
          </ol>
        </motion.div>

      </div>
    </section>
  );
}
