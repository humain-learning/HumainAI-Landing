import type { Metadata } from 'next';
import Link from 'next/link';
import PrimaryButton from 'ui/PrimaryButton';
import SecondaryButton from 'ui/SecondaryButton';
import Accordion from 'ui/Accordion';

export const metadata: Metadata = {
  title: 'CBSE AI Curriculum: Partnership Model for Indian Schools',
  description:
    'Three partnership models for AI curriculum in CBSE, ICSE, IB, and state-board schools. NEP and NCF 2023 aligned. Book a 15-minute school demo.',
  alternates: { canonical: '/for-schools' },
  openGraph: {
    title: 'CBSE AI Curriculum: Partnership Model for Indian Schools',
    description:
      'For school heads evaluating how to bring structured AI literacy into CBSE, ICSE, IB, and state-board K-12. Three partnership models + 3-step rollout.',
    url: 'https://www.humainlearning.ai/for-schools',
    siteName: 'Humain Learning',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: '/og/for-schools-1200x630.webp',
        width: 1200,
        height: 630,
        alt: 'Humain Learning, CBSE AI curriculum partnership model for Indian schools.',
        type: 'image/webp',
      },
    ],
  },
};

const HERO_CTA =
  '/courses/educators/humain-educators?utm_source=humain_site&utm_medium=internal&utm_campaign=for_schools&utm_content=hero#school-demo';
const PRICING_CTA =
  '/courses/educators/humain-educators?utm_source=humain_site&utm_medium=internal&utm_campaign=for_schools&utm_content=pricing_section#school-demo';
const FOOTER_CTA =
  '/courses/educators/humain-educators?utm_source=humain_site&utm_medium=internal&utm_campaign=for_schools&utm_content=section_11#school-demo';
const COURSE_DIRECT_HERO =
  '/courses/educators/humain-educators?utm_source=humain_site&utm_medium=internal&utm_campaign=for_schools&utm_content=hero_secondary';
const COURSE_DIRECT_FOOTER =
  '/courses/educators/humain-educators?utm_source=humain_site&utm_medium=internal&utm_campaign=for_schools&utm_content=footer_secondary';
const WHATSAPP =
  'https://wa.me/918130023688?text=I%27m%20an%20Indian%20school%20leader%20evaluating%20AI%20curriculum%20partners.%20Coming%20from%20your%20schools%20page.';
