'use client';
import { CircleUserRound } from 'lucide-react';
import { useState } from 'react';

const LIST = [
  {
    name: 'Pavani Singh',
    class: 'Grade 6',
    school: '',
    city: '',
    desc: `I converted a photo of my parents into a new image, they were amazed and surprised at how I did it! I am very happy that I have joined this training program.`,
  },
  {
    name: 'Aniisha',
    class: '11th',
    school: 'The Heritage School',
    city: 'New Delhi',
    desc: `After attending all the sessions, I now understand how to use AI to my advantage, instead of just following the crowd.I feel confident about using it now.`,
  },
  {
    name: 'Aradhya Kinra',
    class: '8E',
    school: 'The Heritage School, Rohini',
    city: 'New Delhi',
    desc: `In the modules, we learned how to bring memories back to life.I used a photo and created a video, added music using AI apps. It felt great to create something that was in my mind.`,
  },
  {
    name: 'Ayesha',
    class: '8th',
    school: 'Vasant Valley School',
    city: 'New Delhi',
    desc: `"Music made by AI"\nMy favorite was Module 3, where AI created music for us. The lyrics and tunes were so well made—it really caught my interest. I even shared it with my school friends, and they loved it too!`,
  },
  {
    name: 'Divyank Sharma',
    class: '',
    school: 'The Heritage school, D-II, Vasant Kunj, New Delhi',
    city: 'New Delhi',
    desc: `The most interesting part for me was using AI for learning.
I actually use tools beyond ChatGPT to study now and I am able to create 50–60 quick flash cards to revise for my exams. This experience really shifted my perspective on how AI can support learning.`,
  },
  {
    name: 'Kritika K',
    class: '8th',
    school: 'The Sanskaar Valley School',
    city: 'Bhopal',
    desc: `I really liked creating AI agents because it helps automate tasks by connecting different apps and the best part is, there’s no need to write any code.The way the mentors explained everything was very clear and easy to understand. Now, I feel more confident using these AI tools in my daily tasks.`,
  },
  {
    name: 'Riya Sharma',
    class: 'Grade 10',
    school: '',
    city: 'Delhi',
    desc: `"AI is the new reality."\nAfter this training, I realised that AI is no longer optional, it is  essential. I have  learned how to use it to improve myself and make my learning methods more effective.`,
  },
  {
    name: 'Arjun Mehta',
    class: 'Grade 12',
    school: '',
    city: 'Mumbai',
    desc: `"Confidence to create with AI."\nNow, I feel I can create or build anything with AI. From ideas to businesses, I am confident I can make them real.`,
  },
  {
    name: 'Sneha Iyer',
    class: 'Grade 9',
    school: '',
    city: 'Bengaluru',
    desc: `"From hesitation to growth."\nAt first, I was hesitant because AI was completely new to me. But the mentors guided me patiently and made me feel supported throughout the training.`,
  },
  {
    name: 'Karan Gupta',
    class: 'Grade 11',
    school: '',
    city: 'Lucknow',
    desc: `"Ready for the future."\nWhile attending the training, it felt like I was living in the future. By the end, I was ready to step into it with confidence.`,
  },
  {
    name: 'Priya Nair',
    class: 'Grade 8',
    school: '',
    city: 'Kochi',
    desc: `"Inspiring others."\nI’ve showcased my AI projects and shared my learnings with friends. Now, many of them are excited to join the course too!`,
  },
  {
    name: 'Aditya Verma',
    class: 'Grade 12',
    school: '',
    city: 'Jaipur',
    desc: `"Clarity without losing human thinking."\nI knew AI was powerful, but I wasn’t sure how to use it for my benefit. This course gave me clarity on how to leverage AI without losing my own thinking ability.`,
  },
  {
    name: 'Muskan Khan',
    class: 'Grade 10',
    school: '',
    city: 'Hyderabad',
    desc: `"A shared journey."\nI joined after a friend recommended it. I’m so glad I did—I’ve learned more than I imagined, and it has truly opened new possibilities for me.`,
  },
];

// Parent Testimonials

