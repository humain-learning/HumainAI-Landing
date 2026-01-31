export const features = [
    {
      text:'Become a Google AI Certified Educator', 
      icon:'/assets/courses-teachers/humain-educators/icons/hero/bullet5.svg'
    },
    {
      text:'Live, Guided Sessions with Small Batches', 
      icon:'/assets/courses-teachers/humain-educators/icons/hero/bullet1.svg'
    },
    {
      text:'No prior experience on AI required', 
      icon:'/assets/courses-teachers/humain-educators/icons/hero/bullet2.svg'
    },
    {
      text:'Master 15+ AI tools to use in Real Classrooms', 
      icon:'/assets/courses-teachers/humain-educators/icons/hero/bullet3.svg'
    },
    {
      text:'Lifetime Community engagement and support', 
      icon:'/assets/courses-teachers/humain-educators/icons/hero/bullet4.svg'
    }
  ];

export const HeroVideo = {
    title: "Humain Champs - AI Learning for Students",
    id: 1,
    url: "https://player.vimeo.com/video/1150266610"
};

export const price = 6499;

// Tiered pricing configuration
// startDate is in IST (Indian Standard Time)
// discountTiers are sequential - tier 1 runs first, then tier 2, etc.
export const tieredPricing = {
    originalPrice: 7499,
    // Format: YYYY-MM-DDTHH:mm:ss (IST)
    startDate: "2026-01-31T19:00:00",
    discountTiers: [
        { durationHours: 0.25, discountPercent: 50 },  // First 15 minutes: 30% off
        { durationHours: 0.25, discountPercent: 50 },  // Next 15 minutes: 15% off
        { durationHours: 24, discountPercent: 40 }   // Next 24 hours: 40% off
    ],
};

export const HeroImages = [
    '/assets/courses-teachers/humain-educators/Hero/0.svg',
    '/assets/courses-teachers/humain-educators/Hero/1.png',
    '/assets/courses-teachers/humain-educators/Hero/2.png',
    '/assets/courses-teachers/humain-educators/Hero/3.png',
    '/assets/courses-teachers/humain-educators/Hero/4.jpg'
];