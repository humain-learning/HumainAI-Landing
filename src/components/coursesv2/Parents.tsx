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
    return (
        <div className="relative w-full my-20">
            <img src='/assets/Website Assets/Parents.png' className="absolute left-0 top-0 h-full w-[30vw] scale-x-[-1] hidden md:block" />
            <div className="w-[90vw] mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-[70%] md:ml-[30vw]">
                    <h1 className="text-4xl md:text-6xl font-semibold text-start px-6 py-10">
                        <span className="text-sage">What Parents</span>
                        <span className="text-black"> Are Saying</span>
                    </h1>
                    <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-10" />

                    <div className="overflow-x-show">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView="auto"
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                            loop={false}
                            speed={600}
                        >
                            {renderVideoSlides()}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
 };