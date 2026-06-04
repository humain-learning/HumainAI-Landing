/**
 * JSON-LD schema bundle for humainlearning.ai.
 *
 * Sitewide schemas (injected via root layout on every page):
 *   - organizationSchema  : canonical Organization @id
 *   - websiteSchema       : canonical WebSite @id, references Organization
 *
 * Homepage schema (single @graph injected on /):
 *   - homepageGraphSchema : WebPage (with embedded SpeakableSpecification + breadcrumb ref),
 *                           EducationalOrganization, BreadcrumbList, FAQPage
 *
 * Cross-references via @id rather than nesting so Google + AI engines stitch the
 * entity graph correctly. Person nodes for the team are intentionally NOT shipped
 * yet; /team/<founder> URLs do not exist, so any @id reference would break.
 * Founder + employee arrays use plain Person form with name only until those URLs
 * land (per W2-US-02 / W2 input-required).
 */

type JsonLd = Record<string, unknown>;

const ORG_ID = 'https://www.humainlearning.ai/#organization';
const WEBSITE_ID = 'https://www.humainlearning.ai/#website';
const EDU_ORG_ID = 'https://www.humainlearning.ai/#educational-organization';
const HOMEPAGE_ID = 'https://www.humainlearning.ai/#webpage';
const BREADCRUMB_HOME_ID = 'https://www.humainlearning.ai/#breadcrumb';

export const organizationSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Humain Learning',
  alternateName: ['Humain Learning by Eduxa Consulting', 'HumainLearning'],
  url: 'https://www.humainlearning.ai/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.humainlearning.ai/assets/logo/brain-logo.png',
    width: 512,
    height: 512,
  },
  description:
    '16-hour AI literacy course for Indian students (age 13+) and teachers, organised across three levels (L1/L2/L3) and a 6-module framework. Two sub-brands: HumainChamps (students) and HumainEducators (teachers).',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Eduxa Consulting',
  },
  sameAs: [
    'https://www.linkedin.com/company/humain-learning-ai',
    'https://www.instagram.com/humainlearning.ai/',
    'https://www.youtube.com/@HumainLearning',
    // Facebook handle is recorded in client-facts.yaml with status "unknown";
    // intentionally omitted until verified to avoid broken sameAs entries that
    // damage rather than strengthen the entity graph.
  ],
  // Founder + employee Person nodes use plain-name form until /team/<slug> pages
  // ship (W2-US-02). Switching to @id references when those routes exist requires
  // updating the URLs here in one place.
  founder: [
    { '@type': 'Person', name: 'Manit Jain' },
    { '@type': 'Person', name: 'Smriti Jain' },
  ],
  employee: [
    { '@type': 'Person', name: 'Dr Tapaswini Sahu' },
    { '@type': 'Person', name: 'Rambabu Kondru' },
    { '@type': 'Person', name: 'Ankur Dahiya' },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  knowsAbout: [
    'AI literacy',
    'Artificial intelligence education for K-12',
    'CBSE AI Skill Subject',
    'NCF 2023 curriculum',
    'Teacher professional development',
    'Pedagogy of AI',
  ],
};

export const websiteSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: 'https://www.humainlearning.ai/',
  name: 'Humain Learning',
  description: 'Humain Learning: AI literacy for Indian students and teachers.',
  publisher: { '@id': ORG_ID },
  inLanguage: ['en-IN', 'hi-IN'],
};

// Homepage canonical entity graph. Single @graph block so Google + AI engines
// see one stitched entity tree rather than three disconnected scripts.
// WebPage is the page-level node; Speakable is a property of WebPage (per Rev 5
// schema plan), not a standalone graph node; BreadcrumbList is required on every
// page deeper than root and ships here as a single-item root list.
export const homepageGraphSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': HOMEPAGE_ID,
      url: 'https://www.humainlearning.ai/',
      name: 'Humain Learning: AI Literacy Course for Indian Students',
      description:
        'AI literacy course for Class 8-12 students and teachers in India. Live small-batch cohorts, six modules, with E-Cell at IIT Kharagpur.',
      inLanguage: 'en-IN',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.humainlearning.ai/assets/logo/brain-logo.png',
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.hero-subhead'],
        xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
      },
      breadcrumb: { '@id': BREADCRUMB_HOME_ID },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': EDU_ORG_ID,
      name: 'Humain Learning',
      url: 'https://www.humainlearning.ai/',
      description:
        'Provider of AI literacy education for Indian students aged 13+ and for school teachers. Curriculum aligned to NEP 2020, NCF 2023, and CBSE Skill Subject manual (Class 8/9/11 AI). HumainChamps runs in collaboration with E-Cell at IIT Kharagpur, including an AI Hackathon organised by E-Cell.',
      founder: [
        { '@type': 'Person', name: 'Manit Jain' },
        { '@type': 'Person', name: 'Smriti Jain' },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'E-cell IIT Kharagpur Centre of Excellence accreditation',
        credentialCategory: 'Accreditation',
        recognizedBy: {
          '@type': 'Organization',
          name: 'E-cell IIT Kharagpur',
        },
      },
      knowsAbout: [
        'AI Foundations',
        'Learning with AI',
        'Studying with AI',
        'Creating with AI',
        'Agents and Automation',
        'Ethics, Safety and Responsibility in AI',
      ],
      areaServed: { '@type': 'Country', name: 'India' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': BREADCRUMB_HOME_ID,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.humainlearning.ai/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Humain Learning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Humain Learning is an Indian AI literacy course provider for Class 8-12 students and teachers, operated by Eduxa Consulting. The work runs across two programmes (HumainChamps for students and HumainEducators for teachers) and is built on the six-pillar Humain AI Literacy Framework adapted from UNESCO, OECD, and EU references.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who are the courses for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HumainChamps is for Indian students in Class 8-12 (age 13+). HumainEducators is for working school teachers. School-side institutional partnerships route through the for-schools page. Parents start at for-parents; teachers and direct enrollers can also self-enrol from the HumainEducators course page.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes a paid AI literacy course different from free YouTube and ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Free resources teach what a tool does; a structured course teaches a framework that applies to every new tool that ships next year. The Humain six-pillar framework spans foundations, learning, studying, creating, agents and automation, and ethics and safety; a child who has worked through it can pick up any new AI model and judge it. The for-parents page covers the full free-vs-paid comparison, including completion rates and the honest disqualifier for parents whose child has already finished a self-paced course.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the course make my child more reliant on AI or less?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Less, if the framework lands. Pillars 1 and 6 (Foundations and Ethics) teach a child when not to reach for the model. Pillars 2 and 3 (Learning and Studying) teach them how to keep their own thinking visible while using it. The signal that the framework has landed: your child starts catching the model’s mistakes without being asked.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get on a call with you?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Request a callback on the HumainChamps page, WhatsApp +91 81300 23688, or email hi@humainlearning.ai.',
          },
        },
      ],
    },
  ],
};
