import React from 'react';
import Header from '@/components/webinar-landing/Header';
import Hero from '@/components/webinar-landing/Hero';
import TrustBar from '@/components/webinar-landing/TrustBar';
import Problem from '@/components/webinar-landing/Problem';
import Tools from '@/components/webinar-landing/Tools';
import Agenda from '@/components/webinar-landing/Agenda';
import Audience from '@/components/webinar-landing/Audience';
import Parents from '@/components/webinar-landing/Parents';
import CTABand from '@/components/webinar-landing/CTABand';
import FAQ from '@/components/webinar-landing/FAQ';
import FinalCTA from '@/components/webinar-landing/FinalCTA';


export const metadata = {
  title: 'Free AI Masterclass for Students | The 10x Student | Class 8–12 | Humain Learning',
  description: "India's free live AI masterclass for Class 8–12. Your child learns the guided techniques that turn ordinary AI use into 10x study results. CBSE, ICSE, NEP 2020 aligned. Book your child's free slot.",
  keywords: '10x student AI techniques for parents, ICSE, CBSE, NEP 2020 aligned, AI masterclass for students',
  openGraph: {
    title: 'Free AI Masterclass for Students | The 10x Student | Class 8–12',
    description: 'Your child learns the guided AI techniques that turn ordinary study sessions into 10x results. Free for Class 8–12 across India.',
    type: 'website',
  },
};

export default function WebinarStandalonePage() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': 'Free AI Masterclass for Students | The 10x Student',
    'description': 'Your child learns the guided AI techniques that turn ordinary AI use into 10x study results. Interactive live session for Class 8–12 across India.',
    'startDate': '2026-06-20T11:00:00+05:30',
    'endDate': '2026-06-20T12:00:00+05:30',
    'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
    'eventStatus': 'https://schema.org/EventScheduled',
    'location': {
      '@type': 'VirtualLocation',
      'url': 'https://humainlearning.ai/webinar'
    },
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock'
    },
    'organizer': {
      '@type': 'Organization',
      'name': 'Humain Learning',
      'url': 'https://humainlearning.ai'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What will my child actually do in the session?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'It\'s a live, interactive workshop — not a lecture. Your child will submit their own AI prompts in real time, watch how professional techniques transform the results, discover the methods top students use, and compete in a friendly live challenge.'
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen text-[#333333] font-sans antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Tools />
      <Agenda />
      <Audience />
      <Parents />
      <CTABand />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
