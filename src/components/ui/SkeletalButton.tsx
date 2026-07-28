'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils';

type SecondaryButtonProps = {
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
  target: string;
  newTab?: boolean;
};

const SkeletalButton = ({ text, buttonClassName, target, onClick, newTab }: SecondaryButtonProps) => {
  const baseClasses = cn(
    'group hover:bg-primary-color flex cursor-pointer items-center gap-2 rounded-full border-2 border-[#EBEDEF] py-1 pr-1 pl-4 transition-all duration-300 ease-in-out',
    buttonClassName
  );

  const inner = (
    <>
      {text}
      <div className="bg-primary-color flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-white">
        <img
          className="h-5 w-5 text-red-200 group-hover:hidden"
          src="/assets/icons/arrow-top-right.svg"
          alt=""
        />
        <img
          className="hidden h-3 w-3 group-hover:inline-block"
          src="/assets/icons/arrow-top-right-dark.svg"
          alt=""
        />
      </div>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {inner}
      </button>
    );
  }

  const isExternal = target && (target.startsWith('http://') || target.startsWith('https://'));
  const isHash = target && target.startsWith('#');

  if (isExternal) {
    return (
      <a
        href={target}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {inner}
      </a>
    );
  }

  if (isHash) {
    return (
      <a href={target} className={baseClasses}>
        {inner}
      </a>
    );
  }

  if (!target) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('SkeletalButton: no "target" prop or onClick provided, rendering as inert button.');
    }
    return (
      <button type="button" className={baseClasses} disabled>
        {inner}
      </button>
    );
  }

  return (
    <Link href={target.startsWith('/') ? target : `/${target}`} className={baseClasses}>
      {inner}
    </Link>
  );
};

export default SkeletalButton;
