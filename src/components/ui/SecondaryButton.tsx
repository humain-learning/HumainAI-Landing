'use client';
import React from 'react';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

type SecondaryButtonSwappedProps = {
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
  target: string;
  newTab?: boolean;
};

const SecondaryButton = ({ text, buttonClassName, target, onClick, newTab }: SecondaryButtonSwappedProps) => {

  const router = useRouter();
  const isExternal = target && (target.startsWith('http://') || target.startsWith('https://'));
  const isHash = target && target.startsWith('#');
  if (isExternal && newTab) {
    return (
      <a
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'bg-secondary-color group flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white',
          buttonClassName
        )}
      >
        {text}
        <div className="group-hover:bg-primary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out">
          <img
            className="h-3 w-3"
            src="/assets/icons/arrow-top-right-dark.svg"
            alt=""
          />
        </div>
      </a>
    );
  }
  if (isHash) {
    return (
      <a
        href={target}
        className={cn(
          'bg-secondary-color group flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white',
          buttonClassName
        )}
      >
        {text}
        <div className="group-hover:bg-primary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out">
          <img
            className="h-3 w-3"
            src="/assets/icons/arrow-top-right-dark.svg"
            alt=""
          />
        </div>
      </a>
    );
  }
  // Internal navigation (default)
  const handleNavigation = () => {
    if (onClick) {
      onClick();
    } else if (target) {
      const destination = target.startsWith('/') ? target : `/${target}`;
      router.push(destination);
    } else if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('SecondaryButtonSwapped: no "target" prop or onClick provided — no navigation performed.');
    }
  };
  return (
    <button
      type="button"
      onClick={handleNavigation}
      className={cn(
        'bg-secondary-color group flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white',
        buttonClassName
      )}
    >
      {text}
      <div className="group-hover:bg-primary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out">
        <img
          className="h-3 w-3"
          src="/assets/icons/arrow-top-right-dark.svg"
          alt=""
        />
      </div>
    </button>
  );
};

export default SecondaryButton;