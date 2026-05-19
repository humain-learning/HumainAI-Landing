import type { Metadata } from 'next';
import Link from 'next/link';
import PrimaryButton from 'ui/PrimaryButton';
import Accordion from 'ui/Accordion';

export const metadata: Metadata = {
  title: "AI Courses for Students in India: Parent's Guide",
  description:
    "An Indian parent's guide to AI courses for Class 8-12 students. What HumainChamps teaches, what it costs, what your child walks out with. Free callback.",
  alternates: { canonical: '/for-parents' },
  openGraph: {
    title: "AI Courses for Students in India: A Parent's Guide",
    description:
      'What an AI literacy course should cover at each age, how HumainChamps runs, and what every Level 1 graduate walks out with.',
    url: 'https://www.humainlearning.ai/for-parents',
    siteName: 'Humain Learning',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: '/assets/logo/brain-logo.png',
        width: 1200,
        height: 630,
        alt: 'Humain Learning, parent guide to AI courses for Indian students.',
      },
    ],
  },
};

const HERO_CTA =
  '/courses/students/humain-champs?utm_source=humain_site&utm_medium=internal&utm_campaign=for_parents&utm_content=hero#callback';
const SECTION_CTA =
  '/courses/students/humain-champs?utm_source=humain_site&utm_medium=internal&utm_campaign=for_parents&utm_content=section_10#callback';
const COURSE_LINK =
  '/courses/students/humain-champs?utm_source=humain_site&utm_medium=internal&utm_campaign=for_parents&utm_content=section_6';
const COURSE_DIRECT_HERO =
  '/courses/students/humain-champs?utm_source=humain_site&utm_medium=internal&utm_campaign=for_parents&utm_content=hero_secondary';
const COURSE_DIRECT_FOOTER =
  '/courses/students/humain-champs?utm_source=humain_site&utm_medium=internal&utm_campaign=for_parents&utm_content=footer_secondary';
const WHATSAPP =
  'https://wa.me/918130023688?text=I%27m%20interested%20in%20HumainChamps.%20Coming%20from%20your%20parents%20page.';
const EMAIL = 'mailto:hi@humainlearning.ai?subject=HumainChamps%20enquiry%20via%20%2Ffor-parents';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.humainlearning.ai/' },
    { '@type': 'ListItem', position: 2, name: 'For Parents', item: 'https://www.humainlearning.ai/for-parents' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.humainlearning.ai/for-parents#article',
  headline: "AI courses for students in India: a parent's guide to choosing one",
  description:
    'An Indian parent guide to AI courses for Class 8-12 students. What HumainChamps teaches, what it costs, and what every Level 1 graduate walks out with.',
  inLanguage: 'en-IN',
  datePublished: '2026-05-18T00:00:00+05:30',
  dateModified: '2026-05-18T00:00:00+05:30',
  author: { '@id': 'https://www.humainlearning.ai/#organization' },
  publisher: { '@id': 'https://www.humainlearning.ai/#organization' },
  mainEntityOfPage: 'https://www.humainlearning.ai/for-parents',
  citation: [
    { '@type': 'CreativeWork', name: 'CBSE Skill Education Curriculum (AI as Class IX Skill Subject)', url: 'https://cbseacademic.nic.in/skill-education.html' },
    { '@type': 'CreativeWork', name: 'National Education Policy 2020', url: 'https://www.education.gov.in/nep/about-nep' },
    { '@type': 'Legislation', name: 'Digital Personal Data Protection Act 2023', url: 'https://www.meity.gov.in/content/digital-personal-data-protection-act-2023' },
    { '@type': 'CreativeWork', name: 'UNESCO Artificial Intelligence and emerging technologies', url: 'https://www.unesco.org/en/artificial-intelligence' },
    { '@type': 'CreativeWork', name: 'OECD Future of Education and Skills 2030', url: 'https://www.oecd.org/education/2030-project/' },
    { '@type': 'CreativeWork', name: 'European Commission Digital Education Action Plan 2021-2027', url: 'https://education.ec.europa.eu/focus-topics/digital-education/action-plan' },
    { '@type': 'ScholarlyArticle', name: 'The MOOC pivot (Reich and Ruiperez-Valiente, Science 2019)', url: 'https://www.science.org/doi/10.1126/science.aav7958' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is 16 hours really enough?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes for Level 1, because the goal is fluency with the framework, not coverage of every tool. Sixteen hours covers the six pillars across eight live sessions; the student then practises in their own week with the tools the cohort has demonstrated. Level 2 and Level 3 extend the same framework into deeper projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the course priced at ₹11,800?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The fee covers sixteen hours of live small-batch instruction (8-12 students per cohort), three named instructors, participation in the E-Cell at IIT Kharagpur partnership (specific certification details confirmed on the discovery call), and a parent companion guide. Comparable live small-batch programmes in Indian metros sit in a similar band; the live, expert-led element is the structural cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'My child already uses ChatGPT every day. How does the course help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Daily ChatGPT use without a framework usually means three patterns: copy-paste homework, single-turn questions, and missed hallucinations. The course retrains the habit. By the end, your child runs multi-turn conversations that surface gaps in their own thinking, and can explain to you why a particular AI answer is wrong.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is this course related to IIT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Humain Learning runs HumainChamps in collaboration with E-Cell at IIT Kharagpur, including the AI Hackathon organised by E-Cell that HumainChamps students participate in. Specific certification details for HumainChamps Level 1 are confirmed on the discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the course make my child more reliant on AI or less?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Less, if the framework lands. Pillars 1 and 6 (Foundations and Ethics) teach a child when not to reach for the model. Pillars 2 and 3 (Learning and Studying) teach them how to keep their own thinking visible while using it. The signal that the framework has landed: your child starts catching the model's mistakes without being asked.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if my child does not enjoy the program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Cancellation and refund terms are listed on the registration page and confirmed on the discovery call before any payment is made.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my child take this with their friends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Tell us during the discovery call if you are enrolling with friends or siblings; we will check current cohort availability together.',
      },
    },
    {
      '@type': 'Question',
      name: 'My child is in Class 12 and short on time. Is it still worth starting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes if the goal is board preparation plus a working study agent inside two months. The 13-17 outcomes in the age-band map are reachable by a focused Class 12 student. The discovery call is the right place to decide whether Level 1 alone is enough for what your child needs, or whether to go straight to Level 2.',
      },
    },
  ],
};

