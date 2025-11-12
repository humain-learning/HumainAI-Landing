import React from 'react';
import { cn } from '@/utils';

const InfoCards = ({
  title,
  desc,
  icon,
  isReverse = false,
}: {
  title: string;
  desc: string;
  icon: string;
  isReverse?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex w-full items-center',
        isReverse ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <div className="w-full lg:min-w-[370px]">
        <div
          className={cn(
            'grid h-full w-full grid-cols-5 items-start gap-2 rounded-2xl border p-2 lg:max-w-[370px]',
            isReverse
              ? 'bg-secondary-color/20 border-[#E69D67]'
              : 'bg-primary-color/20 border-[#91AA74]'
          )}
        >
          <div className="col-span-1 h-full">
            <div className="h-full rounded-2xl bg-white p-2">
              <div className="flex h-full w-full items-center justify-center">
                <img
                  alt="icons"
                  className="size-12"
                  src={`/assets/icons/${icon}`}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="space-y-1.5">
              <h6 className="text-xl font-bold">{title}</h6>
              <p className="text-sm font-normal">{desc}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'hidden h-[1.5px] w-full bg-[#91AA74] lg:inline-block',
          isReverse ? 'bg-[#E69D67]' : 'bg-[#91AA74]'
        )}
      />
    </div>
  );
};

const PillarsOfTheFramework = () => {
  return (
    <section id="pillars" className="bg-pillars-bg relative">
      <img
        className="absolute top-0 right-0"
        src="/assets/images/right-orange.png"
        alt=""
      />
      <div className="mx-auto w-full max-w-7xl space-y-20 px-6 py-20 text-[#011813] md:px-0">
        <div>
          <h3 className="text-center text-4xl font-semibold md:text-5xl">
            The 6 Pillars of the Framework
          </h3>
          {/* <p className="mx-auto pt-1 text-center text-[#4E5255]">
            Lorem ipsum dolor sit amet consectetur. Accumsan adipiscing eu
            risus.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p> */}
        </div>
        {/* Pillars */}
        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:flex-row lg:gap-0">
          {/* left */}
          <div className="w-full lg:absolute lg:top-[20%] lg:left-10 lg:max-w-[500px]">
            {/* min-w-[400px] flex flex-col gap-16 mt-20 */}
            {/*  */}
            <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-24">
              <InfoCards
                title="Ethics, Safety & Responsibility"
                desc="Develop critical awareness of bias, misinformation, privacy, and digital well-being."
                icon="globe-hands.svg"
                key={'Ethics, Safety & Responsibility'}
              />
              <InfoCards
                title="Creating with Al"
                desc="Turn imagination into reality through images, videos, stories, and projects - always human-first, Al-second."
                icon="mind-charge.svg"
                key={'Creating with Al'}
              />
              <InfoCards
                title="Al Foundations"
                desc="Understand what Al is, how it works, and where its limits lie."
                icon="ai-foundation.svg"
                key={'Al Foundations'}
              />
            </div>
          </div>
          {/* center */}
          <div className="relative z-10 hidden w-fit lg:inline-block">
            <img
              alt=""
              className="relative object-cover"
              src="/assets/images/center-pillars.png"
            />
          </div>

          {/* right */}
          <div className="w-full lg:absolute lg:top-[8%] lg:right-10 lg:max-w-[500px]">
            {/* min-w-[400px] flex flex-col gap-16 mt-20 */}
            {/*  */}
            <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-20">
              <InfoCards
                title="Human Intelligence in the Age of AI"
                desc="Preserve what makes us deeply human while working with Al."
                icon="human-intelligence.svg"
                key="human-intelligence"
                isReverse
              />
              <InfoCards
                title="Agents & Automation"
                desc="Design personal study agents and workflows to save time, solve problems, and extend human capabilities."
                icon="agents-automation.svg"
                key="agents-automation"
                isReverse
              />
              <InfoCards
                title="Learning with Al"
                desc="Use Al as a study partner that sparks curiosity and deeper understanding, not as a shortcut."
                icon="ai-learning.svg"
                key="ai-learning"
                isReverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsOfTheFramework;
