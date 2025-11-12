'use client';
import React from 'react';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

type PrimaryButtonProps = {
  text: string;
  buttonClassName?: string;
  onClick?: () => void;
  target: string;
};

const PrimaryButton = ({ text, buttonClassName, target, onClick }: PrimaryButtonProps) => {

  const router = useRouter();
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (target) {
      const destination = target.startsWith('/') ? target : `/${target}`;
      router.push(destination);
      return;
    }
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('PrimaryButton: no "target" prop or onClick provided — no navigation performed.');
    }
  };
  return (
    <button
      type="button"
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          router.push(`/${target}`);
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
