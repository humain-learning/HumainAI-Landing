'use client';

import { type CSSProperties, useEffect, useRef } from 'react';
import { usePxCalculator } from 'hooks/usePxCalculator';

const learnItems = [
  {
    id: 1,
    bubble: '/assets/icons/left-orange-bubble.svg',
    icon: '/assets/icons/four-pillar.svg',
    title: 'The 4-Pillar Framework',
    description:
      "How to turn AI from a homework shortcut into a real study partner without losing your child's ability to think independently.",
  },
  {
    id: 2,
    bubble: '/assets/icons/left-green-bubble.svg',
    icon: '/assets/icons/ai-study-book.svg',
    title: 'Live Demo Build an AI Study Buddy',
    description:
      "Watch us build a personalized AI study agent live. Tailored to your child's grade and subjects. No fluff. Working before the session ends.",
  },
  {
    id: 3,
    bubble: '/assets/icons/left-orange-bubble.svg',
    icon: '/assets/icons/use-rule.svg',
    title: 'The Responsible-Use Rules',
    description:
      'The handful of rules every Grade 8-12 student should know before they touch ChatGPT again, including the three mistakes that quietly hurt learning.',
  },
  {
    id: 4,
    bubble: '/assets/icons/left-green-bubble.svg',
    icon: '/assets/icons/lift-grade.svg',
    title: 'How AI Can Lift Grades by 15-25%',
    description:
      'With real examples from students who have done it. The exact workflows. The exact tools. The exact study habits.',
  },
  {
    id: 5,
    bubble: '/assets/icons/left-orange-bubble.svg',
    icon: '/assets/icons/qa-expert.svg',
    title: 'Direct Q&A With the Experts',
    description:
      'The last 15 minutes are yours. Ask the Humain Learning team anything about AI, about your child, about how to think about all of this as a parent in 2026.',
  },
];

function LearnCard({
  bubble,
  icon,
  title,
  description,
}: (typeof learnItems)[number]) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative h-[112px] w-[112px] sm:h-[132px] sm:w-[132px]">
        <img src={bubble} alt="" className="h-full w-full object-contain" />
        <img
          src={icon}
          alt=""
          className="absolute top-1/2 left-1/2 h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[64px] sm:w-[64px]"
        />
      </div>

      <div className="mt-4 max-w-[210px] space-y-2 sm:max-w-[220px]">
        <h3 className="text-charcoal text-[18px] leading-[1.12] font-bold">
          {title}
        </h3>
        <p className="text-[12px] leading-[1.28] text-[#575757]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function WhatYouWillLearnSection() {
  const pxCount = usePxCalculator(5);
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const progressThumbRef = useRef<HTMLDivElement>(null);
  const trackingFrameRef = useRef<number | null>(null);
  const trackingStopTimeoutRef = useRef<number | null>(null);

  const updateProgress = () => {
    const scrollElement = scrollRef.current;
    const track = progressTrackRef.current;
    const thumb = progressThumbRef.current;

    if (!scrollElement || !track || !thumb) return;

    const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
    const maxThumbMove = track.clientWidth - thumb.clientWidth;
    const progress = maxScroll > 0 ? scrollElement.scrollLeft / maxScroll : 0;

    thumb.style.transform = `translateX(${progress * maxThumbMove}px)`;
  };

  const startProgressTracking = () => {
    if (trackingStopTimeoutRef.current !== null) {
      window.clearTimeout(trackingStopTimeoutRef.current);
      trackingStopTimeoutRef.current = null;
    }

    if (trackingFrameRef.current !== null) return;

    const track = () => {
      updateProgress();
      trackingFrameRef.current = window.requestAnimationFrame(track);
    };

    trackingFrameRef.current = window.requestAnimationFrame(track);
  };

  const stopProgressTracking = () => {
    if (trackingStopTimeoutRef.current !== null) {
      window.clearTimeout(trackingStopTimeoutRef.current);
    }

    trackingStopTimeoutRef.current = window.setTimeout(() => {
      if (trackingFrameRef.current !== null) {
        window.cancelAnimationFrame(trackingFrameRef.current);
        trackingFrameRef.current = null;
      }

      updateProgress();
      trackingStopTimeoutRef.current = null;
    }, 700);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    let frameId: number | null = null;

    const scheduleUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateProgress();
      });
    };

    updateProgress();
    scrollElement.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      scrollElement.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      if (trackingFrameRef.current !== null) {
        window.cancelAnimationFrame(trackingFrameRef.current);
      }

      if (trackingStopTimeoutRef.current !== null) {
        window.clearTimeout(trackingStopTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="max-w-[860px]">
          <h2 className="text-[28px] leading-[1.05] font-bold sm:text-[36px] lg:text-[48px]">
            <span className="text-terracotta">What You And Your Child</span>
            <br />
            <span className="text-charcoal">Will Learn In 60 Minutes.</span>
          </h2>

          <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />

          <p className="mt-5 max-w-[760px] text-sm leading-6 text-[#575757] sm:text-[15px]">
            This is not a lecture. It&apos;s a working session you&apos;ll both
            leave with something to use that same evening.
          </p>
        </div>

        <div className="mt-10 hidden items-start justify-between gap-4 xl:flex">
          {learnItems.map((item) => (
            <div key={item.id} className="min-w-0 flex-1">
              <LearnCard {...item} />
            </div>
          ))}
        </div>

        <div className="mt-8 xl:hidden">
          <div
            id="what-you-will-learn-scroll"
            ref={scrollRef}
            onTouchStart={startProgressTracking}
            onTouchMove={updateProgress}
            onTouchEnd={stopProgressTracking}
            onTouchCancel={stopProgressTracking}
            className="learn-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2 sm:gap-3.5 md:gap-[18px] lg:gap-5"
            style={{
              paddingLeft: pxCount,
              paddingRight: pxCount,
              scrollPaddingLeft: pxCount,
              scrollPaddingRight: pxCount,
              WebkitOverflowScrolling: 'touch',
            } as CSSProperties}
          >
            {learnItems.map((item) => (
              <div
                key={item.id}
                className="w-[230px] shrink-0 snap-start sm:w-[250px] lg:w-[220px]"
              >
                <LearnCard {...item} />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-3 flex w-[70vw] items-center">
            <div
              ref={progressTrackRef}
              className="h-1 w-full overflow-hidden rounded-full bg-terracotta/25"
            >
              <div
                ref={progressThumbRef}
                className="h-full w-1/5 rounded-full bg-terracotta"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 text-[#575757] sm:mt-10">
          <img
            src="/assets/icons/thumb-star.svg"
            alt=""
            className="mt-0.5 h-6 w-6 shrink-0 object-contain"
          />
          <p className="text-sm leading-6 sm:text-[15px]">
            <span className="text-terracotta font-semibold">
              No fluff. No theory.
            </span>{' '}
            You&apos;ll leave with something your child can use the same day.
          </p>
        </div>
      </div>
    </section>
  );
}
