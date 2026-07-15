'use client';
import Link from 'next/link';
import { webinarBatches, isBatchRegistrationClosed } from './data/batches';
import LeadForm from 'components/forms/hcForm';
import { PopupFormModal } from 'ui/PopupFormModal';
import { useState } from 'react';
import { setCookie } from 'cookies-next';

export default function BatchPicker() {
	const [showModal, setShowModal] = useState(false);
	const [submitError, setSubmitError] = useState('');
	
	const onClick = (batch: any) => {
		setShowModal(true);
		setCookie('custom_utm_campaign', batch.campaign, { path: '/', maxAge: 60 * 60 * 24 * 30 });
		console.log('after', document.cookie);
	}
	const onSubmit = async (values: unknown) => {
		const res = await fetch('/api/submit-lead', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});

		const data = await res.json();
		console.log('DATA:', data);
		if (!res.ok) {
			setSubmitError('Something went wrong. Please try again.');
			throw new Error(data.error || 'Something went wrong');
		}

		return data;
	};
	return (
		<section id="batch-picker" className="bg-[#EFF5E9] py-16 md:py-24 px-5 md:px-16">
			<div className="text-center">
				<h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#333333]">
					Pick the batch that fits your week
				</h2>
				<p className="text-[#333333]/60 mt-3">Same content, same energy, same bonuses. Choose one.</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
				{webinarBatches.map((batch) => (
					<div
						key={batch.id}
						className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row"
					>
						<div className="md:w-[40%] p-6 md:p-8 justify-center flex flex-col" style={{ backgroundColor: batch.accent }}>
							<div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 leading-relaxed">
								{batch.label[0]}
								<br />
								{batch.label[1]}
							</div>
							<h3 className="font-display font-extrabold text-white text-xl mt-3">{batch.title}</h3>
							<p className="font-display font-extrabold text-white mt-4">{batch.date}</p>
							<p className="text-sm text-white/80 mt-2">{batch.time}</p>
						</div>

						<div className="flex-1 bg-white p-6 md:p-8 flex flex-col justify-between">
							<div className="space-y-4">
								{batch.bullets.map((bullet) => (
								<div key={bullet} className="flex items-start gap-3">
									<div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: batch.accent }}>
									<svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-white fill-none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
										<path d="M5 13l4 4L19 7" />
									</svg>
									</div>
									<p className="text-sm text-[#333333]/75 leading-relaxed">{bullet}</p>
								</div>
								))}
							</div>

							<button
								onClick={() => onClick(batch)}
								className="mt-6 block w-full rounded-lg py-3 text-center font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
								style={{ backgroundColor: batch.accent }}
								disabled={isBatchRegistrationClosed(batch)}
							>
								{isBatchRegistrationClosed(batch) ? 'Registrations Closed' : batch.buttonLabel}
							</button>
						</div>
					</div>
				))}
			</div>

		<PopupFormModal isOpen={showModal} onClose={() => setShowModal(false)}>
			<LeadForm 
				actionable="Webinar"
				heading="Register Now"
				subHeading="Please fill out the form below to reserve your spot"
				buttonText="Register Now"
				source="Webinar Landing"
				destination="/submission-received"
				onSubmit={onSubmit}
				submitError={submitError}
				setSubmitError={setSubmitError}
			/>
		</PopupFormModal>
    	</section>
  	);
}
