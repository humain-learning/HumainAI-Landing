'use client';

import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';

import { SwipeProgress } from '@/components/ui/SwipeProgress';
import { usePxCalculator } from 'hooks/usePxCalculator';

const stories = [
  {
    title: 'I feel confident about AI',
    body: `"After attending all the sessions, I now understand how to use AI to my advantage instead of just following the crowd. I feel confident about using it now."`,
    name: 'Anisha, Grade 11, New Delhi',
  },
  {
    title: 'This shifted my perspective',
    body: `"The most interesting part for me was using AI for learning. I actually use tools beyond ChatGPT to do my work - I revise for my exams. This experience really shifted my perspective on how AI can support learning."`,
    name: 'Karan Gupta, Grade 11, Lucknow',
  },
  {
    title: 'This course gave me clarity',
    body: `"I knew AI was powerful, but I wasn't sure how to use it for my benefit. This course gave me clarity - how to leverage AI without using my own thinking ability."`,
    name: 'Aaradhya Kirna, Grade 8, New Delhi',
  },
  {
    title: 'My child built her own study buddy agent',
    body: `"My child's learning style has changed. She now uses NotebookLM and other AI tools confidently to study better. She even built her own study buddy agent during the program - and now looks forward to reading emails from her AI buddy every day."`,
    name: 'Mr. Rajesh Malhotra, Parent, New Delhi',
  },
  {
    title: 'Very reassuring as a parent.',
    body: `"What I really appreciate about Humain Learning trainers is that they didn't just focus on the tools, but also on how and how not to use AI. The emphasis on responsible use was very reassuring as a parent."`,
    name: 'Mrs. Meenakshi Rao, Parent, Bengaluru',
  },
];

const StoryCard = ({
  story,
  className = '',
  wide = false,
}: {
  story: (typeof stories)[number];
  className?: string;
  wide?: boolean;
}) => (
  <article
    className={`w-full ${wide ? 'max-w-none' : 'max-w-[300px]'} ${className}`}
  >
    <div className="flex items-start gap-3">
      <div className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center">
        <img
          src="/assets/Website Assets/bubbel-up.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
        />
        <img
          src="/assets/icons/quotes-white.svg"
          alt=""
          className="relative z-10 h-5 w-5 object-contain"
        />
      </div>

      <div>
        <h3
          className={`text-charcoal text-[28px] leading-[0.98] font-bold sm:text-[30px] ${
            wide ? 'max-w-[260px]' : 'max-w-[210px]'
          }`}
        >
          {story.title}
        </h3>
      </div>
    </div>

    <p
      className={`mt-4 text-sm leading-[1.45] text-[#575757] sm:text-[15px] ${
        wide ? 'max-w-[560px]' : 'max-w-[290px]'
      }`}
    >
      {story.body}
    </p>

    <p className="mt-4 text-[18px] leading-[1.08] font-semibold text-[#AAC191] italic sm:text-[20px]">
      {story.name}
    </p>
  </article>
);

export default function StudentStoriesSection() {
  const pxCount = usePxCalculator(5);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px] lg:gap-10">
          <div className="max-w-[620px] self-center">
            <h2 className="text-[28px] leading-[1.04] font-bold sm:text-[36px] lg:text-[44px]">
              <span className="text-terracotta">Stories From Students</span>
              <br />
              <span className="text-charcoal">
                Who&apos;ve Taken This Journey.
              </span>
            </h2>

            <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />

            <p className="mt-5 text-sm leading-6 text-[#575757] sm:text-[15px]">
              Real names. Real cities. Real changes in how they learn.
            </p>
          </div>

          <div className="relative ml-auto hidden w-full max-w-[280px] lg:-mr-10 lg:block lg:max-w-[300px] xl:-mr-12">
            <img
              src="/assets/images/parents-img.png"
              alt="Students and parents"
              className="relative z-10 ml-auto h-[190px] w-auto object-contain sm:h-[220px] lg:h-[230px]"
            />
          </div>
        </div>

        <div className="mt-10 hidden lg:grid lg:grid-cols-3 lg:justify-between lg:gap-x-8 lg:gap-y-12 xl:mt-12 xl:gap-x-10">
          {stories.map((story, index) => (
            <StoryCard
              key={story.title}
              story={story}
              wide={index === 3}
              className={
                index === 3
                  ? 'lg:col-span-2 lg:max-w-none'
                  : index === 4
                    ? 'lg:col-start-3'
                    : ''
              }
            />
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Swiper
            spaceBetween={14}
            breakpoints={{
              500: { spaceBetween: 16 },
              768: { spaceBetween: 20 },
              1024: { spaceBetween: 24 },
            }}
            slidesPerView="auto"
            loop={false}
            slidesOffsetBefore={pxCount}
            slidesOffsetAfter={pxCount}
            resistanceRatio={0}
            watchOverflow
            onSwiper={(swiper: SwiperType) =>
              setActiveIndex(swiper.activeIndex)
            }
            onSlideChange={(swiper: SwiperType) =>
              setActiveIndex(swiper.activeIndex)
            }
          >
            {stories.map((story) => (
              <SwiperSlide key={story.title} className="!w-auto">
                <div className="w-[270px] sm:w-[290px]">
                  <StoryCard story={story} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <SwipeProgress
            totalSlides={stories.length}
            activeIndex={activeIndex}
            visibleOnLarge={false}
          />
        </div>
      </div>
    </section>
  );
}
