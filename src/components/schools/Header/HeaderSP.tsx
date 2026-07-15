'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import '../shared/schools.css';

export default function HeaderSP() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Why Now', id: 'why-now' },
    { name: 'Curriculum', id: 'curriculum' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b border-grey bg-white/95 shadow-sm backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-3 md:px-12 md:py-4 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.img
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                src="/assets/logo/webinarhumanlogo.png"
                alt="Humain Learning Logo"
                className="h-10 w-auto cursor-pointer object-contain md:h-12"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollTo(e, link.id)}
                className="schools-nav-link font-sans text-sm font-semibold text-charcoal/80 transition-colors hover:text-sage"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="/book-a-demo" className="hidden md:inline-block">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group flex cursor-pointer items-center justify-between gap-2.5 rounded-full bg-terracotta px-5 py-2 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:brightness-95 hover:shadow-lg hover:shadow-terracotta/30"
              >
                <span className="font-display text-xs font-bold tracking-wide md:text-sm">Book a demo</span>
              </motion.button>
            </a>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 text-charcoal lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full w-full overflow-hidden border-b border-grey bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={`#${link.id}`}
                  onClick={(e) => scrollTo(e, link.id)}
                  className="border-b border-grey/50 py-2 font-sans text-base font-semibold text-charcoal/80 transition-colors hover:text-sage"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="/book-a-demo"
                className="mt-2 w-full rounded-full bg-terracotta py-3 text-center font-bold text-white transition-all hover:brightness-95"
              >
                Book a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
