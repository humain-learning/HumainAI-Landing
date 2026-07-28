'use client';

import { useState } from 'react';
import ExploreModal from '@/components/landing/ExploreModal';
import Image from 'next/image';
import SkeletalButton from 'ui/SkeletalButton';

export default function FrameworkCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#AAC191]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-12 pb-0 lg:flex-row lg:items-center lg:gap-12">
        <div className="order-2 mt-8 mb-0 w-full self-end lg:order-1 lg:mt-0 lg:w-1/2 lg:self-end">
          <div className="relative">
            <Image
              src="/assets/images/frameworkNew/Footer.png"
              alt="A mother and two students learning together on a laptop"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex items-center text-center lg:order-2 lg:w-1/2 lg:items-start lg:text-left">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Start Your AI Literacy Journey Today
            </h2>
            <p className="mt-4 max-w-md text-white/90">
              Explore programmes that help students, educators, and schools build practical AI
              skills, critical thinking, and responsible AI habits for the future.
            </p>
            <div className="mt-6 flex w-full justify-center lg:justify-start">
              <SkeletalButton
                text="Explore Now"
                target=""
                onClick={() => setIsModalOpen(true)}
                buttonClassName="bg-white py-0.5 pr-0.5 pl-3 text-sm font-semibold text-[#4B6B4D] [&>div:last-child]:h-8 [&>div:last-child]:w-8"
              />
            </div>
          </div>
        </div>
      </div>
      <ExploreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}