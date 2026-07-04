'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/utils';

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultipleOpen?: boolean;
  className?: string;
  openedTabColor?: string;
  closedTabColor?: string;
  isCustomTabColor?: boolean;
  sideIndicatiorClassName?: string;
  dividerClassName?: string;
  showDivider?: boolean;
  showArrows?: boolean;
};

const AutoScrollAccordion: React.FC<AccordionProps> = ({
  items,
  className = '',
  sideIndicatiorClassName,
  showArrows,
}) => {
  const ref = useRef(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start center', 'end center'],
    offset: ['start 60%', 'end 40%'],
  });

  return (
    <>
      <section ref={ref} className="relative h-[150vh]">
        {/* Sticky wrapper */}
        <div className={cn('sticky top-5 w-full', className)}>
          <div className="space-y-4">
            {items.map((item, idx) => {
              const segmentStart = idx / items.length;
              const segmentEnd = (idx + 1) / items.length;

              // const fadeInStart = Math.max(0, segmentStart - 0.05);
              // const fadeInEnd = segmentStart + 0.1;
              // const fadeOutStart = segmentEnd - 0.1;
              // const fadeOutEnd = Math.min(1, segmentEnd + 0.05);

              const fadeInStart = Math.max(0, segmentStart - 0.08);
              const fadeInEnd = segmentStart + 0.15;
              const fadeOutStart = segmentEnd - 0.15;
              const fadeOutEnd = Math.min(1, segmentEnd + 0.08);

              const openProgress = useTransform(
                scrollYProgress,
                [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
                [0, 1, 1, 0],
                {
                  clamp: true,
                }
              );

              const maxHeight = useTransform(openProgress, [0, 1], [0, 200]);
              const bgColor = useTransform(
                openProgress,
                [0, 0.5, 1],
                ['#e9a772', '#aac191', '#aac191']
              );

              // Arrow rotation based on open state
              const arrowRotation = useTransform(
                openProgress,
                [0, 1],
                [0, 180]
              );

              return (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    backgroundColor: bgColor,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing curve
                  }}
                >
                  {/* Always visible title */}
                  <div className="relative flex h-full cursor-pointer items-center justify-between px-8 py-4">
                    <div className="flex h-full items-center gap-2">
                      <h3 className="text-left text-lg font-medium">
                        {item.title}
                      </h3>
                    </div>

                    {!showArrows && (
                      <motion.svg
                        className={`rotate-0'} h-5 w-5 transform transition-transform duration-300`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          rotate: arrowRotation,
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    )}
                  </div>

                  {/* Expanding content */}
                  <motion.div
                    style={{
                      opacity: openProgress,
                      // maxHeight,
                      maxHeight,
                      // maxHeight: opacity ? '384px' : '0px',
                    }}
                    className="overflow-hidden"
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="px-4 pt-0 pb-4 pl-8 text-gray-700">
                      {item.content}
                    </div>
                  </motion.div>

                  <div
                    className={cn(
                      'absolute top-2 bottom-2 left-3 w-2 rounded-2xl bg-white', // h-full w-[8px] rounded-full bg-[#AAC191]
                      sideIndicatiorClassName
                    )}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoScrollAccordion;
