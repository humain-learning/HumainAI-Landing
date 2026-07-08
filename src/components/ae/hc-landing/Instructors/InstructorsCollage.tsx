'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/swiper.css";

import { instructors } from 'components/courses-students/humain-champs-v2/Instructors/data';
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
			className="overflow-hidden text-left"
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

export default function InstructorsCollage() {
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
    <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center gap-12">
          
          {/* Top Section: Heading and Text description */}
          <div className="flex flex-col justify-center items-center text-center max-w-3xl">
            <div className="h-[3px] w-12 bg-sage rounded-full mb-3 mx-auto" />
            <span className="font-display text-xs font-extrabold tracking-widest text-[#5e714e] uppercase select-none">
              YOUR INSTRUCTORS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal leading-tight mt-2 mb-4 tracking-tight">
              Taught by educators who've been in real classrooms
            </h2>
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
             <br className="hidden md:block" />
              Real educators with 10–20 years of experience, now combining classroom expertise with cutting-edge AI skills.
            </p>
          </div>

          {/* Bottom Section: Instructors Carousel */}
          <div className="flex items-center justify-center relative w-full">
            <div className="w-full flex flex-col relative">
              <button className="absolute left-0 lg:-left-6 top-[120px] lg:top-[200px] z-20" onClick={handlePrev}>
                  <img src='/assets/HCV2/icons/LeftArrow.svg' className="w-8 md:w-10"/>
              </button>
              <button className="absolute right-0 lg:-right-6 top-[120px] lg:top-[200px] z-20" onClick={handleNext}>
                  <img src='/assets/HCV2/icons/RightArrow.svg' className="w-8 md:w-10"/>
              </button>

              <div className="relative flex flex-col md:flex-row mx-auto w-full md:items-start md:p-5 gap-5">
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

                  <div className="w-full md:flex-1 px-5 rounded-[45px] rounded-bl-none bg-sage py-10 text-left">
                      <hr className="w-12 border-t-4 border-white mb-3" />
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
              <div className="mt-8 flex justify-center w-full">
                  <SwipeProgress totalSlides={instructors.length} activeIndex={activeIndex} visibleOnLarge={true} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
