'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex h-[62px] items-center justify-between px-5 md:px-16 bg-white/95 backdrop-blur-md border-b border-[#E6E6E6] transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.07)]' : ''
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image src="/assets/logo/brain-logo.png" alt="Humain Learning Logo" width={240} height={60} className="object-contain w-40 md:w-52 h-auto" priority />
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="#agenda"
          className="hidden sm:block font-sans text-[0.85rem] font-medium text-[#555555] transition-colors duration-150 hover:text-[#333333]"
        >
          What They'll Learn
        </Link>
        <Link
          href="#faq"
          className="hidden sm:block font-sans text-[0.85rem] font-medium text-[#555555] transition-colors duration-150 hover:text-[#333333]"
        >
          FAQ
        </Link>
        <Link
          href="#book"
          className="inline-flex items-center gap-2 font-display font-extrabold border-none cursor-pointer rounded-md transition-all duration-150 hover:-translate-y-[1px] bg-[#E7A572] text-white px-7 py-3.5 text-[0.9rem] shadow-[0_2px_14px_rgba(231,165,114,0.3)] hover:bg-[#C97D49] hover:shadow-[0_4px_20px_rgba(231,165,114,0.4)]"
        >
          Book Your Free Slot
        </Link>
      </div>
    </nav>
  );
}
