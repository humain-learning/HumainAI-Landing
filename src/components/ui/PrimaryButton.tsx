'use client';
import React from 'react';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

type PrimaryButtonProps = {
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
  target: string;
  newTab?: boolean;
};

const PrimaryButton = ({ text, buttonClassName, target, onClick, newTab }: PrimaryButtonProps) => {

  const router = useRouter();
  const isExternal = target.startsWith('http://') || target.startsWith('https://');
  if (isExternal && newTab) {
    return (
      <a
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'bg-primary-color group flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white',
          buttonClassName
        )}
      >
        {text}
        <div className="group-hover:bg-secondary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out">
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
  return (
    <button
      type="button"
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (target) {
          if (target.startsWith('/')) {
            router.push(target);
          } else {
            router.push(`/${target}`);
          }
        }
      }}
      className={cn(
        'bg-primary-color group flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white',
        buttonClassName
      )}
    >
      {text}
      <div className="group-hover:bg-secondary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out">
        <img
          className="h-3 w-3"
          src="/assets/icons/arrow-top-right-dark.svg"
          alt=""
        />
      </div>
    </button>
  );
};

export default PrimaryButton;
