'use client';
import { useState } from 'react';
import PrimaryButton from 'ui/PrimaryButton';
import SkeletalButton from 'ui/SkeletalButton';
import ExploreModal from './ExploreModal';

const TRUST_ITEMS = [
  {
    id: 1,
    titleParts: [{ text: 'E-Cell, IIT Kharagpur' }],
    subtitle: 'AI Hackathon in collaboration',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17l10-10" />
        <path d="M8 7h8v8" />
      </svg>
    ),
  },
  {
    id: 2,
    titleParts: [
      { text: 'NEP 2020', href: 'https://www.education.gov.in/nep/about-nep' },
      { text: ' · ' },
      { text: 'NCF 2023', href: 'https://ncert.nic.in/pdf/NCFSE-2023-August_2023.pdf' },
      { text: ' · ' },
      { text: 'CBSE', href: 'https://cbseacademic.nic.in/skill-education.html' },
    ],
    subtitle: 'Board-aligned curriculum',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 8v8" />
        <path d="M8.5 10.5h7" />
      </svg>
    ),
  },
  {
    id: 3,
    titleParts: [
      { text: 'UNESCO', href: 'https://www.unesco.org/en/artificial-intelligence' },
      { text: ' · ' },
      { text: 'OECD', href: 'https://www.oecd.org/en/about/projects/future-of-education-and-skills-2030.html' },
      { text: ' · ' },
      { text: 'EU', href: 'https://education.ec.europa.eu/focus-topics/digital-education/actions/plan' },
    ],
    subtitle: 'Adapted from global frameworks',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    id: 4,
    titleParts: [{ text: 'DPDP Act 2023', href: 'https://www.meity.gov.in/content/digital-personal-data-protection-act-2023' }],
    subtitle: 'Data handling designed against it',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="11" width="14" height="8" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
];

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:space-y-12 md:px-8 md:py-24">
      <div className="grid grid-cols-1 gap-6 lg:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="order-2 flex max-w-2xl flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <div className="max-w-[620px]">
            <h1 className="font-display max-w-[620px] text-3xl font-extrabold leading-[42px] tracking-[-0.8px] sm:text-4xl sm:leading-[46px] lg:text-[64px] lg:leading-[59.5px] lg:tracking-[-1.28px]">
              Where the AI Future Learns to Stay{' '}
              <span className="text-[#E7A572]">Human</span>
            </h1>
          </div>

          <p className="hero-subhead mt-4 text-xl font-medium text-[#00000099]">
            Live AI literacy courses for school students, educators, and schools — built on the six-pillar Humain AI Literacy Framework. Learn to think critically, create responsibly, and use AI with confidence.
          </p>

          <div className="mt-6 flex w-full flex-col items-center gap-3 lg:flex-row">
            <PrimaryButton
              text="Explore Now"
              target=""
              onClick={handleExploreClick}
              buttonClassName="w-full max-w-[320px] justify-center lg:w-auto lg:max-w-none cursor-pointer"
            />

            <SkeletalButton
              text="Explore Our Framework"
              target="/frameworkNew"
              buttonClassName="w-full max-w-[320px] justify-center lg:w-auto lg:max-w-none"
            />
          </div>
        </div>

        <div className="order-1 relative flex w-full justify-center lg:order-2 lg:justify-start">
          <img
            className="h-auto w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[420px] object-contain"
            src="/assets/images/homepage/Intro.png"
            alt="Humain Learning brand mark: the human-AI brain illustration."
          />

        </div>
      </div>

      <div className="mt-10 border-t border-[#E6E6E6] pt-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E7A572] text-white">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-bold leading-snug text-[#333333]">
                  {item.titleParts.map((part, index) =>
                    part.href ? (
                      <a
                        key={`${item.id}-${part.text}-${index}`}
                        href={part.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#E7A572] hover:underline"
                      >
                        {part.text}
                      </a>
                    ) : (
                      <span key={`${item.id}-${part.text}-${index}`}>{part.text}</span>
                    )
                  )}
                </div>
                <div className="text-xs leading-snug text-[#333333]/60">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ExploreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Intro;
