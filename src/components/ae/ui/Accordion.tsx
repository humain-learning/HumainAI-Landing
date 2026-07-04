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
              'relative overflow-hidden rounded-2xl',
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
              className={`${!isOpen ? 'py-4' : ''} flex w-full cursor-pointer items-center justify-between px-4 pt-4 pl-8 transition-all duration-300 ease-in-out focus:outline-none`}
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${idx}`}
            >
              <span className="text-left text-lg font-medium">
                {item.title}
              </span>
              {showArrows && (
                <svg
                  className={`h-5 min-w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
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
            <div
              className={cn(
                'absolute top-2 bottom-2 left-3 w-1 rounded-2xl bg-white',
                sideIndicatiorClassName,
                isOpen ? 'h-11/12' : ''
              )}
            />
            {showDivider && (
              <div className={cn('h-[0.5px] w-full', dividerClassName)} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
