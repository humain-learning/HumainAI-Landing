import { Batches } from "./data/batchData";

export const ChooseBatch = () => {
    return (
        <div className="relative flex flex-col items-center justify-center mx-auto my-10">
            <div className="w-[90vw] mx-auto flex flex-col items-start justify-center">
                <h1 className="text-6xl font-semibold text-start px-6 py-10">
                    <span className="text-sage">Choose Your Winter Vacation Batch</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-5" />

            </div>
            
            <div className="w-[90vw] flex flex-col items-start justify-center px-6 mx-auto">
                <span className="text-2xl">Select the batch that fits your child’s holiday schedule.</span>
                <span className="text-xl font-semibold">Limited seats for personalised attention.</span>
            </div>

             
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-auto w-[90vw] px-6 mt-10">
                {Batches.map((batch, index) => {
                    const cardBg = index % 2 === 0 ? 'bg-[#fcf5f0]' : 'bg-[#f8faf5]';
                    const buttonBg = index % 2 === 0 ? 'bg-terracotta text-white' : 'bg-sage text-white';
                    return (
                        <div className={`relative flex flex-col justify-start w-auto rounded-[4rem] ${cardBg}`} key={index}>

                            {/* {batch.limitedSeats && (
                                <div className="absolute top-0 right-0 text-white text-lg font-bold z-10 object-fill w-[15%]">
                                    <img src='/assets/Website Assets/Bubble.svg' className="" />
                                </div>
                            )} */}

                            <div className="flex flex-col flex-grow">
                                <div className="flex flex-col items-start w-full px-10 pt-10 pb-5">
                                    <h1 className="text-5xl font-semibold pb-5">
                                        <span className="text-sage">{batch.name}</span> {batch.limitedSeats && <span className="text-xl text-medium"> <i>- Limited seats available!</i></span>}
                                    </h1>
                                    <hr className="w-1/6 border-t-3 border-terracotta mb-5" />
                                    <span className="text-2xl">Starting <span className="font-semibold">{batch.startDate}</span></span>
                                </div>

                                <div className="px-10">
                                        {batch.itinerary.map((item, i) => (
                                            <div key={i} className="grid grid-cols-3">
                                                <div className="font-semibold text-sage py-2">{item.date}</div>
                                                <div className="py-2">{item.day}</div>
                                                <div className="py-2">{item.timing}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-center m-10 px-6">
                                <button className={` w-full mx-auto rounded-full text-xl font-semibold p-3 ${buttonBg}`}>
                                    <div className="w-[75%] text-2xl flex flex-row items-center justify-between mx-auto">
                                        <div>Enroll Now</div>
                                        <div><span className="pr-2">&#8377;9440</span><span className="font-normal"><s>&#8377;11,800</s></span></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};