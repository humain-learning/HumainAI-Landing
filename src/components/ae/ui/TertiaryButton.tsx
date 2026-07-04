'use client';
import React from 'react';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

type TertiaryButtonProps = {
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
  target: string;
  newTab?: boolean;
};

const TertiaryButton = ({ text, buttonClassName, onClick, target, newTab }: TertiaryButtonProps) => {
  const router = useRouter();
  const isExternal = target.startsWith('http://') || target.startsWith('https://');

  if (isExternal && newTab) {
    return (
      <a
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group bg-secondary-color hover:bg-secondary-color flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 transition-all duration-300 ease-in-out',
          buttonClassName
        )}
      >
        <div className="whitespace-nowrap">{text}</div>
        <div className="group-hover:bg-primary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-all duration-300 ease-in-out">
          <img
            className="h-3 w-3 group-hover:inline-block"
            src="/assets/icons/arrow-top-right-dark.svg"
            alt=""
          />
        </div>
      </a>
    );
  }

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
        'group bg-white flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 transition-all duration-300 ease-in-out',
        buttonClassName
      )}
    >
      <div className="whitespace-nowrap text-sage font-semibold">{text}</div>
      <div className="group-hover:bg-sage group-hover:border-none border border-grey bg-white flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out">
        <img
          className="h-3 w-3 group-hover:inline-block"
          src="/assets/icons/arrow-top-right-dark.svg"
          alt=""
        />
      </div>
    </button>
  );
};

export default TertiaryButton;
