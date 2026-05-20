'use client';

import { useState, useRef, useEffect } from 'react';

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
    const [selectedBatchIndex, setSelectedBatchIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isActive = Boolean(discountData?.active);
    const originalPrice = Number(discountData?.base_price ?? 11800);
    const discountedPrice = Number(discountData?.active_tier?.final_price ?? originalPrice);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedBatch = selectedBatchIndex !== null ? Batches[selectedBatchIndex] : null;
    const cardBg = selectedBatchIndex !== null && selectedBatchIndex % 2 === 0 ? 'bg-[#fcf5f0]' : 'bg-[#f8faf5]';
    const buttonBg = selectedBatchIndex !== null && selectedBatchIndex % 2 === 0 ? 'bg-terracotta text-white' : 'bg-sage text-white';

    return (
        <div className="relative flex flex-col items-center justify-center my-5 md:my-10">
            <div className="w-[90vw] flex flex-col items-start justify-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-start py-10">
                    <span className="text-sage">Choose Your Batch</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mb-10" />
            </div>
            
            <div className="w-[90vw] flex flex-col items-start justify-center mb-6">
                <span className="text-lg md:text-2xl">Select the batch that fits your child's schedule.</span>
                <span className="text-base md:text-xl font-semibold">Limited batch size for personalised attention.</span>
            </div>

            {/* Custom Dropdown Selector */}
            <div className="w-[90vw] flex flex-col items-start justify-center mb-8 relative z-30" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full md:w-[480px] bg-white border-2 border-sage/25 hover:border-sage/60 rounded-2xl px-6 py-4 text-left transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sage/30 cursor-pointer"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-center gap-3">
                        <span className={`text-lg md:text-xl font-semibold ${selectedBatch ? 'text-sage' : 'text-gray-400'}`}>
                            {selectedBatch ? `${selectedBatch.name} (Starts ${selectedBatch.startDate})` : 'Select a batch...'}
                        </span>
                        {selectedBatch?.soldOut && (
                            <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                Sold Out
                            </span>
                        )}
                    </div>
                    <svg
                        className={`w-6 h-6 text-sage transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full md:w-[480px] bg-white border border-gray-150 rounded-2xl shadow-xl z-50 overflow-hidden py-1">
                        {Batches.map((batch, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedBatchIndex(index);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-6 py-4 text-base md:text-lg transition-all duration-200 flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-gray-100 last:border-none cursor-pointer
                                    ${selectedBatchIndex === index 
                                        ? 'bg-sage/10 text-sage font-semibold' 
                                        : 'text-gray-700 hover:bg-sage/5 hover:text-sage'
                                    }`}
                            >
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg">{batch.name}</span>
                                    <span className="text-sm text-gray-500">Starts: {batch.startDate}</span>
                                </div>
                                <div className="flex gap-2">
                                    {batch.soldOut ? (
                                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                            Sold Out
                                        </span>
                                    ) : batch.limitedSeats ? (
                                        <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                            Limited Seats
                                        </span>
                                    ) : null}
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Batch Details Section */}
            <div className="w-[90vw] flex justify-center mt-5 md:mt-10">
                {selectedBatch ? (
                    <div className={`relative flex flex-col justify-start w-full md:w-[600px] lg:w-[700px] rounded-[2rem] md:rounded-[4rem] shadow-sm transition-all duration-500 border border-sage/5 ${cardBg}`}>
                        <div className="flex flex-col flex-grow">
                            <div className="flex flex-col items-start w-full px-5 md:px-10 pt-5 md:pt-10 pb-2.5 md:pb-5">
                                <h1 className="text-3xl md:text-4xl font-semibold pb-2.5 md:pb-5">
                                    <span className="text-sage">{selectedBatch.name}</span> {Boolean(selectedBatch.limitedSeats) && <span className="text-xl md:text-xl text-medium"> <i>- Limited seats available!</i></span>}
                                </h1>
                                <hr className="w-1/2 md:w-1/6 border-t-3 border-terracotta mb-2.5 md:mb-5" />
                                <span className="text-lg md:text-2xl">Starting <span className="font-semibold">{selectedBatch.startDate}</span></span>
                            </div>

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
                                        {selectedBatch.itinerary.map((item, i) => (
                                            <tr key={i} className="border-b border-gray-200 md:border-none">
                                                <td className="font-semibold text-sage py-1 md:py-2">{item.date}</td>
                                                <td className="py-1 md:py-2">{item.day}</td>
                                                <td className="py-1 md:py-2">{item.timing}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex items-center justify-center m-5 md:m-10 px-3 md:px-6">
                            {selectedBatch.soldOut ? (
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
                ) : (
                    <div className="w-full md:w-[600px] lg:w-[700px] flex flex-col items-center justify-center py-16 px-6 text-center border-2 border-dashed border-sage/20 rounded-[2rem] md:rounded-[4rem] bg-[#fcf5f0]/30 transition-all duration-300">
                        <svg
                            className="w-12 h-12 text-sage/40 mb-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-lg md:text-xl font-semibold text-sage/80 mb-2">No Batch Selected</span>
                        <span className="text-sm md:text-base text-gray-500 max-w-sm">
                            Please select a batch from the dropdown above to view its complete schedule and register.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};