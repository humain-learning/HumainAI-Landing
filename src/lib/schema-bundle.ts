/**
 * JSON-LD schema bundle for humainlearning.ai.
 *
 * Source: workspaces/humainlearning/w1/structural-deploy-bundle/schema-bundle.json
 *
 * Entities exported here:
 *   - organizationSchema     — used in root layout (every page)
 *   - websiteSchema          — used in root layout (every page)
 *   - educationalOrganizationSchema — used on homepage
 *   - speakableSchema        — used on homepage
 *
 * NOT included yet (deferred to W4 when /team pages ship):
 *   - person_manit_jain, person_smriti_jain, person_tapaswini_sahu,
 *     person_rambabu_kondru, person_ankur_dahiya
 *   Their @id values reference /team/[founder] URLs that 404 today;
 *   shipping them now would create broken entity references.
 *
 * TBD fields (per W1-FOU-01 founder inputs batch, EOD Mon May 18):
 *   - organization.parentOrganization.url (Eduxa Consulting canonical URL)
 *   - organization.sameAs[2] (Twitter/X handle)
 *   - educationalOrganization.hasCredential.url (IIT Kharagpur cert URL)
 * Omitted fields are valid per Schema.org — they'll be populated in
 * a follow-up commit once the founder inputs land.
 */

type JsonLd = Record<string, unknown>;

export const organizationSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.humainlearning.ai/#organization',
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
    '16-hour AI literacy course for Indian students (age 13+) and teachers, organised across three levels (L1/L2/L3) and a 6-module framework. Two sub-brands: HumainChamps (students) and HumainTeacher (teachers).',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Eduxa Consulting',
  },
  sameAs: [
    'https://www.linkedin.com/company/humain-learning-ai',
    'https://www.instagram.com/humainlearning.ai',
  ],
  founder: [
    { '@id': 'https://www.humainlearning.ai/team/manit-jain#person' },
    { '@id': 'https://www.humainlearning.ai/team/smriti-jain#person' },
  ],
  employee: [
    { '@id': 'https://www.humainlearning.ai/team/tapaswini-sahu#person' },
    { '@id': 'https://www.humainlearning.ai/team/rambabu-kondru#person' },
    { '@id': 'https://www.humainlearning.ai/team/ankur-dahiya#person' },
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
  '@id': 'https://www.humainlearning.ai/#website',
  url: 'https://www.humainlearning.ai/',
  name: 'Humain Learning',
  description: 'Humain Learning — AI literacy for Indian students and teachers.',
  publisher: { '@id': 'https://www.humainlearning.ai/#organization' },
  inLanguage: ['en-IN', 'hi-IN'],
};

export const educationalOrganizationSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://www.humainlearning.ai/#educational-organization',
  name: 'Humain Learning',
  url: 'https://www.humainlearning.ai/',
  description:
    'Provider of AI literacy education for Indian students aged 13+ and for school teachers. Curriculum aligned to NEP 2020, NCF 2023, and CBSE Skill Subject manual (Class 8/9/11 AI).',
  founder: [
    { '@id': 'https://www.humainlearning.ai/team/manit-jain#person' },
    { '@id': 'https://www.humainlearning.ai/team/smriti-jain#person' },
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
};

export const speakableSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.speakable-hero', '.speakable-purpose', '.speakable-tldr'],
  xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
};
