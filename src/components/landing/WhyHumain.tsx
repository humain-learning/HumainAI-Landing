import React from 'react';
import TertiaryButton from '@/components/ui/TertiaryButton';
import Image from 'next/image';

type LearningCardProps = {
  title: React.ReactNode;
  icon: string;
};

const LEARNING_CARDS: LearningCardProps[] = [
  {
    icon: 'user-study.svg',
    title: (
      <p className="text-lg font-normal text-black lg:text-2xl">
        Designed by educators with decades of experience in{' '}
        <span className="font-semibold text-black">
          child-centered pedagogy.
        </span>
      </p>
    ),
  },
  {
    icon: 'world-study.svg',
    title: (
      <p className="text-lg font-normal text-black lg:text-2xl">
        <span className="font-semibold text-black">
          Backed by global research
        </span>{' '}
        and frameworks (UNESCO, MIT, Stanford, Harvard).
      </p>
    ),
  },
  {
    icon: 'brain.svg',
    title: (
      <p className="text-lg font-normal text-black lg:text-2xl">
        Focused not just on tools and tech, but on{' '}
        <span className="font-semibold text-black">mindset and values.</span>
      </p>
    ),
  },
  {
    icon: 'ai-model.svg',
    title: (
      <p className="text-lg font-normal text-black lg:text-2xl">
        A movement to prepare the{' '}
        <span className="font-semibold text-black">
          next generation to lead with AI,
        </span>{' '}
        but remain human at heart.
      </p>
    ),
  },
];

const LearningCard = ({ icon, title }: LearningCardProps) => {
  return (
    <div className="flex w-full items-center gap-4 lg:gap-6">
      <div className="">
        <div className="bg-primary-color/15 border-primary-color flex h-[60px] w-[60px] items-center justify-center rounded-2xl border lg:h-[99px] lg:w-[99px]">
          <img
            src={`/assets/icons/${icon}`}
            alt=""
            className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]"
          />
        </div>
      </div>
      <div className="">{title}</div>
    </div>
  );
};

const WhyHumain = () => {
  return (
    <div
      id="why-humain"
      className="relative"
      style={{
        background:
          'linear-gradient(to bottom,rgba(233, 167, 114, 0.22) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl space-y-16 px-6 py-14 text-[#011813] md:px-0">
        <div className="space-y-14">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <h3 className="text-4xl font-semibold md:text-5xl">
              Why Humain Learning?
            </h3>

            <TertiaryButton text="All Products" />
          </div>

          {/* grid */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-6">
            {LEARNING_CARDS?.map((item, i) => (
              <div className="col-span-2 lg:col-span-1" key={i}>
                <LearningCard icon={item?.icon} title={item?.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 rounded-[20px] bg-white px-6 py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset] md:space-y-10 md:px-8 lg:py-10">
          <h4 className="text-center text-3xl font-medium">
            Unique value of <span className="text-primary-color">Humain</span>{' '}
            <span className="text-secondary-color">learning</span>
          </h4>

          <div className="flex flex-col items-start gap-4 lg:flex-row">
            <div
              className="bg-primary-color flex h-[120px] w-full items-center justify-center rounded-[20px]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(0,0,0,0.1) inset, 0 3px 10px 0px rgba(0,0,0,0.0.7)',
              }}
            >
              <p className="w-full max-w-2xs text-center text-base font-normal text-white md:text-xl">
                Pedagogy-first
              </p>
            </div>

            <div
              className="bg-secondary-color flex h-[120px] w-full items-center justify-center rounded-[20px]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(0,0,0,0.1) inset, 0 3px 10px 0px rgba(0,0,0,0.0.7)',
              }}
            >
              <p className="w-full max-w-2xs text-center text-base font-normal text-white md:text-xl">
                Humanity-first
              </p>
            </div>

            <div
              className="bg-primary-color flex h-[120px] w-full items-center justify-center rounded-[20px]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(0,0,0,0.1) inset, 0 3px 10px 0px rgba(0,0,0,0.0.7)',
              }}
            >
              <p className="w-full max-w-[350px] text-center text-base font-normal text-white md:text-xl">
                Reflection-first
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHumain;
