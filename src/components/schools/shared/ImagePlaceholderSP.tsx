'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ImagePlaceholderSPProps {
  alt: string;
  aspectRatio?: '4/3' | '16/9' | '3/4' | 'square';
  className?: string;
  label?: string;
}

const aspectClasses = {
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-video',
  '3/4': 'aspect-[3/4]',
  square: 'aspect-square',
};

export default function ImagePlaceholderSP({
  alt,
  aspectRatio = '4/3',
  className = '',
  label = 'Image coming soon',
}: ImagePlaceholderSPProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-sage/40 bg-grey/20 ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="schools-shimmer absolute inset-0 opacity-30" />
      <div className="relative px-6 py-8 text-center">
        <svg
          className="mx-auto h-10 w-10 text-sage/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
          />
        </svg>
        <p className="mt-3 font-display text-xs font-bold uppercase tracking-wider text-sage/70">{label}</p>
        <p className="mx-auto mt-1 max-w-[220px] font-sans text-xs leading-snug text-charcoal/45">{alt}</p>
      </div>
    </motion.div>
  );
}
