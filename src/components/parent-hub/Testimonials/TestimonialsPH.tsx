'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Nitin',
    relation: 'Parent of Aradhya',
    quote: 'The world is moving towards AI, and Aradhya was truly keen to learn. Though I know about AI tools, it was amazing to see her guide me. This course is a great step that we have taken. I deeply appreciate the guidance and thoughtful design made specifically for kids.',
  },
  {
    name: 'Dr. Tshering',
    relation: "Ayesha's Parent",
    quote: 'I am grateful for this well-organised workshop that introduced children to AI. It is encouraging to see platforms like Humain Learning taking the lead in educating the next generation to utilise AI responsibly and safely. The structured modules and creative exercises made the experience meaningful.',
  },
  {
    name: 'Mrs. Meenakshi Rao',
    relation: 'Bengaluru',
    quote: 'My child is now teaching me about AI! What I really appreciate about Humain Learning trainers is that they did not just focus on the tools, but also on how and how not to use AI. The emphasis on both the positive and negative aspects of relying on AI was very reassuring as a parent.',
  },
  {
    name: 'Mr. Rajesh Malhotra',
    relation: 'New Delhi',
    quote: "My child's learning style has changed after this course. She now uses NotebookLM and other AI tools confidently, which are helping her study better. She even built her own study buddy agent during the program.",
  },
  {
    name: 'Mrs. Farah Khan',
    relation: 'Mumbai',
    quote: 'My child created a beautiful family video which we shared in our family group. At the same time, he is also reminding everyone in the family not to share personal photos or videos publicly. It is wonderful to see that he not only learned creative uses of AI but also the importance of safety.',
  },
];

export default function TestimonialsPH() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-extrabold leading-[1.15] tracking-tight text-charcoal mb-2"
            >
              Humain Learning AI reviews: rated 4.4 stars by 300-plus Indian families
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-sm text-charcoal/60"
            >
              Lifted verbatim. Each parent is real and has agreed to be named.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/parents/humain-learning-ai-reviews"
              className="inline-flex items-center text-[#aac191] font-semibold hover:text-terracotta transition-colors group text-sm whitespace-nowrap"
            >
              Read all reviews
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * idx }}
              className="break-inside-avoid bg-[#f9faf7] rounded-2xl p-5 border border-[#e8efe0] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-[#e7a572]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans text-sm text-charcoal/90 leading-relaxed italic mb-4">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#aac191]/10 border border-[#e8efe0] flex items-center justify-center text-[#aac191] font-display font-bold text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-charcoal text-xs">{t.name}</h4>
                  <p className="font-sans text-[10px] text-charcoal/50">{t.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
