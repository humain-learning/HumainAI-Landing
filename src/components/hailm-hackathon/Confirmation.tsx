'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import s from './hailm.module.css';

type Status = {
	status: 'unpaid' | 'paid' | 'failed';
	firstName?: string;
	code?: string | null;
	codeStatus?: 'Pending' | 'Generated' | 'Failed';
	whatsappStatus?: 'Pending' | 'Sent' | 'Failed' | 'Not Configured';
	error?: string;
};

const POLL_MS = 3000;
const MAX_WAIT_MS = 3 * 60 * 1000;

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
					body.status === 'failed' ||
					res.status === 404 ||
					(body.status === 'paid' && (body.code || body.codeStatus === 'Failed'));
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
				<h1 className={s.confirmTitle}>We couldn&apos;t find that registration</h1>
				<p className={s.confirmBody}>
					This link looks incomplete. If you&apos;ve paid, your code is on its way to your WhatsApp. Otherwise,{' '}
					<Link href='/hailm-hackathon#register'>register here</Link>.
				</p>
			</>
		);
	} else if (data?.status === 'failed') {
		body = (
			<>
				<h1 className={s.confirmTitle}>Your payment didn&apos;t go through</h1>
				<p className={s.confirmBody}>
					No registration was completed. You can try again with the same number — your details are saved.
				</p>
				<Link className={s.btn} href='/hailm-hackathon#register'>
					Try again
				</Link>
			</>
		);
	} else if (data?.status === 'paid') {
		const whatsappSent = data.whatsappStatus === 'Sent';
		body = (
			<>
				<h1 className={s.confirmTitle}>You&apos;re registered{name}!</h1>
				<p className={s.confirmBody}>
					Payment received. Here&apos;s your single-use HAILM Olympiad access code
					{whatsappSent ? ' — we’ve also sent it to your WhatsApp.' : '. It’s on its way to your WhatsApp too.'}
				</p>
				{data.code ? (
					<div className={s.codeBox}>
						<span className={s.code}>{data.code}</span>
						<button type='button' className={s.copyBtn} onClick={() => copy(data.code!)}>
							{copied ? 'Copied' : 'Copy'}
						</button>
					</div>
				) : data.codeStatus === 'Failed' ? (
					<p className={s.deadline}>
						Your payment is safe. We hit a snag generating your code — our team has been alerted and will send it to
						your WhatsApp shortly.
					</p>
				) : (
					<>
						<div className={s.spinner} aria-hidden='true' />
						<p className={s.confirmBody}>Generating your code…</p>
					</>
				)}
				<div className={s.nextSteps}>
					<span>
						<b>Next:</b> use this code on HAILM when you register for the Olympiad. It covers 1 State + 1 National
						Olympiad at no extra cost.
					</span>
					<span>
						<b>Use it by 7 October</b> so you can still book a State Olympiad date (4 or 11 Oct).
					</span>
					<span>
						<b>Hackathon:</b> Delhi, 21 November 2026. Details will follow on WhatsApp.
					</span>
				</div>
			</>
		);
	} else {
		body = (
			<>
				<div className={s.spinner} aria-hidden='true' />
				<h1 className={s.confirmTitle}>Confirming your payment…</h1>
				<p className={s.confirmBody}>
					{timedOut
						? 'This is taking longer than usual. If money was debited, you’re covered — your code will arrive on WhatsApp once Razorpay confirms. You can safely close this page.'
						: 'This usually takes a few seconds. Please keep this page open.'}
				</p>
			</>
		);
	}

	return (
		<div className={s.confirmWrap}>
			<div className={s.confirmCard} aria-live='polite'>
				<Image className={s.confirmSeal} src='/assets/hailm-hackathon/hailm-seal.png' alt='Humain AI Literacy Mission' width={72} height={72} />
				{body}
			</div>
		</div>
	);
}
