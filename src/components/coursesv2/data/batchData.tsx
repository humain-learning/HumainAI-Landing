const Batches = [
    // {
    //     name: "Weekend Batch",
    //     startDate: "20th December",
    //     limitedSeats: true,
    //     itinerary: [
    //         {
    //             date: '20th-21st Dec',
    //             day: 'Saturday, Sunday',
    //             timing: '11AM-1PM'
    //         },
    //         {
    //             date: '27th-28th Dec',
    //             day: 'Saturday, Sunday',
    //             timing: '11AM-1PM'
    //         },
    //         {
    //             date: '3rd-4th Jan',
    //             day: 'Saturday, Sunday',
    //             timing: '11AM-1PM'
    //         },
    //         {
    //             date: '5th Jan',
    //             day: 'Monday',
    //             timing: '5PM-7PM'
    //         }
    //     ]
    // },
    {
        name: 'Republic Day Batch',
        startDate: "24th January",
        limitedSeats: true,
        itinerary: [
            {
                date: '24th Jan',
                day: 'Saturday',
                timing: '11AM-1PM & 2PM-4PM'
            },
            {
                date: '25th Jan',
                day: 'Sunday',
                timing: '11AM-1PM & 2PM-4PM'
            },
            {
                date: '26th Jan',
                day: 'Monday',
                timing: '11AM-1PM & 2PM-4PM'
            },
            {
                date: '27th Jan',
                day: 'Tuesday',
                timing: '5PM - Doubt Clearing'
            },
            {
                date: '31st Jan',
                day: 'Saturday',
                timing: '5PM - Graduation'
            }
        ]
        
    },

];

if (Batches.length === 1) {
    Batches[0].limitedSeats = true;
}

export { Batches };