'use client';

import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { hailmRegisterSchema } from '@/lib/schemas/hailmHackathon';
import s from './hailm.module.css';

// Typed locally rather than via `declare global`, so the existing checkout's Window typing is untouched.
type RazorpayCtor = new (options: Record<string, unknown>) => { open: () => void; on: (e: string, cb: () => void) => void };
const getRazorpay = () => (window as unknown as { Razorpay?: RazorpayCtor }).Razorpay;

type Props = { amount: number | null; active: boolean };

type FieldErrors = { fullName?: string; mobile?: string };

const inr = (n: number) => `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

export default function RegistrationForm({ amount, active }: Props) {
	const router = useRouter();
	const [fullName, setFullName] = useState('');
	const [mobile, setMobile] = useState('');
	const [errors, setErrors] = useState<FieldErrors>({});
	const [formError, setFormError] = useState('');
	const [busy, setBusy] = useState(false);

	if (!active || !amount) {
		return (
			<div className={s.formCard} id='register'>
				<h3 className={s.formTitle}>Registrations open soon</h3>
				<p className={s.closed}>
					We&apos;re finalising the details. Check back shortly, or ask your Humain Champs instructor for the
					registration link.
				</p>
			</div>
		);
	}

	const goToConfirmation = (token: string) => router.push(`/hailm-hackathon/confirmation?token=${encodeURIComponent(token)}`);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setFormError('');
		const parsed = hailmRegisterSchema.safeParse({ fullName, mobile });
		if (!parsed.success) {
			const next: FieldErrors = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0] as keyof FieldErrors;
				next[key] ??= issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});

		const Razorpay = getRazorpay();
		if (!Razorpay) {
			setFormError('The payment window is still loading. Please try again in a moment.');
			return;
		}

		setBusy(true);
		try {
			const res = await fetch('/api/hailm-hackathon/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(parsed.data),
			});
			const data = await res.json();
			if (!res.ok) {
				setFormError(data.error ?? 'Something went wrong. Please try again.');
				return;
			}

			// This number has already paid — don't charge twice, just show their code.
			if (data.status === 'paid') {
				goToConfirmation(data.token);
				return;
			}

			const rzp = new Razorpay({
				key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
				order_id: data.order.id,
				amount: data.order.amount,
				currency: data.order.currency,
				name: 'Humain Learning',
				description: 'HAILM Hackathon + 1 State + 1 National Olympiad',
				image: '/assets/hailm-hackathon/hailm-seal.png',
				prefill: { name: data.prefill.name, contact: data.prefill.contact },
				notes: { registration: data.registration },
				theme: { color: '#243358' },
				// Payment is confirmed server-side by the signed Razorpay webhook; the confirmation
				// page polls for it. This handler only moves the student along.
				handler: () => goToConfirmation(data.token),
				modal: {
					ondismiss: () => {
						setBusy(false);
						setFormError('Payment was not completed. You can try again — your details are saved.');
					},
				},
			});
			rzp.on('payment.failed', () => {
				setFormError('That payment did not go through. No money was taken for a failed attempt — please try again.');
			});
			rzp.open();
		} catch {
			setFormError("We couldn't reach our servers. Check your connection and try again.");
		} finally {
			setBusy(false);
		}
	}

	return (
		<div className={s.formCard} id='register'>
			<Script src='https://checkout.razorpay.com/v1/checkout.js' strategy='lazyOnload' />
			<h3 className={s.formTitle}>Register for the HAILM Hackathon</h3>
			<p className={s.formSub}>Two details, then secure payment on Razorpay.</p>

			<form onSubmit={onSubmit} noValidate>
				{formError ? (
					<div className={s.formError} role='alert'>
						{formError}
					</div>
				) : null}

				<div className={s.field}>
					<label className={s.label} htmlFor='hh-name'>
						Student&apos;s full name
					</label>
					<input
						id='hh-name'
						name='fullName'
						className={s.input}
						autoComplete='name'
						placeholder='e.g. Aarav Sharma'
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						aria-invalid={Boolean(errors.fullName)}
						aria-describedby={errors.fullName ? 'hh-name-err' : undefined}
					/>
					{errors.fullName ? (
						<span id='hh-name-err' className={s.fieldError}>
							{errors.fullName}
						</span>
					) : null}
				</div>

				<div className={s.field}>
					<label className={s.label} htmlFor='hh-mobile'>
						WhatsApp number
					</label>
					<div className={s.phoneRow}>
						<span className={s.phonePrefix} aria-hidden='true'>
							+91
						</span>
						<input
							id='hh-mobile'
							name='mobile'
							className={s.phoneInput}
							type='tel'
							inputMode='numeric'
							autoComplete='tel-national'
							placeholder='98765 43210'
							maxLength={14}
							value={mobile}
							onChange={(e) => setMobile(e.target.value.replace(/[^\d\s]/g, ''))}
							aria-invalid={Boolean(errors.mobile)}
							aria-describedby='hh-mobile-hint'
						/>
					</div>
					{errors.mobile ? <span className={s.fieldError}>{errors.mobile}</span> : null}
					<p id='hh-mobile-hint' className={s.hint}>
						<span aria-hidden='true'>✓</span>
						<span>
							Please give the <b>correct WhatsApp number</b>. Your Olympiad access code and all hackathon details
							will be sent here.
						</span>
					</p>
				</div>

				<div className={s.payLine}>
					<span>Total, incl. GST</span>
					<b>{inr(amount)}</b>
				</div>

				<button type='submit' className={s.formBtn} disabled={busy}>
					{busy ? 'Opening secure payment…' : `Pay ${inr(amount)} & register`}
				</button>
				<p className={s.fine}>
					Hackathon access in Delhi + 1 State + 1 National Olympiad included in this amount. Payments are processed
					securely by Razorpay.
				</p>
			</form>
		</div>
	);
}
