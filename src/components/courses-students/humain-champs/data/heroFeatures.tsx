export const heroFeatures = [
    {
      text:'15+ AI tools', 
      icon:'/assets/icons/bullet-icon-1.svg'
    },
    {
      text:'Live Interactive Classes', 
      icon:'/assets/icons/bullet-icon-2.svg'
    },
    {
      text:'Certificate issued by IIT-Kharagpur', 
      icon:'/assets/icons/bullet-icon-3.svg'
    },
    {
      text:'Create AI Projects', 
      icon:'/assets/icons/bullet-icon-4.svg'
    },
    {
      text:'LMS and community access for one year', 
      icon:'/assets/icons/bullet-icon-5.svg'
    },
    {
      text: 'Small batch sizes for personalized attention',
      icon: '/assets/icons/bullet-icon-6.svg'
    }
  ];

export const HeroVideo = {
    title: "Humain Champs - AI Learning for Students",
    id: 1,
    url: "https://player.vimeo.com/video/1150266610"
};

// Tiered pricing configuration
// startDate is in IST (Indian Standard Time)
// discountTiers are sequential - tier 1 runs first, then tier 2, etc.
export const tieredPricing = {
    originalPrice: 11800,
    // Format: YYYY-MM-DDTHH:mm:ss (IST)

    startDate: "2026-02-22T12:00:00",

    discountTiers: [
        { durationHours: 0.5, discountPercent: 50 },  // First 15 minutes: 50% off
        { durationHours: 24, discountPercent: 30 },   // Next 24 hours: 30% off
        { durationHours: 0, discountPercent: 20 }   // After that: 20% off until launch
    ],
};