const AGE_BANDS = [
  {
    band: '11-12',
    stage: 'Late primary, early middle school',
    outcomes:
      'Explain in their own words what a chatbot is and is not; identify three things AI got wrong in a single conversation; use AI for ideation before output; recognise "I\'m not sure" as more useful than confident wrong.',
    fit: 'Pre-nurture only. HumainChamps does not enrol 11-12-year-olds. This band is what to read with your child to prepare for enrolment at 13.',
  },
  {
    band: '13-15',
    stage: 'Middle school (Class 8-10)',
    outcomes:
      'Hold a multi-turn conversation with AI that surfaces gaps in their own question; use AI to generate ICSE, CBSE, or state-board practice quizzes; spot a hallucinated source or biased dataset; build a personal study agent tuned to one subject; explain to a sibling or parent why a particular AI answer is wrong.',
    fit: 'Main cohort. HumainChamps Level 1 spans this band.',
  },
  {
    band: '16-17',
    stage: 'Senior school (Class 11-12)',
    outcomes:
      'Research a topic deeply enough to argue with a domain expert; build automation workflows across school and extracurriculars; recognise where AI use needs disclosure (assignments, board prep, college essays); understand the ethics of AI use in entrance exams, internships, and college applications.',
    fit: 'Main and advanced cohorts. HumainChamps Level 2 and Level 3 extend the framework with project-heavy applications.',
  },
];

const PILLARS = [
  { name: 'AI Foundations', body: 'What an AI model is, what it can and cannot do, where its training data came from.', icon: 'ai-foundation.svg' },
  { name: 'Learning with AI', body: 'Using AI as a thinking partner across subjects, not a shortcut around them.', icon: 'ai-learning.svg' },
  { name: 'Studying with AI', body: 'Exam preparation, note-making, retrieval practice, and structured revision.', icon: 'ai-study-book.svg' },
  { name: 'Creating with AI', body: 'Text, image, audio, and video tools used with editorial intent.', icon: 'mind-charge.svg' },
  { name: 'Agents and Automation', body: 'Multi-step AI workflows and the judgment calls they require.', icon: 'agents-automation.svg' },
  { name: 'Ethics, Safety and Responsibility', body: 'Privacy, hallucination, disclosure, fair use, and attribution.', icon: 'globe-hands.svg' },
];

