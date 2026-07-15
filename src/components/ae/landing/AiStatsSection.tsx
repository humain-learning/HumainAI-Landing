'use client';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'motion/react';

const STATS_LIST = [
  {
    title: 'Students Trained',
    value: 500,
    symbol: '+',
  },
  {
    title: 'Course Completion Rate',
    value: 95,
    symbol: '%',
  },
  {
    title: 'Improved Academic Performance',
    value: 87,
    symbol: '%',
  },
  {
    title: 'Responsible AI Usage',
    value: 100,
    symbol: '%',
  },
];

type StatsCardProps = {
  title: string;
  value: number;
  isEven: boolean;
  numberSymbol: string;
};

const StatCard = ({ title, value, isEven, numberSymbol }: StatsCardProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref} className="col-span-1">
      <div className="flex items-end">
        <motion.h3
          className={cn(
            'text-5xl font-semibold',
            isEven ? 'text-primary-color' : 'text-secondary-color'
          )}
        >
          {rounded}
        </motion.h3>
        <h3
          className={cn(
            'text-5xl font-semibold',
            isEven ? 'text-primary-color' : 'text-secondary-color'
          )}
        >
          {numberSymbol}
        </h3>
      </div>
      <p className="text-sm font-normal text-[#0C2231]">{title}</p>
    </div>
  );
};

const AiStatsSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-6 pb-10 md:px-0">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-2">
        {/* left */}
        <div className="w-full space-y-6 text-center md:max-w-2xl md:text-left">
          <h3 className="text-[44px] leading-12 font-semibold text-[#0C2231]">
            Preparing tomorrow's leaders for an AI-driven future
          </h3>
          <p className="text-[18px] font-normal text-[#4C565D]">
            Our comprehensive AI literacy program equips students aged 13+
            with essential skills for college admissions, career success, and
            responsible technology use in an increasingly digital future.
          </p>
        </div>
        {/* right */}
        <div className="">
          {/* grid grid-cols-4 grid-rows-1 gap-5 */}
          {/* md:flex flex-wrap md:items-start justify-center gap-5 flex-col md:flex-row */}
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {STATS_LIST?.map((item, idx) => (
              <StatCard
                key={idx}
                title={item?.title}
                value={item?.value}
                isEven={Boolean(idx % 2 === 0)}
                numberSymbol={item?.symbol}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiStatsSection;
