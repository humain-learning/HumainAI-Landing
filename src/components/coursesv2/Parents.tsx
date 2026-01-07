'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { parentVideos } from "./data/parentVideos";
import { VideoCard } from "../ui/VideoCard";
import { usePxCalculator } from "../hooks/usePxCalculator";
const SLIDE_WIDTH_CLASS = "w-[80vw] md:w-[30vw]";
const renderVideoSlides = () => (
    parentVideos.map((video, index) => (
        <SwiperSlide 
            key={`${video.id}-${index}`} 
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



export const Parents = () => {    
        
    const pxCount = usePxCalculator(5);
    return (
        <div className=" w-full my-20 flex flex-col">
            <div className="w-[90vw] mx-auto flex flex-col">
                    <h1 className="text-4xl md:text-6xl font-semibold text-start px-6 py-10">
                        <span className="text-sage">What Parents</span>
                        <br />
                        <span className="text-black"> Are Saying</span>
                    </h1>
                    <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-10" />
            </div>

            <div className="w-full flex items-center relative justify-end">
                <div className="md:w-[40vw] hidden md:flex object-contain">
                    <img src='/assets/Website Assets/Parents.png' className="scale-x-[-1]"/>
                </div>
                <div className="overflow-hidden py-5 w-full md:w-[60vw]">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView='auto'
                        loop={false}
                        // slidesOffsetBefore={pxCount} 
                        slidesOffsetAfter={pxCount}
                    >
                        {renderVideoSlides()}
                    </Swiper>
                </div>
            </div>
        </div>
    );
 };