const CONVERSATIONS = [
  {
    title: 'What goes into the chatbot does not stay private.',
    line:
      '"Anything you type into a free AI tool can be used to train it. What\'s the one thing you\'d never want shared?"',
    listen:
      'Whether your teen has thought about personal information at all. The Digital Personal Data Protection Act 2023 sets the regulatory frame; the house rule is simpler: no names, addresses, photos of classmates, or medical questions on free tools.',
  },
  {
    title: 'A confident wrong answer is the most dangerous kind.',
    line: '"What did the AI get wrong this week?"',
    listen:
      'A specific answer means your child is thinking alongside the model. "Nothing" usually means they are not catching mistakes, not that the model made none.',
  },
  {
    title: 'Originality has not disappeared; the disclosure rules have changed.',
    line: '"If a teacher asked, could you defend this answer line by line?"',
    listen:
      'Whether your teen can explain the reasoning end to end. If not, the answer is not theirs yet.',
  },
  {
    title: 'AI is a tool; the relationship is yours to set.',
    line: '"Are you using AI for things you\'re stuck on, or for things you\'re already good at?"',
    listen: 'Which pattern your teen falls into. The first builds skill; the second atrophies it.',
  },
];

const FAQS = [
  {
    q: 'Is 16 hours really enough?',
    a: 'Yes for Level 1, because the goal is fluency with the framework, not coverage of every tool. Sixteen hours covers the six pillars across eight live sessions; the student then practises in their own week with the tools the cohort has demonstrated. Level 2 and Level 3 extend the same framework into deeper projects.',
  },
  {
    q: 'Why is the course priced at ₹11,800?',
    a: 'The fee covers sixteen hours of live small-batch instruction (8-12 students per cohort), three named instructors, participation in the E-Cell at IIT Kharagpur partnership (specific certification details confirmed on the discovery call), and a parent companion guide. Comparable live small-batch programmes in Indian metros sit in a similar band; the live, expert-led element is the structural cost.',
  },
  {
    q: 'My child already uses ChatGPT every day. How does the course help?',
    a: 'Daily ChatGPT use without a framework usually means three patterns: copy-paste homework, single-turn questions, and missed hallucinations. The course retrains the habit. By the end, your child runs multi-turn conversations that surface gaps in their own thinking, and can explain to you why a particular AI answer is wrong.',
  },
  {
    q: 'How is this course related to IIT?',
    a: 'Humain Learning runs HumainChamps in collaboration with E-Cell at IIT Kharagpur, including the AI Hackathon organised by E-Cell that HumainChamps students participate in. Specific certification details for HumainChamps Level 1 are confirmed on the discovery call.',
  },
  {
    q: 'Will the course make my child more reliant on AI or less?',
    a: "Less, if the framework lands. Pillars 1 and 6 (Foundations and Ethics) teach a child when not to reach for the model. Pillars 2 and 3 (Learning and Studying) teach them how to keep their own thinking visible while using it. The signal that the framework has landed: your child starts catching the model's mistakes without being asked.",
  },
  {
    q: 'What if my child does not enjoy the program?',
    a: 'Cancellation and refund terms are listed on the registration page and confirmed on the discovery call before any payment is made.',
  },
  {
    q: 'Can my child take this with their friends?',
    a: 'Tell us during the discovery call if you are enrolling with friends or siblings; we will check current cohort availability together.',
  },
  {
    q: 'My child is in Class 12 and short on time. Is it still worth starting?',
    a: 'Yes if the goal is board preparation plus a working study agent inside two months. The 13-17 outcomes in the age-band map are reachable by a focused Class 12 student. The discovery call is the right place to decide whether Level 1 alone is enough for what your child needs, or whether to go straight to Level 2.',
  },
];

