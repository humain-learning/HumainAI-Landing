'use client';
import React, { use } from 'react';
import { VideoCard } from "../ui/VideoCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { aiRoadmapVideos } from "./data/aiRoadmapVideos";
import { usePxCalculator } from '../hooks/usePxCalculator';


// const SLIDE_WIDTH_CLASS = "w-[30vw]";

// const SLIDE_WIDTH_CLASS = "w-[80vw]";

const SLIDE_WIDTH_CLASS = "w-[80vw] md:w-[30vw]";

const renderVideoSlides = () => (
    aiRoadmapVideos.map((video, index) => (
        <SwiperSlide 
            key={`${video.id}-${index}`} 
            className={`!w-auto ${SLIDE_WIDTH_CLASS}`}
        >
            <VideoCard 
                video={video} 
                cardWidth={SLIDE_WIDTH_CLASS}
                index={index}
            />
            <div className=" px-3 md:px-6 py-2 gap-1 flex flex-col justify-center items-start">
                <span className="text-lg md:text-2xl font-semibold">{video.title}</span>
                <p className="text-base md:text-xl font-medium">{video.description}</p>
            </div>
        </SwiperSlide>
    ))
);



export const Roadmap = () => {
    const pxCount = usePxCalculator(5);
    return (
    <div className="flex flex-col mx-auto">
        <div className="w-full md:w-[90vw] flex flex-col items-start justify-center mx-auto">
            <h1 className="text-4xl md:text-6xl w-full font-semibold px-3 md:px-6 py-5 md:py-10">
                <span className=" text-sage">AI Learning Roadmap</span>
                <br />
                <span className="text-terracotta">Study Smarter with AI</span>
            </h1>
            <hr className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 border-t-4 border-terracotta mx-3 md:mx-6 mb-6" />
        </div>
        
        <div className="w-full md:w-[90vw] flex items-center justify-start text-xl md:text-3xl font-semibol mx-auto px-3 md:px-6 pb-5 md:pb-10">
            Complete Learning Journey
        </div>

        <div className="w-full overflow-hidden py-5 px-4 md:px-0 flex items-center justify-center mx-auto">
            <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                loop={false}
                speed={600}
                slidesOffsetBefore={pxCount} 
                slidesOffsetAfter={pxCount}
            >
                {renderVideoSlides()}
            </Swiper>
        </div>
    </div>
    );
};