'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function HeaderPH() {
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
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Why AI', id: 'why-ai' },
    { name: 'Safety', id: 'safety' },
    { name: 'Courses', id: 'courses' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm border-b border-[#e8efe0]' : 'bg-white'
    }`}>
      <div className="mx-auto w-full max-w-7xl px-6 py-3 md:px-12 md:py-4 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/assets/logo/webinarhumanlogo.png"
                alt="Humain Learning Logo"
                className="h-10 md:h-12 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollTo(e, link.id)}
                className="font-sans text-sm font-semibold text-charcoal/80 hover:text-[#aac191] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: CTA and Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://pages.razorpay.com/humainchamps"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex cursor-pointer items-center justify-between gap-2.5 rounded-full bg-terracotta py-2 px-5 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
              >
                <span className="font-display text-sm md:text-base font-bold tracking-wide">
                  Enroll Now
                </span>
              </motion.button>
            </a>
            
            <a
              href="/resources/parents-guide"
              className="inline-block md:hidden bg-[#aac191] text-white text-sm font-bold px-4 py-2 rounded-full"
            >
              Get Guide
            </a>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-[#e8efe0] shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollTo(e, link.id)}
              className="font-sans text-base font-semibold text-charcoal/80 hover:text-[#aac191] py-2 border-b border-[#e8efe0]/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://pages.razorpay.com/humainchamps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-2 bg-terracotta py-3 rounded-full text-white font-bold"
          >
            Enroll in Humain Champs
          </a>
        </div>
      )}
    </header>
  );
}
