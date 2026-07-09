'use client';

import React from 'react';
import { motion } from 'motion/react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PopupFormModal } from 'ui/PopupFormModal';
import LeadForm from 'components/forms/hcForm';

type HeaderProps = {
  basePrice: number;
};

export default function Headerlp({ basePrice }: HeaderProps) {
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [submitError, setSubmitError] = useState('');
	const handleEnrollClick = () => {

			if (getCookie('leadId')) {
				router.push('/checkout?courseId=1');
				return;
			} else {			
				setShowModal(true);
			}

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
		<header className=" z-50 w-full bg-white  transition-all duration-300">
			<div className="mx-auto w-full max-w-7xl px-6 py-3 md:px-12 md:py-4 lg:px-16">
				<div className="flex items-center justify-between">
					{/* Left: Logo */}
					<div className="flex items-center">
						<img
						src="/assets/logo/webinarhumanlogo.png"
						alt="Humain Learning Logo"
						className="h-14 md:h-16 w-auto object-contain"
						/>
					</div>

					{/* Right: Seat limit badge and CTA Button */}
					<div className="flex items-center gap-4 md:gap-6">
						{/* Seat Limit Badge (Hidden on mobile, shown on md and larger) */}
						<div className="hidden md:flex items-center gap-2 rounded-full border border-terracotta/30 bg-[#ffe9d7]/30 px-4 py-2 text-xs font-semibold text-terracotta shadow-sm select-none">
						<span>Only few seats left</span>
						</div>

						{/* Enroll Now Button */}

						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							onClick={handleEnrollClick}
							className="group flex cursor-pointer items-center justify-between gap-2.5 rounded-full bg-terracotta py-1.5 pr-1.5 pl-4 md:pl-5 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
						>
							<span className="font-display text-xs md:text-sm font-bold tracking-wide">
							Enroll Now
							</span>
							<span className="rounded-full bg-white px-2.5 py-1 font-display text-[10px] md:text-xs font-extrabold text-terracotta border border-terracotta/10">
								{(basePrice + (basePrice * 0.18)).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
							</span>
						</motion.button>
					</div>
				</div>
			</div>
			<PopupFormModal isOpen={showModal} onClose={() => setShowModal(false)}>
				<LeadForm 
					actionable="Direct Sale"
					heading="Book Your Free Seat"
					buttonText="Book Now"
					source="Testing"
					destination="/checkout?courseId=1"
					onSubmit={onSubmit}
					submitError={submitError}
					setSubmitError={setSubmitError}
				/>
			</PopupFormModal>
		</header>
	);
	}
