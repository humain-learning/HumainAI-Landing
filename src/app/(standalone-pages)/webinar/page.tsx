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
  title: 'Free Live AI Masterclass — The 10x Student | Class 8–12 | Humain Learning',
  description: "Join India's free live AI masterclass for Class 8–12 students. Build 3 AI tools in 60 minutes — a smart timetable, photo-to-notes machine, and 24/7 doubt solver.",
};

export default function WebinarStandalonePage() {
  return (
    <div className="bg-white min-h-screen text-[#333333] font-sans antialiased overflow-x-hidden">
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
