'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { cn } from '@/utils';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'motion/react';

const cards = [
  {
    id: 1,
    title: 'Module 1: The World of AI and What It Means to Be Human',
    desc: 'Objective Understand the basics of AI and its impact on our world, focusing on what it means to be human in an age of technology. Explore the concept of “hybrid intelligence” where human and machine strengths combine.',
    outcomes: [
      {
        id: 1,
        title:
          'Explain what AI is and how “hybrid intelligence” combines human and machine strengths.',
      },
      {
        id: 2,
        title:
          'Identify the essential human skills like empathy and judgment that AI cannot replace.',
      },
      {
        id: 3,
        title:
          'Analyze real-world AI examples to understand their benefits and risks.',
      },
      {
        id: 4,
        title:
          'Develop personal guidelines for using AI responsibly at school and home.',
      },
    ],
  },

  {
    id: 2,
    title: 'Module 2: The World of AI and What It Means to Be Human',
    desc: 'Objective Understand the basics of AI and its impact on our world, focusing on what it means to be human in an age of technology. Explore the concept of “hybrid intelligence” where human and machine strengths combine.',
    outcomes: [
      {
        id: 1,
        title:
          'Explain what AI is and how “hybrid intelligence” combines human and machine strengths.',
      },
      {
        id: 2,
        title:
          'Identify the essential human skills like empathy and judgment that AI cannot replace.',
      },
      {
        id: 3,
        title:
          'Analyze real-world AI examples to understand their benefits and risks.',
      },
      {
        id: 4,
        title:
          'Develop personal guidelines for using AI responsibly at school and home.',
      },
    ],
  },

  {
    id: 3,
    title: 'Module 3: The World of AI and What It Means to Be Human',
    desc: 'Objective Understand the basics of AI and its impact on our world, focusing on what it means to be human in an age of technology. Explore the concept of “hybrid intelligence” where human and machine strengths combine.',
    outcomes: [
      {
        id: 1,
        title:
          'Explain what AI is and how “hybrid intelligence” combines human and machine strengths.',
      },
      {
        id: 2,
        title:
          'Identify the essential human skills like empathy and judgment that AI cannot replace.',
      },
      {
        id: 3,
        title:
          'Analyze real-world AI examples to understand their benefits and risks.',
      },
      {
        id: 4,
        title:
          'Develop personal guidelines for using AI responsibly at school and home.',
      },
    ],
  },
];

