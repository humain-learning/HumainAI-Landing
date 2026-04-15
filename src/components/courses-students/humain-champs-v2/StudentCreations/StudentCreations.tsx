'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { Autoplay, FreeMode } from 'swiper/modules';
import { usePxCalculator } from 'hooks/usePxCalculator';
import { VideoCard } from 'ui/VideoCard';
import { studentVideos } from './data';

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

export const StudentCreations = () => {
    const pxCount = usePxCalculator(5);
    return (
        <div className="relative flex flex-col items-center justify-center mx-auto">
            <div className="w-[90vw] mx-auto flex flex-col items-start justify-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-start py-[1.5rem] md:py-10">
                    <span className="text-sage">Hear From</span>
					<br/>
                    <span className="text-black"> Our Students! </span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mb-10" />
            </div>

            <div className="w-full overflow-hidden py-5">
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto"
                    loop={false}
                    slidesOffsetBefore={pxCount} 
                    slidesOffsetAfter={pxCount}
                >
                    {renderVideoSlides()}
                </Swiper>
            </div>
        </div>
    );
};