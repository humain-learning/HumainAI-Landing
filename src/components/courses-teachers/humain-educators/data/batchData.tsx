const Batches = [
    {
        name: 'April Batch',
        startDate: "4th April",
        limitedSeats: false,
        soldOut:false,
        itinerary: [
            {
                date: '4th Apr',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '5th Apr',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
            {
                date: '11th Apr',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '12th Apr',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
            {
                date: '18th Apr',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '19th Apr',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
            {
                date: '20th Apr',
                day: 'Monday',
                timing: '5PM - Doubt Clearing'
            },
            {
                date: '24th Apr',
                day: 'Friday',
                timing: '5PM - Graduation'
            }
        ]
        
    },
];

if (Batches.length === 1) {
    Batches[0].limitedSeats = true;
}

export { Batches };
