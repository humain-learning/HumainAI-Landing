import { Batches } from "./data/batchData";

export const ChooseBatch = () => {
    return (
        <div className="relative flex flex-col items-center justify-center mx-auto my-5 md:my-10">
            <div className="w-full md:w-[90vw] mx-auto flex flex-col items-start justify-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-start px-3 md:px-6 py-5 md:py-10">
                    <span className="text-sage">Choose Your Winter Vacation Batch</span>
                </h1>
                <hr className="w-[90vw] md:w-1/2 lg:w-1/4 xl:w-1/8 border-t-4 border-terracotta mx-3 md:mx-6 mb-5" />

            </div>
            
            <div className="w-full md:w-[90vw] flex flex-col items-start justify-center px-3 md:px-6 mx-auto">
                <span className="text-lg md:text-2xl">Select the batch that fits your child’s holiday schedule.</span>
                <span className="text-base md:text-xl font-semibold">Limited seats for personalised attention.</span>
            </div>

             
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 mx-auto w-full md:w-[90vw] px-3 md:px-6 mt-5 md:mt-10">
                {Batches.map((batch, index) => {
                    const cardBg = index % 2 === 0 ? 'bg-[#fcf5f0]' : 'bg-[#f8faf5]';
                    const buttonBg = index % 2 === 0 ? 'bg-terracotta text-white' : 'bg-sage text-white';
                    return (
                        <div className={`relative flex flex-col justify-start w-auto rounded-[2rem] md:rounded-[4rem] ${cardBg}`} key={index}>

                            {/* {batch.limitedSeats && (
                                <div className="absolute top-0 right-0 text-white text-lg font-bold z-10 object-fill w-[15%]">
                                    <img src='/assets/Website Assets/Bubble.svg' className="" />
                                </div>
                            )} */}

                            <div className="flex flex-col flex-grow">
                                <div className="flex flex-col items-start w-full px-5 md:px-10 pt-5 md:pt-10 pb-2.5 md:pb-5">
                                    <h1 className="text-3xl md:text-5xl font-semibold pb-2.5 md:pb-5">
                                        <span className="text-sage">{batch.name}</span> {batch.limitedSeats && <span className="text-xl md:text-xl text-medium"> <i>- Limited seats available!</i></span>}
                                    </h1>
                                    <hr className="w-1/2 md:w-1/6 border-t-3 border-terracotta mb-2.5 md:mb-5" />
                                    <span className="text-lg md:text-2xl">Starting <span className="font-semibold">{batch.startDate}</span></span>
                                </div>

                                <div className="px-5 md:px-10">
                                    <table className="w-full table-auto">
                                        <thead className="hidden md:table-header-group">
                                            <tr>
                                                <th className="text-left font-semibold text-sage py-2">Date</th>
                                                <th className="text-left py-2">Day</th>
                                                <th className="text-left py-2">Timing</th>
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
                            </div>

                            <div className="flex items-center justify-center m-5 md:m-10 px-3 md:px-6">
                                                                <a
                                                                    href="https://pages.razorpay.com/humainchamps"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={`w-full mx-auto rounded-full text-base md:text-xl font-semibold py-2 px-3 md:py-3 md:px-6 hover:shadow-lg transition-shadow duration-200 ${buttonBg}`}
                                                                >
                                    <div className="w-full md:w-[75%] text-base md:text-2xl flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto gap-2 md:gap-0">
                                        <div>Enroll Now</div>
                                        <div><span className="pr-2">&#8377;9440</span><span className="font-normal"><s>&#8377;11,800</s></span></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};