'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import type { Swiper as SwiperType } from 'swiper';
import { SwipeProgress } from 'components/ui/SwipeProgress';
import { usePxCalculator } from '@/hooks/usePxCalculator';

const BlogMobile = ({ BLOG_INSIGHTS }: { BLOG_INSIGHTS: { eyebrow: string; title: string; description: string; href: string; }[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const pxCount = usePxCalculator(5);
    console.log('pxCount:', pxCount);
    const renderVideoSlides = () => (
        BLOG_INSIGHTS.map((item) => (
            <SwiperSlide 
                key={item.title} 
                className="w-[90vw]"
            >
          <article
            key={item.title}
            className="flex min-h-[250px] w-full flex-col rounded-2xl border border-[#E0E0E0] bg-[#FAF6F0] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E5255]">{item.eyebrow}</p>
            <h3 className="mt-3 text-xl font-bold text-[#011813]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4E5255]">{item.description}</p>
            <Link href={item.href} className="mt-auto pt-6 text-sm font-semibold text-[#E9A772] hover:underline">
              Read more →
            </Link>
          </article>
            </SwiperSlide>
        ))
    );


    return (
        <div className="w-full overflow-hidden py-5 md:hidden">
            <Swiper
                spaceBetween={20}
                slidesPerView='auto'
                loop={false}
                // slidesOffsetBefore={pxCount} 
                // slidesOffsetAfter={pxCount}
                resistanceRatio={0}
                watchOverflow={true}
                onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
                onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
            >
                {renderVideoSlides()}
            </Swiper>
            <SwipeProgress totalSlides={BLOG_INSIGHTS.length} activeIndex={activeIndex} visibleOnLarge={false}/>
        </div>
    )
}

export default BlogMobile;