const modules = [
  {
    id: 1,
    label: 'Module 1',
    heading: 'The World of AI and What It Means to Be Human',
    description:
      'Objective Understand the basics of AI and its impact on our world, focusing on what it means to be human in an age of technology. Explore the concept of “hybrid intelligence” where human and machine strengths combine.',
    outcomes: [
      {
        id: 1,
        label:
          'Explain what AI is and how “hybrid intelligence” combines human and machine strengths.',
      },
      {
        id: 2,
        label:
          'Identify the essential human skills like empathy and judgment that AI cannot replace.',
      },
      {
        id: 3,
        label:
          'Analyze real-world AI examples to understand their benefits and risks.',
      },
      {
        id: 4,
        label:
          'Develop personal guidelines for using AI responsibly at school and home.',
      },
    ],
    img: 'brain-course.png',
  },

  {
    id: 2,
    label: 'Module 2',
    heading: 'AI for Learning – Tools, Avatars, and Mindful Use',
    description:
      'Explore how to use AI as a powerful study partner without losing creativity or critical thinking skills. Students will experiment with digital avatars and AI-powered study tools like NotebookLM and ChatGPT.',
    outcomes: [
      {
        id: 1,
        label:
          'Create and critique digital avatars while learning about safety and consent.',
      },
      {
        id: 2,
        label:
          'Use AI tools to generate helpful study aids like mind maps and summaries.',
      },
      {
        id: 3,
        label:
          'Compare AI-generated notes with their own to evaluate accuracy and depth.',
      },
      {
        id: 4,
        label:
          'Draft a personal guideline for using AI in their studies responsibly.',
      },
    ],
    img: 'ai-book.png',
  },

  {
    id: 3,
    label: 'Module 3',
    heading:
      'AI for Creativity – Telling Stories with Images, Video, and Music',
    description:
      'Learn to use AI as a creative partner to tell powerful stories. Transform personal memories into stunning images, videos, and music while keeping their own imagination at the heart of their creations.',
    outcomes: [
      {
        id: 1,
        label:
          'Translate a personal story into a visual narrative using AI tools.',
      },
      {
        id: 2,
        label:
          'Apply advanced prompting frameworks (e.g., CLEARER) to control the creative output.',
      },
      {
        id: 3,
        label:
          'Identify and discuss the ethical risks in AI creativity, such as deepfakes.',
      },
      {
        id: 4,
        label:
          'Compose a reflective "artist’s statement" to explain their creative choices and ensure their voice remains central.',
      },
    ],
    img: 'ai-story.png',
  },

  {
    id: 4,
    label: 'Module 4',
    heading: 'How AI Learns, Fails, and Acts',
    description:
      'Go behind the scenes to understand how AI models like LLMs are trained and why they sometimes fail. Learn to spot AI bias and hallucinations, practice fact-checking, and explore the power of AI agents.',
    outcomes: [
      {
        id: 1,
        label:
          'Explain in simple terms how large language models (LLMs) are trained.',
      },
      {
        id: 2,
        label:
          'Analyze real-world examples of AI failures to understand their causes and consequences.',
      },
      {
        id: 3,
        label:
          'Apply fact-checking strategies to evaluate the reliability of AI-generated content.',
      },
      {
        id: 4,
        label:
          'Build and test a basic AI model using no-code tools like Teachable Machine.',
      },
    ],
    img: 'ai-idea-blub.png',
  },

  {
    id: 5,
    label: 'Module 5',
    heading: 'Automations and AI Agents',
    description:
      'Discover the evolution from simple automation to intelligent AI agents. Learn the difference between the two and take the first steps in building a simple AI agent that can perform tasks on their behalf.',
    outcomes: [
      {
        id: 1,
        label: 'Distinguish between fixed automation and adaptive AI agents.',
      },
      {
        id: 2,
        label:
          'Design a simple agent workflow that can reason with an LLM to complete a task.',
      },
      {
        id: 3,
        label:
          'Identify potential risks in agent design, such as privacy and error propagation.',
      },
      {
        id: 4,
        label:
          'Evaluate when it is appropriate to outsource tasks to an agent.',
      },
    ],
    img: 'ai-atom.png',
  },

  {
    id: 6,
    label: 'Module 6',
    heading: 'Building a Learning Assistant Agent',
    description:
      'Apply all learned skills in a capstone project: designing and building a personalized AI Learning Assistant. This project focuses on both the technical steps and the critical importance of human oversight in automated learning.',
    outcomes: [
      {
        id: 1,
        label:
          'Build a complete workflow that extracts text from a PDF, creates study notes, and emails them automatically.',
      },
      {
        id: 2,
        label:
          'Integrate common tools like Google Drive, Sheets, and Gmail into their agent.',
      },
      {
        id: 3,
        label:
          'Establish quality checks to ensure the AI-generated summaries are accurate and consistent.',
      },
      {
        id: 4,
        label:
          'Reflect on which study habits must remain human-led to ensure deep learning.',
      },
    ],
    img: 'ai-cloud.png',
  },
];

// export const CourseFAQDetails = () => {
//   return (
//     <div className="space-y-10 px-6 py-8 md:px-0 md:py-10">
//       <h3 className="text-center text-5xl font-semibold">Your AI Journey</h3>
//       <div className="relative mx-auto w-full max-w-3xl">
//         <div className="custom-swiper-arrows swiper-button-prev !left-[-10px] flex items-center justify-center rounded-full bg-[#DCE8CD] after:!text-xs after:!text-black md:!left-[-50px]"></div>

//         <div className="custom-swiper-arrows swiper-button-next !right-[-10px] flex items-center justify-center rounded-full bg-[#DCE8CD] after:!text-xs after:!text-black md:!right-[-50px]"></div>

//         <Swiper
//           cssMode={true}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           pagination={{
//             el: '.custom-pagination',
//             clickable: true,
//             bulletClass: 'swiper-pagination-bullet custom-bullet',
//             bulletActiveClass:
//               'swiper-pagination-bullet-active custom-bullet-active',
//           }}
//           // navigation={true}
//           // pagination={true}
//           mousewheel={true}
//           keyboard={true}
//           modules={[Navigation, Pagination]}
//           className="mySwiper"
//         >
//           {cards?.map((item) => (
//             <SwiperSlide key={item.id} className="relative">
//               <div className="bg-secondary-color/20 absolute top-10 left-10 -z-10 h-[238px] w-[161px] -rotate-45 rounded-full" />

