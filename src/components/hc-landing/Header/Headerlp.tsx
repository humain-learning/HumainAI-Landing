'use client';

import React from 'react';
import { motion } from 'motion/react';
type HeaderProps = {
  basePrice: number;
};
export default function Headerlp({ basePrice }: HeaderProps) {
  return (
    <header className=" z-50 w-full bg-white  transition-all duration-300">
      <div className="mx-auto w-full max-w-7xl px-6 py-3 md:px-12 md:py-4 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo/webinarhumanlogo.png"
              alt="Humain Learning Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Right: Seat limit badge and CTA Button */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Seat Limit Badge (Hidden on mobile, shown on md and larger) */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-terracotta/30 bg-[#ffe9d7]/30 px-4 py-2 text-xs font-semibold text-terracotta shadow-sm select-none">
              <span>Only few seats left</span>
            </div>

            {/* Enroll Now Button */}
            <a
              href="https://pages.razorpay.com/humainchamps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex cursor-pointer items-center justify-between gap-2.5 rounded-full bg-terracotta py-1.5 pr-1.5 pl-4 md:pl-5 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
              >
                <span className="font-display text-xs md:text-sm font-bold tracking-wide">
                  Enroll Now
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 font-display text-[10px] md:text-xs font-extrabold text-terracotta border border-terracotta/10">
                	{(basePrice + (basePrice * 0.18)).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                </span>
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
