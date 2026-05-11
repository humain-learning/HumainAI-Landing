'use client';

import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import PrimaryButton from 'ui/PrimaryButton';

type WebinarHeroProps = {
  onReserveClick?: () => void;
};

export default function WebinarHero({ onReserveClick }: WebinarHeroProps) {
  const [stickyBottom, setStickyBottom] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateStickyBottom = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const footer =
          document.querySelector<HTMLElement>('[data-site-footer]');

        if (!footer || window.innerWidth >= 768) {
          setStickyBottom(0);
          return;
        }

        const footerTop = footer.getBoundingClientRect().top;
        setStickyBottom(
          Math.max(0, Math.round(window.innerHeight - footerTop))
        );
      });
    };

    updateStickyBottom();
    window.addEventListener('scroll', updateStickyBottom, { passive: true });
    window.addEventListener('resize', updateStickyBottom);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateStickyBottom);
      window.removeEventListener('resize', updateStickyBottom);
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] bg-white">
        <div className="bg-sage hidden items-center justify-center px-3 py-1.5 md:flex lg:px-4 lg:py-2">
          <div className="flex w-full max-w-[1220px] items-center justify-center gap-8 sm:gap-12">
            <p className="text-center text-[9px] font-medium tracking-[0.08em] text-white sm:text-[10px]">
              Free Live Session â€¢ Fri, 16th May â€¢ 11 AM IST
            </p>
            <button
              type="button"
              onClick={onReserveClick}
              className="text-sage hidden items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[9px] font-semibold shadow-sm sm:inline-flex"
            >
              <span>Reserve Your Free Seat</span>
              <span className="bg-sage flex h-4 w-4 items-center justify-center rounded-full text-white">
                <ArrowUpRight aria-hidden="true" className="h-2.5 w-2.5" />
              </span>
            </button>
          </div>
        </div>

        <div className="px-3 pt-3 pb-8 md:hidden">
          <img
            src="/assets/logo/webinarhumanlogo.png"
            alt="Humain Learning"
            className="mb-2 h-auto w-[78px] object-contain"
          />

          <p className="mb-3 text-[6px] font-semibold tracking-[0.12em] text-[#6b6b6b] uppercase">
            For parents & students of grade 8-12
          </p>

          <div className="-mr-3 flex items-center justify-between gap-2.5">
            <div className="min-w-0 flex-[0_0_56%]">
              <h1 className="text-[15px] leading-[1.01] font-bold">
                <span className="text-terracotta">
                  The Kids Who Learn AI Today Will Lead.
                </span>
                <br />
                <span className="text-sage">
                  The Ones Who Don&apos;t Will Struggle
                </span>
              </h1>
              <div className="bg-terracotta/90 mt-3 h-[2px] w-14" />
            </div>

            <div className="relative ml-auto w-[40%] max-w-[180px] min-w-[132px] shrink-0 sm:max-w-[220px]">
              <div className="ml-auto aspect-[1.03/1] overflow-hidden rounded-t-[82px] rounded-b-none">
                <img
                  src="/assets/images/webinar-hero-img.png"
                  alt="Students learning together during the webinar"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-[8px] left-[-8px] h-[46px] w-[46px]">
                <img
                  src="/assets/Website Assets/bubbel-up.svg"
                  alt=""
                  className="h-full w-full object-contain"
                />
                <img
                  src="/assets/icons/ai-webinar.svg"
                  alt="AI webinar icon"
                  className="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-[560px] text-[9px] leading-[1.3] text-[#575757]">
            Give your child a real head start in the AI age.
            <br />
            Join Humain Learning, led by IIT-harvard trained educators, for a
            free 60-minute live workshop designed for Indian parents and
            students.
          </p>

          <div className="mt-5 hidden max-w-[560px] grid-cols-2 items-stretch gap-2 min-[429px]:grid">
            <div className="h-full rounded-[18px] bg-[#fbf4ec] px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <div className="space-y-3">
                <div>
                  <p className="text-charcoal text-[8px] leading-[1.15] font-bold">
                    Hosted live by
                    <br />
                    Rashmi Bhaskaran
                  </p>
                  <p className="mt-1 text-[7px] leading-[1.15] text-[#646464]">
                    Lead, Curriculum & Training at
                    <br />
                    Humain Learning
                  </p>
                </div>

                <div>
                  <p className="text-charcoal text-[8px] leading-[1.15] font-bold">
                    Q&A by
                    <br />
                    Ankur Dahiya
                  </p>
                  <p className="mt-1 text-[7px] leading-[1.15] text-[#646464]">
                    Program Director.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full rounded-[18px] bg-[#eef6df] px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <p className="text-sage text-[9px] leading-[1.1] font-bold">
                Friday, 16th May 2026
              </p>
              <p className="text-sage/80 mt-1 text-[9px] leading-[1.1]">
                11:00 AM - 12:00 PM IST
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <img
                    src="/assets/icons/live-zoom-icon.svg"
                    alt="Live on Zoom"
                    className="h-5 w-5 object-contain"
                  />
                  <p className="text-[7px] leading-[1.15] text-[#5e5e5e]">
                    Live on Zoom
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <img
                    src="/assets/icons/live-recoding-icon.svg"
                    alt="Recording shared with registrants only"
                    className="h-5 w-5 object-contain"
                  />
                  <p className="text-[7px] leading-[1.15] text-[#5e5e5e]">
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
                  <p className="text-charcoal text-[8px] leading-[1.15] font-bold">
                    Hosted live by Rashmi Bhaskaran
                  </p>
                  <p className="mt-1 text-[7px] leading-[1.2] text-[#646464]">
                    Lead, Curriculum & Training at Humain Learning
                  </p>
                </div>
                <div>
                  <p className="text-charcoal text-[8px] leading-[1.15] font-bold">
                    Q&amp;A by Ankur Dahiya
                  </p>
                  <p className="mt-1 text-[7px] leading-[1.2] text-[#646464]">
                    Program Director.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] bg-[#eef6df] px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-3">
                <div>
                  <p className="text-sage text-[9px] leading-[1.15] font-bold">
                    Friday,
                    <br />
                    16 May 2026
                  </p>
                  <p className="text-sage/85 mt-1 text-[8px] leading-[1.15] font-bold">
                    11:00 AM-12:00 PM IST
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <img
                      src="/assets/icons/live-zoom-icon.svg"
                      alt="Live on Zoom"
                      className="h-5 w-5 object-contain"
                    />
                    <p className="text-[7px] leading-[1.15] text-[#5e5e5e]">
                      Live on Zoom
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <img
                      src="/assets/icons/live-recoding-icon.svg"
                      alt="Recording shared with registrants only"
                      className="h-5 w-5 object-contain"
                    />
                    <p className="text-[7px] leading-[1.15] text-[#5e5e5e]">
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
            <PrimaryButton
              text="Reserve Your Free Seat"
              target=""
              onClick={onReserveClick}
              buttonClassName="shadow-green py-1 pl-5 text-[11px]"
            />
            <p className="mt-2 text-center text-[7px] leading-3 text-[#8b8b8b]">
              Limited to 200 seats. Registration closes 24 hours before the
              session.
            </p>
          </div>
        </div>

        <div
          className="bg-sage fixed right-0 left-0 z-40 px-3 py-2 text-white shadow-[0_-6px_18px_rgba(0,0,0,0.12)] transition-[bottom] duration-150 md:hidden"
          style={{ bottom: stickyBottom }}
        >
          <div className="mx-auto flex max-w-[640px] items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[7px] tracking-[0.12em] text-white/80 uppercase">
                Free Live Session
              </p>
              <p className="text-[10px] leading-tight font-semibold sm:text-[11px]">
                Fri 16th May • 11 AM IST
              </p>
            </div>
            <button
              type="button"
              onClick={onReserveClick}
              className="text-sage inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[8px] font-semibold"
            >
              <span>Reserve Your Free Seat</span>
              <span className="bg-sage flex h-3.5 w-3.5 items-center justify-center rounded-full text-white">
                <ArrowUpRight aria-hidden="true" className="h-2 w-2" />
              </span>
            </button>
          </div>
        </div>

        <div className="hidden px-4 pt-5 pb-10 md:block md:px-8 lg:hidden">
          <div className="grid items-start gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.84fr)] md:grid-cols-[minmax(0,1fr)_minmax(280px,0.82fr)] md:gap-6">
            <div className="min-w-0">
              <img
                src="/assets/logo/webinarhumanlogo.png"
                alt="Humain Learning"
                className="mb-3 h-auto w-24 object-contain md:w-32"
              />

              <p className="mb-3 text-[8px] font-semibold tracking-[0.12em] text-[#6b6b6b] uppercase md:text-[9px]">
                For parents & students of grade 8-12
              </p>

              <h1 className="max-w-[620px] text-[18px] leading-[1.02] font-bold text-balance md:text-[28px]">
                <span className="text-terracotta">
                  The Kids Who Learn AI Today Will Lead.
                </span>
                <br />
                <span className="text-sage">
                  The Ones Who Don&apos;t Will Struggle
                </span>
              </h1>

              <div className="bg-terracotta/90 mt-3 h-[2px] w-14 md:mt-4 md:w-20" />

              <p className="mt-4 max-w-[620px] text-[10px] leading-[1.34] text-[#575757] md:mt-5 md:text-[12px]">
                Give your child a real head start in the AI age.
                <br />
                Join Humain Learning, led by IIT-harvard trained educators, for
                a free 60-minute live workshop designed for Indian parents and
                students.
              </p>

              <div className="mt-5 grid max-w-[560px] grid-cols-2 items-stretch gap-2 md:mt-6 md:gap-3">
                <div className="h-full rounded-[18px] bg-[#fbf4ec] px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.04)] md:rounded-[20px] md:px-4 md:py-4">
                  <div className="space-y-4">
                    <div>
                      <p className="text-charcoal text-[8px] leading-[1.15] font-bold md:text-[11px]">
                        Hosted live by
                        <br />
                        Rashmi Bhaskaran
                      </p>
                      <p className="mt-1 text-[7px] leading-[1.14] text-[#646464] md:text-[10px]">
                        Lead, Curriculum & Training at
                        <br />
                        Humain Learning
                      </p>
                    </div>

                    <div>
                      <p className="text-charcoal text-[8px] leading-[1.15] font-bold md:text-[11px]">
                        Q&A by
                        <br />
                        Ankur Dahiya
                      </p>
                      <p className="mt-1 text-[7px] leading-[1.14] text-[#646464] md:text-[10px]">
                        Program Director.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-full rounded-[18px] bg-[#eef6df] px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.04)] md:rounded-[20px] md:px-4 md:py-4">
                  <p className="text-sage text-[8px] leading-[1.1] font-bold md:text-[11px]">
                    Friday, 16th May 2026
                  </p>
                  <p className="text-sage/80 mt-1 text-[8px] leading-[1.1] md:text-[11px]">
                    11:00 AM - 12:00 PM IST
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2 md:mt-4 md:gap-3">
                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-zoom-icon.svg"
                        alt="Live on Zoom"
                        className="h-4 w-4 object-contain md:h-6 md:w-6"
                      />
                      <p className="text-[7px] leading-[1.12] text-[#5e5e5e] md:text-[9px]">
                        Live on Zoom
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-recoding-icon.svg"
                        alt="Recording shared with registrants only"
                        className="h-4 w-4 object-contain md:h-6 md:w-6"
                      />
                      <p className="text-[7px] leading-[1.12] text-[#5e5e5e] md:text-[9px]">
                        Recording shared with registrants only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="reserve-seat-tablet" className="mt-5 md:mt-6">
                <PrimaryButton
                  text="Reserve Your Free Seat"
                  target=""
                  onClick={onReserveClick}
                  buttonClassName="shadow-green py-1 pl-5 text-[10px] md:text-sm"
                />
                <p className="mt-2 text-[7px] leading-3 text-[#8b8b8b] md:mt-3 md:text-[9px] md:leading-4">
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

        <div className="hidden overflow-hidden pt-4 pr-0 pb-12 pl-4 lg:block lg:pr-0 lg:pl-10 xl:pr-0 xl:pl-12">
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

              <h1 className="max-w-[680px] text-[24px] leading-[1.02] font-bold sm:text-[28px] lg:text-[28px] xl:text-[30px]">
                <span className="text-terracotta lg:whitespace-nowrap">
                  The Kids Who Learn AI Today Will Lead.
                </span>
                <br />
                <span className="text-sage lg:whitespace-nowrap">
                  The Ones Who Don&apos;t Will Struggle
                </span>
              </h1>

              <div className="bg-terracotta/90 mt-4 h-[2px] w-20" />

              <p className="mt-5 max-w-[520px] text-[11px] leading-[1.42] text-[#575757] sm:text-xs lg:text-[12px]">
                Give your child a real head start in the AI age.
                <br />
                Join Humain Learning, led by IIT-harvard trained educators, for
                a free 60-minute live workshop designed for Indian parents and
                students.
              </p>

              <div className="mt-6 grid max-w-[460px] gap-3 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[22px] bg-[#fbf4ec] px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
                  <div className="space-y-4">
                    <div>
                      <p className="text-charcoal text-[11px] leading-[1.25] font-bold">
                        Hosted live by
                        <br />
                        Rashmi Bhaskaran
                      </p>
                      <p className="mt-1 text-[10px] leading-[1.2] text-[#646464]">
                        Lead, Curriculum & Training at
                        <br />
                        Humain Learning
                      </p>
                    </div>

                    <div>
                      <p className="text-charcoal text-[11px] leading-[1.25] font-bold">
                        Q&A by
                        <br />
                        Ankur Dahiya
                      </p>
                      <p className="mt-1 text-[10px] leading-[1.2] text-[#646464]">
                        Program Director.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[22px] bg-[#eef6df] px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
                  <p className="text-sage text-[11px] leading-[1.2] font-bold">
                    Friday, 16th May 2026
                  </p>
                  <p className="text-sage/80 mt-1 text-[11px] leading-[1.2]">
                    11:00 AM - 12:00 PM IST
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-zoom-icon.svg"
                        alt="Live on Zoom"
                        className="h-6 w-6 object-contain"
                      />
                      <p className="text-[10px] leading-[1.2] text-[#5e5e5e]">
                        Live on Zoom
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <img
                        src="/assets/icons/live-recoding-icon.svg"
                        alt="Recording shared with registrants only"
                        className="h-6 w-6 object-contain"
                      />
                      <p className="text-[10px] leading-[1.2] text-[#5e5e5e]">
                        Recording shared with registrants only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="reserve-seat" className="mt-7">
                <PrimaryButton
                  text="Reserve Your Free Seat"
                  target=""
                  onClick={onReserveClick}
                  buttonClassName="shadow-green py-1 pl-5 text-xs sm:text-sm"
                />
                <p className="mt-3 text-[9px] leading-4 text-[#8b8b8b]">
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