//               <div className="bg-primary-color/20 absolute top-10 right-10 -z-10 h-[238px] w-[161px] -rotate-45 rounded-full" />
//               <div
//                 className="z-50 space-y-5 rounded-2xl border border-[rgba(0,0,0,0.15)] px-7.5 py-5"
//                 style={{
//                   backdropFilter: 'blur(15px)',
//                 }}
//               >
//                 <h5 className="text-2xl font-semibold">{item?.title}</h5>

//                 <p className="font-light text-[rgba(0,0,0,0.6)]">
//                   {item?.desc}
//                 </p>

//                 <div className="mx-auto w-fit space-y-4 px-4">
//                   <h6 className="text-xl font-semibold">Learning Outcomes</h6>
//                   <ul className="list-inside list-disc">
//                     {item?.outcomes?.map((i) => (
//                       <li
//                         key={i.id}
//                         className="text-base font-light text-[rgba(0,0,0,0.6)]"
//                       >
//                         {i?.title}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Pagination outside */}
//         <div className="custom-pagination mt-6 flex justify-center"></div>
//       </div>
//     </div>
//   );
// };

export const YourAiJourney = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const ref = useRef(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start center', 'end center'],
    offset: ['start 10%', 'end 10%'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      const tabIndex = Math.min(
        5,
        Math.floor(value * 6.5) // 0–5
      );

      setCurrentTab(tabIndex);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  // Interpolate the thumb position smoothly
  // const thumbY = useTransform(scrollYProgress, [0, 1], ['5%', '80%']);

  return (
    <section
      ref={ref}
      className="h-[400vh] space-y-10 px-6 py-8 md:px-0 md:py-10"
    >
      <h3 className="text-center text-5xl font-semibold">Your AI Journey</h3>

      <div className="sticky top-5 flex flex-col items-start justify-between md:flex-row">
        {/* left */}
        <div className="relative hidden h-full flex-row gap-10 md:flex">
          <div className="relative">
            <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-[#0A0A0F]">
              <motion.div
                className={cn(
                  // The thumb is positioned relative to the track via translateY
                  'bg-primary-color absolute left-1/2 -translate-x-1/2 rounded-full shadow-sm ring-1 ring-black/5',
                  'h-16 w-3 transition-all duration-200 ease-out',
                  currentTab === 0 && 'top-5',
                  currentTab === 1 && 'top-[20%]',
                  currentTab === 2 && 'top-[35%]',
                  currentTab === 3 && 'top-[50%]',
                  currentTab === 4 && 'top-[65%]',
                  currentTab === 5 && 'top-[80%]'
                  // dragging && 'cursor-grabbing'
                )}
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-6 py-8">
            {modules.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className={cn(
                    'rounded-xl border border-transparent px-7 py-3 text-base text-[#0A0A0F]',
                    currentTab === index &&
                      'border-[rgba(98,98,98,0.34)] bg-white'
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative h-full w-full max-w-[850px] md:h-[600px]">
          <div className="absolute -z-10 h-full w-full">
            <div className="relative h-screen w-full max-w-[850px] md:h-[600px]">
              <Image
                fill
                alt="ai-journey"
                src="/assets/images/ai-journey-bg.png"
                priority
                className=""
              />
            </div>
          </div>
          <div className="relative p-4 md:p-8 lg:p-10">
            <h4 className="text-xl font-semibold text-black/80 md:text-2xl">
              {modules[currentTab]?.heading}
            </h4>
            <p className="pt-1 text-sm font-normal text-[rgba(0,0,0,0.6)] md:pt-2 md:text-base">
              {modules[currentTab]?.description}
            </p>
            <div className="pt-4 md:pt-6">
              <h5 className="text-base font-semibold text-black/80 md:text-xl">
                Learning Outcomes
              </h5>

              <ul className="list-outside list-disc px-3 pt-1 text-base font-normal text-[rgba(0,0,0,0.6)] md:px-4 md:pt-2">
                {modules[currentTab].outcomes?.map((label) => (
                  <li key={label.id} className="last:pb-0 md:pb-1">
                    <p className="">{label.label}</p>
                  </li>
                ))}
              </ul>

              <div className="flex justify-end md:pt-4 md:pr-4">
                <div className="relative h-[140px] w-[140px] md:h-[240px] md:w-[240px]">
                  <Image
                    priority
                    fill
                    alt="icon"
                    src={`/assets/images/${modules[currentTab].img}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