const PARENT_LIST = [
  {
    name: 'Nitin',
    subDesc: '(Parent of Aradhya)',
    desc: `Guidance tailored for children\n“The world is moving towards AI, and Aradhya was truly keen to learn.
Though I know about AI tools, it was amazing to see her guide me .This course is a great step that we have taken.I deeply appreciate the guidance and thoughtful design made specifically for kids.”`,
  },
  {
    name: 'Dr. Tshering',
    subDesc: '(Ayesha’s Parent)',
    desc: `Responsible AI education for the next generation\n“I am grateful for this well-organized workshop that introduced children to AI. While there are concerns around AI governance and market-driven control, it's encouraging to see platforms like Humain Learning taking the lead in educating the next generation to utilise AI responsibly and safely.
The structured modules and creative exercises made the experience meaningful and the discussions on responsible use of AI were insghtful. This is a strong and much-needed start for students.”`,
  },
  {
    name: 'Mrs. Meenakshi Rao',
    subDesc: 'Bengaluru',
    desc: `Learning responsibility with AI\n“My child is now teaching me about AI! I was amazed by the excitement with which they explained its capabilities. What I really appreciate about Humain Learning trainers is that they didn’t just focus on the tools, but also on how and how not to use AI. The emphasis on both the positive and negative aspects of relying on AI was very reassuring as a parent.”`,
  },
  {
    name: 'Mr. Rajesh Malhotra',
    subDesc: 'New Delhi',
    desc: `A whole new way of learning\n“My child’s learning style has changed after this course. She now uses NotebookLM and other AI tools confidently, which are helping her study better. She even built her own study buddy agent during the program.”`,
  },
  {
    name: 'Mrs. Farah Khan',
    subDesc: 'Mumbai',
    desc: `Balancing creativity with safety\n“My child created a beautiful family video which we shared in our family group. At the same time, he is also reminding everyone in the family not to share personal photos or videos publicly. It is  wonderful to see that he not only learned creative uses of AI but also the importance of safety while using it.”`,
  },
];

export const CourseReviewsTab = () => {
  const [activeTab, setActiveTab] = useState('parents');

  return (
    <div className="px-4 pt-5 pb-4">
      <div className="flex items-center justify-between">
        <h4 className="pb-4 text-2xl font-medium">
          Trusted by Students, Parents, and Educators
        </h4>

        <div className="flex justify-center">
          <div className="border-primary-color flex items-center rounded-full border p-1">
            <div
              className={`${activeTab === 'parents' ? 'bg-primary-color text-white' : ''} cursor-pointer rounded-full px-4 py-2`}
              onClick={() => setActiveTab('parents')}
            >
              Parents
            </div>
            <div
              className={`${activeTab === 'students' ? 'bg-primary-color text-white' : ''} cursor-pointer rounded-full px-4 py-2`}
              onClick={() => setActiveTab('students')}
            >
              Students
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeTab === 'students' &&
            LIST?.map((item, idx) => (
              <div
                key={idx}
                className="col-span-1 h-full w-full cursor-pointer rounded-2xl border border-[#E0E0E0] bg-white p-4 transition-all duration-300 ease-in hover:scale-105"
              >
                <div className="items-cet flex gap-2">
                  <div className="flex h-[50px] w-[50px] items-center justify-center">
                    <CircleUserRound size={30} color="#4E5255" />
                  </div>
                  <div>
                    <h6 className="space-x-0.5 text-base text-black">
                      {item?.name}
                      {item?.class && (
                        <span className="pl-1 text-xs text-[#4E5255]">
                          {item.class}
                        </span>
                      )}
                    </h6>
                    {item.school && (
                      <p className="text-sm text-[#4E5255]">{item.school}</p>
                    )}
                    {item.city && (
                      <p className="text-xs text-[#4E5255]">{item.city}</p>
                    )}
                  </div>
                </div>

                <div className="my-4 h-[1px] w-full bg-[#E0E0E0]" />

                <div className="">
                  <img src="/assets/icons/stars.svg" className="" />
                </div>
                <h5 className="pt-4 text-base font-normal whitespace-pre-line text-black">
                  {item?.desc}
                </h5>
              </div>
            ))}
          {activeTab === 'parents' &&
            PARENT_LIST?.map((item, idx) => (
              <div
                key={idx}
                className="col-span-1 cursor-pointer rounded-2xl border border-[#E0E0E0] bg-white p-4 transition-all duration-300 ease-in hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-[40px] w-[50px] items-center justify-center">
                    <CircleUserRound size={30} color="#4E5255" />
                  </div>
                  <div>
                    <h6 className="space-x-0.5 text-base text-black">
                      {item?.name}
                    </h6>
                    <p className="text-sm text-[#4E5255]">{item?.subDesc}</p>
                  </div>
                </div>

                <div className="my-4 h-[1px] w-full bg-[#E0E0E0]" />

                <div className="">
                  <img src="/assets/icons/stars.svg" className="" />
                </div>
                <h5 className="pt-4 text-base font-normal whitespace-pre-line text-black">
                  {item?.desc}
                </h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
