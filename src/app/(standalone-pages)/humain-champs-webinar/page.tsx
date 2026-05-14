'use client';

import { useState } from 'react';
import WebinarHero from '@/components/webinar/WebinarHero';
import ParentQuestionsSection from '@/components/webinar/ParentQuestionsSection';
import WhatYouWillLearnSection from '@/components/webinar/WhatYouWillLearnSection';
import LearningOutcomesSection from '@/components/webinar/LearningOutcomesSection';
import MeetTheEducatorsSection from '@/components/webinar/MeetTheEducatorsSection';
import WhyNowMattersSection from '@/components/webinar/WhyNowMattersSection';
import { StudentStoriesSection } from '@/components/webinar/StudentStoriesSection';
import LiveBonusesSection from '@/components/webinar/LiveBonusesSection';
import WebinarFAQSection from '@/components/webinar/WebinarFAQSection';
import ReserveSeatCTASection from '@/components/webinar/ReserveSeatCTASection';
import { Tools } from '@/components/courses-students/humain-champs-v2/Tools/Tools';
import WebinarPageClientForm from '@/components/webinar/webinarpageclientform';
import { Band } from '@/components/webinar/Band';
// import { getWebinarDetails } from '../lib/crmClient';
function getDummyWebinarDetails() {
  return {
    date: 'Friday, 16th May 2026',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
  };
}

export default async function WebinarPage() {
	const [isReserveFormOpen, setIsReserveFormOpen] = useState(false);
	const templateId = '1';
	const webinarDetails = getDummyWebinarDetails();

	return (
		<>
		<WebinarHero
			webinarDetails={webinarDetails}
			onReserveClick={() => setIsReserveFormOpen(true)}
		/>
		<ParentQuestionsSection />
		<WhatYouWillLearnSection />
		<LearningOutcomesSection />
		<section className="bg-terracotta py-8 text-white sm:py-10 lg:py-12">
			<div className="mx-auto w-full max-w-[1240px] px-4 text-center sm:px-6 lg:px-10 xl:px-12">
			<h2
				className="mx-auto max-w-[820px] text-[28px] leading-[1.12] font-bold !text-white sm:text-[34px] lg:text-[42px]"
				style={{ color: '#ffffff' }}
			>
				The Same AI Tools Used By Professionals
				<br />
				Taught For Students
			</h2>

			<p className="mx-auto mt-5 max-w-[760px] text-sm leading-6 text-white/95 sm:text-[15px]">
				In the workshop, we&apos;ll demonstrate how to use these the right
				way for studying, creating, researching, and building. Live, on
				screen.
			</p>

			<div className="mx-auto mt-6 h-[2px] w-16 bg-white/90 sm:w-20" />
			</div>

			<div className="webinar-tools-marquee mt-10 sm:mt-12">
			<Tools />
			</div>

			<p className="mt-10 px-4 text-center text-sm leading-6 text-white/95 sm:mt-12 sm:px-6 sm:text-[15px] lg:px-10 xl:px-12">
			15+ tools. One unified framework. Live demonstrations during the
			session.
			</p>
		</section>
		<MeetTheEducatorsSection />
		<WhyNowMattersSection />
		<StudentStoriesSection />
		<LiveBonusesSection />
		<WebinarFAQSection />
		<ReserveSeatCTASection onReserveClick={() => setIsReserveFormOpen(true)} />
		<WebinarPageClientForm
			open={isReserveFormOpen}
			onClose={() => setIsReserveFormOpen(false)}
		/>
		<Band onReserveClick={() => setIsReserveFormOpen(true)} />
		</>
	);
	}
