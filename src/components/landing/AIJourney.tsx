import React from 'react';
import AutoScrollAccordion from '../ui/AutoScrollAccordion';

const AIJourney = () => {
  const Button = () => {
    return (
      <div className="w-fit rounded-full border-2 border-white">
        <button
          type="button"
          className="border-primary-color flex items-center gap-2 rounded-full border-2 bg-white py-1 pr-1 pl-4"
        >
          Explore more
          <div className="flex h-9 w-9 items-center justify-center rounded-full">
            <img className="w-6" src="/assets/icons/arrow-right.svg" alt="" />
          </div>
        </button>
      </div>
    );
  };

  const AI_JOURNEY = [
    {
      title: 'AI Foundations for Future Leaders',
      content: (
        <div>
          <div>Your journey to responsible AI mastery starts here</div>
          <div className="float-end pt-12 pb-4">
            <Button />
          </div>
        </div>
      ),
    },
    {
      title: 'Module 2: Speak AI’s Language',
      content: (
        <div>
          <div>Your journey to responsible AI mastery starts here</div>
          <div className="float-end pt-12 pb-4">
            <Button />
          </div>
        </div>
      ),
    },
    {
      title: 'Module 3: AI in Action',
      content: (
        <div>
          <div>Your journey to responsible AI mastery starts here</div>
          <div className="float-end pt-12 pb-4">
            <Button />
          </div>
        </div>
      ),
    },
    {
      title: 'Module 4: The Truth About AI',
      content: (
        <div>
          <div>Your journey to responsible AI mastery starts here</div>
          <div className="float-end pt-12 pb-4">
            <Button />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative px-6 md:px-0">
      <img
        className="absolute -top-[20vh] right-0 -z-10"
        src="/assets/images/right-central-fade-orange.png"
        alt=""
      />
      <div className="mx-auto w-full max-w-7xl md:pb-16">
        <div className="text-center text-4xl font-semibold md:text-5xl">
          Your AI Journey
        </div>
        <p className="mx-auto text-center text-[#4E5255]">
          Learn step by step — <br />
          from exploring AI to creating your own projects.
        </p>
        <div className="flex flex-col items-center gap-8 pt-8 md:flex-row md:items-start">
          <img
            className="w-full max-w-xl rounded-2xl md:sticky md:top-5"
            src="/assets/images/human-ai.png"
            alt=""
          />
          <div className="mx-auto w-full max-w-xl space-y-3">
            <AutoScrollAccordion items={AI_JOURNEY} className="space-y-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIJourney;
