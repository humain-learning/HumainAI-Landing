'use client';
import Accordion from 'ui/Accordion';
import Link from 'next/link';

const ENTITY_FAQ = [
  {
    title: 'What is Humain Learning?',
    content: (
      <div>
        Humain Learning is an Indian AI literacy course provider for Class 8-12 students and teachers, operated by
        Eduxa Consulting. The work runs across two programmes (HumainChamps for students and HumainEducators for
        teachers) and is built on the six-pillar Humain AI Literacy Framework adapted from UNESCO, OECD, and EU
        references.
      </div>
    ),
  },
  {
    title: 'Who are the courses for?',
    content: (
      <div>
        HumainChamps is for Indian students in Class 8-12 (age 13+). HumainEducators is for working school teachers.
        School-side institutional partnerships route through the{' '}
        <Link className="text-secondary-color underline underline-offset-4" href="/for-schools">
          for-schools page
        </Link>
        . Parents start at{' '}
        <Link className="text-secondary-color underline underline-offset-4" href="/for-parents">
          for-parents
        </Link>
        ; teachers and direct enrollers can also self-enrol from the HumainEducators course page.
      </div>
    ),
  },
  {
    title: 'What makes a paid AI literacy course different from free YouTube and ChatGPT?',
    content: (
      <div>
        Free resources teach what a tool does; a structured course teaches a framework that applies to every new tool
        that ships next year. The Humain six-pillar framework spans foundations, learning, studying, creating, agents
        and automation, and ethics and safety; a child who has worked through it can pick up any new AI model and
        judge it. The{' '}
        <Link className="text-secondary-color underline underline-offset-4" href="/for-parents">
          for-parents page
        </Link>{' '}
        covers the full free-vs-paid comparison, including completion rates and the honest disqualifier for parents
        whose child has already finished a self-paced course.
      </div>
    ),
  },
  {
    title: 'Will the course make my child more reliant on AI or less?',
    content: (
      <div>
        Less, if the framework lands. Pillars 1 and 6 (Foundations and Ethics) teach a child when not to reach for the
        model. Pillars 2 and 3 (Learning and Studying) teach them how to keep their own thinking visible while using
        it. The signal that the framework has landed: your child starts catching the model&rsquo;s mistakes without
        being asked.
      </div>
    ),
  },
  {
    title: 'How do I get on a call with you?',
    content: (
      <div>
        <Link
          className="text-secondary-color underline underline-offset-4"
          href="/courses/students/humain-champs?utm_source=humain_site&utm_medium=internal&utm_campaign=homepage&utm_content=faq#callback"
        >
          Request a callback
        </Link>{' '}
        on the HumainChamps page, WhatsApp{' '}
        <a
          className="text-secondary-color underline underline-offset-4"
          href="https://wa.me/918130023688?text=I%27m%20interested%20in%20Humain%20Learning.%20Coming%20from%20your%20homepage."
          target="_blank"
          rel="noopener noreferrer"
        >
          +91 81300 23688
        </a>
        , or email{' '}
        <a
          className="text-secondary-color underline underline-offset-4"
          href="mailto:hi@humainlearning.ai?subject=Enquiry%20via%20humainlearning.ai"
        >
          hi@humainlearning.ai
        </a>
        .
      </div>
    ),
  },
];

const FAQLists = () => {
  return (
    <section id="faqs">
      <div className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 text-[#011813] md:px-0">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
          {/* Left container */}
          <div className="w-full max-w-xl space-y-6">
            <div>
              <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
              <p className="mt-3 text-base text-[#4E5255]">
                The most common questions about Humain Learning. For deeper parent and school questions, see the{' '}
                <Link className="text-secondary-color underline underline-offset-4" href="/for-parents">
                  for parents
                </Link>{' '}
                and{' '}
                <Link className="text-secondary-color underline underline-offset-4" href="/for-schools">
                  for schools
                </Link>{' '}
                pages.
              </p>
            </div>
          </div>
          {/* right container */}
          <div className="w-full max-w-xl">
            <div
              className="h-full space-y-3 rounded-2xl border border-[#E0E0E0] p-4"
              style={{
                background:
                  'radial-gradient(circle at top right ,rgba(250, 210, 178, 1) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <Accordion
                items={ENTITY_FAQ}
                className="space-y-4"
                isCustomTabColor
                openedTabColor="bg-transparent"
                closedTabColor="bg-transparent"
                sideIndicatiorClassName="bg-[#E9A772] w-1 h-8 top-4 bottom-3"
                showArrows
                showDivider
                dividerClassName="bg-[#AAC191]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQLists;
