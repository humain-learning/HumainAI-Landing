'use client';

import React, { useState } from 'react';
import { VideoCard } from '@/components/ui/VideoCard';
import { usePxCalculator } from 'hooks/usePxCalculator';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/swiper.css";
import { SwipeProgress } from '@/components/ui/SwipeProgress';
import { studentVideos } from './data'

// Custom Graduation Cap / Badge Icon for professional student creations
const SuccessBadgeIcon = () => (
  <svg
    className="h-4.5 w-4.5 text-white/95 shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>
);

// High-fidelity description mappings for each student creation
const CREATION_DESCRIPTIONS: Record<string, string> = {
  'Amayerah': 'Built a personal AI-powered study assistant app designed to improve focus and productivity. The app included a weekly study timetable, personalized focus tips, and a built-in Pomodoro timer system with 25-minute study sessions followed by 5-minute breaks, helping her manage procrastination, improve concentration, and stay consistent with studying.',
  'Diya Gosain': 'Built an AI- driven psychology app that analyzed and captured the motions she felt on a particular day, helping her track emotional patterns and mental well-being over time. The app used natural language processing to understand her daily journal entries and provided insights into her emotional trends, triggers, and overall mental health.',
  'Tanay Mohan': 'Created several AI- based projects during the session, including building a realisitic digital twin and creating a personalized study schedule system that used AI to optimize his study time based on his habits and upcoming exams. What amazed him the most was seeing how AI could turn simple ideas and prompts into practical, realistic and highly useful outputs.',
  'Avanindra Kumar Singh': ' Explored and experimented with AI powered projects ,related to music generation ,media creation and AI assisted studying. He also used AI tools to create personalised learning support for his science exam preparation, helping him study more effectively and interactively.',
};

export default function StudentWork() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const pxCount = usePxCalculator(1);

  const scrollNext = () => {
    if (swiperInstance) {
      if (swiperInstance.isEnd) {
        swiperInstance.slideTo(0);
      } else {
        swiperInstance.slideNext();
      }
    }
  };

  return (
    <section className="w-full bg-sage py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background grid/dots in white with low opacity */}
      <div className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        {/* Centered Title Area */}
        <div className="flex flex-col items-center space-y-3.5 mb-16 text-center">
          <div className="h-[3px] w-12 bg-white rounded-full" />
          <span className="font-display text-xs font-extrabold tracking-widest !text-white/90">
            STUDENT CREATIONS
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight !text-white sm:text-4xl md:text-5xl max-w-4xl">
            Hear from our Champs!
          </h2>
          <p className="font-sans text-sm md:text-base !text-white/85 max-w-2xl">
            See real, working AI projects built by students just like your child.
            No complex coding, just pure practical creativity.
          </p>
        </div>

        {/* Carousel Snapping Viewport */}
        <div className="relative">
            <Swiper
              modules={[Mousewheel]}
              spaceBetween={24}
              slidesPerView="auto"
              loop={false}
              slidesOffsetBefore={pxCount}
              slidesOffsetAfter={pxCount}
              touchEventsTarget='container'
              simulateTouch={true}
              mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
              onSwiper={(swiper: SwiperType) => {
                setSwiperInstance(swiper);
                setActiveIndex(swiper.activeIndex);
              }}
              onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
            >
            {studentVideos.map((video, idx) => (
              <SwiperSlide key={video.id} className="!w-auto">
                <div className="w-[325px] md:w-[350px] shrink-0 snap-start flex flex-col space-y-5 bg-white/[0.08] backdrop-blur-md rounded-3xl p-4 border border-white/15 select-none">

                {/* 1. Vimeo Video Media using existing VideoCard */}
                <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-white/10">
                  <VideoCard
                    video={{
                      id: video.id,
                      url: video.url,
                      title: video.name + "'s AI Project",
                    }}
                    cardWidth="w-full"
                    index={idx}
                    autoplay={false}
                  />
                </div>

                {/* 2. Badge & Title */}
                <div className="space-y-1 pt-1 px-1">
                  <span className="block font-display text-[11px] font-extrabold tracking-wider text-[#ffd3b4] uppercase">
                    E- Cell IIT HACKATHON SUBMISSION
                  </span>
                  <h3 className="font-display text-xl font-extrabold !text-white tracking-tight">
                    {video.name}
                  </h3>
                </div>

                {/* 3. Description */}
                <p className="font-sans text-[13.5px] leading-relaxed !text-white/80 px-1 flex-grow">
                  {CREATION_DESCRIPTIONS[video.name] || 'Built an advanced AI study companion to automate note-taking, active recall testing, and exam preparation.'}
                </p>

                {/* 4. Outcome Badge Info */}
                <div className="flex items-start gap-2.5 pt-4 pb-1 px-1 mt-auto border-t border-white/10">
                  <SuccessBadgeIcon />
                  <span className="font-sans text-[12.5px] font-semibold !text-white/90">
                    ✓ E-CELL IIT KHARAGPUR HACKATHON PITCHED
                  </span>
                </div>

                </div>
              </SwiperSlide>
            ))}
            </Swiper>

            {/* Next Button floating card integrated at the very right of scrolling carousel */}
            {/* <div className="w-[100px] shrink-0 snap-start flex items-center justify-start pl-4 select-none">
              <button
                onClick={scrollNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-terracotta border border-gray-150 shadow-md hover:scale-105 hover:shadow-lg transition duration-200 cursor-pointer"
                aria-label="Next project"
              >
                <svg
                  className="h-5 w-5 stroke-[2.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div> */}

        </div>

        <SwipeProgress totalSlides={studentVideos.length} activeIndex={activeIndex} visibleOnLarge={false} colour='white' />

      </div>
    </section>
  );
}
