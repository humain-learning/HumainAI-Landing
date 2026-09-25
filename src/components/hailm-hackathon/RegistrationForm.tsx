'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { hailmRegisterSchema } from '@/lib/schemas/hailmHackathon';

type Props = { amount: number | null; active: boolean };

type FieldErrors = { fullName?: string; mobile?: string };

const inr = (n: number) => `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

const inputClass =
	'h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20';
const labelClass = 'grid gap-1.5 text-[12px] font-semibold text-charcoal';
const errorClass = 'text-[11px] text-red-600';

export default function RegistrationForm({ amount, active }: Props) {
	const router = useRouter();
	const [fullName, setFullName] = useState('');
	const [mobile, setMobile] = useState('');
	const [errors, setErrors] = useState<FieldErrors>({});
	const [formError, setFormError] = useState('');
	const [busy, setBusy] = useState(false);

	if (!active || !amount) {
		return (
			<div id="register" className="rounded-2xl border border-[#eeeeee] bg-[#f9f8f4] p-6 sm:p-8">
				<h3 className="font-display text-xl font-bold text-charcoal">Registrations open soon</h3>
				<p className="mt-2 font-sans text-sm leading-relaxed text-charcoal/70">
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
				setBusy(false);
				return;
			}

			// This number has already paid — don't send them to pay again, just show their code.
			if (data.status === 'paid') {
				goToConfirmation(data.token);
				return;
			}

			// Hand off to the hosted Razorpay Payment Page, prefilled with name, phone and
			// registration id. Payment is confirmed by Razorpay's signed webhook, not by the browser.
			window.location.assign(data.paymentUrl);
			// busy stays on while the browser leaves the page
		} catch {
			setFormError("We couldn't reach our servers. Check your connection and try again.");
			setBusy(false);
		}
	}

	return (
		<div id="register" className="rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm shadow-charcoal/[0.03] sm:p-8">
			<h3 className="font-display text-xl font-bold text-charcoal">Register for the HAILM Hackathon</h3>
			<p className="mt-1 font-sans text-sm text-charcoal/60">Two details, then you&apos;ll pay securely on Razorpay.</p>

			<form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4">
				{formError ? (
					<div role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
						{formError}
					</div>
				) : null}

				<label className={labelClass} htmlFor="hh-name">
					Student&apos;s full name
					<input
						id="hh-name"
						name="fullName"
						className={inputClass}
						autoComplete="name"
						placeholder="e.g. Aarav Sharma"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						aria-invalid={Boolean(errors.fullName)}
						aria-describedby={errors.fullName ? 'hh-name-err' : undefined}
					/>
					{errors.fullName ? (
						<span id="hh-name-err" className={errorClass}>
							{errors.fullName}
						</span>
					) : null}
				</label>

				<label className={labelClass} htmlFor="hh-mobile">
					WhatsApp number
					<div className="flex h-11 items-stretch overflow-hidden rounded-[10px] border border-[#dddddd] bg-white transition focus-within:border-sage focus-within:ring-2 focus-within:ring-sage/20">
						<span className="flex items-center border-r border-[#dddddd] bg-[#fafafa] px-3 text-sm font-normal text-charcoal/60" aria-hidden="true">
							+91
						</span>
						<input
							id="hh-mobile"
							name="mobile"
							className="min-w-0 flex-1 border-0 px-3 text-sm font-normal outline-none"
							type="tel"
							inputMode="numeric"
							autoComplete="tel-national"
							placeholder="98765 43210"
							maxLength={14}
							value={mobile}
							onChange={(e) => setMobile(e.target.value.replace(/[^\d\s]/g, ''))}
							aria-invalid={Boolean(errors.mobile)}
							aria-describedby="hh-mobile-hint"
						/>
					</div>
					{errors.mobile ? <span className={errorClass}>{errors.mobile}</span> : null}
					<p id="hh-mobile-hint" className="flex items-start gap-1.5 text-[11px] font-normal text-charcoal/60">
						<span aria-hidden="true" className="text-sage">
							✓
						</span>
						<span>
							Please give the <b className="text-charcoal">correct WhatsApp number</b>. Your Olympiad access code and
							all hackathon details will be sent here.
						</span>
					</p>
				</label>

				<div className="flex items-center justify-between rounded-xl bg-sage/10 px-4 py-3 font-sans text-sm text-charcoal">
					<span>Total, incl. GST</span>
					<b className="font-display">{inr(amount)}</b>
				</div>

				<button
					type="submit"
					disabled={busy}
					className="flex items-center justify-center rounded-full bg-terracotta py-3.5 font-display text-base font-bold text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:bg-[#df935c] hover:shadow-lg hover:shadow-terracotta/30 disabled:cursor-not-allowed disabled:opacity-60"
				>
					{busy ? 'Taking you to Razorpay…' : `Continue to pay ${inr(amount)}`}
				</button>
				<p className="text-center text-[11px] font-normal text-charcoal/50">
					Hackathon access in Delhi + 1 State + 1 National Olympiad included in this amount. Payments are processed
					securely by Razorpay.
				</p>
			</form>
		</div>
	);
}
