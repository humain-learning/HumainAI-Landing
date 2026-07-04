'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Enrollment = {
  name: string;
  batch: string;
  city: string;
  initial: string;
  color: string;
}

type Batch = {
	id: number;
	name: string;
}

const MOCK_ENROLLMENTS: Enrollment[] = [
  { name: 'Ajay G.', batch: 'enrolled in the Evening Batch', city: '- Ahmedabad', initial: 'A', color: 'bg-[#7c2d12]' },
  { name: 'Aryan M.', batch: 'enrolled in the Morning Batch', city: '- Mumbai', initial: 'A', color: 'bg-[#5e714e]' },
  { name: 'Riya S.', batch: 'enrolled in the Evening Batch', city: '- Bengaluru', initial: 'R', color: 'bg-[#b45309]' },
  { name: 'Kabir K.', batch: 'enrolled in the Afternoon Batch', city: '- New Delhi', initial: 'K', color: 'bg-[#1e3a8a]' },
  { name: 'Diya N.', batch: 'enrolled in the Evening Batch', city: '- Pune', initial: 'D', color: 'bg-[#6b21a8]' },
  { name: 'Aarav P.', batch: 'enrolled in the Morning Batch', city: '- Hyderabad', initial: 'A', color: 'bg-[#0369a1]' },
  { name: 'Ananya R.', batch: 'enrolled in the Evening Batch', city: '- Chennai', initial: 'A', color: 'bg-[#be185d]' },
  { name: 'Vivaan J.', batch: 'enrolled in the Afternoon Batch', city: '- Kolkata', initial: 'V', color: 'bg-[#0f766e]' },
];

export function EnrolledPopup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show the first popup after 3 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimeout);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;
    if (!isVisible) return;

    // Keep it visible for 5 seconds, then hide it
    const visibleTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(visibleTimeout);
  }, [isVisible, isDismissed]);

  useEffect(() => {
    if (isDismissed) return;
    if (isVisible) return;

    // Wait 60 seconds when hidden before showing the next one
    const hiddenTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_ENROLLMENTS.length);
      setIsVisible(true);
    }, 60000);

    return () => clearTimeout(hiddenTimeout);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = MOCK_ENROLLMENTS[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="fixed bottom-[110px] left-4 md:bottom-24 md:left-6 z-[10010] flex items-center gap-3.5 rounded-2xl border border-[#ece4df] bg-white p-3.5 pr-8 shadow-xl shadow-charcoal/10 border-l-[4px] border-l-[#5e714e] max-w-[280px] md:max-w-[320px] pointer-events-auto"
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            className="absolute top-2 right-2 rounded-full p-0.5 text-charcoal/30 hover:text-charcoal/60 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Dismiss notification"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Avatar */}
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white ${current.color}`}>
            {current.initial}
          </div>

          {/* Content */}
          <div className="flex flex-col select-none">
            <span className="font-display text-sm font-bold text-charcoal leading-tight">
              {current.name}
            </span>
            <span className="font-sans text-xs text-charcoal/80 leading-snug">
              {current.batch}
            </span>
            <span className="font-sans text-xs text-charcoal/50 leading-snug mt-0.5">
              {current.city}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
