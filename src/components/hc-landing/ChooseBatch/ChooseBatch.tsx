'use client';

import { useState } from 'react';

type ItineraryItem = {
    date: string;
    day: string;
    timing: string;
};

type Batch = {
    name: string;
    startDate: string;
    limitedSeats: boolean;
    soldOut: boolean;
    itinerary: ItineraryItem[];
};

type ActiveTier = {
    event: string;
    startDate: string;
    endDate: string;
    discount_percent: number;
    final_price: number;
};

type DiscountData = {
    template_id: string;
    active: boolean;
    base_price: number;
    active_tier: ActiveTier;
};

type ChooseBatchProps = {
    Batches: Batch[];
    discountData?: DiscountData;
}

export const ChooseBatch = ({ Batches, discountData }: ChooseBatchProps) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const isActive = Boolean(discountData?.active);
    const originalPrice = Number(discountData?.base_price ?? 11800);
    const discountedPrice = Number(discountData?.active_tier?.final_price ?? originalPrice);

    return (
        <div className="relative flex flex-col items-center justify-center my-5 md:my-10">
            <div className="w-[90vw] flex flex-col items-start justify-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-start py-10">
                    <span className="text-sage">Choose Your Batch</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mb-10" />
            </div>
            
            <div className="w-[90vw] flex flex-col items-start justify-center">
                <span className="text-lg md:text-2xl">Select the batch that fits your child's schedule.</span>
                <span className="text-base md:text-xl font-semibold">Limited batch size for personalised attention.</span>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 mx-auto w-full md:w-[90vw] px-3 md:px-6 mt-5 md:mt-10">
                {Batches.map((batch, index) => {
                    const isExpanded = expandedIndex === index;
                    const cardBg = index % 2 === 0 ? 'bg-[#fcf5f0]' : 'bg-[#f8faf5]';
                    const buttonBg = index % 2 === 0 ? 'bg-terracotta text-white' : 'bg-sage text-white';
                    
                    return (
                        <div 
                            className={`relative flex flex-col justify-start w-auto rounded-[2rem] md:rounded-[4rem] border border-transparent hover:border-sage/20 transition-all duration-300 ${cardBg}`} 
                            key={index}
                        >
                            {/* Card Header acting as a clickable Tab */}
                            <button
                                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                className="flex flex-col items-start w-full px-5 md:px-10 pt-5 md:pt-10 pb-2.5 md:pb-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/30 rounded-t-[2rem] md:rounded-t-[4rem]"
                            >
                                <div className="flex justify-between items-center w-full">
                                    <h1 className="text-3xl md:text-4xl font-semibold pr-4">
                                        <span className="text-sage">{batch.name}</span> {Boolean(batch.limitedSeats) && <span className="text-xl md:text-xl font-normal text-medium"> <i>- Limited seats available!</i></span>}
                                    </h1>
                                    <div className="flex items-center justify-center rounded-full bg-sage/10 hover:bg-sage/20 p-2 transition-colors duration-200 shrink-0">
                                        <svg
                                            className={`w-6 h-6 text-sage transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <hr className="w-1/2 md:w-1/6 border-t-3 border-terracotta mt-3 md:mt-5 mb-2.5 md:mb-5" />
                                <span className="text-lg md:text-2xl">Starting <span className="font-semibold">{batch.startDate}</span></span>
                            </button>

                            {/* Collapsible details container */}
                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                <div className="flex flex-col flex-grow pb-5 md:pb-10">
                                    <div className="px-5 md:px-10 flex">
                                        <table className="w-full table-auto text-center ">
                                            <thead className="hidden md:table-header-group">
                                                <tr>
                                                    <th className="font-semibold text-sage py-2">Date</th>
                                                    <th className="py-2">Day</th>
                                                    <th className="py-2">Timing</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {batch.itinerary.map((item, i) => (
                                                    <tr key={i} className="border-b border-gray-200 md:border-none">
                                                        <td className="font-semibold text-sage py-1 md:py-2">{item.date}</td>
                                                        <td className="py-1 md:py-2">{item.day}</td>
                                                        <td className="py-1 md:py-2">{item.timing}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex items-center justify-center m-5 md:m-10 px-3 md:px-6">
                                        {batch.soldOut ? (
                                            <div
                                                className="w-full mx-auto rounded-full text-base md:text-xl font-semibold py-2 px-3 md:py-3 md:px-6 bg-gray-400 text-white cursor-not-allowed opacity-70"
                                            >
                                                <div className="w-full md:w-[75%] text-xl md:text-2xl flex items-center justify-center mx-auto">
                                                    <div>Sold Out</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href="https://pages.razorpay.com/humainchamps"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full mx-auto rounded-full text-base md:text-xl font-semibold py-2 px-3 md:py-3 md:px-6 hover:shadow-lg transition-shadow duration-200 ${buttonBg}`}
                                            >
                                                <div className="w-full md:w-[75%] text-xl md:text-2xl flex flex-row md:flex-row items-center justify-center lg:justify-between mx-auto gap-2 md:gap-0">
                                                    <div>Enroll Now!</div>
                                                    {isActive ? (
                                                        <div>
                                                            <span className="pr-2"><s>&#8377;{originalPrice.toLocaleString('en-IN')}</s></span><span>&#8377;{discountedPrice.toLocaleString('en-IN')}</span>
                                                        </div>
                                                    ) : (
                                                        <div>&#8377;{originalPrice.toLocaleString('en-IN')}</div>
                                                    )}
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};