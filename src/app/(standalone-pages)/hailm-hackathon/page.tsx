import type { Metadata } from 'next';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { getHailmHackathonOffer } from '@/app/lib/hailmHackathon';
import RegistrationForm from '@/components/hailm-hackathon/RegistrationForm';
import StickyCta from '@/components/hailm-hackathon/StickyCta';

// Price comes from Frappe on every request, so a change in site_config shows up without a deploy.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
	title: 'HAILM Hackathon in Delhi for Humain Champs | Humain Learning',
	description:
		'Humain Learning presents the Humain AI Literacy Mission Hackathon for Humain Champs students: hackathon access in Delhi plus 1 State and 1 National AI Olympiad, in one registration.',
	alternates: { canonical: '/hailm-hackathon' },
	openGraph: {
		title: 'HAILM Hackathon in Delhi | Humain Learning presents HAILM',
		description: 'Hackathon access in Delhi + 1 State + 1 National AI Olympiad for Humain Champs students.',
		url: 'https://www.humainlearning.ai/hailm-hackathon',
		images: [{ url: '/assets/HCV2/images/hero_family.png', width: 1024, height: 768 }],
	},
};

const inr = (n: number) => `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

function Chip({ children }: { children: React.ReactNode }) {
	return (
		<span className="flex items-center gap-1.5 rounded-full bg-[#aac1911a] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sage">
			<span className="h-1.5 w-1.5 rounded-full bg-sage" />
			{children}
		</span>
	);
}

function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
	return (
		<svg className={`${className} shrink-0 text-sage`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
		</svg>
	);
}

const INCLUDED = [
	{ label: 'Access to the HAILM Hackathon in Delhi', meta: '21 Nov 2026' },
	{ label: '1 State Level AI Olympiad', meta: '4 or 11 Oct' },
	{ label: '1 National Level AI Olympiad', meta: '18 or 25 Oct' },
];

const TIMELINE = [
	{
		kicker: 'Round 1',
		title: 'State Level AI Olympiad',
		body: 'Compete with thousands of students taking the same first step, and show what you’ve learned about AI.',
		dates: ['4 Oct 2026', '11 Oct 2026'],
	},
	{
		kicker: 'Round 2',
		title: 'National Level AI Olympiad',
		body: 'Open to every registered student, with no State qualification needed. This is where the competition sharpens.',
		dates: ['18 Oct 2026', '25 Oct 2026'],
	},
	{
		kicker: 'The big day',
		title: 'HAILM Hackathon, Delhi',
		body: 'A live, in-person hackathon where young AI talent from across India builds, competes and celebrates together.',
		dates: ['21 Nov 2026 · Delhi'],
	},
];

const STEPS = [
	{ title: 'Register and pay', body: 'Enter the student’s name and WhatsApp number, then pay securely on Razorpay.' },
	{ title: 'Get your code on WhatsApp', body: 'A single-use HAILM Olympiad access code arrives on your WhatsApp right after payment.' },
	{ title: 'Redeem it on HAILM', body: 'Use the code when registering for the Olympiad. Your State and National rounds are fully covered.' },
	{ title: 'Compete, then Delhi', body: 'Sit your State and National Olympiads in October, then meet us at the hackathon on 21 November.' },
];

const FAQ = [
	{
		q: 'Is this the same as the Humain Champs course?',
		a: 'No. This is a separate registration and payment for the HAILM Hackathon and Olympiad. Your Humain Champs course is unaffected.',
	},
	{
		q: 'What exactly is included in the amount?',
		a: 'Access to the HAILM Hackathon in Delhi on 21 November 2026, one State Level AI Olympiad and one National Level AI Olympiad. There is nothing extra to pay on HAILM for these.',
	},
	{
		q: 'How do I get my Olympiad access?',
		a: 'Right after payment we send a single-use access code to the WhatsApp number you entered. It is also shown on your confirmation page. Use it when you register for the Olympiad on HAILM, and the State + National package is covered in full.',
	},
	{
		q: 'Which Olympiad dates can I choose?',
		a: 'State Level: 4 or 11 October 2026. National Level: 18 or 25 October 2026. You pick your dates when you redeem your code on HAILM.',
	},
	{
		q: 'Is there a deadline to use my code?',
		a: 'Yes, use it by 7 October 2026. That is when registration closes for the last State Olympiad date (11 October).',
	},
	{
		q: 'Do I need to know how to code?',
		a: 'No. The Olympiad tests AI literacy, not programming.',
	},
	{
		q: 'I entered the wrong WhatsApp number. What now?',
		a: 'Write to hi@humainlearning.ai with your name and the number you used, and we will get your code to the right number.',
	},
];

export default async function HailmHackathonPage() {
	const offer = await getHailmHackathonOffer();
	const price = offer.active && offer.amount ? inr(offer.amount) : null;

	return (
		<main className="bg-white">
			{/* Humain Learning presents HAILM */}
			<header className="border-b border-[#eeeeee] bg-white">
				<div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-6 py-3 md:px-12 lg:px-16">
					<div className="flex items-center gap-2.5">
						<Image src="/assets/logo/brain-logo.png" alt="Humain Learning" width={112} height={36} priority className="h-8 w-auto" />
						<span className="font-sans text-xs font-medium text-charcoal/50">presents</span>
					</div>
					<div className="flex items-center gap-2 text-right">
						<span className="hidden font-sans text-[11px] leading-tight text-charcoal/50 sm:block">
							India&apos;s own AI Literacy Mission
						</span>
						<Image src="/assets/hailm-hackathon/hailm-seal.png" alt="HAILM" width={30} height={30} className="h-7 w-7 shrink-0" />
					</div>
				</div>
			</header>

			<section className="relative w-full overflow-hidden bg-white pt-10 pb-14 md:pt-14">
				<div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
						<div className="flex flex-col space-y-6 md:space-y-8 lg:col-span-7">
							<div className="flex flex-wrap gap-2.5">
								<Chip>FOR HUMAIN CHAMPS STUDENTS</Chip>
								<Chip>DELHI · 21 NOV 2026</Chip>
							</div>

							<h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-[52px]">
								Build with AI, on a
								<span className="relative inline-block text-terracotta underline decoration-4"> national stage</span> in
								Delhi.
							</h1>

							<p className="max-w-2xl font-sans text-base leading-relaxed text-charcoal/80 md:text-lg">
								The Humain AI Literacy Mission Hackathon brings India&apos;s strongest young AI talent to one stage in
								Delhi. One registration gets your Humain Champs student there, plus a State and a National AI Olympiad
								along the way.
							</p>

							<div className="space-y-3 pt-2">
								{INCLUDED.map((item) => (
									<div key={item.label} className="flex items-start gap-2.5 text-sm text-charcoal/70 md:text-base">
										<CheckIcon />
										<span>
											<b className="text-charcoal">{item.label}</b> · {item.meta}
										</span>
									</div>
								))}
							</div>

							<a
								href="#register"
								className="group flex w-fit items-center justify-between gap-3 rounded-full bg-terracotta py-2 pr-2 pl-6 text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30"
							>
								<span className="font-display text-base font-bold tracking-wide whitespace-nowrap">
									{price ? 'Register now' : 'See how it works'}
								</span>
								{price ? (
									<span className="rounded-full border border-terracotta/10 bg-white px-4 py-2 font-display text-sm font-extrabold text-terracotta">
										{price}
									</span>
								) : null}
							</a>
						</div>

						<div className="relative flex justify-center lg:col-span-5">
							<div className="relative w-full max-w-[420px]">
								<Image
									src="/assets/HCV2/images/hero_family.png"
									alt="Humain Champs student building with AI"
									width={1024}
									height={1024}
									priority
									className="h-auto w-full object-contain drop-shadow-xl"
								/>
								<div className="absolute top-[8%] -right-[4%] z-10 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm">
									<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage">
										<CheckIcon className="h-2.5 w-2.5 text-white" />
									</div>
									<span className="font-display text-[9.5px] font-extrabold tracking-wider whitespace-nowrap text-sage">
										ALL 3 INCLUDED
									</span>
								</div>
								<div className="absolute top-[20%] -left-[4%] z-10 flex items-center gap-1.5 rounded-full border border-[#aac191]/50 bg-white/95 px-3 py-1.5 shadow-md shadow-sage/5 backdrop-blur-sm">
									<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage">
										<CheckIcon className="h-2.5 w-2.5 text-white" />
									</div>
									<span className="font-display text-[9.5px] font-extrabold tracking-wider whitespace-nowrap text-sage">
										ONE-TIME PAYMENT
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{price ? (
				<section className="bg-[#f9f8f4] py-4">
					<div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-2 px-6 text-center md:px-12 lg:px-16">
						<span className="font-sans text-sm text-charcoal/70">One registration, all inclusive:</span>
						<span className="font-display text-lg font-extrabold text-charcoal">{price}</span>
						<span className="font-sans text-xs text-charcoal/50">incl. GST</span>
					</div>
				</section>
			) : null}

			<section className="bg-white py-16 md:py-20">
				<div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
					<div className="mx-auto max-w-2xl text-center">
						<span className="text-xs font-semibold tracking-wider text-sage uppercase">What&apos;s included</span>
						<h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
							Three stages, <span className="text-terracotta">one registration.</span>
						</h2>
						<p className="mt-4 font-sans text-base leading-relaxed text-charcoal/70">
							State and National are independent rounds, so your student sits both regardless of how the first one
							goes. The season ends together, on one stage in Delhi.
						</p>
					</div>
					<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
						{TIMELINE.map((item) => (
							<article
								key={item.title}
								className="flex flex-col gap-3 rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm shadow-charcoal/[0.03]"
							>
								<span className="text-xs font-semibold tracking-wider text-terracotta uppercase">{item.kicker}</span>
								<h3 className="font-display text-xl font-bold text-charcoal">{item.title}</h3>
								<p className="font-sans text-sm leading-relaxed text-charcoal/70">{item.body}</p>
								<div className="mt-auto flex flex-wrap gap-2 pt-2">
									{item.dates.map((d) => (
										<span key={d} className="rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
											{d}
										</span>
									))}
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="bg-[#f9f8f4] py-16 md:py-20">
				<div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
					<div className="mx-auto max-w-2xl text-center">
						<span className="text-xs font-semibold tracking-wider text-sage uppercase">How it works</span>
						<h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
							From this page to the Delhi stage.
						</h2>
					</div>
					<ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{STEPS.map((step, i) => (
							<li key={step.title} className="relative rounded-2xl bg-white p-6 shadow-sm shadow-charcoal/[0.03]">
								<span className="font-display text-3xl font-extrabold text-sage/30">{String(i + 1).padStart(2, '0')}</span>
								<h3 className="mt-2 font-display text-base font-bold text-charcoal">{step.title}</h3>
								<p className="mt-1 font-sans text-sm leading-relaxed text-charcoal/70">{step.body}</p>
							</li>
						))}
					</ol>
					<p className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-terracotta/10 px-5 py-3 text-center font-sans text-sm text-charcoal">
						<span aria-hidden="true">⏳</span>
						<span>
							<strong>Use your code by 7 October 2026.</strong> Registration for the last State Olympiad date (11 Oct)
							closes then.
						</span>
					</p>
				</div>
			</section>

			<section id="register" className="scroll-mt-20 bg-white py-16 md:py-20">
				<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16">
					<div>
						<span className="text-xs font-semibold tracking-wider text-sage uppercase">Register</span>
						<h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
							Your seat starts with <span className="text-terracotta">one form.</span>
						</h2>
						<p className="mt-4 max-w-md font-sans text-base leading-relaxed text-charcoal/70">
							Just the student&apos;s name and a WhatsApp number. Everything else, from your Olympiad access code to
							hackathon logistics, comes to you on WhatsApp.
						</p>
					</div>
					<RegistrationForm amount={offer.amount} active={offer.active} />
				</div>
			</section>

			<section className="bg-[#f9f8f4] py-16 md:py-20">
				<div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
					<div className="mx-auto max-w-2xl text-center">
						<span className="text-xs font-semibold tracking-wider text-sage uppercase">Questions</span>
						<h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">Frequently asked</h2>
					</div>
					<div className="mx-auto mt-10 max-w-3xl">
						{FAQ.map(({ q, a }) => (
							<details key={q} className="group border-b border-sage/30 py-4">
								<summary className="flex w-full cursor-pointer touch-manipulation list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
									<span className="font-display text-sm font-semibold text-charcoal sm:text-base">{q}</span>
									<ChevronDown
										aria-hidden="true"
										className="h-4 w-4 shrink-0 text-sage transition-transform duration-300 group-open:rotate-180"
										strokeWidth={2.2}
									/>
								</summary>
								<p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/70">{a}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<StickyCta label={price ? `Register · ${price}` : 'Register'} />
		</main>
	);
}
