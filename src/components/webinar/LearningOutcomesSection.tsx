'use client';

import { useState } from 'react';

const pillarItems = [
  {
    id: 1,
    label: 'Pillar 1 Skills Outcomes',
    theme: 'green',
    title: 'What your child will be able to do',
    points: [
      'Build a personal AI study agent that answers their doubts 24/7.',
      'Create posters, visuals, notes, and presentations using AI tools the right way.',
      'Write better essays, reports, and applications with AI as a thinking partner.',
      'Automate repeat study tasks like flashcards, revision, and summaries.',
      'Research any topic faster, with sources they can actually trust.',
    ],
  },
  {
    id: 2,
    label: 'Pillar 2 Academic Outcomes',
    theme: 'orange',
    title: 'How their studies will improve',
    points: [
      'Higher grades - students report 15-25% improvement in scores.',
      'Faster exam preparation - chapter summaries and revision in a fraction of the time.',
      'Better project work that stands out in class and college applications.',
      'Less stress, less homework time, and more preparation confidence.',
      'More time freed up for sports, hobbies, and rest - without falling behind.',
    ],
  },
  {
    id: 3,
    label: 'Pillar 3 Mindset Outcomes',
    theme: 'green',
    title: "How they'll think differently about AI and learning",
    points: [
      'Confidence using AI - using it deliberately, not mindlessly.',
      'Critical thinking - knowing when AI is wrong, where to trust it, and when not to.',
      'Independence in learning with AI without dependence on it.',
      'Responsibility - understanding ethics, safety, privacy, and digital wellbeing.',
      'Curiosity - seeing AI as a tool to explore the world, not just shortcut answers.',
    ],
  },
] as const;

const panelThemeClasses = {
  green: {
    shell: 'border-sage/90',
    tab: 'bg-sage text-white',
  },
  orange: {
    shell: 'border-terracotta/90',
    tab: 'bg-terracotta text-white',
  },
} as const;

export default function LearningOutcomesSection() {
  const [openId, setOpenId] = useState(2);

  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="max-w-[1120px]">
          <h2 className="text-[28px] leading-[1.05] font-bold sm:text-[36px] lg:text-[48px]">
            <span className="text-terracotta">
              What Your Child Will Be Able To Do
            </span>
            <br />
            <span className="text-charcoal">
              And How They&apos;ll Think Differently.
            </span>
          </h2>

          <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />

          <p className="mt-5 max-w-[1040px] text-sm leading-6 text-[#575757] sm:text-[15px]">
            Learning AI the right way changes three things: what your child can
            do, how well they do it, and how they think about technology itself.
            Here&apos;s every Humain student gains.
          </p>
        </div>

        <div className="mt-10 hidden min-[1176px]:flex min-[1176px]:items-end min-[1176px]:justify-center">
          {pillarItems.map((item) => {
            const theme = panelThemeClasses[item.theme];
            const isCenter = item.id === 2;

            return (
              <article
                key={item.id}
                className={`relative w-full shrink-0 ${
                  isCenter
                    ? 'z-10 -mx-1.5 max-w-[426px] translate-y-4'
                    : item.id === 1
                      ? '-mr-1.5 max-w-[378px]'
                      : '-ml-1.5 max-w-[378px]'
                }`}
              >
                <div
                  className={`relative rounded-[20px] border-2 bg-white ${theme.shell} ${
                    isCenter ? 'min-h-[472px]' : 'min-h-[398px]'
                  }`}
                >
                  <div
                    className={`absolute top-0 right-0 left-0 rounded-t-[18px] px-5 py-3 ${theme.tab} ${
                      isCenter ? 'h-[84px]' : 'h-[66px]'
                    }`}
                  >
                    <p className="max-w-[180px] pl-2 text-[13px] leading-[1.1] font-semibold tracking-[0.08em] uppercase">
                      {item.label}
                    </p>
                  </div>

                  <div
                    className={`absolute right-0 bottom-0 left-0 rounded-t-[16px] rounded-b-[18px] border-x border-b bg-white ${
                      item.theme === 'green'
                        ? 'border-sage/90'
                        : 'border-terracotta/90'
                    } ${isCenter ? 'top-[66px]' : 'top-[52px]'}`}
                  />

                  <div
                    className={`relative px-5 ${
                      isCenter ? 'pt-[110px] pb-6' : 'pt-[80px] pb-6'
                    }`}
                  >
                    <h3
                      className={`text-charcoal font-bold ${
                        isCenter
                          ? 'max-w-[286px] text-[22px] leading-[1.1]'
                          : item.id === 1
                            ? 'max-w-[250px] text-[20px] leading-[1.08]'
                            : 'max-w-none text-[20px] leading-[1.08]'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <ul className="mt-5 space-y-3 text-[15px] leading-[1.4] text-[#575757]">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="bg-sage mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 space-y-3 min-[1176px]:hidden">
          {pillarItems.map((item) => {
            const isOpen = openId === item.id;
            const theme = panelThemeClasses[item.theme];

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-[16px] border bg-white ${theme.shell}`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenId((prev) => (prev === item.id ? 0 : item.id))
                  }
                  className={`flex w-full items-center justify-between px-4 py-3 text-left ${theme.tab}`}
                >
                  <span className="text-[10px] leading-[1.2] font-semibold tracking-[0.08em] uppercase">
                    {item.label}
                  </span>
                  <img
                    src="/assets/icons/down-arrow.svg"
                    alt=""
                    className={`h-3.5 w-3.5 shrink-0 object-contain transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                {isOpen && (
                  <div
                    className={`rounded-t-[16px] rounded-b-[16px] border bg-white px-4 py-4 ${
                      item.theme === 'green'
                        ? 'border-sage/90'
                        : 'border-terracotta/90'
                    }`}
                  >
                    <h3 className="text-charcoal max-w-[260px] text-[20px] leading-[1.12] font-bold">
                      {item.title}
                    </h3>

                    <ul className="mt-4 space-y-2.5 text-[12px] leading-[1.35] text-[#575757]">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="bg-sage mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-3 text-[#575757] sm:mt-10">
          <img
            src="/assets/icons/peoplebrainsignal.svg"
            alt=""
            className="mt-0.5 h-6 w-6 shrink-0 object-contain"
          />
          <p className="text-sm leading-6 sm:text-[15px]">
            <span className="text-terracotta font-semibold">
              Skills fade. Mindsets last.
            </span>{' '}
            We focus on both.
          </p>
        </div>
      </div>
    </section>
  );
}
