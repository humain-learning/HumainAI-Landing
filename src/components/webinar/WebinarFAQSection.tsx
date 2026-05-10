'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Is the webinar really free?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nibh sed arcu cursus feugiat.',
  },
  {
    id: 2,
    question: 'Who is this for - parents, students, or both?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.',
  },
  {
    id: 3,
    question: 'What if my child already uses ChatGPT regularly?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt lectus at sapien luctus.',
  },
  {
    id: 4,
    question: "What if I can't attend live?",
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus.',
  },
  {
    id: 5,
    question: 'Will my child be in front of a screen for too long?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi vitae arcu gravida malesuada.',
  },
  {
    id: 6,
    question: 'Who is Humain Learning?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris non lectus facilisis volutpat.',
  },
] as const;

export default function WebinarFAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[28px] leading-[1.05] font-bold sm:text-[36px] lg:text-[44px]">
            <span className="text-terracotta">Common Questions</span>
            <br />
            <span className="text-charcoal">Before You Register.</span>
          </h2>

          <div className="bg-terracotta/90 mt-5 h-[2px] w-20 sm:w-24" />
        </div>

        <div className="w-full">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="border-sage/80 border-b">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenId((currentId) =>
                      currentId === faq.id ? null : faq.id
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-charcoal text-[14px] leading-[1.25] font-semibold sm:text-[15px] lg:text-[16px]">
                    Q{faq.id}: {faq.question}
                  </span>

                  <ChevronDown
                    aria-hidden="true"
                    className={`text-sage h-4 w-4 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={2.2}
                  />
                </button>

                {isOpen ? (
                  <p className="pb-4 text-[12px] leading-5 text-[#575757] sm:text-[13px]">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
