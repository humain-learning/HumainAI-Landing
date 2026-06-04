'use client';

import { useState } from 'react';
import WebinarHero from '@/components/hc-webinar/WebinarHero';
import ParentQuestionsSection from '@/components/hc-webinar/ParentQuestionsSection';
import WhatYouWillLearnSection from '@/components/hc-webinar/WhatYouWillLearnSection';
import LearningOutcomesSection from '@/components/hc-webinar/LearningOutcomesSection';
import MeetTheEducatorsSection from '@/components/hc-webinar/MeetTheEducatorsSection';
import WhyNowMattersSection from '@/components/hc-webinar/WhyNowMattersSection';
import { StudentStoriesSection } from '@/components/hc-webinar/StudentStoriesSection';
import LiveBonusesSection from '@/components/hc-webinar/LiveBonusesSection';
import WebinarFAQSection from '@/components/hc-webinar/WebinarFAQSection';
import ReserveSeatCTASection from '@/components/hc-webinar/ReserveSeatCTASection';
import { Tools } from '@/components/courses-students/humain-champs-v2/Tools/Tools';
import WebinarPageClientForm from '@/components/hc-webinar/webinarpageclientform';
import { Band } from '@/components/hc-webinar/Band';
import type { WebinarLeadState } from '@/app/lib/crmClient';

type WebinarDetails = {
	date: string;
	startTime: string;
	endTime: string;
};

type WebinarLeadAction = (
	prevState: WebinarLeadState,
	formData: FormData
) => Promise<WebinarLeadState>;

export default function WebinarPageClient({
	webinarDetails,
	onSubmitLead,
}: {
	webinarDetails: WebinarDetails;
	onSubmitLead: WebinarLeadAction;
}) {
	const [isReserveFormOpen, setIsReserveFormOpen] = useState(false);

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
			<StudentStoriesSection />
			<LiveBonusesSection />
			<WebinarFAQSection />
			<ReserveSeatCTASection onReserveClick={() => setIsReserveFormOpen(true)} />
			<WebinarPageClientForm
				open={isReserveFormOpen}
				onClose={() => setIsReserveFormOpen(false)}
				onSubmitLead={onSubmitLead}
			/>
			<Band
				onReserveClick={() => setIsReserveFormOpen(true)}
				webinarDetails={webinarDetails}
			/>
		</>
	);
}
