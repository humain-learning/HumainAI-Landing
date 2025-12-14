'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { aiRoadmapVideos as parentVideos } from "./data/aiRoadmapVideos";
import { VideoCard } from "../ui/VideoCard";
import { usePxCalculator } from "../hooks/usePxCalculator";


const renderVideoSlides = () => (
    parentVideos.map((video, index) => {
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
            {/* <div className=" px-6 py-2 gap-1 flex flex-col justify-center items-start">
                <span className="text-2xl font-semibold">{video.title}</span>
                <p className="text-xl font-medium">{video.description}</p>
            </div> */}
            </SwiperSlide>
        
        </>
        )
    })
);



export const Parents = () => {
    return (
        <div className="relative my-20">
            <div className="w-[90vw] flex flex-row mx-auto">
                <div className="w-[70%]">
                    <h1 className="text-6xl font-semibold text-start px-6 py-10">
                        <span className="text-sage">What Parents</span>
                        <span className="text-black"> Are Saying</span>
                    </h1>
                    <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-10" />

                    <div className="overflow-x-show">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={false}
                        speed={600}
                        >       
                            {renderVideoSlides()}
                        </Swiper>
                    </div>
                </div>
            </div>
            <img src='/assets/Website Assets/Parents.png' className="absolute bottom-0 right-0 h-full" />
        </div>
    );
 };