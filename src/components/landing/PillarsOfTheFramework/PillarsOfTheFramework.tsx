import PillarsDesktop from './PillarsDesktop';
import PillarsMobile from './PillarsMobile';

const pillars = [
  {
    id: 1,
    image: '/assets/images/homepage/6Pillars/first.png',
    title: 'AI Foundations',
    description: 'What AI is, how it works, and where its limits lie.',
  },
  {
    id: 2,
    image: '/assets/images/homepage/6Pillars/second.png',
    title: 'Learning with AI',
    description: 'A study partner that sparks curiosity, not a shortcut.',
  },
  {
    id: 3,
    image: '/assets/images/homepage/6Pillars/third.png',
    title: 'Studying with AI',
    description: 'Exam prep, note-making, and structured revision — board-aligned.',
  },
  {
    id: 4,
    image: '/assets/images/homepage/6Pillars/fourth.png',
    title: 'Creating with AI',
    description: 'Images, video, stories and projects — human-first.',
  },
  {
    id: 5,
    image: '/assets/images/homepage/6Pillars/fifth.png',
    title: 'Agents & Automation',
    description: 'Personal study agents that extend human capability.',
  },
  {
    id: 6,
    image: '/assets/images/homepage/6Pillars/Sixth.png',
    title: 'Ethics, Safety & Responsibility',
    description: 'Bias, misinformation, privacy and digital well-being.',
  },
];

const PillarsOfTheFramework = () => {
  return (
    <section id="pillars" className="relative z-10 overflow-hidden bg-white">
      <img className="pointer-events-none absolute top-0 right-0 select-none" src="/assets/images/right-orange.png" alt="" />

      <div className="mx-auto w-full max-w-7xl px-6 py-12 text-[#011813] md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C97D49]">
            THE HUMAIN AI LITERACY FRAMEWORK
          </p>
          <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
            The Six Pillars of <span className="text-[#C97D49]">AI Literacy</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#333333]/70 md:text-base">
            Adopted from the OECD and EU AI Literacy Frameworks and UNESCO's AI Competencies. Every course is built on these six pillars.          </p>
          <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-[#C97D49]" />
        </div>

        <PillarsDesktop pillars={pillars} />
        <PillarsMobile pillars={pillars} />
      </div>
    </section>
  );
};

export default PillarsOfTheFramework;