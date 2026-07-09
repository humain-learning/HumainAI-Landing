'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { PopupFormModal } from 'ui/PopupFormModal';
import LeadForm from 'components/forms/hcForm';
import { getCountdown, getUrgencyText, isRegistrationClosed } from './data/batches';

const mapping: Record<string, React.ReactNode> = {
  aspiration: (
	<p>
	  Your Child Will <span className="text-[#E7A572]">Make Magic With AI</span> — Not Just Scroll Past It.
	</p>
  ),
  exam: (
	<p>
	  What if exam prep felt organised,{' '}
	  <span className="text-[#E7A572]">not overwhelming?</span>
	</p>
  ),
   social: (
  <p>
	Families from across India.
	One session.
	<span className="block text-[#E7A572]">
	  Real change.
	</span>
  </p>
),
  future: (
	<p>
	  The skill that's quietly separating this generation of students,{' '}
	  <span className="text-[#E7A572]">and how your child can build it.</span>
	</p>
  ),
};

export default function Hero() {
	const router = useRouter();
	const [urgencyText, setUrgencyText] = useState('');
	const [title, setTitle] = useState<React.ReactNode>(mapping['aspiration']);
	const [showModal, setShowModal] = useState(false);
	const [submitError, setSubmitError] = useState('');
	const [registrationClosed, setRegistrationClosed] = useState(false);
	const [countdown, setCountdown] = useState(() => ({
	  days: 0,
	  hours: 0,
	  minutes: 0,
	  seconds: 0,
	  isLive: false,
	}));

  useEffect(() => {
	// Safe to access window here — client only
	const searchParams = new URLSearchParams(window.location.search);
	const utm_term = searchParams.get('utm_term');
	setTitle(mapping[utm_term as keyof typeof mapping] ?? mapping['aspiration']);

	setRegistrationClosed(isRegistrationClosed());
	setCountdown(getCountdown());
	setUrgencyText(getUrgencyText());

	const timer = window.setInterval(() => {
	  setCountdown(getCountdown());
	}, 1000);

	return () => window.clearInterval(timer);
  }, []);

  const handleEnrollClick = () => {
	const section = document.getElementById('batch-picker');
	section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
	<>
	  <section className="relative overflow-hidden bg-white pt-[150px] pb-16 px-5 md:px-16 flex items-center min-h-[80vh]">
	  {/* Geometric accent rings */}
	  <div className="absolute rounded-full border border-[#E7A572]/15 pointer-events-none w-[560px] h-[560px] -top-[200px] -right-[160px]"></div>
	  <div className="absolute rounded-full border border-[#E7A572]/15 pointer-events-none w-[320px] h-[320px] top-[40px] right-[70px]"></div>
	  <div className="absolute rounded-full border border-[#E7A572]/10 pointer-events-none w-[140px] h-[140px] bottom-[80px] left-[5%]"></div>

	  <div className="relative z-10 w-full max-w-[1020px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
		
		{/* Left copy */}
		<div>
		  <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#333333] mb-5">
			<p>
				Your Child Will <span className="text-[#E7A572]">Make Magic With AI</span> — Not Just Scroll Past It.
			</p>
		  </h1>
		  
		  <p className="font-sans text-base text-[#333333]/75 max-w-[560px] mb-6 leading-relaxed">
			In one power-packed live webinar, your child builds a real AI video gift for the family and learns the smart AI study system that makes revision faster and smarter — using 6 free tools they keep forever.
		  </p>
		  
		  <div className="mb-8 flex flex-wrap items-center gap-8">
			<div className="flex items-center gap-3">
			  <Image src="/assets/webinar/people_icon.png" alt="People" width={24} height={24} className="h-6 w-6" />
			  <div>
				<div className="font-display text-[0.95rem] font-extrabold text-[#333333]">6 AI Tools</div>
				<div className="font-sans text-[0.72rem] font-medium text-[#333333]/70">Free to use</div>
			  </div>
			</div>
			<div className="flex items-center gap-3">
			  <Image src="/assets/webinar/timer_icon.png" alt="Timer" width={24} height={24} className="h-6 w-6" />
			  <div>
				<div className="font-display text-[0.95rem] font-extrabold text-[#333333]">2 Hours</div>
				<div className="font-sans text-[0.72rem] font-medium text-[#333333]/70">Live</div>
			  </div>
			</div>
			<div className="flex items-center gap-3">
			  <Image src="/assets/webinar/star_icon.png" alt="Star" width={24} height={24} className="h-6 w-6" />
			  <div>
				<div className="font-display text-[0.95rem] font-extrabold text-[#333333]">₹3000+</div>
				<div className="font-sans text-[0.72rem] font-medium text-[#333333]/70">in bonuses</div>
			  </div>
			</div>
		  </div>
		  
		  <div className="flex flex-wrap items-center gap-[18px]">
			<button 
			  onClick={handleEnrollClick}
			  className="inline-flex items-center justify-center font-display font-extrabold bg-[#E7A572] text-white px-10 py-[18px] text-[1.05rem] rounded-md shadow-[0_4px_22px_rgba(231,165,114,0.35)] transition-all hover:bg-[#C97D49] hover:-translate-y-[1px] hover:shadow-[0_6px_28px_rgba(231,165,114,0.45)]"
			disabled={registrationClosed}
			>
			  {registrationClosed
				? 'Registrations Closed'
				: <span className="inline-flex items-center gap-2"><span>RESERVE MY SEAT</span><span className="text-[0.9rem] font-medium line-through text-white/70">₹499</span><span className="text-[0.95rem] font-semibold">Free!</span></span>}
			</button>
			{/* <div className="flex items-center gap-2 rounded-full bg-[#FDF3EB] px-3 py-2">
			  <Image src="/assets/webinar/Whatsapp_icon.png" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
			  <span className="font-sans text-[0.78rem] font-semibold text-[#333333]">
				Instant Confirmation on WhatsApp!
			  </span>
			</div> */}
		  </div>
		</div>

		{/* Right column */}
		<div className="relative z-10 flex flex-col items-center justify-center lg:self-end">
		  <div className="relative mx-auto w-full max-w-[600px]">
			<motion.div
			  initial={{ opacity: 0, scale: 0.95 }}
			  animate={{ opacity: 1, scale: 1 }}
			  transition={{ duration: 0.8, ease: 'easeOut' }}
			  className="relative w-full overflow-hidden "
			>
			  <Image
				src="/assets/webinar/hero_family.png"
				alt="Family using AI together"
				width={480}
				height={480}
				className="aspect-square w-full object-cover"
				priority
			  />
			</motion.div>

			<motion.div
			  initial={{ scale: 0, rotate: -15 }}
			  animate={{ scale: 1, rotate: 0 }}
			  transition={{ delay: 0.4, type: 'spring', stiffness: 120, damping: 15 }}
			  className="absolute bottom-[2%] left-[-2%] z-20 flex h-[130px] w-[26%] min-w-[110px] max-w-[130px] items-center justify-center rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none bg-[#AAC191] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
			>
			  <Image src="/assets/webinar/photo_icon.png" alt="Photo" width={96} height={96} className="h-20 w-20 object-cover" />
			</motion.div>
		  </div>

		  {/* <div className="mt-5 flex w-full max-w-[400px] flex-wrap items-center justify-center gap-2">
			{[
			  { value: countdown.days.toString().padStart(2, '0'), label: 'DAYS' },
			  { value: countdown.hours.toString().padStart(2, '0'), label: 'HOURS' },
			  { value: countdown.minutes.toString().padStart(2, '0'), label: 'MINS' },
			  { value: countdown.seconds.toString().padStart(2, '0'), label: 'SECS' },
			].map((item) => (
			  <div key={item.label} className="flex min-w-[68px] flex-col items-center rounded-lg border border-[#E6E6E6] bg-white px-4 py-2.5 shadow-sm">
				<span className="font-display text-[0.95rem] font-extrabold text-[#C97D49]">{item.value}</span>
				<span className="font-sans text-[0.58rem] font-semibold uppercase tracking-[1.2px] text-[#888888]">{item.label}</span>
			  </div>
			))}
		  </div>

		  <p className="mt-3 text-center font-sans text-[0.82rem] font-medium text-[#333333]/70">
			until the next webinar begins
		  </p> */}
		</div>

	  </div>
	  </section>
	</>
  );
}