import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';

const bonuses = [
  {
    id: 1,
    label: 'Bonus 1',
    title: 'A Custom AI Study Companion, Built Live',
    body: "During the session, we'll build a personalized AI study agent live in front of your child and your child and students. They'll walk away with a working tool they can text and use right from their laptop, voice note, or phone.",
    theme: 'orange',
  },
  {
    id: 2,
    label: 'Bonus 2',
    title: '6-Month QuillBot Premium Subscription',
    body: 'A 6-month QuillBot Premium subscription - free for your parent and student who joins live. Built to use of the most widely used AI writing tools, helpful for grammar checking, paraphrasing, summarizing physics numericals, chart-making, and yes, your child can finally do their homework, applications, and projects - completely free for half a year.',
    theme: 'green',
  },
  {
    id: 3,
    label: 'Bonus 3',
    title: 'The Humain AI Study Pack - Custom GPT + Claude Skills',
    body: 'A pack of pre-built AI study tools - Custom GPTs + Claude skills - just for Grade 8-12 mentors. Including the 6-D student lifecycle: AI Chat GPA, Problem Finder, Essay Coach, Note Partner, and student-specific reflection tools. Project Research Assistant, Plug-and-play, and not generic access links sent to live attendees after the webinar.',
    theme: 'orange',
  },
  {
    id: 4,
    label: 'Bonus 4',
    title: 'Live Q&A With The Humain Experts',
    body: 'The final 15 minutes are reserved for your questions. Ask the Humain Learning team - directly on camera, in the Instagram live chat, about your child and the AI world now.',
    theme: 'green',
  },
  {
    id: 5,
    label: 'Bonus 5',
    title: 'The AI Parent’s Guide — By The Humain Learning Team',
    body: 'A short PDF with especially for parents - not students. How to spot healthy versus unhealthy AI use in your child, conversational prompts to ask at home, about AI terms your child is using, and what not to enable anywhere else.',
    theme: 'orange',
  },
  {
    id: 6,
    label: 'Bonus 6',
    title: 'Full Webinar Recording + Slides',
    body: 'Sent to your inbox within 48 hours. Rewatch anything you found valuable, share with your spouse or your child, and keep the exact session as a learning reference. Available to all registrants.',
    theme: 'green',
  },
] as const;

const themeClasses = {
  orange: 'bg-terracotta text-white',
  green: 'bg-sage text-white',
} as const;

export default function LiveBonusesSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes details-slide-down {
            0% { opacity: 0; transform: translateY(-8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          details[open] .details-content {
            animation: details-slide-down 0.3s ease-out forwards;
          }
        `}} />
        <div className="max-w-[760px]">
          <h2 className="text-[22px] leading-[1.04] font-bold sm:text-[36px] lg:text-[44px]">
            <span className="text-terracotta">
              Six Things You&apos;ll Only Get
            </span>
            <br />
            <span className="text-charcoal">If You Join Live.</span>
          </h2>

          <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />

          <p className="mt-5 max-w-[720px] text-[11px] leading-[1.25] text-[#575757] sm:text-[15px] sm:leading-6">
            These are not the course deliverables they&apos;re free, exclusive
            value for parents and students who show up live. Yours to keep.
          </p>
        </div>

        <div className="mt-7 grid gap-2 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {bonuses.map((bonus) => {
            const title =
              bonus.id === 5
                ? "The AI Parent's Guide - By The Humain Learning Team"
                : bonus.title;

            return (
              <Fragment key={bonus.id}>
                {/* Mobile Accordion View */}
                <details
                  name="live-bonuses"
                  className={`group rounded-[18px] px-4 py-3 sm:hidden ${themeClasses[bonus.theme]}`}
                >
                  <summary
                    className="flex w-full cursor-pointer touch-manipulation list-none select-none items-center justify-between gap-3 text-left outline-none [&::-webkit-details-marker]:hidden"
                  >
                    <div className="min-w-0">
                      <p className="font-tomorrow text-[10px] font-semibold tracking-[0.08em] text-white/90 uppercase">
                        {bonus.label}
                      </p>

                      <h3
                        className="mt-1 max-w-[240px] text-[10px] leading-[1.1] font-bold !text-white"
                        style={{ color: '#ffffff' }}
                      >
                        {title}
                      </h3>
                    </div>

                    <ChevronDown
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-white transition-transform duration-300 group-open:rotate-180"
                      strokeWidth={2.4}
                    />
                  </summary>

                  {/* Collapsible content with smooth CSS animation */}
                  <div className="details-content overflow-hidden">
                    <div className="mt-3 h-[2px] w-10 bg-white/90" />
                    <p className="mt-3 text-[11px] leading-[1.35] text-white/95">
                      {bonus.body}
                    </p>
                  </div>
                </details>

                {/* Desktop Static Card View */}
                <div
                  className={`hidden sm:flex sm:flex-col rounded-[18px] px-5 py-5 min-h-[210px] lg:min-h-[228px] ${themeClasses[bonus.theme]}`}
                >
                  <div className="min-w-0">
                    <p className="font-tomorrow text-[11px] font-semibold tracking-[0.08em] text-white/90 uppercase">
                      {bonus.label}
                    </p>

                    <h3
                      className="mt-2 max-w-[280px] text-[26px] leading-[0.98] font-bold !text-white"
                      style={{ color: '#ffffff' }}
                    >
                      {title}
                    </h3>
                  </div>

                  <div className="mt-3 h-[2px] w-12 bg-white/90" />

                  <p className="mt-3 text-[12px] leading-[1.35] text-white/95">
                    {bonus.body}
                  </p>
                </div>
              </Fragment>
            );
          })}
        </div>

        <div className="mt-5 space-y-2 text-[8px] leading-[1.35] text-[#575757] sm:mt-7 sm:text-[12px]">
          <p>
            * Bonuses 1 through 4 are exclusive to live attendees who join and
            stay through the full session.
          </p>
          <p>* Bonuses 5 and 6 are sent to all registrants.</p>
          <p>* The recording is shared with all registrants.</p>
        </div>
      </div>
    </section>
  );
}
