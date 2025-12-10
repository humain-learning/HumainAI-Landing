'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type SecondaryButtonProps = {
  text: string;
  onClick?: () => void;
};

const SecondaryButton = ({ text, onClick }: SecondaryButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          router.push('/courses');
        }
      }}
      className="group hover:bg-primary-color flex cursor-pointer items-center gap-2 rounded-full border-2 border-[#EBEDEF] py-1 pr-1 pl-4 transition-all duration-300 ease-in-out"
    >
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
    </button>
  );
};

export default SecondaryButton;
