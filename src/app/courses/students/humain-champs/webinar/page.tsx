import WebinarHero from '@/components/webinar/WebinarHero';
import ParentQuestionsSection from '@/components/webinar/ParentQuestionsSection';
import WhatYouWillLearnSection from '@/components/webinar/WhatYouWillLearnSection';
import LearningOutcomesSection from '@/components/webinar/LearningOutcomesSection';
import MeetTheEducatorsSection from '@/components/webinar/MeetTheEducatorsSection';
import WhyNowMattersSection from '@/components/webinar/WhyNowMattersSection';
import StudentStoriesSection from '@/components/webinar/StudentStoriesSection';
import LiveBonusesSection from '@/components/webinar/LiveBonusesSection';
import WebinarFAQSection from '@/components/webinar/WebinarFAQSection';
import ReserveSeatCTASection from '@/components/webinar/ReserveSeatCTASection';
import Marquee from 'react-fast-marquee';
import {
  models as toolModels,
  tools as toolLogos,
} from '@/components/courses-students/humain-champs-v2/Tools/data';

export default function WebinarPage() {
  return (
    <>
      <WebinarHero />
      <ParentQuestionsSection />
      <WhatYouWillLearnSection />
      <LearningOutcomesSection />
      <section className="bg-terracotta px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
        <div className="mx-auto w-full max-w-[1240px] text-center">
          <h2
            className="mx-auto max-w-[820px] text-[28px] leading-[1.12] font-bold !text-white sm:text-[34px] lg:text-[42px]"
            style={{ color: '#ffffff' }}
          >
            The Same AI Tools Used By Professionals Taught For Students
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-6 text-white/95 sm:text-[15px]">
            In the workshop, we&apos;ll demonstrate how to use these the right
            way for studying, creating, researching, and building. Live, on
            screen.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-white/90 sm:w-20" />
        </div>

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          <Marquee speed={34} gradient={false} pauseOnHover>
            <div className="flex items-center gap-16 pr-16 sm:gap-24 sm:pr-24">
              {toolModels.map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt=""
                  className="h-7 w-auto shrink-0 object-contain sm:h-9"
                />
              ))}
            </div>
          </Marquee>

          <Marquee speed={34} gradient={false} pauseOnHover direction="right">
            <div className="flex items-center gap-16 pr-16 sm:gap-24 sm:pr-24">
              {toolLogos.map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt=""
                  className="h-6 w-auto shrink-0 object-contain sm:h-8"
                />
              ))}
            </div>
          </Marquee>
        </div>

        <p className="mt-10 text-center text-sm leading-6 text-white/95 sm:mt-12 sm:text-[15px]">
          15+ tools. One unified framework. Live demonstrations during the
          session.
        </p>
      </section>
      <MeetTheEducatorsSection />
      <WhyNowMattersSection />
      <StudentStoriesSection />
      <LiveBonusesSection />
      <WebinarFAQSection />
      <ReserveSeatCTASection />
    </>
  );
}
