'use client';

import PrimaryButton from 'ui/PrimaryButton';
import SkeletalButton from 'ui/SkeletalButton';
import TertiaryButton from '../ui/TertiaryButton';

type BandProps = {
  onReserveClick?: () => void;
};

export const Band = ({ onReserveClick }: BandProps) => {
  return (
    <div className="bg-sage w-full sticky bottom-0 z-10 px-5 py-2 text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex w-full flex-row items-center justify-center gap-2 md:max-w-[70vw] md:justify-between md:gap-0">
        <span className="text-md md:text-xl">Free Live Session Fri, 16th May 11 AM IST</span>
        <TertiaryButton
          text="Register Now"
          target=""
          onClick={onReserveClick}
        />
      </div>
    </div>
  );
};