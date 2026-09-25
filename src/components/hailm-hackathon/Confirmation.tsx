'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Status = {
	status: 'unpaid' | 'paid';
	firstName?: string;
	code?: string | null;
	codeStatus?: 'Pending' | 'Generated' | 'Failed';
	whatsappStatus?: 'Pending' | 'Sent' | 'Failed' | 'Not Configured';
	error?: string;
};

const POLL_MS = 3000;
const MAX_WAIT_MS = 3 * 60 * 1000;

function Spinner() {
	return <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-sage/20 border-t-sage" aria-hidden="true" />;
}

export default function Confirmation({ token }: { token: string }) {
	const [data, setData] = useState<Status | null>(null);
	const [timedOut, setTimedOut] = useState(false);
	const [copied, setCopied] = useState(false);
	const started = useRef(Date.now());

	useEffect(() => {
		if (!token) return;
		let stop = false;
		let timer: ReturnType<typeof setTimeout>;

		const tick = async () => {
			try {
				const res = await fetch(`/api/hailm-hackathon/status?token=${encodeURIComponent(token)}`, { cache: 'no-store' });
				const body: Status = await res.json();
				if (stop) return;
				setData(body);
				const settled =
					res.status === 404 || (body.status === 'paid' && (body.code || body.codeStatus === 'Failed'));
				if (settled) return;
			} catch {
				/* transient — keep polling */
			}
			if (Date.now() - started.current > MAX_WAIT_MS) {
				setTimedOut(true);
				return;
			}
			timer = setTimeout(tick, POLL_MS);
		};
		tick();
		return () => {
			stop = true;
			clearTimeout(timer);
		};
	}, [token]);

	async function copy(code: string) {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			/* clipboard blocked — the code is user-select:all, so it can still be copied by hand */
		}
	}

	const name = data?.firstName ? `, ${data.firstName}` : '';
	let body: React.ReactNode;

	if (!token || data?.error) {
		body = (
			<>
				<h1 className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">We couldn&apos;t find that registration</h1>
				<p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/70">
					This link looks incomplete. If you&apos;ve paid, your code is on its way to your WhatsApp. Otherwise,{' '}
					<Link href="/hailm-hackathon#register" className="font-semibold text-terracotta underline">
						register here
					</Link>
					.
				</p>
			</>
		);
	} else if (data?.status === 'paid') {
		const whatsappSent = data.whatsappStatus === 'Sent';
		body = (
			<>
				<h1 className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">You&apos;re registered{name}!</h1>
				<p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/70">
					Payment received. Here&apos;s your single-use HAILM Olympiad access code
					{whatsappSent ? ' — we’ve also sent it to your WhatsApp.' : '. It’s on its way to your WhatsApp too.'}
				</p>
				{data.code ? (
					<div className="mt-6 flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-sage/50 bg-sage/10 px-5 py-4">
						<span className="select-all font-display text-xl font-extrabold tracking-wide text-charcoal">{data.code}</span>
						<button
							type="button"
							onClick={() => copy(data.code!)}
							className="shrink-0 rounded-full bg-sage px-4 py-2 font-display text-xs font-bold text-white transition hover:bg-[#9ab081]"
						>
							{copied ? 'Copied' : 'Copy'}
						</button>
					</div>
				) : data.codeStatus === 'Failed' ? (
					<p className="mt-6 rounded-xl bg-terracotta/10 px-4 py-3 font-sans text-sm text-charcoal">
						Your payment is safe. We hit a snag generating your code — our team has been alerted and will send it to
						your WhatsApp shortly.
					</p>
				) : (
					<div className="mt-6 space-y-3">
						<Spinner />
						<p className="text-center font-sans text-sm text-charcoal/70">Generating your code…</p>
					</div>
				)}
				<div className="mt-8 space-y-3 border-t border-[#eeeeee] pt-6 text-left font-sans text-sm text-charcoal/70">
					<p>
						<b className="text-charcoal">Next:</b> use this code on HAILM when you register for the Olympiad. It covers
						1 State + 1 National Olympiad at no extra cost.
					</p>
					<p>
						<b className="text-charcoal">Use it by 7 October</b> so you can still book a State Olympiad date (4 or 11 Oct).
					</p>
					<p>
						<b className="text-charcoal">Hackathon:</b> Delhi, 21 November 2026. Details will follow on WhatsApp.
					</p>
				</div>
			</>
		);
	} else {
		body = (
			<>
				<Spinner />
				<h1 className="mt-4 font-display text-2xl font-extrabold text-charcoal sm:text-3xl">Confirming your payment…</h1>
				<p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/70">
					{timedOut
						? 'This is taking longer than usual. If money was debited, you’re covered — your code will arrive on WhatsApp once Razorpay confirms. You can safely close this page.'
						: 'This usually takes a few seconds. Please keep this page open.'}
				</p>
				{timedOut ? (
					<p className="mt-3 font-sans text-sm text-charcoal/70">
						Haven&apos;t paid yet?{' '}
						<Link href="/hailm-hackathon#register" className="font-semibold text-terracotta underline">
							Go back and register
						</Link>
						.
					</p>
				) : null}
			</>
		);
	}

	return (
		<div className="flex min-h-[70vh] items-center justify-center bg-[#f9f8f4] px-6 py-16">
			<div aria-live="polite" className="w-full max-w-lg rounded-2xl border border-[#eeeeee] bg-white p-8 text-center shadow-sm shadow-charcoal/[0.03] sm:p-10">
				<Image
					className="mx-auto mb-6 h-14 w-14"
					src="/assets/hailm-hackathon/hailm-seal.png"
					alt="Humain AI Literacy Mission"
					width={72}
					height={72}
				/>
				{body}
			</div>
		</div>
	);
}
