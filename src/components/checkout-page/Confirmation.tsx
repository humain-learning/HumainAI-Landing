'use client';

import { useEffect, useState } from 'react';

type ConfirmationPageProps = {
	receipt: string;
	batchName?: string;
	startDate?: string;
	courseName?: string;
};

type Learner = {
	name: string;
	first_name: string;
	last_name: string;
	email: string;
	mobile_no: string;
};

type Order = {
	name: string;
	payment_status: string | null;
	amount: number;
	seat_count: number;
	billing_email: string;
	billing_mobile_no: string;
	billing_city: string;
	learners: Learner[];
};

export default function PaymentConfirmation({
	receipt,
	batchName,
	startDate,
	courseName,
}: ConfirmationPageProps) {
	const [order, setOrder] = useState<Order | null>(null);

	useEffect(() => {
		let cancelled = false;

		const pollOrderStatus = async () => {
			try {
				const response = await fetch(
					`/api/order-status?receipt=${receipt}`,
					{
						cache: 'no-store',
					}
				);

				if (!response.ok) {
					throw new Error('Failed to fetch order status');
				}

				const data = await response.json();

				if (cancelled) return;

				setOrder(data);

				if (
					data.payment_status === 'Captured' ||
					data.payment_status === 'Failed'
				) {
					return;
				}

				setTimeout(pollOrderStatus, 5000);
			} catch (error) {
				console.error(error);

				if (!cancelled) {
					setTimeout(pollOrderStatus, 5000);
				}
			}
		};

		pollOrderStatus();

		return () => {
			cancelled = true;
		};
	}, [receipt]);

	const paymentStatus = order?.payment_status;

	return (
		<div className="relative min-h-screen bg-white">
			<div className="pointer-events-none fixed top-0 right-0 h-100 w-100 rounded-full bg-[#eef6df] blur-2xl" />

			<div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-10">
				<div className="w-full rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
					<div className="flex flex-col items-center text-center">
						<div className="relative mb-8">
							{paymentStatus === 'Captured' ? (
								<div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
									<svg
										viewBox="0 0 24 24"
										className="h-12 w-12 text-green-600"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M20 6L9 17L4 12" />
									</svg>
								</div>
							) : paymentStatus === 'Failed' ? (
								<div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
									<svg
										viewBox="0 0 24 24"
										className="h-12 w-12 text-red-600"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M18 6L6 18" />
										<path d="M6 6L18 18" />
									</svg>
								</div>
							) : (
								<>
									<div className="h-24 w-24 rounded-full border-4 border-slate-200" />

									<div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-sage" />

									<div className="absolute inset-3 rounded-full bg-[#f6f9f0]" />
								</>
							)}
						</div>

						<p
							className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
								paymentStatus === 'Failed'
									? 'text-red-500'
									: paymentStatus === 'Captured'
										? 'text-green-600'
										: 'text-sage'
							}`}
						>
							{paymentStatus === 'Captured'
								? 'Payment Confirmed'
								: paymentStatus === 'Failed'
									? 'Payment Failed'
									: 'Payment Processing'}
						</p>

						<h1 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">
							{paymentStatus === 'Captured'
								? 'Registration Complete'
								: paymentStatus === 'Failed'
									? 'Payment Failed'
									: 'Confirming Your Payment'}
						</h1>

						<p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
							{paymentStatus === 'Captured'
								? 'Your payment has been verified successfully and your registration is complete.'
								: paymentStatus === 'Failed'
									? 'We could not verify your payment. If funds were deducted, they will be refunded according to your bank or payment provider timelines.'
									: 'Your payment has been received. We are currently verifying the transaction and generating your registration details.'}
						</p>

						{paymentStatus === 'Captured' && order ? (
							<div className="mt-10 w-full space-y-6 text-left">
								<div className="rounded-2xl border border-green-200 bg-green-50 p-6">
									<h2 className="mb-4 text-lg font-semibold text-green-800">
										Registration Summary
									</h2>

									<div className="grid gap-4 sm:grid-cols-2">
										{courseName && (
											<div>
												<p className="text-xs text-slate-500">
													Course
												</p>
												<p className="font-medium">
													{courseName}
												</p>
											</div>
										)}

										{batchName && (
											<div>
												<p className="text-xs text-slate-500">
													Batch
												</p>
												<p className="font-medium">
													{batchName}
												</p>
											</div>
										)}

										{startDate && (
											<div>
												<p className="text-xs text-slate-500">
													Start Date
												</p>
												<p className="font-medium">
													{startDate}
												</p>
											</div>
										)}

										<div>
											<p className="text-xs text-slate-500">
												Seats Reserved
											</p>
											<p className="font-medium">
												{order.seat_count}
											</p>
										</div>

										<div>
											<p className="text-xs text-slate-500">
												Amount Paid
											</p>
											<p className="font-medium">
												₹
												{order.amount.toLocaleString(
													'en-IN'
												)}
											</p>
										</div>

										<div>
											<p className="text-xs text-slate-500">
												Reference Number
											</p>
											<p className="font-medium">
												{order.name}
											</p>
										</div>
									</div>
								</div>

								<div className="rounded-2xl border border-slate-200 p-6">
									<h2 className="mb-4 text-lg font-semibold">
										Contact Information
									</h2>

									<div className="space-y-2">
										<p>{order.billing_email}</p>
										<p>{order.billing_mobile_no}</p>
										<p>{order.billing_city}</p>
									</div>
								</div>

								{order.learners.length > 0 && (
									<div className="rounded-2xl border border-slate-200 p-6">
										<h2 className="mb-4 text-lg font-semibold">
											Registered Learners
										</h2>

										<div className="space-y-4">
											{order.learners.map((learner) => (
												<div
													key={learner.name}
													className="rounded-xl bg-slate-50 p-4"
												>
													<p className="font-medium">
														{learner.first_name}{' '}
														{learner.last_name}
													</p>

													<p className="mt-1 text-sm text-slate-600">
														{learner.email}
													</p>

													<p className="text-sm text-slate-600">
														{learner.mobile_no}
													</p>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						) : (
							<div className="mt-8 w-full rounded-2xl bg-[#f6f9f0] p-5">
								<div className="flex justify-between text-sm">
									<span className="font-medium text-slate-500">
										Receipt
									</span>

									<span className="font-semibold text-slate-900">
										{receipt}
									</span>
								</div>

								<div className="mt-4 text-center text-sm text-slate-500">
									{paymentStatus === 'Failed'
										? 'Payment verification failed.'
										: 'Waiting for confirmation...'}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}