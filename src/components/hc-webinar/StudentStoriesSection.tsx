'use client';


import { usePxCalculator } from '@/hooks/usePxCalculator';
import { VideoCard } from '@/components/ui/VideoCard';
import { studentVideos } from '@/components/courses-students/humain-champs-v2/StudentCreations/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/swiper.css';
import { useState } from 'react';
import { SwipeProgress } from '@/components/ui/SwipeProgress';

const SLIDE_WIDTH_CLASS = "w-[80vw] md:w-[30vw]";

const renderVideoSlides = () => (
    studentVideos.map((video, index) => (
        <SwiperSlide 
            key={video.id} 
            className={`!w-auto ${SLIDE_WIDTH_CLASS}`}
        >
            <VideoCard 
                video={video} 
                cardWidth={SLIDE_WIDTH_CLASS}
                index={index}
            />
        </SwiperSlide>
    ))
);

export const StudentStoriesSection = () => {
    const pxCount = usePxCalculator(5);
	const [activeIndex, setActiveIndex] = useState(0);
	
    return (
        <div className="relative flex flex-col items-center justify-center mx-auto">
            <div className="w-[92vw] lg:w-[80vw] mx-auto flex flex-col items-start justify-center">
                <h1 className="text-3xl md:text-5xl font-semibold text-start py-[1.5rem] md:py-10">
                    <span className="text-sage">Stories From Students</span>
					<br/>
                    <span className="text-black">Who Have Taken This Journey</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mb-10" />
				<p className="mt-5 text-sm leading-6 text-[#575757] sm:text-[15px]">
              		Real names. Real cities. Real changes in how they learn.
            	</p>
            </div>

            <div className="w-full overflow-hidden py-5">
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto"
                    loop={false}
                    slidesOffsetBefore={pxCount} 
                    slidesOffsetAfter={pxCount}
					onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
					onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
                >
                    {renderVideoSlides()}
                </Swiper>
            </div>
			<SwipeProgress totalSlides={studentVideos.length} activeIndex={activeIndex} visibleOnLarge={false}/>
			
        </div>
    );
};
