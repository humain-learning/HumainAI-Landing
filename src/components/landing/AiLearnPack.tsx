'use client';
import { motion } from 'motion/react';

const LABELS = [
  'Master popular AI tools for learning and creativity',
  'Develop ethical AI usage frameworks',
  'Create impressive portfolio projects',
  'Build confidence in Human-AI collaboration',
  'Prepare for future academic and career opportunities',
];

const CARDS = [
  {
    text: 'Study Hacks',
    className: 'absolute -top-[5.2rem] left-14',
  },
  {
    text: 'Responsible AI',
    className: 'absolute -top-8 -right-10 rotate-12',
  },
  {
    text: 'Creative Prompts',
    className: 'absolute -top-5 -left-14 -rotate-12 ',
  },
  {
    text: 'AI Fluency',
    className: 'absolute -bottom-10 -left-2 rotate-12',
  },
  {
    text: 'Future skills',
    className: 'absolute -bottom-4 -right-10 -rotate-12',
  },
  {
    text: 'Real-world Projects',
    className: 'absolute -bottom-24 left-14 ',
  },
];

const AiLearnPack = () => {
  return (
    <section id="learn-unlock">
      <div className="relative px-6 md:px-0">
        <img
          className="absolute top-80 right-0"
          src="/assets/images/orange-right-circle.png"
          alt=""
        />
        <div className="mx-auto w-full max-w-7xl space-y-10 pt-10 pb-20 md:space-y-14">
          <div className="space-y-2.5">
            <h3 className="text-center text-4xl leading-12 font-semibold text-[#0C2231] md:text-[44px]">
              Discover Learn Unlock
            </h3>
            {/* <p className="text-center text-[18px] font-normal text-[#4C565D]">
              Lorem ipsum dolor sit amet consectetur. Accumsan adipiscing eu
              risus.
              <br />
              Lorem ipsum dolor sit amet consectetur.
            </p> */}
          </div>

          <div className="flex flex-col items-start justify-center gap-6 md:flex-row">
            {/* left container */}
            <div className="relative h-[580px] w-full">
              <img
                alt="yellow-bg"
                src="/assets/images/yellow-bg.png"
                className="absolute inset-0 z-10 h-full"
              />
              <div className="relative z-30 flex h-full flex-col justify-between p-4 md:p-10">
                <h3 className="text-4xl font-medium text-black">
                  From User to Creator —
                  <br />
                  Unlock your AI
                  <br />
                  Superpower
                </h3>

                <div className="flex flex-col gap-2.5">
                  {LABELS?.map((item, idx) => (
                    <div
                      key={idx}
                      className="w-fit rounded-3xl border border-[#3b3b3b1f] bg-white px-4 py-2"
                    >
                      <p className="text-lg font-normal md:text-[22px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* right container */}

            <div className="z-10 flex h-[580px] w-full items-center justify-center rounded-2xl border border-[rgba(0,0,0,0.16)] bg-white">
              <motion.div
                className="relative bg-white"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.3 } },
                }}
              >
                {CARDS?.map((card, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, x: 0, y: 0 },
                      show: {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.4, ease: 'easeOut' },
                      },
                    }}
                    className={`${card.className} rounded-full border border-[rgba(0,0,0,0.16)] bg-white px-3 py-1`}
                  >
                    <p className="w-full font-normal text-[#0A0A0A]">
                      {card.text}
                    </p>
                  </motion.div>
                ))}

                <img
                  alt="girl-earphone"
                  src="/assets/images/girl-earphone.png"
                  className=""
                />
              </motion.div>
            </div>
          </div>

          {/* <div className="h-[2px] w-full bg-[#E9A772]" /> */}

          {/* <div className="flex flex-col items-start gap-6 md:flex-row">
            <div
              className="h-full w-full space-y-1.5 rounded-xl border border-[#0000001a] px-4 py-4 md:h-[188px]"
              style={{
                background:
                  'radial-gradient(circle at bottom right,rgba(208, 225, 190, 1) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <div className="w-fit rounded-full border border-[#E7E7E7] p-2.5">
                <p className="text-xs font-normal">
                  Investment in Your Teen's Future
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between md:items-center">
                  <h3 className="text-3xl font-semibold text-[#011813]">
                    Pricing
                  </h3>
                  <h3 className="text-3xl font-semibold text-[#011813]">
                    10,000
                  </h3>
                </div>

                <p className="text-base font-normal text-[#4E5255]">
                  One-time investment for skills that will benefit your teen
                  throughout their academic and professional journey.
                </p>
              </div>
            </div>

            <div
              className="h-full w-full space-y-1.5 rounded-xl border border-[#0000001a] px-4 py-4 md:h-[188px]"
              style={{
                background:
                  'radial-gradient(circle at bottom right,rgba(250, 210, 178, 1) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between md:items-center">
                  <h3 className="text-3xl font-semibold text-[#011813]">
                    Perfect for Forward - Thinking Teens
                  </h3>
                  <h3 className="text-3xl font-semibold text-nowrap text-[#011813]">
                    13+
                  </h3>
                </div>

                <p className="text-base font-normal text-[#4E5255]">
                  Specifically designed for teenagers (13+) who are curious
                  about technology, planning for college, or interested in
                  future-proof career paths
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AiLearnPack;
