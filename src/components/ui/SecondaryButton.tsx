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

// Mirrors PrimaryButton's render priority: real <a>/<Link> when navigating,
// real <button> when running an onClick action. See PrimaryButton.tsx for the
// SEO + accessibility + no-JS rationale.
const SecondaryButton = ({ text, buttonClassName, target, onClick, newTab }: SecondaryButtonProps) => {
  const baseClasses = cn(
    'bg-secondary-color group flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white',
    buttonClassName
  );

  const inner = (
    <>
      <div className="whitespace-nowrap">{text}</div>
      <div className="group-hover:bg-primary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out">
        <img
          className="h-3 w-3"
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
      console.warn('SecondaryButton: no "target" prop or onClick provided, rendering as inert button.');
    }
    return (
      <button type="button" className={baseClasses} disabled>
        {inner}
      </button>
    );
  }

  const normalizedTarget = target.startsWith('/') ? target : `/${target}`;
  return (
    <Link href={normalizedTarget} className={baseClasses}>
      {inner}
    </Link>
  );
};

export default SecondaryButton;