const EMAIL = 'mailto:hi@humainlearning.ai?subject=School%20enquiry%20via%20%2Ffor-schools';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.humainlearning.ai/' },
    { '@type': 'ListItem', position: 2, name: 'For Schools', item: 'https://www.humainlearning.ai/for-schools' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.humainlearning.ai/for-schools/#service',
  serviceType: 'AI Literacy Curriculum Partnership',
  provider: { '@id': 'https://www.humainlearning.ai/#organization' },
  areaServed: 'India',
  offers: [
    {
      '@type': 'Offer',
      name: 'Full curriculum partnership (Model A)',
      availability: 'https://schema.org/InStock',
      category: 'school-partnership',
    },
    {
      '@type': 'Offer',
      name: 'Supplementary modules (Model B)',
      availability: 'https://schema.org/InStock',
      category: 'school-partnership',
    },
    {
      '@type': 'Offer',
      name: 'HumainEducators (Model C, teacher-training-only)',
      price: '8850',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      category: 'teacher-training',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.humainlearning.ai/for-schools#article',
  headline:
    'CBSE AI curriculum: a partnership model for Indian schools (with ICSE, IB, and state-board applicability)',
  description:
    'For school heads evaluating how to deliver an AI literacy curriculum as a structured partnership: three models, a 3-step rollout that fits inside one term, and five questions to ask any AI curriculum partner before signing.',
  inLanguage: 'en-IN',
  datePublished: '2026-05-18T00:00:00+05:30',
  dateModified: '2026-05-18T00:00:00+05:30',
  author: { '@id': 'https://www.humainlearning.ai/#organization' },
  publisher: { '@id': 'https://www.humainlearning.ai/#organization' },
  mainEntityOfPage: 'https://www.humainlearning.ai/for-schools',
  citation: [
    { '@type': 'CreativeWork', name: 'CBSE Skill Education Curriculum (AI as Class IX Skill Subject)', url: 'https://cbseacademic.nic.in/skill-education.html' },
    { '@type': 'CreativeWork', name: 'National Education Policy 2020', url: 'https://www.education.gov.in/nep/about-nep' },
    { '@type': 'CreativeWork', name: 'National Curriculum Framework for School Education 2023', url: 'https://ncert.nic.in/pdf/NCFSE-2023-August_2023.pdf' },
    { '@type': 'CreativeWork', name: 'UNESCO Artificial Intelligence and emerging technologies', url: 'https://www.unesco.org/en/artificial-intelligence' },
    { '@type': 'CreativeWork', name: 'OECD Future of Education and Skills 2030', url: 'https://www.oecd.org/education/2030-project/' },
    { '@type': 'CreativeWork', name: 'European Commission Digital Education Action Plan 2021-2027', url: 'https://education.ec.europa.eu/focus-topics/digital-education/action-plan' },
    { '@type': 'Legislation', name: 'Digital Personal Data Protection Act 2023', url: 'https://www.meity.gov.in/content/digital-personal-data-protection-act-2023' },
  ],
};

const MODELS = [
  {
    code: 'A',
    title: 'Full curriculum partnership',
    body:
      "HumainChamps runs as a cohort programme inside the school. Sixteen hours of live instruction over eight weeks, slotted into the timetable on the day the school chooses. Senior Humain instructors deliver; school teachers co-observe each session. Pre- and post-cohort assessments map to the six-pillar Humain framework, and the curriculum is aligned to the school's board (CBSE, ICSE, IB, or state).",
  },
  {
    code: 'B',
    title: 'Supplementary modules',
    body:
      "The school's existing IT team handles foundational digital-systems work. Humain adds four to eight hours on the layers most IT teachers are not equipped to deliver: ethics, agents and automation, and creating with AI. Sessions slot into the existing computer-lab period, and senior teachers co-observe.",
  },
  {
    code: 'C',
    title: 'Teacher-training-only',
    body:
      "The school's teachers go through HumainEducators (₹8,850 per teacher) and then run the AI literacy curriculum themselves, using the Humain framework, lesson templates, and assessment rubrics. An institutional discount applies at six-plus teachers, and a quarterly review runs in year one.",
  },
];

const PILLARS_NCF = [
  { pillar: 'AI Foundations', learns: 'How an AI model is trained, where it fails, what counts as training data.', ncf: 'Middle and secondary: critical understanding of digital systems.' },
  { pillar: 'Learning with AI', learns: 'AI as a thinking partner that deepens (not replaces) subject understanding.', ncf: 'NCF pedagogy: inquiry-based learning.' },
  { pillar: 'Studying with AI', learns: 'Board-aligned quiz banks, retrieval-practice feedback, college-readiness preparation.', ncf: 'NCF assessment plus secondary academic outcomes.' },
  { pillar: 'Creating with AI', learns: 'Human-first creative process with explicit disclosure of AI-assisted work.', ncf: 'NCF art education and languages.' },
  { pillar: 'Agents and Automation', learns: 'Personal study agents, multi-step workflow design, automation judgment.', ncf: 'NCF vocational plus computational thinking.' },
  { pillar: 'Ethics, Safety and Responsibility', learns: 'Bias, privacy (DPDP framing), misinformation, deepfakes, disclosure.', ncf: 'NCF cross-curricular: digital citizenship.' },
];

const ROLLOUT_STEPS = [
  {
    n: 1,
    title: 'Discovery and design (Week 0 to Week 2)',
    body: "Ninety-minute discovery call with the school's academic team. A one-page rollout plan returned within seven working days. No commitment is required at this stage; the plan is what the school takes to its trust board.",
  },
  {
    n: 2,
    title: 'Cohort delivery (Week 3 to Week 10)',
    body: 'Sixteen hours of live HumainChamps instruction (Model A) or four to eight hours of supplementary modules (Model B). Session recording, teacher co-observation, and weekly parent notes are part of the standard cohort delivery. The school sets the cadence; Humain delivers against it.',
  },
  {
    n: 3,
    title: 'Assessment and capability transfer (Week 11 to Week 12)',
    body: "Post-cohort assessment mapped to the six-pillar framework. Individual student results plus a cohort-level summary suitable for the board's annual academic review. By the end of Step 3, the school's senior teachers have observed enough live sessions to shift toward Model C in the next term if they choose.",
  },
];

const DUE_DILIGENCE = [
  {
    q: 'Who actually teaches the live sessions?',
    good: "Named instructors with credentials, plus a recorded sample. Be wary of 'AI instructor' sessions that turn out to be a slide deck.",
    humain:
      'Rashmi Bhaskaran (twenty-plus years in education, electrical engineering background); Manika Jolly (Google Certified Educator, AI-integrated teaching); Ami Bhansali (Scratch and STEAM teaching background). Recorded sample available on the discovery call.',
  },
  {
    q: 'How is bias and the DPDP Act 2023 handled in the curriculum?',
    good: "Specific consent flows and data rules, not 'we cover ethics'.",
    humain:
      "Module 6 (Ethics, Safety and Responsibility) covers bias and privacy as classroom content. The partnership memo template proposes DPDP-aligned consent forms and an approved-tools list as a template the school operationalises (per the What's included section, not Humain's own operating evidence).",
  },
  {
    q: 'What happens to our teachers\' role?',
    good: "The partner builds your team's capability, rather than your school's dependency on theirs.",
    humain:
      'Models A and B include teacher co-observation; Model C is teacher-led from year one. Capability transfer is the design goal: term-by-term renewal, not multi-year lock-in.',
  },
  {
    q: 'What does the assessment look like?',
    good: 'A sample report; attendance is not assessment.',
    humain:
      "Pre- and post-cohort assessment mapped to the six-pillar framework; individual student results plus a cohort-level summary for the board's annual academic review.",
  },
  {
    q: 'What are the year-two and year-three numbers?',
    good: 'A capability-transfer pathway, not a lock-in.',
    humain:
      'Schools typically move from Model A or B in year one to Model C in years two and three. Per-student cost in Model C is lower than year one.',
  },
];

const FAQS = [
  {
    q: 'Does this work for ICSE and IB schools, or just CBSE?',
    a: "The framework is board-neutral; the six pillars and the rollout work the same way under any board. CBSE alignment is the most concrete because of the Class IX Skill Subject; ICSE, IB, and state-board adaptation is tailored at the discovery call to the board's own assessment shape.",
  },
  {
    q: 'Do you handle parent communication, or does the school?',
    a: 'Either. By default the weekly parent note is co-branded and shipped on the school\'s behalf (pending operations confirmation). Schools that prefer to own parent communication entirely can take the template and run it themselves; the cohort still receives the same coverage at home.',
  },
  {
    q: 'What about senior school (Class 11-12) where time pressure is highest?',
    a: 'Model B (supplementary modules) is designed for senior school. Four to eight hours layered into the existing computer-lab period covers the ethics, agents, and creating-with-AI pillars without dislodging board-exam preparation. Model A is harder to slot in Class 11-12 unless the school has built protected time for it.',
  },
  {
    q: 'How do we get our trustees comfortable with student data on AI tools?',
    a: "Our partnership memo template proposes DPDP Act 2023-aligned consent forms, covering per-tool consent, a termly approved-tools list, and rules on student PII. The school operationalises these terms; Humain provides the template, the school provides the evidence. See the What's included section for the full design intent.",
  },
  {
    q: 'What cohort size do you recommend per class?',
    a: "Model A is delivered in sessions of eight to twenty-five students. Below eight, the cohort dynamic stalls; above twenty-five, individual feedback gets thin. For larger sections, the school's senior teacher co-runs the session under Model A, or the cohort is split.",
  },
  {
    q: 'Can we observe a live session before deciding?',
    a: 'Yes, with parent consent for the students in that session. The discovery call is the right place to schedule the observation and align the consent paperwork.',
  },
  {
    q: 'What if our parents are resistant to AI being part of the curriculum?',
    a: "The weekly parent note is the main lever; it shows parents what their child is doing in each session and what to ask at home. The standard shape is to pair the note with one parent town hall in week three, where the school's senior teacher walks the AI literacy aims through with parents directly.",
  },
  {
    q: 'Are there minimum or maximum school sizes you work with?',
    a: 'The smallest cohort we have planned (pending live cohort delivery) is a single twenty-two-student grade in a tier-2 city school; the largest is a multi-branch trust running parallel cohorts across campuses. Both are workable; the discovery call decides which model fits the school\'s scale.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ForSchoolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
            <div className="max-w-3xl space-y-5">
              <h1 className="text-3xl leading-tight font-semibold tracking-[-0.5px] sm:text-4xl md:text-[44px] md:leading-[1.1]">
                CBSE AI curriculum: a partnership model for Indian schools
                <span className="text-secondary-color"> (with ICSE, IB, and state-board applicability)</span>
              </h1>
              <p className="text-lg text-[#00000099] md:text-xl">
                For school heads evaluating how to bring structured AI literacy into your school under NEP 2020, NCF
                2023, and the CBSE Skill Subject for Class IX.
              </p>
              <div className="flex flex-col items-start gap-3 pt-4 sm:flex-row sm:items-center">
                <PrimaryButton text="Book a 15-minute school demo" target={HERO_CTA} />
              </div>
              <p className="text-sm text-[#4E5255]">
                Or{' '}
                <Link
                  className="underline underline-offset-4 hover:text-[#e7a572]"
                  href={COURSE_DIRECT_HERO}
                >
                  view the HumainEducators course &rarr;
                </Link>
              </p>
              <div className="bg-secondary-color/15 border-secondary-color rounded-2xl border px-5 py-4 text-sm text-[#011813] md:text-base">
                If you&rsquo;re searching for the CBSE Class IX AI Skill Subject syllabus itself, the{' '}
                <a
                  className="underline underline-offset-4"
                  href="https://cbseacademic.nic.in/skill-education.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CBSE Skill Education page
                </a>{' '}
                is the source. This page is for school heads evaluating how to deliver an AI literacy curriculum as a
                structured partnership, what the partnership looks like, what it costs, what we will and won&rsquo;t
                do.
              </div>
            </div>
            <div className="flex w-full justify-center md:w-auto">
              <img
                className="h-full w-full max-w-[400px] rounded-2xl object-contain shadow-sm md:max-w-[480px]"
                src="/assets/images/for-schools-hero.webp"
                alt="An Indian school academic-team meeting in a staff-room, with a 3-step rollout (discovery, delivery, assessment) on a whiteboard."
                loading="eager"
                width={1800}
                height={1200}
              />
            </div>
          </div>
        </section>

        {/* Regulatory context */}
        <section className="bg-[#FBFAF6] py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl space-y-5 px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">
              The CBSE AI curriculum regulatory context for Indian schools
            </h2>
            <p className="max-w-3xl text-base text-[#011813] md:text-lg">
              Three policy instruments converge on the same operational question. CBSE offers Artificial Intelligence
              as a Class IX{' '}
              <a
                className="underline underline-offset-4"
                href="https://cbseacademic.nic.in/skill-education.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skill Subject
              </a>
              ; schools that adopt it need teaching capacity, classroom-ready content, and an assessment shape that
              satisfies the board. The{' '}
              <a
                className="underline underline-offset-4"
                href="https://www.education.gov.in/nep/about-nep"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Education Policy 2020
              </a>{' '}
              calls for coding and computational thinking from middle school onward. The{' '}
              <a
                className="underline underline-offset-4"
                href="https://ncert.nic.in/pdf/NCFSE-2023-August_2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Curriculum Framework 2023
              </a>{' '}
              is the implementation framework under NEP and carries stage-wise outcomes that include digital systems
              literacy at the middle and secondary stage.
            </p>
            <p className="max-w-3xl text-base text-[#011813] md:text-lg">
              For ICSE, IB, and state-board schools, the CBSE framework is a reference point rather than a requirement.
              Parent and college-application expectations converge anyway: a Class 12 student in an ICSE or IB school
              applying to Indian or international universities in 2027 will be assessed on the same AI-literate
              baseline as a CBSE graduate.
            </p>
            <p className="max-w-3xl text-base text-[#011813] md:text-lg">
              The operational question that follows from all three is the same: how do we add AI literacy without
              overloading our teachers or breaking the existing timetable? That is what this page answers.
            </p>
          </div>
        </section>

        {/* Three partnership models */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Three partnership models for delivering AI curriculum in Indian schools
          </h2>
          <p className="mt-4 max-w-3xl text-base text-[#011813] md:text-lg">
            Schools start in the model that fits the team capacity and the time the timetable can give. Most schools
            move between models as their own teachers build capability.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {MODELS.map((m) => (
              <article
                key={m.code}
                className="flex flex-col gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-6"
              >
                <p className="text-secondary-color text-sm font-semibold uppercase tracking-wider">Model {m.code}</p>
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="text-sm text-[#011813] md:text-base">{m.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base text-[#011813] md:text-lg">
            Schools typically move from Model A or B in year one to Model C in years two and three as the school&rsquo;s
            own teachers build capability.
          </p>
        </section>

        {/* Framework mapped to NCF */}
        <section className="bg-primary-color/15 py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl space-y-6 px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">
              The 6-pillar Humain AI Literacy Framework, mapped to NCF 2023
            </h2>
            <p className="max-w-3xl text-base text-[#011813] md:text-lg">
              The Humain framework is adapted from the{' '}
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
              . Pillar-by-pillar mapping to NCF 2023 outcomes:
            </p>
            <div className="mt-6 flex justify-center">
              <img
                className="h-auto w-full max-w-[480px]"
                src="/assets/images/framework-six-pillar-wheel.webp"
                alt="The Humain AI Literacy Framework: six-pillar wheel with AI Foundations, Learning with AI, Studying with AI, Creating with AI, Agents and Automation, and Ethics, Safety and Responsibility."
                loading="lazy"
                width={1200}
                height={1200}
              />
            </div>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E6E6E6] bg-white">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm md:text-base">
                <thead className="bg-[#FBFAF6]">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Pillar</th>
                    <th className="px-5 py-4 font-semibold">What students learn</th>
                    <th className="px-5 py-4 font-semibold">Maps to NCF 2023</th>
                  </tr>
                </thead>
                <tbody>
                  {PILLARS_NCF.map((row, i) => (
                    <tr key={row.pillar} className="border-t border-[#E6E6E6] align-top">
                      <td className="px-5 py-4 font-semibold">
                        <span className="text-secondary-color">{i + 1}.</span> {row.pillar}
                      </td>
                      <td className="px-5 py-4">{row.learns}</td>
                      <td className="px-5 py-4">{row.ncf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3-step rollout */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">A 3-step rollout that fits inside one term</h2>
          <p className="mt-4 max-w-3xl text-base text-[#011813] md:text-lg">
            The shape below is the standard rollout. Specific dates, session counts, and academic-team responsibilities
            are aligned with your school at the discovery call.
          </p>
          <div className="mt-8 flex justify-center">
            <img
              className="h-auto w-full max-w-[900px]"
              src="/assets/images/rollout-3-step-timeline.webp"
              alt="3-step rollout timeline: Discovery and design (Week 0 to 2, DESIGN), Cohort delivery (Week 3 to 10, DELIVER), Assessment and capability transfer (Week 11 to 12, TRANSFER)."
              loading="lazy"
              width={1800}
              height={600}
            />
          </div>
          <ol className="mt-10 space-y-5">
            {ROLLOUT_STEPS.map((s) => (
              <li
                key={s.n}
                className="bg-primary-color/10 border-primary-color flex gap-5 rounded-2xl border-l-4 p-5 md:p-6"
              >
                <div className="bg-primary-color flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-semibold text-white">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-semibold md:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#011813] md:text-base">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What's included */}
        <section className="bg-[#FBFAF6] py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl space-y-6 px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">What&rsquo;s included and what&rsquo;s not</h2>
            <p className="max-w-3xl text-base text-[#011813] md:text-lg">
              The standard partnership scope. Edge-case adjustments are agreed at the discovery call.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              <div className="bg-primary-color/15 rounded-2xl p-6">
                <h3 className="text-lg font-semibold">Included</h3>
                <p className="mt-2 text-sm text-[#011813] md:text-base">
                  Live instruction by the senior Humain instructor team; full curriculum documentation, lesson plans,
                  assessment rubrics, and parent communication templates; pre- and post-cohort assessment; consent
                  forms and data-handling guidance designed against the{' '}
                  <a
                    className="underline underline-offset-4"
                    href="https://www.meity.gov.in/content/digital-personal-data-protection-act-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Digital Personal Data Protection Act 2023
                  </a>{' '}
                  framework; a weekly parent note; one academic-team review meeting per term; and access to the
                  partner-school community.
                </p>
              </div>
              <div className="bg-secondary-color/15 rounded-2xl p-6">
                <h3 className="text-lg font-semibold">Not included (add-ons)</h3>
                <p className="mt-2 text-sm text-[#011813] md:text-base">
                  Hardware procurement, long-form school-policy authoring, parent town halls beyond the weekly note,
                  curriculum customisation beyond board alignment.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-semibold">What we don&rsquo;t do</h3>
                <p className="mt-2 text-sm text-[#011813] md:text-base">
                  Replace the school&rsquo;s teachers, sell AI tools to students, or lock the school into a multi-year
                  contract.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who runs Humain Learning */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">Who runs Humain Learning</h2>
          <p className="mt-4 max-w-3xl text-base text-[#011813] md:text-lg">
            Humain Learning is operated by Eduxa Consulting. The same founding team operates the Heritage Group of
            Schools and I Am A Teacher (IAAT); those are the founders&rsquo; other K-12 organisations and the source of
            the operator experience they bring to Humain.
          </p>
          <p className="mt-3 max-w-3xl text-base text-[#011813] md:text-lg">
            The team brings combined experience in school operations (Heritage Group), teacher training (IAAT),
            academic research (Manit and Smriti Jain, M.Ed Harvard; Dr Tapaswini Sahu, PhD JNU plus M.Phil Cambridge),
            and operations management (Rambabu Kondru, PGDM IIM Calcutta).
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5">
            <div className="rounded-2xl bg-[#FBFAF6] p-5 text-center">
              <p className="text-base font-semibold">Manit Jain</p>
              <p className="mt-1 text-xs text-[#4E5255]">Co-founder</p>
            </div>
            {/* Founder cards 2-5 render once W1-EE-01 packets land */}
          </div>
          <p className="mt-4 text-xs text-[#4E5255]">
            The full team appears on the team page when it ships.
          </p>
        </section>

        {/* Pricing */}
        <section className="bg-secondary-color/10 py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl space-y-5 px-6 md:px-0">
            <h2 className="text-3xl font-semibold md:text-4xl">Pricing</h2>
            <p className="max-w-3xl text-base text-[#011813] md:text-lg">
              Institutional pricing is structured by partnership model, grade band, and cohort size; the page publishes
              ranges rather than single numbers.
            </p>
            <ul className="max-w-3xl space-y-3 text-base text-[#011813] md:text-lg">
              <li>
                <strong>Model A</strong> (full curriculum partnership): priced per cohort. Banded range available on
                request.
              </li>
              <li>
                <strong>Model B</strong> (supplementary modules): priced per hour of instruction delivered, minimum
                four hours per term. Banded range available on request.
              </li>
              <li>
                <strong>Model C</strong> (teacher-training-only): HumainEducators is ₹8,850 per teacher (one-time,
                lifetime community access). An institutional rate applies for schools enrolling six-plus teachers.
              </li>
            </ul>
            <div className="pt-2">
              <SecondaryButton text="Request institutional pricing" target={PRICING_CTA} />
            </div>
            <p className="text-xs text-[#4E5255]">Quotes are returned within five working days of the discovery call.</p>
          </div>
        </section>

        {/* 5-question due-diligence */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-0 md:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Five questions to ask any AI curriculum partner before signing
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E6E6E6]">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm md:text-base">
              <thead className="bg-[#FBFAF6]">
                <tr>
                  <th className="px-5 py-4 font-semibold">Question</th>
                  <th className="px-5 py-4 font-semibold">What a good answer looks like</th>
                  <th className="px-5 py-4 font-semibold">Humain&rsquo;s answer</th>
                </tr>
              </thead>
              <tbody>
                {DUE_DILIGENCE.map((row) => (
                  <tr key={row.q} className="border-t border-[#E6E6E6] align-top">
                    <td className="px-5 py-4 font-semibold">{row.q}</td>
                    <td className="px-5 py-4 text-[#4E5255]">{row.good}</td>
                    <td className="px-5 py-4">{row.humain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="bg-[#FBFAF6] py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
              <div className="w-full max-w-xl space-y-3">
                <h2 className="text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
                <p className="text-base text-[#4E5255]">
                  Eight institutional-adoption questions school leaders ask most. Click any question to expand the
                  answer.
                </p>
              </div>
              <div className="w-full max-w-xl">
                <div
                  className="h-full space-y-3 rounded-2xl border border-[#E0E0E0] p-4"
                  style={{
                    background:
                      'radial-gradient(circle at top right ,rgba(170, 193, 145, 0.55) 0%, rgba(255, 255, 255, 1) 100%)',
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
                    sideIndicatiorClassName="bg-[#91AA74] w-1 h-8 top-4 bottom-3"
                    showArrows
                    showDivider
                    dividerClassName="bg-[#E9A772]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book a demo */}
        <section className="py-16 md:py-20" style={{ background: '#333333' }}>
          <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Book a 15-minute school demo</h2>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              The discovery call covers timetable, board, starting grade, and the three partnership models. No
              commitment, no slide deck, no obligation.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <PrimaryButton text="Book a 15-minute school demo" target={FOOTER_CTA} />
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
                view the HumainEducators course &rarr;
              </Link>
            </p>
            <p className="mt-6 text-xs text-white/50">Last reviewed: 18 May 2026.</p>
          </div>
        </section>
      </div>
    </>
  );
}
