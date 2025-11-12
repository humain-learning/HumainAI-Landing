'use client';
import React from 'react';
import { cn } from '@/utils';
import { motion } from 'motion/react';

const logoVariants = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const certiVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const iitVariants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const STEPS = [
  {
    title: 'Sign up and get started',
    description: 'Create your account, and start learning instantly.',
    iconPath: 'user.svg',
    iconButtonClassName: 'bg-[#F0FAE8]',
  },
  {
    title: 'Explore courses tailored to you',
    description: 'Browse a range of courses across various fields.',
    iconPath: 'education.svg',
    iconButtonClassName: 'bg-[#F0FAE8]',
  },
  {
    title: 'Keep learning and growing',
    description: 'Continue exploring and advancing your skills!',
    iconPath: 'line-graph.svg',
    iconButtonClassName: 'bg-[#F0FAE8]',
  },
];

type StepsCardProps = {
  title: string;
  iconPath: string;
  description: string;
  iconButtonClassName?: string;
};

const StepsCard = ({
  description,
  iconPath,
  title,
  iconButtonClassName,
}: StepsCardProps) => {
  return (
    <motion.div
      variants={cardsVariants}
      transition={{ duration: 0.6 }}
      className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#F0F0F0] bg-white px-3 py-4"
    >
      <div
        className={cn(
          'flex h-16 w-16 items-center justify-center rounded-full',
          iconButtonClassName
        )}
      >
        <img className="size-8" src={`/assets/icons/${iconPath}`} alt="icons" />
      </div>
      <div>
        <h6 className="text-2xl font-medium">{title}</h6>
        <p className="text-base font-normal text-[#4E5255]">{description}</p>
      </div>
    </motion.div>
  );
};

const IITGrowth = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-[120px]">
      <img
        className="absolute -top-20 left-0"
        src="/assets/images/central-left-fade.png"
        alt=""
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-start justify-between gap-10">
          {/* left continer */}
          <div className="relative">
            <img
              className="absolute top-[130%] left-0 z-30 h-full max-h-28 w-full max-w-28"
              src="/assets/images/dot-images.png"
              alt=""
            />
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="show"
              transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.img
                className="relative z-20 h-full max-h-80 w-full max-w-md"
                src="/assets/images/IIT-delhi.png"
                alt="iit-certificate"
                variants={certiVariants}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
              <motion.img
                className="absolute -right-16 bottom-6 z-30 h-full max-h-40 w-full max-w-40"
                src="/assets/images/IIT-logo.png"
                alt="iit-logo"
                variants={logoVariants}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
              />
              <motion.img
                className="absolute top-[70%] left-[45%] z-[5] h-full max-h-80 w-full max-w-[360px] rounded-2xl"
                src="/assets/images/IIT-delhi-bg.png"
                alt="iit-delhi"
                variants={iitVariants}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
              />
            </motion.div>
          </div>

          {/* right container */}
          <div className="h-full w-full max-w-xl text-[#011813]">
            <div className="space-y-8">
              <h3 className="text-left text-5xl font-semibold">
                IIT Delhi will Power Your
                <br />
                Growth to the Next Level
              </h3>
              <motion.div
                className="flex flex-col gap-10"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {STEPS?.map((item, idx) => (
                  <StepsCard
                    key={idx}
                    description={item?.description}
                    iconPath={item?.iconPath}
                    iconButtonClassName={item?.iconButtonClassName}
                    title={item?.title}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IITGrowth;
