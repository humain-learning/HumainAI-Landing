

'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

type BatchOption = {
	id: string;
	name: string;
	startDate: string;
	soldOut?: boolean;
	limitedSeats?: boolean;
};

type CheckoutProps = {
	courseName?: string;
	courseDescription?: string;
	courseId?: string | number;
	batchesApiUrl?: string;
	batchesQueryParamName?: string;
	basePrice?: number;
	discountAmount?: number;
	taxPercent?: number;
	onSubmit?: (formData: CheckoutForm) => void;
};

type PersonDetails = {
	firstName: string;
	lastName: string;
	email: string;
	mobile: string;
	city?: string;
};

type CheckoutForm = {
	billing: PersonDetails;
	learners: PersonDetails[];
	sameAsBilling: boolean;
	batchId: string;
	seatCount: number;
	couponCode: string;
};

const createEmptyLearner = (): PersonDetails => ({
	firstName: '',
	lastName: '',
	email: '',
	mobile: '',
	city: '',
});

const initialForm: CheckoutForm = {
	billing: {
		firstName: '',
		lastName: '',
		email: '',
		mobile: '',
		city: '',
	},
	learners: [createEmptyLearner()],
	sameAsBilling: false,
	batchId: '',
	seatCount: 1,
	couponCode: '',
};

const paramAliases = {
	billing: {
		firstName: ['billingFirstName', 'firstName', 'parentFirstName'],
		lastName: ['billingLastName', 'lastName', 'parentLastName'],
		email: ['billingEmail', 'email', 'mail'],
		mobile: ['billingMobile', 'mobile', 'phone', 'contact'],
		city: ['billingCity', 'city', 'location'],
	},
	learner: {
		firstName: ['learnerFirstName', 'studentFirstName'],
		lastName: ['learnerLastName', 'studentLastName'],
		email: ['learnerEmail', 'studentEmail'],
		mobile: ['learnerMobile', 'studentMobile'],
		city: ['learnerCity', 'studentCity'],
	},
	sameAsBilling: ['sameAsBilling'],
	batchId: ['batchId', 'batch', 'selectedBatch'],
	seatCount: ['seatCount', 'seats'],
	couponCode: ['coupon', 'couponCode', 'code'],
};

const readParamValue = (
	params: URLSearchParams,
	aliases: string[]
): string => {
	for (const key of aliases) {
		const value = params.get(key);
		if (value && value.trim()) {
			return value.trim();
		}
	}

	return '';
};

const normalizeBatch = (batch: Record<string, unknown>, index: number): BatchOption => {
	const id = String(batch.id ?? batch.name ?? `batch-${index + 1}`);
	const startDate = String(
		batch.startDate ?? batch.start_date ?? batch.start ?? 'Date to be announced'
	);

	return {
		id,
		name: String(batch.name ?? `Batch ${index + 1}`),
		startDate,
		soldOut: Boolean(batch.sold_out ?? batch.soldOut),
		limitedSeats: Boolean(batch.limited_seats ?? batch.limitedSeats),
	};
};

const isPersonValid = (person: PersonDetails) => {
	return (
		person.firstName.trim().length > 1 &&
		person.lastName.trim().length > 0 &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email) &&
		/^\d{10}$/.test(person.mobile)
	);
};

const isBillingValid = (person: PersonDetails) => {
	return isPersonValid(person) && (person.city?.trim().length ?? 0) > 1;
};

