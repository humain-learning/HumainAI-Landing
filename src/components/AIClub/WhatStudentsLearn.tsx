import Image from 'next/image';

const TOPICS = [
  {
    icon: '/assets/images/AIClub/WhatStudentsLearn/how-ai-thinks.png',
    title: 'How AI thinks',
    description: 'What AI is, how a model learns, and what machine learning means.',
  },
  {
    icon: '/assets/images/AIClub/WhatStudentsLearn/study-smarter.png',
    title: 'Study smarter with AI',
    description: 'Organising notes, summarising chapters, and generating practice questions.',
  },
  {
    icon: '/assets/images/AIClub/WhatStudentsLearn/build-ai-agents.png',
    title: 'Build AI agents',
    description: 'Hands-on, no-code agents that automate real tasks.',
  },
  {
    icon: '/assets/images/AIClub/WhatStudentsLearn/critical-thinking.png',
    title: 'Critical AI thinking',
    description: 'Evaluating AI output, spotting hallucinations, and using AI ethically.',
  },
  {
    icon: '/assets/images/AIClub/WhatStudentsLearn/ml-in-action.png',
    title: 'Machine learning in action',
    description: 'Training a simple model and understanding recommendation systems.',
  },
  {
    icon: '/assets/images/AIClub/WhatStudentsLearn/monthly-challenges.png',
    title: 'Monthly challenges',
    description: 'Open-ended team problems solved with AI tools.',
  },
];

const WhatStudentsLearn = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-[#171717] md:text-4xl">
            What students learn in the AI club
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Adapted from the Humain Champs curriculum and delivered as bite-size weekly modules.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:gap-6 md:grid-cols-3">
          {TOPICS.map((topic, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-[#E6E6E6] bg-[#FAF6F0] p-4 md:block md:p-6"
            >
              <Image
                src={topic.icon}
                alt={topic.title}
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 object-contain md:mb-4 md:h-14 md:w-14"
              />
              <div>
                <h3 className="text-base font-bold text-[#171717] md:mt-0 md:text-lg">{topic.title}</h3>
                <p className="mt-1 text-sm text-gray-600 md:mt-2">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatStudentsLearn;