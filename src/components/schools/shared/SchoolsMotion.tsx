'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export const spViewport = { once: true, margin: '-60px' as const };

export function MotionCard({
  children,
  className = '',
  delay = 0,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -6, transition: { duration: 0.2 } } : undefined}
      viewport={spViewport}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionHeading({
  children,
  className = '',
  delay = 0,
  as: Tag = 'h2',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3';
}) {
  const Component = motion[Tag];
  return (
    <Component
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={spViewport}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

type ButtonVariant = 'sage' | 'terracotta' | 'outline';

const buttonStyles: Record<ButtonVariant, string> = {
  sage:
    'bg-sage text-white shadow-lg shadow-sage/25 hover:brightness-95 hover:shadow-xl hover:shadow-sage/30',
  terracotta:
    'bg-terracotta text-white shadow-lg shadow-terracotta/25 hover:brightness-95 hover:shadow-xl hover:shadow-terracotta/30',
  outline:
    'border-2 border-grey bg-white text-charcoal hover:border-sage hover:bg-grey/20',
};

export function SPButton({
  href,
  children,
  variant = 'sage',
  className = '',
  size = 'md',
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass =
    size === 'lg' ? 'px-8 py-4 text-lg' : size === 'sm' ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base';

  return (
    <Link href={href} className={className}>
      <motion.span
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex w-full items-center justify-center rounded-full font-sans font-bold transition-all duration-300 sm:w-auto ${sizeClass} ${buttonStyles[variant]}`}
      >
        {children}
      </motion.span>
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`inline-flex items-center text-sage font-semibold transition-colors hover:text-terracotta group text-sm ${className}`}>
      {children}
      <svg
        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  );
}

export function DecorativeBlobs() {
  return (
    <>
      <div className="pointer-events-none absolute top-0 right-0 -mr-24 -mt-24 h-[420px] w-[420px] rounded-full bg-sage/15 blur-3xl schools-blob" />
      <div className="pointer-events-none absolute bottom-0 left-0 -ml-24 -mb-24 h-[320px] w-[320px] rounded-full bg-terracotta/12 blur-3xl schools-blob-delayed" />
    </>
  );
}

export function TimelineDot({ active = false }: { active?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={spViewport}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`relative h-4 w-4 rounded-full border-4 border-white ${active ? 'bg-terracotta schools-pulse-ring' : 'bg-sage'}`}
    />
  );
}
