import type { Metadata } from 'next';
import Image from 'next/image';
import { getHailmHackathonOffer } from '@/app/lib/hailmHackathon';
import RegistrationForm from '@/components/hailm-hackathon/RegistrationForm';
import StickyCta from '@/components/hailm-hackathon/StickyCta';
import { fraunces, interTight } from '@/components/hailm-hackathon/fonts';
import s from '@/components/hailm-hackathon/hailm.module.css';

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
		images: [{ url: '/assets/hailm-hackathon/olympiad-hero.jpg', width: 1917, height: 640 }],
	},
};

const inr = (n: number) => `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

function Tick() {
	return (
		<span className={s.tick} aria-hidden='true'>
			<svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
				<path d='M2.5 6.2 4.9 8.6 9.5 3.6' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		</span>
	);
}

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
		<main className={`${fraunces.variable} ${interTight.variable} ${s.page}`}>
			{/* Humain Learning presents HAILM */}
			<header className={s.presents}>
				<div className={`${s.wrap} ${s.presentsInner}`}>
					<div className={s.presentsBrand}>
						<Image className={s.hlLogo} src='/assets/logo/brain-logo.png' alt='Humain Learning' width={81} height={34} priority />
						<span className={s.presentsWord}>presents</span>
					</div>
					<div className={s.presentsBrand}>
						<span className={s.hailmName}>
							Humain AI Literacy Mission
							<span>India&apos;s own AI Literacy Mission</span>
						</span>
						<Image className={s.seal} src='/assets/hailm-hackathon/hailm-seal.png' alt='HAILM' width={38} height={38} priority />
					</div>
				</div>
			</header>

			<section className={s.hero}>
				<Image className={s.heroImage} src='/assets/hailm-hackathon/olympiad-hero.jpg' alt='' fill priority sizes='100vw' />
				<div className={`${s.wrap} ${s.heroInner}`}>
					<div>
						<span className={s.eyebrow}>For Humain Champs students</span>
						<h1 className={s.heroTitle}>
							Build with AI, on a <em>national stage</em> in Delhi.
						</h1>
						<p className={s.heroLede}>
							The Humain AI Literacy Mission Hackathon brings India&apos;s strongest young AI talent to one stage in
							Delhi on 21 November 2026. One registration gets you there, plus a State and a National AI Olympiad
							along the way.
						</p>
					</div>

					<aside className={s.priceCard} aria-label='What your registration includes'>
						{price ? (
							<>
								<div className={s.priceLabel}>One registration, all inclusive</div>
								<div className={s.price}>{price}</div>
								<div className={s.priceNote}>incl. GST</div>
							</>
						) : (
							<div className={s.priceLabel}>Registrations opening soon</div>
						)}
						<ul className={s.includedList}>
							<li>
								<Tick />
								<span>
									<b>Access to the HAILM Hackathon in Delhi</b> · 21 Nov 2026
								</span>
							</li>
							<li>
								<Tick />
								<span>
									<b>1 State Level AI Olympiad</b> · 4 or 11 Oct
								</span>
							</li>
							<li>
								<Tick />
								<span>
									<b>1 National Level AI Olympiad</b> · 18 or 25 Oct
								</span>
							</li>
						</ul>
						<p className={s.includedAll}>All three are included in this amount.</p>
						<a className={s.btn} href='#register'>
							{price ? `Register for ${price}` : 'See how it works'}
						</a>
					</aside>
				</div>
			</section>

			<section className={s.section}>
				<div className={s.wrap}>
					<div className={s.sectionHead}>
						<span className={s.sectionEyebrow}>What&apos;s included</span>
						<h2 className={s.h2}>
							Three stages, <em>one registration.</em>
						</h2>
						<p className={s.lead}>
							State and National are independent rounds, so you sit both regardless of how the first one goes. The
							season ends together, on one stage in Delhi.
						</p>
					</div>
					<div className={s.cards}>
						<article className={s.card}>
							<span className={s.cardKicker}>Round 1</span>
							<h3 className={s.cardTitle}>State Level AI Olympiad</h3>
							<p className={s.cardBody}>
								Compete with thousands of students taking the same first step, and show what you&apos;ve learned about
								AI.
							</p>
							<div className={s.dates}>
								<span className={s.date}>4 Oct 2026</span>
								<span className={s.date}>11 Oct 2026</span>
							</div>
						</article>
						<article className={s.card}>
							<span className={s.cardKicker}>Round 2</span>
							<h3 className={s.cardTitle}>National Level AI Olympiad</h3>
							<p className={s.cardBody}>
								Open to every registered student, with no State qualification needed. This is where the competition
								sharpens.
							</p>
							<div className={s.dates}>
								<span className={s.date}>18 Oct 2026</span>
								<span className={s.date}>25 Oct 2026</span>
							</div>
						</article>
						<article className={s.card}>
							<span className={s.cardKicker}>The big day</span>
							<h3 className={s.cardTitle}>HAILM Hackathon, Delhi</h3>
							<p className={s.cardBody}>
								A live, in-person hackathon where young AI talent from across India builds, competes and celebrates
								together.
							</p>
							<div className={s.dates}>
								<span className={s.date}>21 Nov 2026 · Delhi</span>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section className={s.section} style={{ paddingTop: 0 }}>
				<div className={s.wrap}>
					<div className={s.sectionHead}>
						<span className={s.sectionEyebrow}>How it works</span>
						<h2 className={s.h2}>From this page to the Delhi stage.</h2>
					</div>
					<ol className={s.steps}>
						<li className={s.step}>
							<h3 className={s.stepTitle}>Register and pay</h3>
							<p className={s.stepBody}>Enter the student&apos;s name and WhatsApp number, then pay securely on Razorpay.</p>
						</li>
						<li className={s.step}>
							<h3 className={s.stepTitle}>Get your code on WhatsApp</h3>
							<p className={s.stepBody}>A single-use HAILM Olympiad access code arrives on your WhatsApp right after payment.</p>
						</li>
						<li className={s.step}>
							<h3 className={s.stepTitle}>Redeem it on HAILM</h3>
							<p className={s.stepBody}>Use the code when registering for the Olympiad. Your State and National rounds are fully covered.</p>
						</li>
						<li className={s.step}>
							<h3 className={s.stepTitle}>Compete, then Delhi</h3>
							<p className={s.stepBody}>Sit your State and National Olympiads in October, then meet us at the hackathon on 21 November.</p>
						</li>
					</ol>
					<p className={s.deadline}>
						<span aria-hidden='true'>⏳</span>
						<span>
							<strong>Use your code by 7 October 2026.</strong> Registration for the last State Olympiad date (11 Oct)
							closes then.
						</span>
					</p>
				</div>
			</section>

			<section className={s.formBand}>
				<div className={`${s.wrap} ${s.formGrid}`}>
					<div>
						<span className={s.eyebrow}>Register</span>
						<h2 className={s.h2}>
							Your seat starts with <em>one form.</em>
						</h2>
						<p className={s.lead}>
							Just the student&apos;s name and a WhatsApp number. Everything else, from your Olympiad access code to
							hackathon logistics, comes to you on WhatsApp.
						</p>
					</div>
					<RegistrationForm amount={offer.amount} active={offer.active} />
				</div>
			</section>

			<section className={s.section}>
				<div className={s.wrap}>
					<div className={s.sectionHead}>
						<span className={s.sectionEyebrow}>Questions</span>
						<h2 className={s.h2}>Frequently asked</h2>
					</div>
					<div className={s.faq}>
						{FAQ.map(({ q, a }) => (
							<details key={q} className={s.faqItem}>
								<summary>{q}</summary>
								<p>{a}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<StickyCta label={price ? `Register · ${price}` : 'Register'} />
		</main>
	);
}
