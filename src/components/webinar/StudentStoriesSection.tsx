'use client';

import { type CSSProperties } from 'react';
import { usePxCalculator } from 'hooks/usePxCalculator';
import { VideoCard } from '@/components/ui/VideoCard';
import { studentVideos } from '@/components/courses-students/humain-champs-v2/StudentCreations/data';

const VIDEO_CARD_WIDTH_CLASS = 'w-[78vw] sm:w-[320px] lg:w-full';

export default function StudentStoriesSection() {
  const pxCount = usePxCalculator(5);

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
            <div className="h-1 w-full overflow-hidden rounded-full bg-terracotta/25">
              <div className="h-full w-1/5 rounded-full bg-terracotta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
