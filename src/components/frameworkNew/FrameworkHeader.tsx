'use client';

import { useState } from 'react';
import ExploreModal from '@/components/landing/ExploreModal';
import PrimaryButton from 'ui/PrimaryButton';

const FrameworkHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#E6E6E6] bg-[#FAF6F0] px-6 py-4">
      <div className="mx-auto flex w-full max-w-7xl justify-end">
        <PrimaryButton
          text="Explore Now"
          target=""
          onClick={() => setIsModalOpen(true)}
          buttonClassName="bg-[#E9A772]"
        />
      </div>
      <ExploreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default FrameworkHeader;