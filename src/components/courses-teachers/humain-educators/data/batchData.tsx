const Batches = [
    {
        name: 'Early March Batch',
        startDate: "7th March",
        limitedSeats: true,
        soldOut:false,
        itinerary: [
            {
                date: '7th Mar',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '8th Mar',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
            {
                date: '14th Mar',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '15th Mar',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
            {
                date: '21st Mar',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '22nd Mar',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
            {
                date: '23rd Mar',
                day: 'Monday',
                timing: '5PM - Doubt Clearing'
            },
            {
                date: '27th Mar',
                day: 'Friday',
                timing: '5PM - Graduation'
            }
        ]
        
    },
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
    {
        name: 'Late March Batch',
        startDate: "21st March",
        limitedSeats: false,
        soldOut:true,
        itinerary: [
            {
                date: '21st Mar',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '22nd Mar',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
            {
                date: '28th Mar',
                day: 'Saturday',
                timing: '5PM-7PM'
            },
            {
                date: '29th Mar',
                day: 'Sunday',
                timing: '5PM-7PM'
            },
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
                date: '6th Apr',
                day: 'Monday',
                timing: '5PM - Doubt Clearing'
            },
            {
                date: '10th Apr',
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
