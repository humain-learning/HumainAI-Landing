'use client';
import React from 'react';
import TyperwriterText from './TyperwriterText';
import PrimaryButton from 'ui/PrimaryButton';
import SecondaryButton from 'ui/SkeletalButton';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Marquee from 'react-fast-marquee';
import 'swiper/css';
import 'swiper/css/autoplay';

const SLIDER = [
  {
    title: 'Harness AI for Enhanced Learning',
    img: 'ai.svg',
    description:
      'Discover how to use AI tools to accelerate your learning, research, and creative projects while developing critical thinking skills',
  },
  {
    title: 'Build Confidence in Responsible AI Use',
    img: 'ai-use.svg',
    description:
      'Learn the ethics and best practices of AI usage. Understand when to use AI, when not to, and how to maintain your authentic voice.',
  },
  {
    title: 'Become a Future-Ready Leader',
    img: 'group.svg',
    description:
      'Prepare for careers in technology, innovation, and leadership. Build a portfolio that showcases your unique Human-AI collaboration skills.',
  },
  {
    title: 'Maintain Human Elements in AI Era',
    img: 'ml.svg',
    description:
      'Strengthen your creativity, emotional intelligence, and critical thinking. Learn to be irreplaceably human in an AI-driven world',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const cardVariants2 = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const Intro = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-6 py-16 md:space-y-24 md:px-0 md:py-24">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-10">
        {/* Left Container */}
        <div className="max-w-2xl md:space-y-5">
          <div className="h-full min-h-[180px] w-full max-w-[525px]">
            {/* text-[64px] leading-[59.5px] font-semibold tracking-[-1.28px] */}
            <h1 className="max-w-[450px] text-3xl leading-[50px] font-semibold tracking-[-0.8px] sm:text-5xl md:text-[64px] md:leading-[59.5px] md:tracking-[-1.28px]">
              Where the AI Future Learns to Stay Human
              {/* <TyperwriterText /> */}
            </h1>
          </div>
          <div className="text-xl text-[#00000099]">
            Empowering students aged 13+ to harness AI capabilities while
            preserving human creativity, critical thinking, and emotional
            intelligence
          </div>
          <div className="flex w-full flex-col items-center gap-3 pt-4 md:flex-row">
            <PrimaryButton text="Enroll" target='/courses-students/humain-champs' />
            {/* <SecondaryButton text="Watch Course Preview" /> */}
          </div>
        </div>
        {/* Right Container */}

        <motion.div
          className="relative flex w-full justify-center"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
        >
          <img
            className="h-full w-full max-w-[320px] object-contain"
            src="/assets/logo/humain-brain.png"
            alt=""
          />
          {/* <motion.div
            variants={cardVariants2}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="bg-primary-color relative min-h-[180px] rounded-3xl p-4 md:min-h-[320px] md:p-6"
          >
            <h6 className="w-[40%] text-lg font-semibold text-white sm:w-[70%] sm:text-xl md:w-[40%] md:text-2xl">
            Trusted by 500+ students and growing, making learning deep, joyful, and future-ready
            </h6>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-2 md:-top-1/6 md:right-6"
            variants={cardVariants}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          >
            <div
              className="h-[250px] w-[200px] rounded-xl px-3 py-3 md:h-[400px] md:w-[300px]"
              style={{
                backgroundImage: "url('assets/images/humain-learning.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="flex w-fit items-center gap-1 rounded-full bg-white px-3 py-0.5">
                <img alt="" src="/assets/icons/green-star.svg" />
                <p>Humain Learning</p>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
      {/* Slider */}
      <div className="relative">
        <Marquee
          // pauseOnHover
          className="relative mx-auto h-full min-h-[150px] w-full gap-8"
          gradient={true}
          gradientColor="#FDF6F1"
          gradientWidth={10}
        >
          <div className="flex items-center gap-8">
            {SLIDER?.map((s, i) => (
              <div
                key={i}
                className={`${i % 2 !== 0 ? 'bg-secondary-color' : 'bg-primary-color'} relative h-[118px] w-[379px] cursor-pointer rounded-2xl`}
              >
                <div className="border-gradient border-gradient absolute top-3 left-3 flex h-full w-full items-center gap-4 rounded-2xl px-4 backdrop-blur-md">
                  <div className="-mt-2 flex h-fit min-h-12 min-w-12 items-center justify-center rounded-full bg-white">
                    <img
                      className="min-w-8"
                      src={`/assets/icons/${s?.img}`}
                      alt=""
                    />
                  </div>
                  <div className="-mt-2 space-y-1 text-white">
                    <div className="text-xl font-semibold">{s?.title}</div>
                    {/* <div className="text-xs">{s?.description}</div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Intro;
