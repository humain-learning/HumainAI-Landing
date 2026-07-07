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
  title: 'Make Magic with AI | The 10x Student | Class 8–12 | Humain Learning',
  description: "India's free live AI masterclass for Class 8–12. Your child learns the guided techniques that turn ordinary AI use into 10x study results. CBSE, ICSE, NEP 2020 aligned. Book your child's free slot.",
  keywords: '10x student AI techniques for parents, ICSE, CBSE, NEP 2020 aligned, AI masterclass for students',
  openGraph: {
    title: 'Make Magic with AI | The 10x Student | Class 8–12',
    description: 'Your child learns the guided AI techniques that turn ordinary study sessions into 10x results. Free for Class 8–12 across India.',
    type: 'website',
  },
};

export default function WebinarStandalonePage() {
  const pageUrl = 'https://www.humainlearning.ai/make-magic-with-ai';

  const baseOffer = {
    '@type': 'Offer',
    'url': pageUrl,
    'price': '199',
    'priceCurrency': 'INR',
    'availability': 'https://schema.org/InStock',
    'validFrom': '2026-07-07T00:00:00+05:30',
  };

  const virtualLocation = {
    '@type': 'VirtualLocation',
    'url': pageUrl,
  };

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    'name': 'Make Magic with AI | The 10x Student',
    'description': "India's free-to-attend-for-₹199 live AI masterclass for Class 8–12. In one power-packed live webinar, your child builds a real AI video gift for the family and learns the smart AI study system that makes revision faster and smarter — using 6 free tools they keep forever.",
    'url': pageUrl,
    'startDate': '2026-07-12T11:00:00+05:30',
    'endDate': '2026-07-15T19:00:00+05:30',
    'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
    'eventStatus': 'https://schema.org/EventScheduled',
    'location': virtualLocation,
    'offers': baseOffer,
    'organizer': {
      '@id': 'https://www.humainlearning.ai/#organization',
    },
    'subEvent': [
      {
        '@type': 'Event',
        'name': 'One Power Session (Sun 12 July)',
        'description': 'Create and Learn with AI in one immersive 2-hour sitting.',
        'startDate': '2026-07-12T11:00:00+05:30',
        'endDate': '2026-07-12T13:00:00+05:30',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'eventStatus': 'https://schema.org/EventScheduled',
        'location': virtualLocation,
        'offers': baseOffer,
      },
      {
        '@type': 'Event',
        'name': 'Two Evening Sessions – Day 1: Create with AI (Tue 14 July)',
        'description': 'Build your family tribute video.',
        'startDate': '2026-07-14T18:00:00+05:30',
        'endDate': '2026-07-14T19:00:00+05:30',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'eventStatus': 'https://schema.org/EventScheduled',
        'location': virtualLocation,
        'offers': baseOffer,
      },
      {
        '@type': 'Event',
        'name': 'Two Evening Sessions – Day 2: Learn with AI (Wed 15 July)',
        'description': 'The smart AI study system.',
        'startDate': '2026-07-15T18:00:00+05:30',
        'endDate': '2026-07-15T19:00:00+05:30',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'eventStatus': 'https://schema.org/EventScheduled',
        'location': virtualLocation,
        'offers': baseOffer,
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
      {/* <Tools /> */}
      
      {/* <Parents /> */}
      {/* <CTABand /> */}
      
      <FinalCTA />
    </div>
  );
}
