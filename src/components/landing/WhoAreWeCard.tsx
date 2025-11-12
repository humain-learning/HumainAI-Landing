import React from 'react';
import { cn } from '@/utils';

type FacilityCardProps = {
  icon: string;
  title: string;
  desc: string;
};

const OUR_FACILITY: FacilityCardProps[] = [
  {
    icon: 'connect-ai-brain.svg',
    title: 'Human-Centered Mastery',
    desc: '“AI should serve imagination, empathy and connection, it must not replace them.',
  },
  {
    icon: 'thoughts.svg',
    title: 'Critical Curiosity',
    desc: 'Learning is driven by questions that matter, not just answers.',
  },
  {
    icon: 'brain-ai.svg',
    title: 'Extension, Not Substitution',
    desc: 'AI should enhance thinking, not bypass it.',
  },
  {
    icon: 'harness-ai.svg',
    title: 'Ethical Imagination',
    desc: 'We build with care, while being aware of bias, ownership, privacy, and equity.',
  },
  {
    icon: 'harness-ai.svg',
    title: 'Reflective Agency',
    desc: 'Learners know themselves, how they think, learn, adapt, and lead.',
  },
];

const FacilityCard = ({ desc, icon, title }: FacilityCardProps) => {
  return (
    <div className="border-gradient absolute top-2 left-2 h-full w-full space-y-1.5 rounded-2xl px-2.5 py-4 backdrop-blur-md">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
        <img className="size-8" src={`/assets/icons/${icon}`} alt="" />
      </div>
      <div className="">
        <h6 className="text-lg font-semibold text-white">{title}</h6>
        <p className="text-sm font-light text-white">{desc}</p>
      </div>
    </div>
  );
};

const WhoAreWeCard = () => {
  return (
    <section id="about">
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 py-10 text-[#011813] md:px-0">
        <div className="space-y-8 text-center">
          <h3 className="text-4xl font-semibold md:text-5xl">Who We Are</h3>
          <p className="w-full text-base font-normal text-[#4C565D] md:max-w-[1200px] md:text-xl">
            At Humain Learning, we believe the future of education lies at the
            intersection of human values and artificial intelligence. Our name
            reflects our core philosophy: HUMAIN, putting the human at the
            center of technological transformation.
            <br />
            Founded by Harvard and Cambridge University alumni, our work is
            rooted in progressive pedagogy, deep inquiry, and international
            research.
            <br />
            We are not here to simply teach AI tools. We are here to nurture
            critical thinkers, empathetic humans, and responsible creators who
            will lead in an AI-driven world.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          {OUR_FACILITY?.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                'relative w-full cursor-pointer rounded-2xl md:h-[200px] md:w-[225px]',
                idx % 2 === 0 ? 'bg-primary-color' : 'bg-secondary-color'
              )}
            >
              <FacilityCard
                desc={item?.desc}
                icon={item?.icon}
                title={item?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeCard;