export const CheckOut = ({
	courseName = 'Humain Champs',
	courseDescription = 'A live, cohort-based AI learning journey for students.',
	courseId,
	batchesApiUrl,
	batchesQueryParamName = 'course',
	basePrice = 10000,
	discountAmount = 0,
	taxPercent = 18,
	onSubmit,
}: CheckoutProps) => {
	const [form, setForm] = useState<CheckoutForm>(initialForm);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [batches, setBatches] = useState<BatchOption[]>([]);
	const [isLoadingBatches, setIsLoadingBatches] = useState(false);
	const [batchError, setBatchError] = useState('');
	const formId = 'checkout-form';

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const requestedBatchId = readParamValue(params, paramAliases.batchId);
		const requestedSeatCount = Number(readParamValue(params, paramAliases.seatCount));
		const sameAsBillingValue = readParamValue(params, paramAliases.sameAsBilling);

		setForm((prev) => ({
			...prev,
			billing: {
				firstName:
					prev.billing.firstName ||
					readParamValue(params, paramAliases.billing.firstName),
				lastName:
					prev.billing.lastName ||
					readParamValue(params, paramAliases.billing.lastName),
				email:
					prev.billing.email || readParamValue(params, paramAliases.billing.email),
				mobile:
					prev.billing.mobile ||
					readParamValue(params, paramAliases.billing.mobile),
				city:
					prev.billing.city || readParamValue(params, paramAliases.billing.city),
			},
			learners: [
				{
					firstName:
						prev.learners[0]?.firstName ||
						readParamValue(params, paramAliases.learner.firstName),
					lastName:
						prev.learners[0]?.lastName ||
						readParamValue(params, paramAliases.learner.lastName),
					email:
						prev.learners[0]?.email ||
						readParamValue(params, paramAliases.learner.email),
					mobile:
						prev.learners[0]?.mobile ||
						readParamValue(params, paramAliases.learner.mobile),
					city:
						prev.learners[0]?.city ||
						readParamValue(params, paramAliases.learner.city),
				},
			],
			sameAsBilling:
				prev.sameAsBilling ||
				['true', '1', 'yes'].includes(sameAsBillingValue.toLowerCase()),
			batchId: prev.batchId || requestedBatchId,
			seatCount:
				prev.seatCount || (requestedSeatCount > 0 ? requestedSeatCount : 1),
			couponCode:
				prev.couponCode || readParamValue(params, paramAliases.couponCode),
		}));
	}, []);

	useEffect(() => {
		if (!batchesApiUrl || courseId === undefined || courseId === null || courseId === '') {
			return;
		}

		const controller = new AbortController();
		const params = new URLSearchParams({
			[batchesQueryParamName]: String(courseId),
		});

		const fetchBatches = async () => {
			setIsLoadingBatches(true);
			setBatchError('');

			try {
				const response = await fetch(`${batchesApiUrl}?${params.toString()}`, {
					signal: controller.signal,
				});

				if (!response.ok) {
					throw new Error('Could not load available batches right now.');
				}

				const data = await response.json();
				const rawBatches: Record<string, unknown>[] = Array.isArray(data)
					? data
					: Array.isArray(data?.message)
						? data.message
						: Array.isArray(data?.batches)
							? data.batches
							: [];
				const nextBatches = rawBatches.map((batch: Record<string, unknown>, index: number) =>
					normalizeBatch(batch, index)
				);

				setBatches(nextBatches);
				setForm((prev) => {
					if (prev.batchId || nextBatches.length === 0) {
						return prev;
					}

					const firstAvailableBatch =
						nextBatches.find((batch: BatchOption) => !batch.soldOut) ?? nextBatches[0];

					return {
						...prev,
						batchId: firstAvailableBatch?.id ?? '',
					};
				});
			} catch (error) {
				if (controller.signal.aborted) {
					return;
				}

				setBatchError(
					error instanceof Error
						? error.message
						: 'Could not load available batches right now.'
				);
			} finally {
				if (!controller.signal.aborted) {
					setIsLoadingBatches(false);
				}
			}
		};

		void fetchBatches();

		return () => controller.abort();
	}, [batchesApiUrl, batchesQueryParamName, courseId]);

	useEffect(() => {
		setForm((prev) => ({
			...prev,
			learners: Array.from({ length: prev.seatCount }, (_, index) => {
				if (prev.sameAsBilling) {
					return {
						...prev.billing,
					};
				}

				return prev.learners[index] ?? createEmptyLearner();
			}),
		}));
	}, [form.billing, form.sameAsBilling, form.seatCount]);

	useEffect(() => {
		if (form.seatCount <= 1 || !form.sameAsBilling) {
			return;
		}

		setForm((prev) => ({
			...prev,
			sameAsBilling: false,
		}));
	}, [form.sameAsBilling, form.seatCount]);

	const pricing = useMemo(() => {
		const subtotal = Math.max(basePrice * form.seatCount - discountAmount, 0);
		const taxAmount = Math.round((subtotal * taxPercent) / 100);
		const total = subtotal + taxAmount;

		return { subtotal, taxAmount, total };
	}, [basePrice, discountAmount, form.seatCount, taxPercent]);

	const isFormValid =
		isBillingValid(form.billing) &&
		(form.sameAsBilling || form.learners.every((learner) => isPersonValid(learner))) &&
		form.seatCount > 0 &&
		Boolean(form.batchId);

	const selectedBatch = batches.find((batch) => batch.id === form.batchId);

	const updatePersonField = (
		section: 'billing',
		field: keyof PersonDetails,
		value: string
	) => {
		setForm((prev) => ({
			...prev,
			[section]: {
				...prev[section],
				[field]: field === 'mobile' ? value.replace(/\D/g, '') : value,
			},
		}));
	};

	const updateLearnerField = (
		index: number,
		field: keyof PersonDetails,
		value: string
	) => {
		setForm((prev) => ({
			...prev,
			learners: prev.learners.map((learner, learnerIndex) =>
				learnerIndex === index
					? {
						...learner,
						[field]: field === 'mobile' ? value.replace(/\D/g, '') : value,
					}
					: learner
			),
		}));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!isFormValid) {
			return;
		}

		setIsSubmitted(true);
		onSubmit?.(form);
	};

	const personFields = (
		person: PersonDetails,
		heading: string,
		description: string,
		onFieldChange: (field: keyof PersonDetails, value: string) => void,
		showCity = false
	) => (
		<div className="rounded-[24px] border border-[#ececec] bg-[#fcfcfc] p-4 sm:p-5">
			<div className="mb-4">
				<h2 className="text-xl font-bold text-charcoal sm:text-2xl">{heading}</h2>
				<p className="mt-1 text-sm leading-6 text-[#666666]">{description}</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<label className="grid gap-1.5 text-sm font-semibold text-charcoal">
					First Name
					<input
						type="text"
						required
						value={person.firstName}
						onChange={(event) => onFieldChange('firstName', event.target.value)}
						placeholder="First name"
						className="h-11 rounded-xl border border-[#dedede] px-4 text-sm text-charcoal placeholder:text-[#999999] focus:border-sage focus:outline-none"
					/>
				</label>

				<label className="grid gap-1.5 text-sm font-semibold text-charcoal">
					Last Name
					<input
						type="text"
						required
						value={person.lastName}
						onChange={(event) => onFieldChange('lastName', event.target.value)}
						placeholder="Last name"
						className="h-11 rounded-xl border border-[#dedede] px-4 text-sm text-charcoal placeholder:text-[#999999] focus:border-sage focus:outline-none"
					/>
				</label>

				<label className="grid gap-1.5 text-sm font-semibold text-charcoal">
					Email
					<input
						type="email"
						required
						value={person.email}
						onChange={(event) => onFieldChange('email', event.target.value)}
						placeholder="you@example.com"
						className="h-11 rounded-xl border border-[#dedede] px-4 text-sm text-charcoal placeholder:text-[#999999] focus:border-sage focus:outline-none"
					/>
				</label>

				<label className="grid gap-1.5 text-sm font-semibold text-charcoal">
					Mobile Number
					<input
						type="tel"
						required
						maxLength={10}
						value={person.mobile}
						onChange={(event) => onFieldChange('mobile', event.target.value)}
						placeholder="10-digit number"
						className="h-11 rounded-xl border border-[#dedede] px-4 text-sm text-charcoal placeholder:text-[#999999] focus:border-sage focus:outline-none"
					/>
				</label>

				{showCity && (
					<label className="grid gap-1.5 text-sm font-semibold text-charcoal sm:col-span-2">
						City
						<input
							type="text"
							required
							value={person.city ?? ''}
							onChange={(event) => onFieldChange('city', event.target.value)}
							placeholder="City"
							className="h-11 rounded-xl border border-[#dedede] px-4 text-sm text-charcoal placeholder:text-[#999999] focus:border-sage focus:outline-none"
						/>
					</label>
				)}
			</div>
		</div>
	);

	return (
		<section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 lg:px-10">
			<div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#eef6df] blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#fbf4ec] blur-3xl" />

			<div className="relative mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.3fr_0.9fr]">
				<div className="rounded-[28px] border border-[#e9e9e9] bg-white p-5 shadow-[0_14px_45px_rgba(170,193,145,0.12)] sm:p-7">
					<p className="text-[11px] font-semibold tracking-[0.14em] text-sage uppercase">
						Checkout
					</p>
					<h1 className="mt-2 text-3xl leading-tight font-bold text-charcoal sm:text-4xl">
						Complete Your Enrollment
					</h1>
					<p className="mt-3 max-w-xl text-sm leading-6 text-[#666666] sm:text-base">
						Fill in your details to reserve your seat a batch of your choice.
					</p>

					<form id={formId} className="mt-6 grid gap-4" onSubmit={handleSubmit}>
						{personFields(
							form.billing,
							'Billing Details',
							'These details will be used for invoicing and payment communication.',
							(field, value) => updatePersonField('billing', field, value),
							true
						)}

						<div className="rounded-[24px] border border-[#ececec] bg-[#fcfcfc] p-4 sm:p-5">
							<div className="mb-4">
								<h2 className="text-xl font-bold text-charcoal sm:text-2xl">
									Batch & Seats
								</h2>
								<p className="mt-1 text-sm leading-6 text-[#666666]">
									Choose the preferred batch and the number of seats to reserve.
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								<label className="grid gap-1.5 text-sm font-semibold text-charcoal">
									Choose Batch
									<select
										required
										value={form.batchId}
										onChange={(event) =>
											setForm((prev) => ({ ...prev, batchId: event.target.value }))
										}
										className="h-11 rounded-xl border border-[#dedede] bg-white px-4 text-sm text-charcoal focus:border-sage focus:outline-none"
									>
										<option value="">
											{isLoadingBatches ? 'Loading batches...' : 'Select a batch'}
										</option>
										{batches.map((batch) => (
											<option
												key={batch.id}
												value={batch.id}
												disabled={batch.soldOut}
											>
												{batch.name} - {batch.startDate}
												{batch.soldOut ? ' (Sold out)' : ''}
											</option>
										))}
									</select>
								</label>

								<label className="grid gap-1.5 text-sm font-semibold text-charcoal">
									Number of Seats
									<select
										required
										value={String(form.seatCount)}
										onChange={(event) =>
											setForm((prev) => ({
												...prev,
												seatCount: Number(event.target.value),
											}))
										}
										className="h-11 rounded-xl border border-[#dedede] bg-white px-4 text-sm text-charcoal focus:border-sage focus:outline-none"
									>
										{[1, 2, 3, 4, 5].map((count) => (
											<option key={count} value={count}>
												{count}
											</option>
										))}
									</select>
								</label>
							</div>

							{batchError && (
								<p className="mt-3 rounded-xl bg-[#fbf4ec] px-3 py-2 text-sm text-[#8a5b38]">
									{batchError}
								</p>
							)}

							{selectedBatch && (
								<div className="mt-3 rounded-xl bg-[#f6f9f0] px-4 py-3 text-sm text-[#5f5f5f]">
									<div className="font-semibold text-charcoal">{selectedBatch.name}</div>
									<div className="mt-1">Starts {selectedBatch.startDate}</div>
									{selectedBatch.limitedSeats && (
										<div className="mt-1 text-sage">Limited seats available</div>
									)}
								</div>
							)}
						</div>

						<div className="rounded-[24px] border border-[#ececec] bg-[#fcfcfc] p-4 sm:p-5">
							<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
								<div>
									<h2 className="text-xl font-bold text-charcoal sm:text-2xl">
										Learner Details
									</h2>
									<p className="mt-1 text-sm leading-6 text-[#666666]">
										These details will appear on the LMS for the learner account.
									</p>
								</div>

								<label className="flex items-center gap-2 text-sm font-semibold text-charcoal">
									<input
										type="checkbox"
										checked={form.sameAsBilling}
										disabled={form.seatCount > 1}
										onChange={(event) =>
											setForm((prev) => ({
												...prev,
												sameAsBilling: event.target.checked,
											}))
										}
										className="h-4 w-4 rounded border-[#cfcfcf] accent-sage focus:ring-sage disabled:cursor-not-allowed disabled:opacity-50"
									/>
									Same as Billing Details
								</label>
							</div>

							{form.seatCount > 1 && (
								<p className="mt-3 text-sm leading-6 text-[#666666]">
									Same as Billing Details is available only for single-seat bookings.
								</p>
							)}

							{form.sameAsBilling ? null : (
								<div className="mt-4">
									<div className="grid gap-4">
										{form.learners.map((learner, index) =>
											personFields(
												learner,
												`Learner ${index + 1}`,
												'Add the learner information exactly as it should appear inside the LMS.',
												(field, value) => updateLearnerField(index, field, value)
											)
										)}
									</div>
								</div>
							)}
						</div>

						{isSubmitted && (
							<p className="rounded-xl bg-[#eef6df] px-3 py-2 text-sm text-[#3f5f27]">
								Details captured. You can now attach your payment integration.
							</p>
						)}

					</form>
				</div>

				<aside className="h-fit rounded-[28px] border border-[#e9e9e9] bg-[#f9fbf6] p-5 shadow-[0_12px_40px_rgba(170,193,145,0.14)] sm:p-6">
					<p className="text-[11px] font-semibold tracking-[0.14em] text-terracotta uppercase">
						Order Summary
					</p>
					<h2 className="mt-2 text-2xl leading-tight font-bold text-charcoal">
						{courseName}
					</h2>
					<p className="mt-3 text-sm leading-6 text-[#666666]">
						{courseDescription}
					</p>

					<label className="mt-6 grid gap-1.5 text-sm font-semibold text-charcoal">
						Coupon Code
						<input
							type="text"
							value={form.couponCode}
							onChange={(event) =>
								setForm((prev) => ({
									...prev,
									couponCode: event.target.value.toUpperCase(),
								}))
							}
							placeholder="Enter coupon code"
							className="h-11 rounded-xl border border-[#dedede] bg-white px-4 text-sm text-charcoal placeholder:text-[#999999] focus:border-sage focus:outline-none"
						/>
					</label>

					<div className="mt-6 space-y-3 border-t border-[#e2e8d8] pt-4 text-sm">
						<div className="flex items-center justify-between text-[#555555]">
							<span>
								Program Fee {form.seatCount > 1 ? `x ${form.seatCount}` : ''}
							</span>
							<span>Rs. {basePrice.toLocaleString('en-IN')}</span>
						</div>
						{selectedBatch && (
							<div className="flex items-center justify-between text-[#555555]">
								<span>Selected Batch</span>
								<span className="max-w-[55%] text-right">{selectedBatch.name}</span>
							</div>
						)}
						{discountAmount > 0 && (
							<div className="flex items-center justify-between text-[#3d7e3d]">
								<span>Discount</span>
								<span>- Rs. {discountAmount.toLocaleString('en-IN')}</span>
							</div>
						)}
						<div className="flex items-center justify-between text-[#555555]">
							<span>18% GST</span>
							<span>Rs. {pricing.taxAmount.toLocaleString('en-IN')}</span>
						</div>
					</div>

					<div className="mt-4 rounded-2xl bg-white px-4 py-3">
						<div className="flex items-center justify-between text-charcoal">
							<span className="text-sm font-semibold">Total Payable</span>
							<span className="text-xl font-bold text-sage">
								Rs. {pricing.total.toLocaleString('en-IN')}
							</span>
						</div>
					</div>

					<button
						type="submit"
						form={formId}
						disabled={!isFormValid}
						className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-sage px-6 text-sm font-bold text-white transition hover:bg-sage/90 disabled:cursor-not-allowed disabled:opacity-60"
					>
						Continue to Payment
					</button>

					<ul className="mt-5 grid gap-2 text-xs leading-5 text-[#6b6b6b]">
						<li>Seat is confirmed after successful payment.</li>
						<li>Confirmation is sent on email and WhatsApp.</li>
						<li>Need help? Reach us at hi@humainlearning.ai</li>
					</ul>
				</aside>
			</div>
		</section>
	);
};

export default CheckOut;