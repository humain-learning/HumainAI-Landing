'use client';

import React, { useRef, useState } from 'react';
import { VideoCard } from '@/components/ui/VideoCard';
<<<<<<< Updated upstream
=======
import { SwipeProgress } from "@/components/ui/SwipeProgress";
>>>>>>> Stashed changes

// A high-quality icon for the key learning outcome
const OutcomeIcon = () => (
  <svg
    className="h-4.5 w-4.5 text-sage shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

import { aiRoadmapVideos } from './data';

// Curriculum static details to be combined with the imported aiRoadmapVideos
const CURRICULUM_DETAILS = [
  {
    duration: '56 days',
    level: 'Beginner',
    format: 'Beginner',
    tools: ['CHATGPT', 'GEMINI', 'HEYGEN'],
    outcome: 'Students can explain how AI works to their classmates',
    longDescription: 'Learn what AI is, how it works, where it is used today, and where its limitations lie while exploring beginner-friendly AI tools.',
    title: 'The AI Revolution'
  },
  {
    duration: '56 days',
    level: 'Beginner',
    format: 'Beginner',
    tools: ['PERPLEXITY', 'CHATGPT', 'GEMINI'],
    outcome: 'Students build their own custom study notes dynamic tutor',
    longDescription: 'Use AI as a study partner to deepen understanding, clear misconceptions, and generate quizzes and worksheets for smarter learning.',
    title: 'Learning Better with AI'
  },
  {
    duration: '56 days',
    level: 'Intermediate',
    format: 'Hands-on Project',
    tools: ['NOTEBOOKLM', 'GROK', 'CHATGPT', 'GAMMA'],
    outcome: 'Students present a designed website mock hackathon deck',
    longDescription: 'Learn how to use AI for feedback, exam preparation, quiz generation, performance analysis, and becoming college-ready.',
    title: 'Studying Smarter with AI'
  },
  {
    duration: '56 days',
    level: 'Intermediate',
    format: 'Hands-on Project',
    tools: ['KREA', 'RUNWAY', 'SUNO'],
    outcome: 'Students submit a fully produced 1-min AI video commercial',
    longDescription: 'Turn imagination into reality by creating images, videos, music, stories, and creative projects with AI — while keeping humans at the center of creativity.',
    title: 'Creating with AI'
  },
  {
    duration: '56 days',
    level: 'Advanced',
    format: 'Live Challenge',
    tools: ['TEACHABLE MACHINE'],
    outcome: 'Students connect custom automations to trigger research agents',
    longDescription: 'Understand what happens behind the scenes of AI and build awareness around bias, misinformation, privacy, and responsible AI use.',
    title: 'Learning How AI Works and Its Ethics'
  },
  {
    duration: '56 days',
    level: 'Advanced',
    format: 'Hackathon Pitch',
    tools: ['N8N'],
    outcome: 'E-Cell IIT Kharagpur Nationally Recognized Certification',
    longDescription: 'Design and build your own AI agents, including character-based, email, and fun-fact agents using automation workflows.',
    title: 'Building AI Agents'
  }
];

// Dynamically construct MODULES_DATA by merging the official aiRoadmapVideos database with local structural content
const MODULES_DATA = aiRoadmapVideos.map((video, idx) => {
  const details = CURRICULUM_DETAILS[idx] || CURRICULUM_DETAILS[0];
  // Parse code format to uppercase: e.g. "Module 1" -> "MODULE 01"
  const formattedCode = video.title.toUpperCase().replace(' ', ' 0');
  
  return {
    code: formattedCode,
    title: details.title || video.description,
    description: details.longDescription,
    duration: details.duration,
    level: details.level,
    format: details.format,
    tools: details.tools,
    outcome: details.outcome,
    video: {
      id: video.id,
      url: video.url,
      title: video.title + ' Sneak Peek'
    }
  };
});

<<<<<<< Updated upstream
=======
const render_modules_slides = () => (
	MODULES_DATA.map((mod, idx) => (
		<div
		key={mod.code}
		className="w-[325px] md:w-[350px] shrink-0 snap-start flex flex-col space-y-5 bg-white rounded-3xl p-1 select-none"
		>
		
		{/* 1. Vimeo Video Media using existing VideoCard */}
		<div className="w-full rounded-2xl overflow-hidden shadow-sm">
			<VideoCard
			video={mod.video}
			cardWidth="w-full"
			index={idx}
			autoplay={false}
			/>
		</div>

		{/* 2. Badge & Title */}
		<div className="space-y-1 pt-1">
			<span className="block font-display text-[11px] font-extrabold tracking-wider text-terracotta uppercase">
			{mod.code}
			</span>
			<h3 className="font-display text-xl font-extrabold text-charcoal tracking-tight">
			{mod.title}
			</h3>
		</div>

		{/* 3. Description */}
		<p className="font-sans text-[13.5px] leading-relaxed text-charcoal/70 min-h-[64px]">
			{mod.description}
		</p>



		{/* 5. Tools Tag Row */}
		<div className="flex flex-wrap gap-2.5 pt-1">
			{mod.tools.map((tool) => (
			<span
				key={tool}
				className="px-3 py-1 text-[10px] font-display font-extrabold tracking-wider bg-[#f8f9fa] border border-sage/30 text-[#5e714e] rounded-full"
			>
				{tool}
			</span>
			))}
		</div>

		{/* 6. Outcome Row */}
		<div className="flex items-start gap-2.5 pt-3 border-t border-gray-100">
			<OutcomeIcon />
			<span className="font-sans text-[12.5px] leading-normal text-charcoal/60">
			{mod.outcome}
			</span>
		</div>

		</div>
	))
);

>>>>>>> Stashed changes
export default function Curriculum() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

<<<<<<< Updated upstream
  // Monitor horizontal scroll position to dynamically light up the timeline segments
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      // Card width (350px) + gap (24px)
      const cardWidth = 374;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), MODULES_DATA.length - 1));
    }
  };

  // Programmatically scroll the snapping carousel by one card width
  const scrollNext = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = 374;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // If at the end, wrap smoothly back to the beginning
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };
=======
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollWidth <= clientWidth) return;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const index = Math.round(scrollPercentage * (MODULES_DATA.length - 1));
      setActiveIndex(Math.min(Math.max(index, 0), MODULES_DATA.length - 1));
    }
  };
