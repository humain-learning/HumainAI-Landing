'use client';

import { type CSSProperties, useEffect, useRef } from 'react';
import { usePxCalculator } from 'hooks/usePxCalculator';
import { VideoCard } from '@/components/ui/VideoCard';
import { studentVideos } from '@/components/courses-students/humain-champs-v2/StudentCreations/data';

const VIDEO_CARD_WIDTH_CLASS = 'w-[78vw] sm:w-[320px] lg:w-full';

export default function StudentStoriesSection() {
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

        <div className="mt-10 hidden lg:grid lg:grid-cols-4 lg:gap-5 xl:mt-12 xl:gap-6">
          {studentVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              cardWidth="w-full"
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <div
            ref={scrollRef}
            onTouchStart={startProgressTracking}
            onTouchMove={updateProgress}
            onTouchEnd={stopProgressTracking}
            onTouchCancel={stopProgressTracking}
            className="learn-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto overscroll-x-contain pb-2 sm:gap-4 md:gap-5"
            style={{
              paddingLeft: pxCount,
              paddingRight: pxCount,
              scrollPaddingLeft: pxCount,
              scrollPaddingRight: pxCount,
              WebkitOverflowScrolling: 'touch',
            } as CSSProperties}
          >
            {studentVideos.map((video, index) => (
              <div
                key={video.id}
                className="w-[78vw] shrink-0 snap-start sm:w-[320px]"
              >
                <VideoCard
                  video={video}
                  cardWidth={VIDEO_CARD_WIDTH_CLASS}
                  index={index}
                />
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
      </div>
    </section>
  );
}
