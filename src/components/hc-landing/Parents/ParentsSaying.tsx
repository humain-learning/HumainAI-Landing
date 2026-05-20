'use client';

import React from 'react';
import { VideoCard } from '@/components/ui/VideoCard';
import { parentReviews } from './data';

export default function ParentsSaying() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-gray-100 overflow-hidden relative">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* Centered Heading Title Area */}
        <div className="flex flex-col items-center space-y-3.5 mb-16 text-center">
          <div className="h-[3px] w-12 bg-sage rounded-full" />
          <div className="inline-block rounded-full border border-sage/60 px-3.5 py-1 text-center bg-white shadow-sm select-none">
            <span className="font-display text-[10.5px] font-extrabold tracking-wider text-[#5e714e] uppercase">
              PARENT REVIEWS
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl md:text-5xl">
            What parents are saying
          </h2>
          <div className="bg-[#fafaf9] border border-gray-150 px-4 py-2 rounded-2xl shadow-sm inline-block select-none mt-2">
            <p className="font-sans text-[13px] sm:text-[13.5px] font-semibold text-charcoal/90">
              Rated <span className="text-terracotta font-extrabold">4.5/5</span> based on <span className="font-bold">200+</span> parent reviews.
              Here's what families from across India experienced.
            </p>
          </div>
        </div>

        {/* Responsive Layout: Desktop 3-column Grid, Mobile/Tablet horizontal snapping carousel */}
        <div className="relative">
          {/* Scrollable Container (Desktop hides scrollbars and renders as absolute grid, Mobile enables snapping carousel) */}
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-8 pb-6 md:pb-0 learn-scrollbar scroll-smooth">
            {parentReviews.map((review, idx) => (
              <div
                key={review.id}
                className="w-[290px] sm:w-[325px] md:w-full shrink-0 snap-start flex flex-col space-y-6 bg-white select-none"
              >
                
                {/* 1. TOP CARD: The Parent Video Card (Styled in solid sage green background to match the PDF mockups exactly) */}
                <div className="bg-sage rounded-3xl p-4 flex flex-col space-y-4 border border-sage/15 shadow-sm hover:scale-[1.01] transition duration-300">
                  
                  {/* Vimeo player using existing VideoCard */}
                  <div className="w-full rounded-2xl overflow-hidden bg-white/10 aspect-video shadow-inner relative z-10">
                    <VideoCard
                      video={{
                        id: review.id,
                        url: review.url,
                        title: review.reviewTitle + ' ' + review.student,
                      }}
                      cardWidth="w-full"
                      index={idx}
                      autoplay={false}
                    />
                  </div>

                  {/* Quote and video headline text */}
                  <div className="flex items-start gap-2 px-1 pb-1">
                    <span className="font-display text-4xl font-extrabold !text-white/80 leading-none select-none -mt-1.5">
                      “
                    </span>
                    <p className="font-display text-xs sm:text-sm font-extrabold !text-white leading-tight tracking-tight mt-1">
                      {review.videoHeadline}
                    </p>
                  </div>

                </div>

                {/* 2. BOTTOM CARD: The Parent Written Testimonial (Renders directly underneath the video card in the same column) */}
                <div className="flex flex-col space-y-3.5 px-2">
                  
                  {/* Testimonial Quote Indicator & Title */}
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-terracotta/15 text-terracotta rounded-full flex items-center justify-center font-display text-lg font-bold select-none shrink-0">
                      “
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-extrabold text-charcoal tracking-tight leading-snug">
                      {review.reviewTitle}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="font-sans text-[13px] leading-relaxed text-charcoal/85 min-h-[105px]">
                    "{review.reviewText}"
                  </p>

                  {/* Star Rating Indicator */}
                  <div className="flex gap-0.5 text-terracotta select-none text-[13px] py-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Author Metadata Footer block */}
                  <div className="pt-3 border-t border-gray-150 mt-auto">
                    <span className="block font-display text-[13.5px] font-extrabold text-charcoal leading-none">
                      {review.author}
                    </span>
                    <span className="block font-sans text-[11px] text-charcoal/70 mt-1.5 leading-none">
                      {review.sub}
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
