import React from 'react';
import Header from '@/components/webinar-landing/Header';
import Hero from '@/components/webinar-landing/Hero';
import GoldenRule from '@/components/webinar-landing/GoldenRule';
import TrustBar from '@/components/webinar-landing/TrustBar';
import Problem from '@/components/webinar-landing/Problem';
import BatchPicker from '@/components/webinar-landing/BatchPicker';
import Tools from '@/components/webinar-landing/Tools';
import Agenda from '@/components/webinar-landing/Agenda';
import Audience from '@/components/webinar-landing/Audience';
import Parents from '@/components/webinar-landing/Parents';
import CTABand from '@/components/webinar-landing/CTABand';
import FAQ from '@/components/webinar-landing/FAQ';
import FinalCTA from '@/components/webinar-landing/FinalCTA';
import TakeHome from '@/components/webinar-landing/TakeHome';
import Testimonials from '@/components/webinar-landing/Testimonials';
import InstructorsCollage from '@/components/hc-landing/Instructors/InstructorsCollage';
import { faqs } from '@/components/webinar-landing/data/faq';


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
    '@type': 'EventSeries',
    'name': 'Free AI Masterclass for Students | The 10x Student',
    'description': 'Your child learns the guided AI techniques that turn ordinary AI use into 10x study results. Interactive live, instructor-led sessions for Class 8–12 across India.',
    'startDate': '2026-07-12T11:00:00+05:30',
    'endDate': '2026-07-15T19:00:00+05:30',
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
    },
    'subEvent': [
      {
        '@type': 'Event',
        'name': 'One Power Session',
        'startDate': '2026-07-12T11:00:00+05:30',
        'endDate': '2026-07-12T13:00:00+05:30',
      },
      {
        '@type': 'Event',
        'name': 'Two Evening Sessions – Day 1',
        'startDate': '2026-07-14T18:00:00+05:30',
        'endDate': '2026-07-14T19:00:00+05:30',
      },
      {
        '@type': 'Event',
        'name': 'Two Evening Sessions – Day 2',
        'startDate': '2026-07-15T18:00:00+05:30',
        'endDate': '2026-07-15T19:00:00+05:30',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
      <Agenda />
      <BatchPicker />
      
      <GoldenRule />
      <TakeHome />
      <Audience />
      <Testimonials />
      <InstructorsCollage />
      <FAQ />
      {/* <Tools />
      
      <Parents /> */}
      {/* <CTABand /> */}
      
      <FinalCTA />
    </div>
  );
}
