'use client';
import React, { useState } from 'react';
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

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
  className = '',
  openedTabColor,
  closedTabColor,
  isCustomTabColor = false,
  sideIndicatiorClassName,
  dividerClassName,
  showDivider,
  showArrows,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (idx: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(idx)) {
        return prev.filter((i) => i !== idx);
      } else {
        return allowMultipleOpen ? [...prev, idx] : [idx];
      }
    });
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div
            key={idx}
            className={cn(
              'relative overflow-hidden rounded-xl',
              isCustomTabColor
                ? isOpen
                  ? openedTabColor
                  : closedTabColor
                : isOpen
                  ? 'bg-primary-color'
                  : 'bg-secondary-color'
            )}
          >
            <button
              type="button"
              className={`${!isOpen ? 'py-4' : ''} flex w-full cursor-pointer items-center justify-between px-4 pt-4 pl-4 pr-4 transition-all duration-300 ease-in-out focus:outline-none`}
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${idx}`}
            >
              <span className="text-left text-lg font-semibold text-[#011813]">
                {item.title}
              </span>
              {showArrows && (
                <span className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF2E4] text-[#4B6B4D]">
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v14M5 12h14"
                    />
                  </svg>
                </span>
              )}
            </button>

            <div
              id={`accordion-content-${idx}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{}}
            >
              <div className="max-h-80 overflow-y-auto px-4 pt-0 pb-4 pl-8 text-gray-700">
                {item.content}
              </div>
            </div>
            {sideIndicatiorClassName && sideIndicatiorClassName !== 'hidden' ? (
              <div
                className={cn('absolute top-2 bottom-2 left-3 w-1 rounded-2xl bg-white', sideIndicatiorClassName)}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
