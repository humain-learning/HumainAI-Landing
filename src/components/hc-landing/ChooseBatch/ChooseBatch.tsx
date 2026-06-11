'use client';

import { useState, useEffect, useRef } from 'react';

type ItineraryItem = {
    date: string;
    date_objday: string;
    timing: string;
};

type Batch = {
    name: string;
    start_date: string;
    limited_seats: boolean;
    sold_out: boolean;
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

const RazorpayButton = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.innerHTML = '';
        const form = document.createElement('form');
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', 'pl_SrYD9PAHtLTEOD');
        script.async = true;

        const style = document.createElement('style');
        style.textContent = `
            .razorpay-payment-button,
            .razorpay-btn-container button,
            .razorpay-btn-container form button {
                border-radius: 9999px !important;
            }
        `;

        form.appendChild(script);
        form.appendChild(style);
        container.appendChild(form);

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full flex justify-center razorpay-btn-container">
            <style>{`
                .razorpay-payment-button,
                .razorpay-btn-container button,
                .razorpay-btn-container form button {
                    border-radius: 9999px !important;
                }
            `}</style>
        </div>
    );
};

export const ChooseBatch = ({ Batches, discountData }: ChooseBatchProps) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const isActive = Boolean(discountData?.active);
    const originalPrice = Number(discountData?.base_price ?? 11800);
    const discountedPrice = Number(discountData?.active_tier?.final_price ?? originalPrice);

    return (
        <div className="relative max-w-7xl flex flex-col items-center justify-center my-5 md:my-10 mx-auto">
            <div className="w-[90%] flex flex-col items-start justify-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-start py-10">
                    <span className="text-sage">Choose Your Batch</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mb-10" />
            </div>
            
            <div className="w-[90%] flex flex-col items-start justify-center">
                <span className="text-lg md:text-2xl">Select the batch that works for your child's schedule.</span>
                <span className="text-base md:text-xl font-semibold">Once seats are gone, we cannot add more — batch size is capped to maintain quality.</span>
            </div>

            <div className="grid md:grid-cols-2 max-w-7xl grid-cols-1 gap-5 md:gap-10 mx-auto w-full md:w-[90vw] px-3 md:px-6 mt-5 md:mt-10">
                {Batches.map((batch, index) => {
                    const isExpanded = expandedIndex === index;
                    const cardBg = index % 2 === 0 ? 'bg-[#fcf5f0]' : 'bg-[#f8faf5]';
                    
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
                                <div className="flex justify-between w-[80%] items-center">
                                    <h1 className="text-2xl md:text-3xl font-semibold pr-1">
                                        <span className="text-sage">{batch.name}</span> {Boolean(batch.limited_seats) && <img className="absolute top-0 right-0 w-[20%]" src='/assets/icons/limited-seats-icon.svg'></img>}
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
                                <span className="text-lg md:text-2xl">Starting <span className="font-semibold">{batch.start_date}</span></span>
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
                                                        <td className="py-1 md:py-2">{item.date_objday}</td>
                                                        <td className="py-1 md:py-2">{item.timing}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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