>>>>>>> Stashed changes

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* Centered Title Area */}
        <div className="flex flex-col items-center space-y-3.5 mb-16 text-center">
          <div className="h-[3px] w-12 bg-sage rounded-full" />
          <span className="font-display text-xs font-extrabold tracking-widest text-[#5e714e]">
            THE CURRICULUM
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl md:text-5xl max-w-4xl">
            6 modules. 9 live sessions. 1 working AI project.
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/80 max-w-2xl">
            Every module builds toward a single capstone: your child's personalised AI
            Study Agent, submitted to the E- Cell IIT Kharagpur Hackathon.
          </p>
        </div>

        {/* Carousel Snapping Viewport */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 learn-scrollbar scroll-smooth"
          >
<<<<<<< Updated upstream
            {MODULES_DATA.map((mod, idx) => (
              <div
                key={mod.code}
                className="w-[325px] md:w-[350px] shrink-0 snap-start flex flex-col space-y-5 bg-white rounded-3xl p-1 select-none"
              >
                
                {/* 1. Vimeo Video Media using existing VideoCard */}
                <div className="w-full rounded-2xl overflow-hidden shadow-sm">
                  <VideoCard
                    video={mod.video}
                    cardWidth="w-full"
                    index={idx}
                    autoplay={false}
                  />
                </div>

                {/* 2. Badge & Title */}
                <div className="space-y-1 pt-1">
                  <span className="block font-display text-[11px] font-extrabold tracking-wider text-terracotta uppercase">
                    {mod.code}
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-charcoal tracking-tight">
                    {mod.title}
                  </h3>
                </div>

                {/* 3. Description */}
                <p className="font-sans text-[13.5px] leading-relaxed text-charcoal/70 min-h-[64px]">
                  {mod.description}
                </p>

                {/* 4. Orange Bullet Specs */}
                <div className="flex flex-col space-y-1.5 font-sans text-sm text-charcoal/80">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                    <span>
                      <span className="font-bold text-charcoal">Duration:</span> {mod.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                    <span>
                      <span className="font-bold text-charcoal">Level:</span> {mod.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                    <span>
                      <span className="font-bold text-charcoal">Format:</span> {mod.format}
                    </span>
                  </div>
                </div>

                {/* 5. Tools Tag Row */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {mod.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-[10px] font-display font-extrabold tracking-wider bg-[#f8f9fa] border border-sage/30 text-[#5e714e] rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* 6. Outcome Row */}
                <div className="flex items-start gap-2.5 pt-3 border-t border-gray-100">
                  <OutcomeIcon />
                  <span className="font-sans text-[12.5px] leading-normal text-charcoal/60">
                    {mod.outcome}
                  </span>
                </div>

              </div>
            ))}

            {/* Next Button floating card integrated at the very right of scrolling carousel */}
            <div className="w-[100px] shrink-0 snap-start flex items-center justify-start pl-4 select-none">
              <button
                onClick={scrollNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-terracotta border border-gray-150 shadow-md hover:scale-105 hover:shadow-lg transition duration-200 cursor-pointer"
                aria-label="Next module"
              >
                <svg
                  className="h-5 w-5 stroke-[2.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

=======
            {render_modules_slides()}
>>>>>>> Stashed changes
          </div>
        </div>

        {/* Dynamic bottom pagination segment bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 mt-4 border-t border-gray-100">
          <span className="font-display text-base font-extrabold text-charcoal select-none">
            Complete Learning Journey
          </span>
          <div className="flex items-center gap-1.5 select-none">
            {MODULES_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = 374;
                    scrollRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? 'w-14 bg-terracotta' : 'w-7 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to module ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
