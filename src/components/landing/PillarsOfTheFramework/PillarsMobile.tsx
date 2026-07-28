'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import type { Swiper as SwiperType } from 'swiper';
import { SwipeProgress } from 'components/ui/SwipeProgress';

type Pillar = {
  id: number;
  image: string;
  title: string;
  description: string;
};

type PillarsMobileProps = {
  pillars: Pillar[];
};

const PillarsMobile = ({ pillars }: PillarsMobileProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden py-5 md:hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        loop={false}
        resistanceRatio={0}
        watchOverflow
        onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
      >
        {pillars.map((pillar) => {
          return (
            <SwiperSlide key={pillar.id} className="w-[90vw]">
              <div className="mx-1 flex min-h-[320px] flex-col items-center text-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white p-2 shadow-inner">
                  <img src={pillar.image} alt="" className="h-full w-full rounded-full object-contain" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#E9A772]">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-[#4E5255]">
                  {pillar.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <SwipeProgress totalSlides={pillars.length} activeIndex={activeIndex} visibleOnLarge={false} />
    </div>
  );
};

export default PillarsMobile;
