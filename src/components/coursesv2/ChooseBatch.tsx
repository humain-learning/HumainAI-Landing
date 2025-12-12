

const Batches = [
    {
        name: "Weekend Batch",
        startDate: "20th December",
        itinerary: {
            dates: ['20th-21st Dec', '27th-28th Dec', '3rd-4th Jan', '5th Jan'],
            days: ['Saturday, Sunday', 'Saturday, Sunday', 'Saturday, Sunday', 'Monday'],
            timings: ['11AM-1PM', '11AM-1PM', '11AM-1PM', '5PM-7PM']
        },
        limitedSeats: true
    },
    {
        name: 'New Year Batch',
        startDate: "3rd January",
        itinerary: {
            dates: ['3rd Jan', '4th Jan', '5th Jan', '6th Jan', '7th Jan'],
            days: ['Saturday', 'Sunday','Monday','Tuesday','Wednesday'],
            timings: ['11AM-1PM & 2PM-4PM', '11AM-1PM & 2PM-4PM', '11AM-1PM & 2PM-4PM', '5PM', '11AM',]
        },
        limitedSeats: false
    }
];

export const ChooseBatch = () => {
    return (
        <div className="relative flex flex-col items-center justify-center mx-auto py-10">
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
            <div className="grid grid-cols-2 gap-5 mx-auto w-[90vw]">
                <div></div>
            </div>
        </div>
    );
};