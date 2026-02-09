'use client';
import React from 'react';
import { VideoCard } from "ui/VideoCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { videoTestimonials } from "./data/videotestimonials";
import { usePxCalculator } from '../../hooks/usePxCalculator';


const SLIDE_WIDTH_CLASS = "w-[80vw] md:w-[30vw]";

const renderVideoSlides = () => (
    videoTestimonials.map((video, index) => (
        <SwiperSlide 
            key={video.id} 
            className={`!w-auto ${SLIDE_WIDTH_CLASS}`}
        >
            
                <VideoCard 
                    video={video} 
                    cardWidth={SLIDE_WIDTH_CLASS}
                    index={index}
                    autoplay={false}
                />
                {/* <div className="px-3 w-full md:px-6 py-2 gap-1 flex flex-col justify-center items-start">
                    <span className="text-lg lg:text-2xl font-semibold">{video.title}</span>
                    <p className="text-base lg:text-xl font-medium">{video.description}</p>
                </div> */}
            
        </SwiperSlide>
    ))
);


export const VideoTestimonials = () => {
    const pxCount = usePxCalculator(5);
    return (
    <div className="relative flex flex-col items-center justify-center mx-auto py-6 md:py-10">
        <div className="w-full md:w-[90vw] flex flex-col items-start justify-center mx-auto">
            <h1 className="text-4xl md:text-6xl w-full font-semibold px-3 md:px-6 py-5 md:py-10">
                <span className=" text-sage">Hear From</span>
                <br />
                <span className="text-terracotta">Our Alumni</span>
            </h1>
            <hr className="w-[90vw] md:w-1/2 lg:w-1/4 xl:w-1/8 border-t-4 border-terracotta mx-3 md:mx-6 mb-6" />
        </div>
    

        <div className="w-full overflow-hidden py-5">
            <Swiper
                spaceBetween={20}
                slidesPerView='auto'
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