'use client'
import { useState } from 'react';
import { FeatureCard } from "@/components/ui/FeatureCard"
import { SwipeProgress } from "@/components/ui/SwipeProgress";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/swiper.css";
import { features } from "./data";
import { usePxCalculator } from 'hooks/usePxCalculator';


const renderFeatureSlides = () => (
    features.map((feature) => (
        <SwiperSlide 
            key={feature.id} 
			className="!w-auto"
        >
			<div className='h-[50vh] [@media(min-width:500px)]:h-[60vh]'>
				<FeatureCard 
					title1={feature.title1}
					title2={feature.title2}
					description={feature.description}
					icon={feature.icon}
					image={feature.image}
				/>
			</div>
        </SwiperSlide>
    ))
);
export const GameChanger = () => {
	const pxCount = usePxCalculator(5);
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="mt-10 md:mt-20">
			<div className="relative w-[90vw] flex flex-col items-start justify-center mx-auto">
                <h1 className="text-3xl md:text-6xl font-semibold text-start py-[1.5rem]">
                    <span className=" text-sage">
                        Why This Program is a
                    </span>
                    <br />
                    <span>
                        Game Changer for Students
                    </span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mb-10" />
          	</div>
			
            <Swiper
				spaceBetween={10}
				breakpoints={{
					500: { spaceBetween: 14 },
					768: { spaceBetween: 18 },
					1024: { spaceBetween: 24 },
				}}
				slidesPerView='auto'
				loop={false}
				slidesOffsetBefore={pxCount}
				slidesOffsetAfter={pxCount}
				resistanceRatio={0}
				watchOverflow={true}
				onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
				onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
			>
				{renderFeatureSlides()}
			</Swiper>
			<SwipeProgress totalSlides={features.length} activeIndex={activeIndex} visibleOnLarge={false}/>
		</div>
	)
}