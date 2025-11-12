'use client';
import Accordion from '../ui/Accordion';
import PrimaryButton from '../ui/PrimaryButton';

const Button = () => {
  return (
    <div className="w-fit rounded-full border-2 border-white">
      <button
        type="button"
        onClick={() => {
          window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLScB4Hk-XknXD5EHlGbnMHX8Rv9SohvGqB7oodrvvLGcv1b06Q/viewform?usp=header',
            '_blank'
          );
        }}
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
    title: 'Who is this course for?',
    content: (
      <div>
        <div>
          This program is designed for students aged 13+ who are curious
          about the future and their place in it.
          <br />
          <br />
          The ideal student is not necessarily the one with the most technical
          skill, but rather someone who is a curious questioner, a creative
          thinker, and a thoughtful collaborator. This course is perfect for:
          <ul className="mt-2 ml-4 list-disc">
            <li>
              <strong>The Forward-Thinker</strong> who wants to understand how
              AI is shaping the world and prepare for the future of work and
              learning.
            </li>
            <li>
              <strong>The Creative Storyteller</strong> who wants to explore new
              ways to turn their imagination into reality by creating
              AI-generated images, videos, and music.
            </li>
            <li>
              <strong>The Aspiring Problem-Solver</strong> who is interested in
              learning how to design and build simple AI agents to automate
              tasks and extend their own capabilities.
            </li>
            <li>
              <strong>The Conscientious Citizen</strong> who wants to develop a
              strong ethical foundation for using technology and learn to
              identify challenges like bias, misinformation, and privacy
              concerns.
            </li>
          </ul>
          <br />
          Essentially, if your child is ready to move beyond being a passive
          user of technology and wants to become a responsible and innovative
          creator, this program is for them.
        </div>
        <div className="float-end pt-12 pb-4">
          <Button />
        </div>
      </div>
    ),
  },
  {
    title:
      'What specific, future-ready skills will a child develop through this course?',
    content: (
      <div>
        <div>
          While students will gain hands-on experience with cutting-edge AI
          tools, our primary goal is to advance their human intelligence
          alongside AI. The program is explicitly designed to nurture dimensions
          of intelligence that will be critical for the future of work,
          including:
          <ul className="mt-2 ml-4 list-disc">
            <li>
              <strong>Emotional Intelligence (EQ):</strong> Understanding and
              managing emotions in human-machine interactions.
            </li>
            <li>
              <strong>Adaptability (AQ):</strong> The ability to navigate and
              thrive in rapidly changing environments.
            </li>
            <li>
              <strong>Critical Curiosity:</strong> The drive to ask meaningful
              questions and challenge assumptions, rather than just seeking
              answers.
            </li>
            <li>
              <strong>Ethical Imagination:</strong> The capacity to build with
              care and consider the impact of technology on society.
            </li>
          </ul>
        </div>
        <div className="float-end pt-12 pb-4">
          <Button />
        </div>
      </div>
    ),
  },
  {
    title:
      'What makes your paid program different and truly worth the investment, while many free resources are available to learn how to use ChatGPT and other AI tools?',
    content: (
      <div>
        <div>
          While free resources are great for learning the basic functions of
          individual AI tools, our program offers a completely different level
          of value by focusing on what those resources leave out: a structured
          framework, a human-centered philosophy, and the development of
          future-proof skills.
          <br />
          <br />
          <strong>Our Course offers the following:</strong>
          <ul className="mt-2 ml-4 list-disc">
            <li>We Cultivate Thinkers, Not Just Users</li>
            <li>A Structured Journey from User to Creator</li>
            <li>Active Building, Not Passive Watching</li>
            <li>An Ethical Compass for a New World</li>
            <li>Focus on Future-Proof Human Skills</li>
          </ul>
          <br />
          In short, free resources teach children how to follow instructions.
          Our program prepares them to lead, innovate, and thrive with integrity
          in an AI-driven world. It's an investment in a mindset, not just a
          toolset.
        </div>
        <div className="float-end pt-12 pb-4">
          <Button />
        </div>
      </div>
    ),
  },
  {
    title:
      'My child is more interested in arts and humanities than in computers. Is this course too technical for them?',
    content: (
      <div>
        <div>
          This course is designed for learners of all backgrounds, and no prior
          coding or deep technical knowledge is required. Our program is built
          on the idea that curiosity is the most important tool. Instead of
          focusing on complex programming, we emphasize understanding core AI
          concepts and ethics while using modern, user-friendly tools. The goal
          is to nurture critical thinkers and empathetic humans, showing
          students how AI can be a powerful partner for creativity and
          storytelling, not just a technical subject. Your child will be guided
          through every hands-on activity, from creating AI-generated art and
          music to building their first simple AI agent on an accessible
          platform.
        </div>
        <div className="float-end pt-12 pb-4">
          <Button />
        </div>
      </div>
    ),
  },
  {
    title:
      'How will this program give my child a tangible advantage in their future college applications and career path?',
    content: (
      <div>
        <div>
          This program is specifically designed to give your child a distinct
          advantage by preparing them for the emerging futures of work and
          learning. We focus on developing enduring human qualities that will
          remain essential in an AI-driven world.
          <br />
          <br />
          <strong>Here’s how the program provides a tangible edge:</strong>
          <ul className="mt-2 ml-4 list-disc">
            <li>Develops In-Demand Human Skills</li>
            <li>Provides a Unique Project Portfolio</li>
            <li>Fosters an Ethical and Responsible Mindset</li>
            <li>Builds Future-Ready Competencies</li>
          </ul>
        </div>
        <div className="float-end pt-12 pb-4">
          <Button />
        </div>
      </div>
    ),
  },
];

const FAQLists = () => {
  return (
    <section id="faqs">
      <div className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 text-[#011813] md:px-0">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
          {/* Left container */}
          <div className="w-full max-w-xl space-y-6">
            <div>
              <h3 className="text-3xl font-semibold">
                Frequently Asked Questions
              </h3>
              {/* <p className="text-lg font-normal">
                Here are the questions about this template.
              </p> */}
            </div>

            <PrimaryButton text="View All Question" />
          </div>
          {/* right container */}
          <div className="w-full max-w-xl">
            <div
              className="h-full space-y-3 rounded-2xl border border-[#E0E0E0] p-4"
              style={{
                background:
                  'radial-gradient(circle at top right ,rgba(250, 210, 178, 1) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <Accordion
                items={AI_JOURNEY}
                className="space-y-4"
                isCustomTabColor
                openedTabColor="bg-transparent"
                closedTabColor="bg-transparent"
                sideIndicatiorClassName="bg-[#E9A772] w-1 h-8 top-4 bottom-3"
                showArrows
                showDivider
                dividerClassName="bg-[#AAC191]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQLists;
