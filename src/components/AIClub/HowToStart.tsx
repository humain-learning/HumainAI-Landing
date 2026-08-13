import Image from 'next/image';
import { ArrowRight, ArrowDown } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const STEPS = [
  {
    icon: '/assets/images/AIClub/HowToStart/leadership-onboarding.png',
    title: 'Leadership onboarding session to understand school needs.',
  },
  {
    icon: '/assets/images/AIClub/HowToStart/batch-decision.png',
    title: 'You decide the batch sizes and start date. We fit your school calendar.',
  },
  {
    icon: '/assets/images/AIClub/HowToStart/club-launch.png',
    title: 'The club launches, students learn, and the E-Cell IIT Kharagpur certificate follows.',
  },
];

const HowToStart = () => {
  return (
    <section className="w-full bg-[#FAF6F0] py-12 px-6 md:py-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h2 className="font-display text-2xl font-extrabold text-[#171717] md:text-4xl">
          How to bring an AI club to your school
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
          Starting a Humain AI Club is a 15-minute conversation. We handle the rest.
        </p>

        <div className="mt-8 flex flex-col items-center gap-0 md:mt-14 md:flex-row md:items-start md:justify-center md:gap-12">
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex w-full max-w-sm flex-col md:w-auto md:flex-row md:items-start">
              <div className="flex w-full items-center gap-4 text-left md:max-w-none md:flex-col md:items-center md:gap-0 md:text-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={112}
                  height={112}
                  className="h-14 w-14 shrink-0 object-contain md:h-28 md:w-28"
                />
                <p className="max-w-[220px] text-sm text-gray-600 md:mt-5 md:max-w-[240px]">
                  {step.title}
                </p>
              </div>

              {idx < STEPS.length - 1 && (
                <>
                  <div className="my-1 flex w-14 shrink-0 justify-center md:hidden">
                    <ArrowDown
                      className="h-6 w-6 shrink-0 text-[#C97D49]"
                      aria-hidden="true"
                    />
                  </div>
                  <ArrowRight
                    className="mt-14 hidden h-8 w-8 shrink-0 text-[#C97D49] md:mx-3 md:block"
                    aria-hidden="true"
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:mt-12">
          <div className="inline-block w-fit">
            <PrimaryButton
              text="Book a 15-Minute Call"
              target="https://calendar.app.google/7kysSyWQNC3eUcLVA"
              buttonClassName="w-fit justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;