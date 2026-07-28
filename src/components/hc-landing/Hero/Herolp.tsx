'use client';

import { useEffect, useState } from 'react';
import { EnrolledPopup } from './EnrolledPopup';
import LeadForm from '@/components/forms/hcForm';
import { PopupFormModal } from 'components/ui/PopupFormModal';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';


// Custom inline SVGs for premium look
const CheckIcon = () => (
  <svg
    className="h-4 w-4 text-sage shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

type HeroProps = {
	basePrice: number;
	
}



export default function Herolp({basePrice}: HeroProps) {
	const [showModal, setShowModal] = useState(false);
	const [actionable, setActionable] = useState<'Direct Sale' | 'Webinar'>('Direct Sale');
	const [buttonText, setButtonText] = useState('');
	const [heading, setHeading] = useState('');
	const [subHeading, setSubHeading] = useState('');
	const [source, setSource] = useState('');
	const [destination, setDestination] = useState('')
	const [submitError, setSubmitError] = useState('');
	const router = useRouter();
	
	useEffect(() => {
		if (showModal) {
		document.body.style.overflow = 'hidden';
		} else {
		document.body.style.overflow = 'unset';
		}

		return () => {
		document.body.style.overflow = 'unset';
		};
	}, [showModal]);

	const handleEnrollClick = () => {

		if (getCookie('leadId')) {
			router.push('/checkout?courseId=1');
			return;
		} else {			
			setActionable('Direct Sale');
			setHeading('Please fill in your details');
			setSubHeading('');
			setButtonText('Proceed to Checkout');
			setShowModal(true);
			setSource('Testing');
			setDestination('/checkout?courseId=1')
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
		<section className="relative w-full overflow-hidden bg-white pt-10">
		{/* Background soft glow elements */}
		{/* <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-sage/5 blur-[120px]" /> */}
		{/* <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-terracotta/5 blur-[150px]" /> */}

		<div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
			
			{/* Left Column: Text & CTAs */}
			<div className="flex flex-col space-y-6 md:space-y-8 lg:col-span-7">
				
				{/* Header Chips/Badges */}
				<div className="flex flex-wrap gap-2.5">
				<span className="flex items-center gap-1.5 rounded-full bg-[#aac1911a] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sage">
					<span className="h-1.5 w-1.5 rounded-full bg-sage" />
					E-CELL IIT-K CERTIFIED
				</span>
				<span className="flex items-center gap-1.5 rounded-full bg-[#aac1911a] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sage">
					<span className="h-1.5 w-1.5 rounded-full bg-sage" />
					ONLINE
				</span>
				<span className="flex items-center gap-1.5 rounded-full bg-[#aac1911a] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sage">
					<span className="h-1.5 w-1.5 rounded-full bg-sage" />
					GRADES 8 - 12
				</span>
				</div>

				{/* Main Heading */}
				<div className="space-y-4">
				<h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-[58px]">
					Enable your child to
					<span className="relative inline-block text-terracotta underline decoration-4">
					Learn, Create & Think
					</span>
					using AI.
				</h1>
				</div>

				{/* Subheading Description */}
				<p className="font-sans text-base md:text-lg leading-relaxed text-charcoal/80 max-w-2xl">
				Humain Champs is India's most credible AI learning course. Live online classes with a hackathon certified by E-Cell 
				IIT Kharagpur, real AI tools like ChatGPT & Gemini, and a Harvard-pedigree 
				founder. No coding needed.
				</p>

				{/* Buttons Group */}
				<div className="flex flex-col md:flex-row sm:items-center text-sm gap-4 pt-2 ">
					{/* Enroll Now Button */}
					<button
						type="button"
						onClick={handleEnrollClick}
						className="group flex cursor-pointer items-center justify-between gap-3 rounded-full bg-terracotta py-2 pr-2 pl-6 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
					>
						<span className="font-display text-base font-bold tracking-wide whitespace-nowrap">Enroll Now</span>
						<span className="rounded-full bg-white px-4 py-2 font-display text-sm font-extrabold text-terracotta border border-terracotta/10">
							{(basePrice + (basePrice * 0.18)).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
						</span>
					</button>

					{/* Request Callback Button */}
					<button
						onClick={() => {
							setActionable('Direct Sale');
							setHeading('Request a Callback');
							setSubHeading('');
							setButtonText('Submit');
							setShowModal(true);
							setSource('Testing');
							setDestination('/submission-received');
						}}
						className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-sage bg-white py-3.5 px-6 font-display text-base font-bold text-sage transition-all duration-300 hover:border-[#9ab081]"
					>
						Request a Callback
					</button>
				</div>

				{/* Highlights bullet points */}
				<div className="space-y-3 pt-2">
				<div className="flex items-start gap-2.5 text-sm md:text-base text-charcoal/70">
					<CheckIcon />
					<span>Rated 4.5★ by 200+ parents · Small batches</span>
				</div>
				</div>


			</div>

			{/* Right Column: Clipped image & Badges */}
			<div className="relative flex justify-center lg:col-span-5">
				
				{/* The Image Container */}
				<div className="relative w-full max-w-[480px]">
				
				{/* Main Parents Image */}
				<div className="relative w-full">
					<img
						src="/assets/images/parentslp.png"
						alt="Family studying AI together"
						className="w-full h-auto object-contain drop-shadow-xl"
					/>
				</div>

				{/* Floating Leaf Brain Logo Badge (Top-Right) */}
				<img
					src="/assets/images/leaflp.png"
					alt="AI Leaf Badge"
					className="absolute -top-[1%] -right-[1%] w-[32%] z-10 drop-shadow-lg cursor-pointer"
				/>

				{/* SVG Connecting Line */}
				<svg 
					className="absolute inset-0 w-full h-full pointer-events-none z-10" 
					viewBox="0 0 100 100" 
					preserveAspectRatio="none"
				>
					<path
					d="M -2.8 63.3 L -2.8 80.3"
					fill="none"
					stroke="#5e714e"
					strokeWidth="1.2"
					strokeOpacity="0.45"
					/>
				</svg>

				{/* Floating green text badges */}
				<div
					className="absolute top-[61%] left-[-7%] z-20 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm cursor-default"
				>
					<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage">
					<svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					</div>
					<span className="font-display text-[9.5px] font-extrabold tracking-wider text-sage whitespace-nowrap">
					NO CODING NEEDED
					</span>
				</div>

				<div
					className="absolute top-[69.5%] left-[-7%] z-20 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm cursor-default"
				>
					<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage">
					<svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					</div>
					<span className="font-display text-[9.5px] font-extrabold tracking-wider text-sage whitespace-nowrap">
					LIVE CLASSES
					</span>
				</div>

				<div
					className="absolute top-[78%] left-[-7%] z-20 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm cursor-default"
				>
					<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage">
					<svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					</div>
					<span className="font-display text-[9.5px] font-extrabold tracking-wider text-sage whitespace-nowrap">
					IIT CERTIFICATE
					</span>
				</div>

				</div>
			</div>

			</div>
		</div>

		{/* Modal Dialog for callback request form */}
		
		<PopupFormModal isOpen={showModal} onClose={() => setShowModal(false)}>
			<LeadForm
				actionable={actionable}
				heading={heading}
				subHeading={subHeading}
				buttonText={buttonText}
				source={source}
				destination={destination}
				onSubmit={onSubmit}
				submitError={submitError}
				setSubmitError={setSubmitError}
			/>
		</PopupFormModal>

		{!showModal && <EnrolledPopup />}
		</section>
	);
}