export default function ForParentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative">
        {/* Background brand fades, matches homepage register */}
        <img
          className="pointer-events-none absolute top-0 right-0 -z-10 max-w-[420px] md:max-w-[600px]"
          src="/assets/images/top-right-fade.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="pointer-events-none absolute top-[40vh] left-0 -z-10 max-w-[360px] md:max-w-[520px]"
          src="/assets/images/central-left-fade.png"
          alt=""
          aria-hidden="true"
        />

        {/* Hero */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-24">
          <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-12">
            <div className="max-w-2xl space-y-5">
              <h1 className="text-3xl leading-tight font-semibold tracking-[-0.5px] sm:text-4xl md:text-5xl md:leading-[1.1]">
                AI courses for students in India: a parent&rsquo;s guide to choosing one
              </h1>
              <p className="text-lg text-[#00000099] md:text-xl">
                Parents are catching up to AI at chat-app speed, schools at policy speed. This page is the bridge. It
                covers what an AI literacy course for Indian students should actually teach, what HumainChamps does,
                and what every Class 8-12 graduate walks out with.
              </p>
              <div className="flex flex-col items-start gap-3 pt-4 sm:flex-row sm:items-center">
                <PrimaryButton text="Request a callback" target={HERO_CTA} />
              </div>
              <p className="text-sm text-[#4E5255]">
                Or{' '}
                <Link
                  className="underline underline-offset-4 hover:text-[#e7a572]"
                  href={COURSE_DIRECT_HERO}
                >
                  view the HumainChamps course &rarr;
                </Link>
              </p>
              <div className="bg-primary-color/20 border-primary-color rounded-2xl border px-5 py-4 text-sm text-[#011813] md:text-base">
                <strong>HumainChamps is for students aged 13 and up (Class 8-12).</strong>{' '}
                For parents of younger children, the age-banded section below explains what to prepare for.
              </div>
            </div>
            <div className="flex w-full justify-center md:w-auto">
              <img
                className="h-full w-full max-w-[360px] object-contain md:max-w-[420px]"
                src="/assets/images/parents-img.png"
                alt="A parent and their teenage child sitting together at a laptop, working through an AI tool."
              />
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="bg-[#FBFAF6] py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl space-y-6 px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Why AI courses for Indian students are now a parent decision
            </h2>
            <p className="max-w-3xl text-base text-[#011813] md:text-lg">
              CBSE has added Artificial Intelligence as an optional Skill Subject for Class IX (see the{' '}
              <a
                className="text-secondary-color underline underline-offset-4"
                href="https://cbseacademic.nic.in/skill-education.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CBSE Skill Education Curriculum
              </a>
              ), and the{' '}
              <a
                className="text-secondary-color underline underline-offset-4"
                href="https://www.education.gov.in/nep/about-nep"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Education Policy 2020
              </a>{' '}
              calls for AI and computational thinking from middle school onward. Policy intent is there.
              Classroom reality is uneven: most Indian schools are still working out how to teach the subject, who
              teaches it, and what tools the school will allow. The home is where the gap closes.
            </p>
            <div className="max-w-3xl space-y-3 rounded-2xl bg-white p-6 md:p-8">
              <h3 className="text-xl font-semibold">What an AI-literate Class 8-12 student can do</h3>
              <ol className="list-inside list-decimal space-y-2 text-base text-[#011813]">
                <li>
                  <strong>Recognise</strong> what a chatbot is and is not, and where its training data came from.
                </li>
                <li>
                  <strong>Push back</strong> on a confident wrong answer instead of repeating it.
                </li>
                <li>
                  <strong>Tell the difference</strong> between a real source and an invented citation.
                </li>
                <li>
                  <strong>Use</strong> AI to extend their own thinking, not to replace it.
                </li>
                <li>
                  <strong>Understand</strong> that what they type into a free AI tool can be used to train it.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Age-band map */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <h2 className="max-w-4xl text-3xl font-semibold md:text-4xl">
            The Humain age-band AI readiness map: what an AI course for students should cover at each age
          </h2>
          <p className="mt-4 max-w-3xl text-base text-[#011813] md:text-lg">
            HumainChamps enrollment is for students aged 13 and up (Class 8-12). The age bands below describe what AI
            literacy should look like at each developmental stage, including what to prepare for if your child is
            younger.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E6E6E6]">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm md:text-base">
              <thead className="bg-[#FBFAF6]">
                <tr>
                  <th className="px-5 py-4 font-semibold">Age band</th>
                  <th className="px-5 py-4 font-semibold">Stage</th>
                  <th className="px-5 py-4 font-semibold">What a child should be able to demonstrate</th>
                  <th className="px-5 py-4 font-semibold">HumainChamps fit</th>
                </tr>
              </thead>
              <tbody>
                {AGE_BANDS.map((row) => (
                  <tr key={row.band} className="border-t border-[#E6E6E6] align-top">
                    <td className="px-5 py-4 font-semibold">{row.band}</td>
                    <td className="px-5 py-4">{row.stage}</td>
                    <td className="px-5 py-4">{row.outcomes}</td>
                    <td className="px-5 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Six-pillar framework */}
        <section className="bg-secondary-color/10 py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">The Humain AI Literacy Framework: six pillars</h2>
            <p className="mt-4 max-w-3xl text-base text-[#011813] md:text-lg">
              The Humain framework breaks AI literacy into six pillars. Each pillar is one of the things an AI course
              for school students should teach explicitly, rather than leaving for the student to triangulate from
              YouTube. The pillars are adapted from the{' '}
              <a
                className="underline underline-offset-4"
                href="https://www.unesco.org/en/artificial-intelligence"
                target="_blank"
                rel="noopener noreferrer"
              >
                UNESCO AI competency frameworks
              </a>
              , the{' '}
              <a
                className="underline underline-offset-4"
                href="https://www.oecd.org/education/2030-project/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OECD Future of Education and Skills 2030
              </a>{' '}
              project, and the{' '}
              <a
                className="underline underline-offset-4"
                href="https://education.ec.europa.eu/focus-topics/digital-education/action-plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                EU Digital Education Action Plan
              </a>
              .
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              {PILLARS.map((p, i) => (
                <div key={p.name} className="flex gap-4 rounded-2xl border border-[#E6E6E6] bg-white p-5 md:p-6">
                  <div className="bg-primary-color/15 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
                    <img className="h-8 w-8" src={`/assets/icons/${p.icon}`} alt="" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-secondary-color text-sm font-semibold">Pillar {i + 1}</p>
                    <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-[#011813] md:text-base">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversation script */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            The parent&rsquo;s AI safety conversation script: four conversations to have at home
          </h2>
          <p className="mt-4 max-w-3xl text-base text-[#011813] md:text-lg">
            The conversations below are calibrated to the 13-17 age band. Each one carries a parent line you can use
            verbatim, plus what to listen for in the answer.
          </p>
          <ol className="mt-8 space-y-5">
            {CONVERSATIONS.map((c, i) => (
              <li
                key={c.title}
                className="bg-primary-color/15 border-primary-color rounded-2xl border-l-4 p-5 md:p-6"
              >
                <h3 className="text-lg font-semibold md:text-xl">
                  {i + 1}. {c.title}
                </h3>
                <p className="mt-3 text-base italic text-[#011813]">
                  <strong className="not-italic">Parent line:</strong> {c.line}
                </p>
                <p className="mt-2 text-sm text-[#011813] md:text-base">
                  <strong>What to listen for:</strong> {c.listen}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* How HumainChamps runs */}
        <section className="bg-[#FBFAF6] py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">How HumainChamps actually runs</h2>
            <ul className="mt-6 max-w-3xl space-y-3 text-base text-[#011813] md:text-lg">
              <li><strong>Cohort size:</strong> 8 to 12 students per cohort.</li>
              <li><strong>Format:</strong> live, on camera, Saturdays. Eight sessions of two hours each, sixteen hours of instruction in total.</li>
              <li><strong>Tools covered:</strong> 15+ AI tools across ChatGPT, Gemini, Perplexity, Claude, NotebookLM, n8n, Runway, Krea, and Suno.</li>
              <li><strong>Cost:</strong> ₹11,800 per student for Level 1, one-time fee.</li>
              <li>
                <strong>Partnership:</strong> HumainChamps runs in collaboration with E-Cell at IIT Kharagpur, including an AI Hackathon organised by E-Cell that HumainChamps students participate in. Specific certification details (issuer, certificate name, public verification URL) are confirmed on the discovery call.
              </li>
              <li><strong>Lead instructors:</strong> Rashmi Bhaskaran, Manika Jolly, and Ami Bhansali.</li>
            </ul>
            <p className="mt-6 max-w-3xl text-base text-[#011813] md:text-lg">
              Full curriculum, schedule, and registration are on the{' '}
              <Link
                className="text-secondary-color underline underline-offset-4"
                href={COURSE_LINK}
              >
                HumainChamps course page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Live vs free */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            What you get from a live AI course that you don&rsquo;t get from free
          </h2>
          <p className="mt-4 max-w-3xl text-base text-[#011813] md:text-lg">
            The dominant pattern with free online learning is sampling, not finishing. Parents who default to free
            YouTube plus ad-hoc ChatGPT for their teen&rsquo;s AI literacy report the same thing: the child gets
            exposed, but does not form a sustained habit.{' '}
            <a
              className="underline underline-offset-4"
              href="https://www.science.org/doi/10.1126/science.aav7958"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research on massive open online courses
            </a>{' '}
            puts median completion rates in the low single digits; free YouTube plus ChatGPT is structurally similar.
            No commitment, no feedback, no completion.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            <div className="rounded-2xl border border-[#E6E6E6] bg-white p-5">
              <h3 className="text-lg font-semibold">Free YouTube plus ad-hoc ChatGPT</h3>
              <p className="mt-2 text-sm text-[#011813] md:text-base">
                No structure, no expert, no accountability past lesson one or two.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E6E6E6] bg-white p-5">
              <h3 className="text-lg font-semibold">Self-paced online courses</h3>
              <p className="mt-2 text-sm text-[#011813] md:text-base">
                Better structure than YouTube. Still no live feedback. Mostly pitched at adult or US engineering
                audiences, not Indian 13-17-year-olds preparing for ICSE, CBSE, or a state board.
              </p>
            </div>
            <div className="bg-primary-color/20 border-primary-color rounded-2xl border p-5">
              <h3 className="text-lg font-semibold">Live small-batch instruction</h3>
              <p className="mt-2 text-sm text-[#011813] md:text-base">
                What HumainChamps does. The sixteen hours of live instruction is what turns sampling into a finished
                course.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-base text-[#011813] md:text-lg">
            <strong>Honest disqualifier:</strong> if your child has independently completed a 40-hour self-paced AI
            course in the last twelve months, structured live instruction is probably not the right fit. We will say so
            on the discovery call.
          </p>
        </section>

        {/* Walkout */}
        <section className="bg-secondary-color/10 py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">
              What every HumainChamps Level 1 graduate walks out with
            </h2>
            <ol className="mt-6 max-w-3xl list-inside list-decimal space-y-3 text-base text-[#011813] md:text-lg">
              <li>
                <strong>A working personal study agent</strong>, a custom GPT trained on the student&rsquo;s own
                syllabus.
              </li>
              <li>
                <strong>The six-pillar framework</strong> applicable to any new AI tool that lands next year.
              </li>
              <li>
                <strong>A finished creative project</strong> with explicit disclosure of which parts were AI-assisted.
              </li>
              <li>
                <strong>Participation in the E-Cell at IIT Kharagpur partnership</strong>, including the AI Hackathon
                organised by E-Cell that HumainChamps students join; any recognition details (issuer, name, public
                verification URL) are confirmed on the discovery call.
              </li>
              <li>
                <strong>A parent companion guide</strong> so the conversations from the script above keep happening at
                home after the course ends.
              </li>
            </ol>
            <div className="mt-8 max-w-3xl rounded-2xl bg-white p-6 md:p-8">
              <p className="text-secondary-color text-sm font-semibold uppercase tracking-wider">Worked example</p>
              <p className="mt-2 text-base text-[#011813] md:text-lg">
                In a recent cohort, one Class 9 student spent ninety minutes of live class time building a custom GPT
                trained on her ICSE syllabus, tutored by one of our instructors. By the end of the session she had a
                midnight tutor that asked her clarifying questions back when her own prompts were unclear.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
            <div className="w-full max-w-xl space-y-3">
              <h2 className="text-3xl font-semibold md:text-4xl">Parent FAQ</h2>
              <p className="text-base text-[#4E5255]">
                Eight of the most common parent questions. Click any question to expand the answer.
              </p>
            </div>
            <div className="w-full max-w-xl">
              <div
                className="h-full space-y-3 rounded-2xl border border-[#E0E0E0] p-4"
                style={{
                  background:
                    'radial-gradient(circle at top right ,rgba(250, 210, 178, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Accordion
                  items={FAQS.map((f) => ({
                    title: f.q,
                    content: <p className="whitespace-pre-line text-base text-[#011813]">{f.a}</p>,
                  }))}
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
        </section>

        {/* Reserve a seat */}
        <section className="bg-charcoal py-16 text-white md:py-20" style={{ background: '#333333' }}>
          <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Reserve a seat in the next cohort</h2>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              The discovery call covers your child&rsquo;s grade, board, current AI habits, and the right level to
              start at. No commitment, no slide deck.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <PrimaryButton text="Request a callback" target={SECTION_CTA} />
              <a
                className="text-white/80 underline underline-offset-4 hover:text-white"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp +91 81300 23688
              </a>
              <a className="text-white/80 underline underline-offset-4 hover:text-white" href={EMAIL}>
                hi@humainlearning.ai
              </a>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Or{' '}
              <Link
                className="underline underline-offset-4 hover:text-white"
                href={COURSE_DIRECT_FOOTER}
              >
                view the HumainChamps course &rarr;
              </Link>
            </p>
            <p className="mt-6 text-xs text-white/50">Last reviewed: 18 May 2026.</p>
          </div>
        </section>
      </div>
    </>
  );
}
