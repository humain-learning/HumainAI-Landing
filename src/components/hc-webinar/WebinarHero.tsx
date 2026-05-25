'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import PrimaryButton from 'ui/PrimaryButton';

type WebinarHeroProps = {
  onReserveClick?: () => void;
  webinarDetails: {
    date: string;
    startTime: string;
	endTime: string;
  };
};

export default function WebinarHero({
  onReserveClick,
  webinarDetails,
}: WebinarHeroProps) {
  const stickyBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateStickyBottom = () => {
      const stickyBar = stickyBarRef.current;
      const footer = document.querySelector<HTMLElement>('[data-site-footer]');

      if (!stickyBar) return;

      if (!footer || window.innerWidth >= 768) {
        stickyBar.style.bottom = '0px';
        return;
      }

      const footerTop = footer.getBoundingClientRect().top;
      stickyBar.style.bottom = `${Math.max(0, window.innerHeight - footerTop)}px`;
    };

    updateStickyBottom();
    window.addEventListener('scroll', updateStickyBottom, { passive: true });
    window.addEventListener('resize', updateStickyBottom);

    return () => {
      window.removeEventListener('scroll', updateStickyBottom);
      window.removeEventListener('resize', updateStickyBottom);
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-screen bg-white">

        <div className="overflow-hidden px-3 pt-3 pb-8 min-[500px]:hidden">
          <img
            src="/assets/logo/webinarhumanlogo.png"
            alt="Humain Learning"
            className="h-auto w-[150px] object-contain"
          />

          <div className="mt-3 grid grid-cols-2">
            {/* Top-left: Line 1 heading — centered within cell */}
            <div className="flex items-center justify-center pr-2">
              <h1
                className="text-center text-[clamp(14px,4.4vw,20px)] leading-[1.1] font-bold"
                style={{ color: '#9CB977' }}
              >
                Tomorrow&apos;s Leaders
                <br />
                will Know How to
              </h1>
            </div>

            {/* Top-right: Hero image — bottom-left corner sits at grid center */}
            <div className="flex items-end justify-start">
              <img
                src="/assets/images/webinar-hero-mobile-img.png"
                alt="Students learning together during the webinar"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Bottom-left: Bubble — top-right corner sits at grid center, touching image corner */}
            <div className="flex items-start justify-end">
              <div className="relative h-[clamp(88px,26vw,112px)] w-[clamp(88px,26vw,112px)]">
                <img
                  src="/assets/Website Assets/bubbel-up.svg"
                  alt=""
                  className="h-full w-full object-contain"
                />
                <p className="absolute top-1/2 left-1/2 w-[66px] -translate-x-1/2 -translate-y-1/2 text-left text-[7px] leading-[1.25] font-bold tracking-[0.08em] text-white uppercase min-[390px]:w-[74px] min-[390px]:text-[7.5px]">
                  For parents &amp; students of grade 8-12
                </p>
              </div>
            </div>

            {/* Bottom-right: Line 2 heading — centered within cell */}
            <div className="flex items-center justify-center pl-2">
              <p className="text-center text-[clamp(14px,4.4vw,20px)] leading-[1.08] font-bold text-terracotta">
                Think, Create, and
                <br />
                Learn with AI
              </p>
            </div>
          </div>

          <div className="bg-terracotta/90 mt-2 mb-3 h-[2px] w-9" />

          <p className="max-w-[560px] text-[11px] leading-[1.4] text-[#575757]">
            Give your child a real head start in the AI age.
            <br />
            Join Humain Learning, built by Harvard-trained educators, for a
            free 60-minute live workshop designed for Indian parents and
            students.
          </p>

          <div className="mt-5 hidden max-w-[560px] grid-cols-2 items-stretch gap-2 min-[429px]:grid">
            <div className="h-full rounded-[18px] bg-[#fbf4ec] px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <div className="space-y-3">
                <div>
                  <p className="text-charcoal text-[10px] leading-[1.15] font-bold">
                    Hosted live by
                    <br />
                    Rashmi Bhaskaran
                  </p>
                  <p className="mt-1 text-[9px] leading-[1.2] text-[#646464]">
                    Lead, Curriculum & Training at
                    <br />
                    Humain Learning
                  </p>
                </div>

                <div>
                  <p className="text-charcoal text-[10px] leading-[1.15] font-bold">
                    Q&A by
                    <br />
                    Ankur Dahiya
                  </p>
                  <p className="mt-1 text-[9px] leading-[1.2] text-[#646464]">
                    Program Director.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full rounded-[18px] bg-[#eef6df] px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <p className="text-sage text-[11px] leading-[1.15] font-bold">
                    {webinarDetails.date}
              </p>
              <p className="text-sage/80 mt-1 text-[10px] leading-[1.15]">
                  {webinarDetails.startTime} - {webinarDetails.endTime} IST
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <img
                    src="/assets/icons/live-zoom-icon.svg"
                    alt="Live on Zoom"
                    className="h-5 w-5 object-contain"
                  />
                  <p className="text-[9px] leading-[1.15] text-[#5e5e5e]">
                    Live on Zoom
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <img
                    src="/assets/icons/live-recoding-icon.svg"
                    alt="Recording shared with registrants only"
                    className="h-5 w-5 object-contain"
                  />
                  <p className="text-[9px] leading-[1.15] text-[#5e5e5e]">
                    Recording shared with registrants only
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid max-w-[560px] gap-3 min-[429px]:hidden">
            <div className="rounded-[18px] bg-[#fbf4ec] px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-charcoal text-[10px] leading-[1.15] font-bold">
                    Hosted live by Rashmi Bhaskaran
                  </p>
                  <p className="mt-1 text-[9px] leading-[1.2] text-[#646464]">
                    Lead, Curriculum & Training at Humain Learning
                  </p>
                </div>
                <div>
                  <p className="text-charcoal text-[10px] leading-[1.15] font-bold">
                    Q&amp;A by Ankur Dahiya
                  </p>
                  <p className="mt-1 text-[9px] leading-[1.2] text-[#646464]">
                    Program Director.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] bg-[#eef6df] px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-3">
                <div>
                  <p className="text-sage text-[11px] leading-[1.15] font-bold">
                    {webinarDetails.date}
                  </p>
                  <p className="text-sage/85 mt-1 text-[10px] leading-[1.15] font-bold">
                    {webinarDetails.startTime} - {webinarDetails.endTime} IST
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <img
                      src="/assets/icons/live-zoom-icon.svg"
                      alt="Live on Zoom"
                      className="h-5 w-5 object-contain"
                    />
                    <p className="text-[9px] leading-[1.15] text-[#5e5e5e]">
                      Live on Zoom
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <img
                      src="/assets/icons/live-recoding-icon.svg"
                      alt="Recording shared with registrants only"
                      className="h-5 w-5 object-contain"
                    />
                    <p className="text-[9px] leading-[1.15] text-[#5e5e5e]">
                      Recording shared with registrants only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="reserve-seat-mobile"
            className="mt-5 flex flex-col items-center pb-2"
          >
            <div className="hidden">
              <PrimaryButton
                text="Reserve Your Free Seat"
                target=""
                onClick={onReserveClick}
                buttonClassName="shadow-green py-1.5 pl-5 text-[13px]"
              />
            </div>
            <p className="mt-2 text-center text-[9px] leading-[1.4] text-[#8b8b8b]">
              Limited to 200 seats. Registration closes 24 hours before the
              session.
            </p>
          </div>
        </div>


        <div className="hidden px-5 pt-6 pb-12 min-[500px]:block md:px-10 lg:hidden">
          <div className="grid items-start gap-4 min-[500px]:grid-cols-[minmax(0,1fr)_minmax(170px,0.72fr)] sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.84fr)] md:grid-cols-[minmax(0,1fr)_minmax(280px,0.82fr)] md:gap-6">
            <div className="min-w-0">
              <img
                src="/assets/logo/webinarhumanlogo.png"
                alt="Humain Learning"
                className="mb-3 h-auto w-24 object-contain md:w-32"
              />

              <p className="mb-3 text-[8px] font-semibold tracking-[0.12em] text-[#6b6b6b] uppercase md:text-[9px]">
                For parents & students of grade 8-12
              </p>

              <h1 className="max-w-[680px] text-xl leading-[1.06] font-bold text-balance sm:text-2xl md:text-3xl">
                <span className="text-terracotta">
                  Tomorrow&apos;s Leaders will Know How to
                </span>
                <br />
                <span className="text-sage">
                  Think, Create, and Learn with AI
                </span>
              </h1>

              <div className="bg-terracotta/90 mt-4 h-[2px] w-16 md:mt-5 md:w-20" />

              <p className="mt-5 max-w-[700px] text-sm leading-[1.45] text-[#575757] md:mt-6 md:text-base">
                Give your child a real head start in the AI age.
                <br />
                Join Humain Learning, led by IIT-harvard trained educators, for
                a free 60-minute live workshop designed for Indian parents and
                students.
              </p>

              <div className="mt-6 grid max-w-[680px] grid-cols-2 items-stretch gap-3 md:mt-7 md:gap-4">
                <div className="h-full rounded-[20px] bg-[#fbf4ec] px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.04)] md:rounded-[24px] md:px-5 md:py-5">
                  <div className="space-y-4 md:space-y-5">
                    <div>
                      <p className="text-charcoal text-xs leading-[1.15] font-bold md:text-sm">
                        Hosted live by
                        <br />
                        Rashmi Bhaskaran
                      </p>
                      <p className="mt-1 text-[10px] leading-[1.14] text-[#646464] md:text-[11px]">
                        Lead, Curriculum & Training at
                        <br />
                        Humain Learning
                      </p>
                    </div>

                    <div>
                      <p className="text-charcoal text-xs leading-[1.15] font-bold md:text-sm">
                        Q&A by
                        <br />
                        Ankur Dahiya
                      </p>
                      <p className="mt-1 text-[10px] leading-[1.14] text-[#646464] md:text-[11px]">
                        Program Director.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-full rounded-[20px] bg-[#eef6df] px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.04)] md:rounded-[24px] md:px-5 md:py-5">
                  <p className="text-sage text-xs leading-[1.1] font-bold md:text-sm">
                    {webinarDetails.date}
                  </p>
                  <p className="text-sage/80 mt-1 text-[10px] leading-[1.1] md:text-[11px]">
                    {webinarDetails.startTime} - {webinarDetails.endTime} IST
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 md:mt-5 md:gap-4">
                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-zoom-icon.svg"
                        alt="Live on Zoom"
                        className="h-5 w-5 object-contain md:h-6 md:w-6"
                      />
                      <p className="text-[9px] leading-[1.12] text-[#5e5e5e] md:text-[10px]">
                        Live on Zoom
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-recoding-icon.svg"
                        alt="Recording shared with registrants only"
                        className="h-5 w-5 object-contain md:h-6 md:w-6"
                      />
                      <p className="text-[9px] leading-[1.12] text-[#5e5e5e] md:text-[10px]">
                        Recording shared with registrants only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

          <div id="reserve-seat-tablet" className="mt-6 hidden md:block md:mt-7">
                <PrimaryButton
                  text="Reserve Your Free Seat"
                  target=""
                  onClick={onReserveClick}
                  buttonClassName="shadow-green py-1.5 pl-5 text-sm md:text-base"
                />
                <p className="mt-3 text-[9px] leading-4 text-[#8b8b8b] md:mt-4 md:text-[10px] md:leading-4">
                  Limited to 200 seats. Registration closes 24 hours before the
                  session.
                </p>
              </div>
            </div>

            <div className="-mr-4 flex justify-end md:-mr-8">
              <div className="relative ml-auto w-full max-w-[240px] md:max-w-[420px]">
                <div className="ml-auto aspect-[1.02/1] overflow-hidden rounded-t-[160px] rounded-b-none">
                  <img
                    src="/assets/images/webinar-hero-img.png"
                    alt="Students learning together during the webinar"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="absolute bottom-[12px] left-[2px] h-[58px] w-[58px] md:bottom-[24px] md:left-[10px] md:h-[96px] md:w-[96px]">
                  <img
                    src="/assets/Website Assets/bubbel-up.svg"
                    alt=""
                    className="h-full w-full object-contain"
                  />
                  <img
                    src="/assets/icons/ai-webinar.svg"
                    alt="AI webinar icon"
                    className="absolute top-1/2 left-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 object-contain md:h-[52px] md:w-[52px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden overflow-hidden pt-6 pr-0 pb-14 pl-6 lg:block lg:pr-0 lg:pl-12 xl:pr-0 xl:pl-16">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)] xl:gap-2">
            <div className="order-2 max-w-[680px] pt-2 lg:order-1 lg:pt-6">
              <img
                src="/assets/logo/webinarhumanlogo.png"
                alt="Humain Learning"
                className="mb-3 h-auto w-32 object-contain sm:w-36"
              />

              <p className="mb-3 text-[9px] font-semibold tracking-[0.14em] text-[#6b6b6b] uppercase sm:text-[10px]">
                For parents & students of grade 8-12
              </p>

              <h1 className="max-w-[760px] text-2xl leading-[1.06] font-bold sm:text-3xl lg:text-4xl xl:text-[2.8rem]">
                <span className="text-terracotta lg:whitespace-nowrap">
                  Tomorrow&apos;s Leaders will Know How to
                </span>
                <br />
                <span className="text-sage lg:whitespace-nowrap">
                  Think, Create, and Learn with AI
                </span>
              </h1>

              <div className="bg-terracotta/90 mt-5 h-[2px] w-20 lg:mt-6" />

              <p className="mt-6 max-w-[620px] text-sm leading-[1.5] text-[#575757] sm:text-base lg:text-lg">
                Give your child a real head start in the AI age.
                <br />
                Join Humain Learning, led by IIT-harvard trained educators, for
                a free 60-minute live workshop designed for Indian parents and
                students.
              </p>

              <div className="mt-7 grid max-w-[560px] gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[24px] bg-[#fbf4ec] px-5 py-5 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
                  <div className="space-y-5">
                    <div>
                      <p className="text-charcoal text-sm leading-[1.25] font-bold lg:text-base">
                        Hosted live by
                        <br />
                        Rashmi Bhaskaran
                      </p>
                      <p className="mt-1 text-xs leading-[1.2] text-[#646464] lg:text-sm">
                        Lead, Curriculum & Training at
                        <br />
                        Humain Learning
                      </p>
                    </div>

                    <div>
                      <p className="text-charcoal text-sm leading-[1.25] font-bold lg:text-base">
                        Q&A by
                        <br />
                        Ankur Dahiya
                      </p>
                      <p className="mt-1 text-xs leading-[1.2] text-[#646464] lg:text-sm">
                        Program Director.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#eef6df] px-5 py-5 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
                  <p className="text-sage text-sm leading-[1.2] font-bold lg:text-base">
                    {webinarDetails.date}
                  </p>
                  <p className="text-sage/80 mt-1 text-xs leading-[1.2] lg:text-sm">
                    {webinarDetails.startTime} - {webinarDetails.endTime} IST
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-zoom-icon.svg"
                        alt="Live on Zoom"
                        className="h-7 w-7 object-contain"
                      />
                      <p className="text-xs leading-[1.2] text-[#5e5e5e] lg:text-sm">
                        Live on Zoom
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-recoding-icon.svg"
                        alt="Recording shared with registrants only"
                        className="h-7 w-7 object-contain"
                      />
                      <p className="text-xs leading-[1.2] text-[#5e5e5e] lg:text-sm">
                        Recording shared with registrants only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="reserve-seat" className="mt-8">
                <PrimaryButton
                  text="Reserve Your Free Seat"
                  target=""
                  onClick={onReserveClick}
                  buttonClassName="shadow-green py-1.5 pl-5 text-sm sm:text-base"
                />
                <p className="mt-4 text-xs leading-4 text-[#8b8b8b] lg:text-sm">
                  Limited to 200 seats. Registration closes 24 hours before the
                  session.
                </p>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-[520px] lg:mr-0 lg:ml-auto lg:max-w-none">
                <div className="relative ml-auto aspect-[1.02/1] w-full overflow-hidden rounded-t-[220px] rounded-b-none lg:mr-[-6px] lg:w-[clamp(500px,45vw,700px)]">
                  <img
                    src="/assets/images/webinar-hero-img.png"
                    alt="Students learning together during the webinar"
                    className="h-full w-full scale-[0.93] object-contain object-center"
                  />
                </div>

                <div className="absolute bottom-[32px] left-[22px] h-[114px] w-[114px] sm:bottom-[40px] sm:left-[28px] sm:h-[132px] sm:w-[132px]">
                  <img
                    src="/assets/Website Assets/bubbel-up.svg"
                    alt=""
                    className="h-full w-full object-contain"
                  />
                  <img
                    src="/assets/icons/ai-webinar.svg"
                    alt="AI webinar icon"
                    className="absolute top-1/2 left-1/2 h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[76px] sm:w-[76px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
