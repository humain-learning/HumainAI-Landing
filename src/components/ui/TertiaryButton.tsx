'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

type TertiaryButtonProps = {
  text: string;
  onClick?: () => void;
};

const TertiaryButton = ({ text, onClick }: TertiaryButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          router.push('/courses-students/humain-champs');
        }
      }}
      className="group hover:bg-secondary-color bg-secondary-color flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 transition-all duration-300 ease-in-out"
    >
      {text}
      <div className="group-hover:bg-primary-color flex h-9 w-9 items-center justify-center rounded-full bg-white transition-all duration-300 ease-in-out">
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
