'use client';

import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="bg-[#E7A572] px-5 py-16 md:px-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/webinar/footer/family.png"
            alt="Happy family with AI"
            width={500}
            height={500}
            className="w-full max-w-[420px] object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Two hours. Six tools.
            <br />
            One very proud family.
          </h2>

          <p className="mt-4 max-w-md text-base text-white/85">
            Give your child the AI head-start for less than the cost of a pizza.
          </p>

          <a
            href="https://learn.humainlearning.ai/event/1082"
			target="_blank"
            className="mt-6 self-start rounded-full bg-white px-8 py-4 font-display font-extrabold text-[#333333]"
          >
            RESERVE MY SEAT - <s className="text-[#888888]">₹499</s>{' '}
            <span className="text-[#C97D49]">₹199</span>
          </a>

          <p className="mt-3 text-sm font-semibold text-white/80">
            Includes ₹3000+ in bonuses
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/webinar/footer/batch_icon.png"
                alt="Batch"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <div>
                <div className="text-sm font-bold text-white">Sat, 18<sup>th</sup> July</div>
                <div className="text-sm text-white/80">6:00PM to 8:00PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
