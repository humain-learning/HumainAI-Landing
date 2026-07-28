'use client';

import { useState } from 'react';
import Image from 'next/image';
import ExploreModal from '@/components/landing/ExploreModal';
import PrimaryButton from '../ui/PrimaryButton';

const FrameworkHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-r from-[#F7E4D3] via-[#FBF3EC] to-white px-6 py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#AAC191]">
            OUR Framework
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-[#1A1A1A] md:text-6xl">
            The Humain <span className="text-[#E9A772]">AI</span> Literacy Framework
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-600">
            Designed for school students and teachers, aligned with NEP 2020 and NCF 2023, and informed by the leading global AI literacy frameworks: the joint OECD-EU framework and UNESCO.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <PrimaryButton
              text="Explore Now"
              target=""
              onClick={() => setIsModalOpen(true)}
            //   buttonClassName="bg-[#AAC191]"
            />
            <p className="text-gray-500">For students, educators, parents &amp; schools</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/4] w-full">
            <Image
              src="/assets/images/frameworkNew/hero.png"
              alt="Classroom scene for Humain AI Literacy Framework"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
      <ExploreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default FrameworkHero;