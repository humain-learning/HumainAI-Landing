'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils';

type PrimaryButtonProps = {
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
  target: string;
  newTab?: boolean;
};

// Render priority: if `onClick` is provided, render a real <button> (action handler);
// otherwise render an <a> / Next <Link> so the navigation surface is a crawlable,
// no-JS-resilient hyperlink. This matters for SEO (Google reads <a href>, not button
// onClick), for accessibility (screen readers + keyboard users get correct semantics),
// and for users on flaky networks (the link works before JS hydrates).
const PrimaryButton = ({ text, buttonClassName, target, onClick, newTab }: PrimaryButtonProps) => {
  const baseClasses = cn(
    'bg-primary-color group flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white',
    buttonClassName
  );

  const inner = (
    <>
      <div className="whitespace-nowrap">{text}</div>
      <div className="group-hover:bg-secondary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out">
        <img
          className="h-3 w-3"
          src="/assets/icons/arrow-top-right-dark.svg"
          alt=""
        />
      </div>
    </>
  );

  // onClick handler takes precedence: render as a real action button.
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {inner}
      </button>
    );
  }

  const isExternal = target.startsWith('http://') || target.startsWith('https://');
  const normalizedTarget = isExternal
    ? target
    : target.startsWith('/')
      ? target
      : `/${target}`;

  // External link: plain <a> with security rels.
  if (isExternal) {
    return (
      <a
        href={normalizedTarget}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {inner}
      </a>
    );
  }

  // Internal link: Next.js <Link> so client-side navigation works AND the rendered
  // HTML carries a real href Google can crawl and users without JS can follow.
  return (
    <Link href={normalizedTarget} className={baseClasses}>
      {inner}
    </Link>
  );
};

export default PrimaryButton;
