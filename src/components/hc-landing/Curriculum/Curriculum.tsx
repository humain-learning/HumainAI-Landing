'use client';

import React, { useRef, useState } from 'react';
import { VideoCard } from '@/components/ui/VideoCard';
import { usePxCalculator } from 'hooks/usePxCalculator';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/swiper.css";
import { SwipeProgress } from "@/components/ui/SwipeProgress";
import { modulesData } from './data';


// Dynamically construct MODULES_DATA by merging the official aiRoadmapVideos database with local structural content
const SLIDE_WIDTH_CLASS = "w-[80vw] md:w-[30vw]";

const renderModuleSlides = () => (
	modulesData.map((mod, idx) => (
		<SwiperSlide 
            key={idx} 
            className={`!w-auto ${SLIDE_WIDTH_CLASS}`}
        >		
		{/* 1. Vimeo Video Media using existing VideoCard */}
		<div className ={`${SLIDE_WIDTH_CLASS} justify-center`}>
			<div className="w-full rounded-4xl overflow-hidden shadow-sm">
				<VideoCard
				video={mod.video}
				cardWidth={SLIDE_WIDTH_CLASS}
				index={idx}
				autoplay={true}
				/>
			</div>

			{/* 2. Badge & Title */}
			<div className="space-y-1 pt-1">
				<span className="block font-display text-[11px] font-extrabold tracking-wider text-terracotta uppercase">
					{mod.code}
				</span>
				<h3 className="font-display text-xl font-extrabold text-charcoal tracking-tight">
				{mod.title}
				</h3>
			</div>

			{/* 3. Description */}
			<p className="font-sans text-[13.5px] leading-relaxed text-charcoal/70 min-h-[64px]">
				{mod.description}
			</p>

			{/* 5. Tools Tag Row */}
			<div className="flex flex-wrap gap-2.5 pb-2 pt-1">
				{mod.tools.map((tool) => (
				<span
					key={tool}
					className="px-3 py-1 text-[10px] font-display font-extrabold tracking-wider bg-[#f8f9fa] border border-sage/30 text-[#5e714e] rounded-full"
				>
					{tool}
				</span>
				))}
			</div>

			{/* 6. Outcome Row */}
			<div className="flex items-start gap-2.5 pt-3 border-t border-gray-100">
				{/* <OutcomeIcon /> */}
				<span className="font-sans text-[12.5px] leading-normal text-charcoal/60">
				{mod.outcome}
				</span>
			</div>
		</div>
		</SwiperSlide>

	))
);

export default function Curriculum() {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
  	const [activeIndex, setActiveIndex] = useState(0);
	const pxCount = usePxCalculator(1);

  return (
    <section className="max-w-7xl bg-white py-16 md:py-24 mx-auto">
      <div className="mx-auto w-full  px-5 md:px-12 lg:px-16">
        
        {/* Centered Title Area */}
        <div className="flex flex-col items-center space-y-3.5 mb-16 text-center">
          <div className="h-[3px] w-12 bg-sage rounded-full" />
          <span className="font-display text-xs font-extrabold tracking-widest text-[#5e714e]">
            THE CURRICULUM
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl md:text-5xl max-w-4xl">
            6 modules. 9 live sessions. 1 working AI project.
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/80 max-w-2xl">
            Every module builds toward a single capstone: your child's personalised AI
            Study Agent, submitted to the E- Cell IIT Kharagpur Hackathon.
          </p>
        </div>

        {/* Carousel Snapping Viewport */}
        <div className="w-full">
			<Swiper
				modules={[Mousewheel]}
				spaceBetween={20}
				slidesPerView='auto'
				loop={false}
				slidesOffsetBefore={pxCount}
				slidesOffsetAfter={pxCount}
				touchEventsTarget='container'
				simulateTouch={true}
				mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
				onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
				onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
			>
				{renderModuleSlides()}
			</Swiper>
			<SwipeProgress totalSlides={modulesData.length} activeIndex={activeIndex} visibleOnLarge={false}/>

        </div>
			
      </div>
    </section>
  );
}
