'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const QuillBotPerk = () => {
  const features = [
    {
      icon: '/assets/images/studentcourse/AI-powered.png',
      label: 'AI-powered paraphrasing',
    },
    {
      icon: '/assets/images/studentcourse/Grammar.png',
      label: 'Grammar checking',
    },
    {
      icon: '/assets/images/studentcourse/summarising.png',
      label: 'Summarising for essays, projects and exam prep',
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-screen-2xl px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6 lg:gap-8 xl:gap-16 items-center">
          
          {/* Left Column: Blob Shape with Icon */}
          <div className="flex items-center justify-center mx-auto md:mx-0 mt-8 md:mt-0 md:col-span-4">
            <div className="relative flex h-48 w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 xl:h-72 xl:w-72 items-center justify-center rounded-tl-full rounded-tr-full rounded-bl-3xl rounded-br-full bg-sage">
              <Image
                src="/assets/images/studentcourse/logo.png"
                alt="QuillBot Logo"
                width={224}
                height={224}
                className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 xl:h-56 xl:w-56 object-contain"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col space-y-4 md:col-span-8">
            
            {/* Badge */}
            <div className="w-fit mx-auto md:mx-0 text-center">
              <span className="inline-block rounded-full border border-terracotta px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-terracotta bg-white">
                Included with Enrolment
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl font-extrabold leading-tight text-terracotta md:text-3xl lg:text-3xl xl:text-4xl text-center md:text-left">
              6 months of QuillBot Premium
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-600 md:text-sm lg:text-base xl:text-lg text-center md:text-left">
              Every enrolled student gets QuillBot Premium free for six months, at no extra cost — and keeps it long after the course ends.
            </p>

            {/* Features Grid */}
            <div className="flex justify-center md:justify-start">
              <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:flex md:flex-row md:flex-nowrap md:gap-4 lg:gap-6 items-start">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-2 lg:gap-3 text-left flex-1 md:min-w-0">
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      width={48}
                      height={48}
                      className="h-12 w-12 md:h-9 md:w-9 lg:h-10 lg:w-10 shrink-0 object-contain"
                    />
                    {/* Label */}
                    <p className="text-sm md:text-xs lg:text-sm font-medium text-charcoal leading-snug pt-1">
                      {feature.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                href="https://quillbot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta group flex w-fit cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-4 text-white transition-colors hover:opacity-90"
              >
                <div className="whitespace-nowrap font-medium">Explore QuillBot</div>
                <div className="group-hover:bg-sage flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-300">
                  <Image
                    src="/assets/images/studentcourse/quillbot.png"
                    alt="QuillBot"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuillBotPerk;