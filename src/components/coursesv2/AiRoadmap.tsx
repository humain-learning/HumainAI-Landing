'use client';
import React, { use } from 'react';
import { VideoCard } from "../ui/VideoCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { aiRoadmapVideos } from "./data/aiRoadmapVideos";
import { usePxCalculator } from '../hooks/usePxCalculator';


// const SLIDE_WIDTH_CLASS = "w-[30vw]";

const renderVideoSlides = () => (
    aiRoadmapVideos.map((video, index) => {
        return (
        <>
            <SwiperSlide 
            key={`${index}`} 
            className={`rounded-3xl`}>
            <VideoCard 
                video={video} 
                interactive={false}
                index={index}
                // cardWidth={SLIDE_WIDTH_CLASS}
            />
            <div className=" px-6 py-2 gap-1 flex flex-col justify-center items-start">
                <span className="text-2xl font-semibold">{video.title}</span>
                <p className="text-xl font-medium">{video.description}</p>
            </div>
            </SwiperSlide>
        
        </>
        )
    })
);



export const Roadmap = () => {
    const pxCount = usePxCalculator(5);
    return (
    <div className="flex flex-col mx-auto">
        <div className="w-[90vw] flex flex-col items-start justify-center mx-auto">
            <h1 className="text-6xl w-full font-semibold px-6 py-10">
                <span className=" text-sage">AI Learning Roadmap</span>
                <br />
                <span className="text-terracotta">Study Smarter with AI</span>
            </h1>
            <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-6" />
        </div>
        
        <div className="w-[90vw] flex items-center justify-start text-3xl font-semibol mx-auto px-6 pb-10">
            Complete Learning Journey
        </div>

        <div className="flex w-full items-center justify-center overflow-hidden mx-auto">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
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