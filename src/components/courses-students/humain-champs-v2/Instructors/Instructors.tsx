'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/swiper.css";
import { instructors } from "./data";
import { SwipeProgress } from 'components/ui/SwipeProgress';

const renderInstructorDetailsSlides = () => (
    instructors.map((instructor) => (
        <SwiperSlide 
            key={instructor.id}
			className="!w-full"
        >
			<div className="flex w-full flex-col justify-center items-center">
				<div className="w-[45%] md:w-[70%] aspect-square rounded-[27px] overflow-hidden relative">
					<img src={instructor.image} className="w-full object-contain absolute inset-0 z-0"/>
					<div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-b from-transparent to-sage z-10"></div>
				</div>
				<div className="w-fit text-center flex flex-col py-5 gap-1">
					<span className="font-bold text-xl">{instructor.name}</span>
					<span className="font-normal textlgl">{instructor.designation}</span>
				</div>
			</div>
        </SwiperSlide>
    ))
);

const DescriptionSlide = ({
	description,
	isExpanded,
	onUpdate,
	onAnimationComplete,
}: {
	description: string;
	isExpanded: boolean;
	onUpdate?: () => void;
	onAnimationComplete?: () => void;
}) => {
	const contentRef = useRef<HTMLParagraphElement | null>(null);
	const [expandedHeight, setExpandedHeight] = useState(0);
	const collapsedHeight = 120;

	useEffect(() => {
		if (!contentRef.current) return;
		setExpandedHeight(contentRef.current.scrollHeight);
	}, [description]);

	return (
		<motion.div
			initial={false}
			animate={{ height: isExpanded ? expandedHeight : collapsedHeight }}
			transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.9 }}
			onUpdate={onUpdate}
			onAnimationComplete={onAnimationComplete}
			className="overflow-hidden"
		>
			<p ref={contentRef} className="text-white text-sm lg:text-xl pointer-events-none">
				{description}
			</p>
		</motion.div>
	);
};

const renderInstructorDescriptionSlides = (
	expandedById: Record<number, boolean>,
	onUpdate?: () => void,
	onAnimationComplete?: () => void,
) => (
    instructors.map((instructor) => (
        <SwiperSlide 
            key={instructor.id} 
			className="!w-full"
        >
			<DescriptionSlide
				description={instructor.description}
				isExpanded={!!expandedById[instructor.id]}
				onUpdate={onUpdate}
				onAnimationComplete={onAnimationComplete}
			/>
        </SwiperSlide>
    ))
);
export const Instructors = () => {
	const [expandedById, setExpandedById] = useState<Record<number, boolean>>({});
	const [activeIndex, setActiveIndex] = useState(0);
	const [detailsSwiper, setDetailsSwiper] = useState<SwiperType | null>(null);
	const [descriptionSwiper, setDescriptionSwiper] = useState<SwiperType | null>(null);
	const activeInstructor = instructors[activeIndex];
	const isActiveExpanded = activeInstructor ? !!expandedById[activeInstructor.id] : false;

	useEffect(() => {
		if (!descriptionSwiper) return;
		requestAnimationFrame(() => {
			descriptionSwiper.updateAutoHeight();
		});
	}, [activeIndex, isActiveExpanded, descriptionSwiper]);

	const handlePrev = () => {
		detailsSwiper?.slidePrev();
	};

	const handleNext = () => {
		detailsSwiper?.slideNext();
	};

	const updateDescriptionHeight = () => {
		descriptionSwiper?.updateAutoHeight();
	};

	return (
		<div className="w-full h-full mx-auto flex flex-col relative ">
			<div className="w-[90vw] mx-auto">
				<h1 className="text-4xl md:text-6xl font-semibold py-10">
	                <span className="text-sage">Meet Our </span><span>Instructors</span>
	            </h1>
			
            	<hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mb-10" />
			</div>

			<button className="absolute left-2 md:left-10 top-[350px] z-20" onClick={handlePrev}>
				<img src='/assets/HCV2/icons/LeftArrow.svg' className="w-10"/>
			</button>
			<button className="absolute right-2 md:right-10 top-[350px]  z-20" onClick={handleNext}>
				<img src='/assets/HCV2/icons/RightArrow.svg' className="w-10"/>
			</button>

			<div className="relative flex flex-col md:flex-row mx-auto w-[90vw] md:items-start p-5 gap-5">
				

				<Swiper
					onSwiper={(swiper) => {
						setDetailsSwiper(swiper);
						setActiveIndex(swiper.activeIndex);
					}}
					onSlideChange={(swiper) => {
						const nextIndex = swiper.activeIndex;
						setActiveIndex(nextIndex);
						descriptionSwiper?.slideTo(nextIndex);
					}}
					className="w-full md:w-[40%] md:shrink-0"
					slidesPerView={1}
					loop={false}
				>
					{renderInstructorDetailsSlides()}
				</Swiper>

				
				
				<div className="w-full md:flex-1 px-5 rounded-[45px] rounded-bl-none bg-sage py-10">

					<hr className="w-1/8 border-t-4 border-white mb-3" />
					<Swiper 
						onSwiper={setDescriptionSwiper}
						allowTouchMove={false}
						autoHeight={true}
						slidesPerView={1}
						loop={false}
					>
						{renderInstructorDescriptionSlides(expandedById, updateDescriptionHeight, updateDescriptionHeight)}
					</Swiper>
					<button
						type="button"
						onClick={() => {
							if (!activeInstructor) return;
							setExpandedById((prev) => ({
								...prev,
								[activeInstructor.id]: !prev[activeInstructor.id],
							}));
						}}
						className="mt-3 font-semibold text-white text-xs lg:text-lg underline underline-offset-4"
					>
						{isActiveExpanded ? 'Read less' : 'Read more'}
					</button>
				</div>
			</div>
			<SwipeProgress totalSlides={instructors.length} activeIndex={activeIndex} visibleOnLarge={true} />
		</div>
	)
}