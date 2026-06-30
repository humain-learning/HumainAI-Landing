'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export default function HeaderFW() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		setMobileMenuOpen(false);
		const el = document.getElementById(id);
		if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
	};

	const navLinks = [
		{ name: 'Six Pillars', id: 'ai-foundations' },
		{ name: 'Comparison', id: 'curriculum' },
		{ name: 'Download', id: 'download' },
	];

  return (
	<header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
	  isScrolled ? 'bg-white shadow-sm border-b border-[#e8efe0]' : 'bg-white'
	}`}>
	  <div className="mx-auto w-full max-w-7xl px-6 py-3 md:px-12 md:py-4 lg:px-16">
		<div className="flex items-center justify-between">

		  {/* Logo */}
		  <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
			<img
			  src="/assets/logo/brain-logo.png"
			  alt="Humain Learning Logo"
			  className="h-12 md:h-16 w-auto object-contain cursor-pointer"
			/>
		  </Link>

		  {/* Desktop Nav */}
		  <nav className="hidden lg:flex items-center gap-8">
			{navLinks.map((link) => (
			  <a
				key={link.id}
				href={`#${link.id}`}
				onClick={(e) => scrollTo(e, link.id)}
				className="font-sans text-sm font-semibold text-charcoal/80 hover:text-sage transition-colors"
			  >
				{link.name}
			  </a>
			))}
		  </nav>

		  {/* CTA + Hamburger */}
		  <div className="flex items-center gap-4">
			<a href="#download" onClick={(e) => scrollTo(e, 'download')} className="hidden md:inline-block">
			  <motion.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className="flex cursor-pointer items-center gap-2 rounded-full bg-sage py-2 px-5 text-white shadow-md transition-all duration-300 hover:bg-[#4a5a3e]"
			  >
				<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
				  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
				</svg>
				<span className="font-display text-xs md:text-sm font-bold tracking-wide">Download free PDF</span>
			  </motion.button>
			</a>

			<button
			  className="lg:hidden p-2 text-charcoal"
			  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
			>
			  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				{mobileMenuOpen
				  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
			  </svg>
			</button>
		  </div>
		</div>
	  </div>

	  {/* Mobile menu */}
	  <AnimatePresence>
		{mobileMenuOpen && (
		  <motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-[#e8efe0] shadow-lg py-4 px-6 flex flex-col gap-4"
		  >
			{navLinks.map((link) => (
			  <a
				key={link.id}
				href={`#${link.id}`}
				onClick={(e) => scrollTo(e, link.id)}
				className="font-sans text-base font-semibold text-charcoal/80 hover:text-sage py-2 border-b border-[#e8efe0]/50"
			  >
				{link.name}
			  </a>
			))}
			<a
			  href="#download"
			  onClick={(e) => scrollTo(e, 'download')}
			  className="w-full text-center mt-2 bg-sage py-3 rounded-full text-white font-bold"
			>
			  Download free PDF
			</a>
		  </motion.div>
		)}
	  </AnimatePresence>
	</header>
  );
}
