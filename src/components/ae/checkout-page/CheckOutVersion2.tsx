'use client';
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useWatch } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import { checkoutSchema } from '@/lib/schemas/CheckOut';
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css'
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import Script from 'next/script';


type BatchList = {
	id: number,
	name: string,
	itinerary: ItineraryItem[]
}
type BillingDetails = {
	firstName: string;
	lastName: string;
	email: string;
	mobile: string;
	city: string;
};
type ItineraryItem = {
	date: string,
	day: string,
	timing: string,
	session: string,
}

type CheckoutFormData = z.input<typeof checkoutSchema>;

type CheckoutProps = {
	templateDetails: TemplateDetails,
	availableBatches: BatchList[],
	billingDetails: BillingDetails,
}
type TemplateDetails = {
	courseName: string,
	courseId: number,
	basePrice: number,
}

export const CheckOutV2 = ({templateDetails, availableBatches, billingDetails}: CheckoutProps) => {
	const router = useRouter();

	const form = useForm<CheckoutFormData>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: {
			billing: billingDetails,
			seatCount: 1,
			courseId: templateDetails.courseId,
			couponCode: null,
		},
		mode: 'onChange',
		reValidateMode: 'onChange',
	})

	const seatCount = useWatch({
		control: form.control,
		name: 'seatCount',
	});

	const { fields, replace } = useFieldArray({
		control: form.control,
		name: 'learners',
	});
	const selectedBatchId = useWatch({
		control: form.control,
		name: 'batchId',
	});
	const couponCodeValue = useWatch({
		control: form.control,
		name: 'couponCode',
	});
	const selectedBatch = availableBatches.find(batch => batch.id === selectedBatchId);

	useEffect(() => {
		const currentLearners = form.getValues('learners') || [];

		replace(
			Array.from({ length: seatCount || 1 }, (_, index) => {
				return (
					currentLearners[index] ?? {
						firstName: '',
						lastName: '',
						email: '',
						mobile: '',
					}
				);
			})
		);
	}, [seatCount]);

	const [discount, setDiscount] = useState(0);
	const [discountType, setDiscountType] = useState<'Percentage' | 'Flat' | null>(null);
	const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
	const [couponSuccessMessage, setCouponSuccessMessage] = useState<string | null>(null);
	const [submitTooltipPosition, setSubmitTooltipPosition] = useState({ x: 0, y: 0 });
	const [appliedCouponCode, setAppliedCouponCode] = useState<string | null>(null);
	const [isCreatingOrder, setIsCreatingOrder] = useState(false);
	const [orderError, setOrderError] = useState('');


	useEffect(() => {
		setCouponSuccessMessage(null);
	}, [couponCodeValue]);

	async function applyCoupon() {
		const couponCode = form.getValues('couponCode')?.toUpperCase().trim();
		if (!couponCode) {
			setCouponSuccessMessage(null);
			form.setError('couponCode', { type: 'manual', message: 'Enter coupon code' });
			return;
		}

		try {
			setIsApplyingCoupon(true);
			setCouponSuccessMessage(null);

			const res = await fetch(
			`/api/validate-coupon?couponCode=${encodeURIComponent(couponCode)}&courseId=${templateDetails.courseId}`
			);
			const data = await res.json();

			if (!res.ok) {
			form.setError('couponCode', {
				type: 'server',
				message: data?.message ?? 'Invalid coupon',
			});
			return;
			}

			form.clearErrors('couponCode');
			setDiscountType(data.type);
			setDiscount(Number(data.discount_value) || 0);
			setCouponSuccessMessage(
				typeof data?.success_message === 'string' ? data.success_message : 'Coupon applied successfully'
			);
			setAppliedCouponCode(couponCode);
		} catch (error) {
			setCouponSuccessMessage(null);
			form.setError('couponCode', {
			type: 'server',
			message: error instanceof Error ? error.message : 'Invalid coupon',
			});
		} finally {
			setIsApplyingCoupon(false);
		}
	}

	function handleRemoveCoupon() {
		form.setValue('couponCode', '');
		form.clearErrors('couponCode');
		setAppliedCouponCode(null);
		setDiscount(0);
		setDiscountType(null);
		setCouponSuccessMessage(null);
	}

	const subtotal = templateDetails.basePrice * seatCount;

	const discountAmount =
		discountType === 'Percentage'
			? (subtotal * discount) / 100
			: discountType === 'Flat'
				? discount
				: 0;

	const finalDiscount = Math.min(discountAmount, subtotal);
	const grandtotal = subtotal - finalDiscount;
	const taxamount = grandtotal * 0.18; // 18% GST
	const toPay = grandtotal + taxamount;
	const isSubmitDisabled = !form.formState.isValid || form.formState.isSubmitting || isCreatingOrder;

	function handleSubmitTooltipMove(event: React.MouseEvent<HTMLDivElement>) {
		const bounds = event.currentTarget.getBoundingClientRect();
		setSubmitTooltipPosition({
			x: event.clientX - bounds.left,
			y: event.clientY - bounds.top,
		});
	}

	const createOrder = async () => {

		setIsCreatingOrder(true);
		setOrderError('');
		
		try {
			const leadId = getCookie('leadId') || null;
			console.log("calling frappe");
			const res = await fetch('/api/create-order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					leadId: leadId,
					amount: toPay,
					currency: 'INR',
					couponCode: appliedCouponCode,
					courseId: templateDetails.courseId,
					batchId: selectedBatchId,
					seatCount: seatCount,
					learners: form.getValues('learners'),
					billing: form.getValues('billing'),
				}),
			});
						

			const data = await res.json();
			console.log("frappe response:", data);
			if (!res.ok) {
				if(data.message.error) {
					setOrderError(`${data.message.error}: ${data.message.message}. Reason: ${data.message.reason}`);
				} else {
					setOrderError("An unknown error occurred. Please try again later.");
				}
				return
			}
			if (leadId != data.message.leadId) {
				setCookie("leadId", data.message.leadId);
			}

			const order = data.message.order;
			console.log("Order created:", order);
			const paymentData = {
				key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
				order_id: order.id,
				receipt: order.receipt,
				amount: order.amount,
				prefill: {
					name: `${form.getValues('billing').firstName} ${form.getValues('billing').lastName}`.trim(),
					email: form.getValues('billing').email,
					contact: form.getValues('billing').mobile,
				},
				theme: {
					backdrop_color: 'AAC191',
				},
				send_sms_hash: true,
				modal: {
					ondismiss: function () {
						setOrderError("Payment cancelled.");
					}
				},
				
				callback_url:
					'https://humainlearning.ai/checkout/confirmation?' +
					new URLSearchParams({
						receipt: order.receipt,
						batchName: selectedBatch?.name ?? '',
						startDate: selectedBatch?.itinerary[1].date ?? '',
						courseName: templateDetails.courseName ?? '',
					}).toString(),				

				// handler: async function (response: any) {
				// 	console.log("verifying payment with response:", response);
				// 	const res = await fetch('/api/verify-order', {
				// 		method: 'POST',
				// 		headers: { 'Content-Type': 'application/json' },
				// 		body: JSON.stringify({
				// 			razorpay_payment_id: response.razorpay_payment_id,
				// 			razorpay_order_id: response.razorpay_order_id,
				// 			razorpay_signature: response.razorpay_signature,
				// 			receipt: order.receipt
				// 		}),
				// 	});
					
				// }
			};	
			console.log("Opening Razorpay payment modal with data:", paymentData);
			const payment = new window.Razorpay(paymentData as Record<string, unknown>);
			payment.open();
		} catch (error) {
			setOrderError(
				error instanceof Error ? error.message : 'Something went wrong. Please try again.'
			);
		} finally {
			setIsCreatingOrder(false);
		}
	}


	return (
		<div className="relative min-h-screen bg-white py-8 sm:py-12 mx-auto">
			<Script type='text/javascript' src="https://checkout.razorpay.com/v1/checkout.js" />
			{/* <div className="pointer-events-none fixed top-0 right-0 h-100 w-100 rounded-full bg-[#eef6df] blur-2xl z-0" /> */}
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-100">
				<form onSubmit={form.handleSubmit(createOrder)}>
					<input
						{...form.register('courseId')}
						className="h-11 w-full rounded-xl border border-slate-300 px-4"
						hidden={true}
					/>
					<input
						{...form.register('leadId')}
						className="h-11 w-full rounded-xl border border-slate-300 px-4"
						hidden={true}
					/>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
						<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-8">
							<header className="mb-6 border-b border-slate-100 pb-4">
								<p className="text-[11px] font-semibold tracking-[0.14em] text-sage uppercase">
									Checkout
								</p>

								<h1 className="mt-2 text-3xl leading-tight font-bold text-charcoal sm:text-4xl">
									Complete Your Registration
								</h1>

								<p className="mt-3 max-w-xl text-sm leading-6 text-[#666666] sm:text-base">
									Please fill in the details below to secure your seat in the batch of your choice.
								</p>
							</header>

							<div className="space-y-8">
								<div>
									<h2 className="mb-4 text-xl font-bold text-sage">
										Billing Details
									</h2>

									<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
										<div>
											<label className="mb-1 block text-sm font-medium">
												First Name
											</label>

											<input
												{...form.register('billing.firstName')}
												className="h-11 w-full rounded-xl border border-slate-300 px-4"
											/>
											{form.formState.errors.billing?.firstName?.message && (
												<span className="text-[11px] text-red-600">{form.formState.errors.billing.firstName.message}</span>
											)}
										</div>

										<div>
											<label className="mb-1 block text-sm font-medium">
												Last Name
											</label>

											<input
												{...form.register('billing.lastName')}
												className="h-11 w-full rounded-xl border border-slate-300 px-4"
											/>
											{form.formState.errors.billing?.lastName?.message && (
												<span className="text-[11px] text-red-600">{form.formState.errors.billing.lastName.message}</span>
											)}
										</div>

										<div>
											<label className="mb-1 block text-sm font-medium">
												Email
											</label>

											<input
												{...form.register('billing.email')}
												className="h-11 w-full rounded-xl border border-slate-300 px-4"
											/>
											{form.formState.errors.billing?.email?.message && (
												<span className="text-[11px] text-red-600">{form.formState.errors.billing.email.message}</span>
											)}
										</div>

										<div>
											<label className="mb-1 block text-sm font-medium">
												Mobile Number
											</label>

											<Controller
												name="billing.mobile"
												control={form.control}
												render={({ field }) => (
													<PhoneInput
														defaultCountry="IN"
														international
														countryCallingCodeEditable={true}
														value={field.value || undefined}
														onChange={(value) => field.onChange(value ?? '')}
														onBlur={field.onBlur}
														required
														autoComplete="tel"
														placeholder="phone"
														className="flex h-11 items-stretch overflow-hidden rounded-[10px] border border-[#dddddd] bg-white transition focus-within:border-sage focus-within:ring-2 focus-within:ring-sage/20 [&_.PhoneInputCountry]:flex-none [&_.PhoneInputCountry]:w-[50px] [&_.PhoneInputCountry]:flex [&_.PhoneInputCountry]:items-center [&_.PhoneInputCountry]:border-r [&_.PhoneInputCountry]:border-[#dddddd] [&_.PhoneInputCountry]:px-2 [&_.PhoneInputCountryIcon]:mr-1 [&_.PhoneInputCountrySelect]:h-full [&_.PhoneInputCountrySelect]:w-full [&_.PhoneInputCountrySelect]:bg-transparent [&_.PhoneInputCountrySelect]:pr-4 [&_.PhoneInputCountrySelect]:text-sm [&_.PhoneInputCountrySelect]:outline-none [&_.PhoneInputInput]:h-full [&_.PhoneInputInput]:min-w-0 [&_.PhoneInputInput]:flex-1 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:px-3 [&_.PhoneInputInput]:text-sm [&_.PhoneInputInput]:font-normal [&_.PhoneInputInput]:outline-none"
													/>
												)}
											/>
											{form.formState.errors.billing?.mobile?.message && (
												<span className="text-[11px] text-red-600">{form.formState.errors.billing.mobile.message}</span>
											)}
										</div>

										<div className="md:col-span-2">
											<label className="mb-1 block text-sm font-medium">
												City
											</label>

											<input
												{...form.register('billing.city')}
												className="h-11 w-full rounded-xl border border-slate-300 px-4"
											/>
											{form.formState.errors.billing?.city?.message && (
												<span className="text-[11px] text-red-600">{form.formState.errors.billing.city.message}</span>
											)}
										</div>
									</div>
								</div>

								<div className="border-t border-slate-100 pt-8">
									<div className="grid grid-cols-1 gap-4 md:grid-cols-2">

										<div>
											<h2 className="mb-4 text-xl font-semibold text-slate-900">
												Batch Selection
											</h2>

											<select
												{...form.register('batchId') }
												className="h-11 w-full rounded-xl border border-slate-300 px-4"
											>
												<option value="">Select Batch</option>

												{availableBatches.map((batch) => (
													<option
														key={batch.id}
														value={batch.id}
													>
														{batch.name}
													</option>
												))}
											</select>
											{form.formState.errors.batchId?.message && (
												<span className="text-[11px] text-red-600">{form.formState.errors.batchId.message}</span>
											)}
										</div>

										<div>
											<h2 className="mb-4 text-lg font-semibold text-slate-900">
												Number of Seats
											</h2>

											<select
												{...form.register('seatCount', {
													valueAsNumber: true,
												})}
												className="h-11 w-full rounded-xl border border-slate-300 px-4"
											>
												{[1, 2, 3, 4, 5].map((count) => (
													<option
														key={count}
														value={count}
													>
														{count}
													</option>
												))}
											</select>
											{form.formState.errors.seatCount?.message && (
												<span className="text-[11px] text-red-600">{form.formState.errors.seatCount.message}</span>
											)}
										</div>
										
										
									</div>
									{selectedBatch && (
											<div className="mt-4 rounded-xl border border-slate-200 p-4 mx-auto">
												<h3 className="mb-3 font-semibold text-center">
													Batch Schedule
												</h3>

												<div className="mt-3 rounded-xl bg-[#f6f9f0] px-4 py-3 text-sm text-[#5f5f5f]">

												<table className="w-full table-auto text-center ">
													<thead className="hidden md:table-header-group">
														<tr>
															<th className="font-semibold text-sage py-2">Date</th>
															<th className="py-2 font-semibold text-sage">Time</th>
															<th className='font-semibold text-sage py-2'>Session</th>
														</tr>
													</thead>
													<tbody>
														{selectedBatch.itinerary.map((item, index) => (
															<tr key={index} className="border-b border-gray-200 md:border-none">
																<td className="font-semibold py-1 md:py-2">{item.date}, {item.day}</td>
																<td className="py-1 md:py-2">{item.timing}</td>
																<td className="py-1 md:py-2">{item.session}</td>
															</tr>
															
														))}
													</tbody>
												</table>
												</div>
											</div>
										)}
								</div>
								<h1 className="mb-4 text-xl font-semibold text-slate-900">
									Learner Details
								</h1>
								{fields.map((field, index) => (
									<div
										key={field.id}
										className="rounded-xl border border-slate-200 p-5"
									>

										<h3 className="mb-4 font-medium text-slate-900">
											Learner {index + 1}
										</h3>

										<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
											<div className="space-y-1">
												<input
													{...form.register(`learners.${index}.firstName`)}
													placeholder="First Name"
													className="h-11 w-full rounded-xl border border-slate-300 px-4"
												/>
												{form.formState.errors.learners?.[index]?.firstName?.message && (
													<span className="text-[11px] text-red-600">{form.formState.errors.learners[index]?.firstName?.message}</span>
												)}
											</div>

											<div className="space-y-1">
												<input
													{...form.register(`learners.${index}.lastName`)}
													placeholder="Last Name"
													className="h-11 w-full rounded-xl border border-slate-300 px-4"
												/>
												{form.formState.errors.learners?.[index]?.lastName?.message && (
													<span className="text-[11px] text-red-600">{form.formState.errors.learners[index]?.lastName?.message}</span>
												)}
											</div>

											<div className="space-y-1">
												<input
													{...form.register(`learners.${index}.email`)}
													placeholder="Email"
													className="h-11 w-full rounded-xl border border-slate-300 px-4"
												/>
												{form.formState.errors.learners?.[index]?.email?.message && (
													<span className="text-[11px] text-red-600">{form.formState.errors.learners[index]?.email?.message}</span>
												)}
											</div>

											<div className="space-y-1">
												<Controller
													name={`learners.${index}.mobile` as const}
													control={form.control}
													render={({ field }) => (
														<PhoneInput
															defaultCountry="IN"
															international
															countryCallingCodeEditable={true}
															value={field.value || undefined}
															onChange={(value) => field.onChange(value ?? '')}
															onBlur={field.onBlur}
															required
															autoComplete="tel"
															placeholder="phone"
															className="flex h-11 items-stretch overflow-hidden rounded-[10px] border border-[#dddddd] bg-white transition focus-within:border-sage focus-within:ring-2 focus-within:ring-sage/20 [&_.PhoneInputCountry]:flex-none [&_.PhoneInputCountry]:w-[50px] [&_.PhoneInputCountry]:flex [&_.PhoneInputCountry]:items-center [&_.PhoneInputCountry]:border-r [&_.PhoneInputCountry]:border-[#dddddd] [&_.PhoneInputCountry]:px-2 [&_.PhoneInputCountryIcon]:mr-1 [&_.PhoneInputCountrySelect]:h-full [&_.PhoneInputCountrySelect]:w-full [&_.PhoneInputCountrySelect]:bg-transparent [&_.PhoneInputCountrySelect]:pr-4 [&_.PhoneInputCountrySelect]:text-sm [&_.PhoneInputCountrySelect]:outline-none [&_.PhoneInputInput]:h-full [&_.PhoneInputInput]:min-w-0 [&_.PhoneInputInput]:flex-1 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:px-3 [&_.PhoneInputInput]:text-sm [&_.PhoneInputInput]:font-normal [&_.PhoneInputInput]:outline-none"
														/>
													)}
												/>
												{form.formState.errors.learners?.[index]?.mobile?.message && (
													<span className="text-[11px] text-red-600">{form.formState.errors.learners[index]?.mobile?.message}</span>
												)}
											</div>
										</div>
									</div>
								))}
							</div>
						</section>

						<aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-4 lg:sticky lg:top-6 lg:self-start">
							<header className="mb-6 border-b border-slate-100 pb-4">
								<h2 className="text-3xl font-semibold text-sage">
									{templateDetails.courseName.replaceAll('Template', "").trim()}
								</h2>

								<p className="mt-1 text-sm text-slate-500">
									Review your order before payment
								</p>
							</header>

							<div className="space-y-6">
								<div>
									<label className="mb-2 block text-sm font-medium">
										Coupon Code
									</label>

									<div className="space-y-1">
										<div className="flex gap-2">
											<input
												{...form.register('couponCode')}
												disabled={isApplyingCoupon || !!appliedCouponCode}
												placeholder="Enter coupon"
												className="h-11 flex-1 rounded-xl border border-slate-300 px-4 uppercase disabled:bg-slate-100 disabled:cursor-not-allowed"
											/>

											{appliedCouponCode ? (
												<button
													type="button"
													className="rounded-xl bg-terracotta px-4 text-white"
													onClick={handleRemoveCoupon}
												>
													Remove
												</button>
												) : (
												<button
													type="button"
													disabled={isApplyingCoupon}
													className="rounded-xl bg-sage px-4 text-white disabled:cursor-not-allowed disabled:opacity-50"
													onClick={applyCoupon}
												>
													Apply
												</button>
											)}
										</div>

										{isApplyingCoupon ? (
											<span className="flex items-center gap-1 text-[11px] text-slate-600">
												<span className="h-3 w-3 animate-spin rounded-full border border-slate-400 border-t-transparent" />
												Please wait...
											</span>
										) : form.formState.errors.couponCode?.message ? (
											<span className="block text-[11px] text-red-600">{form.formState.errors.couponCode.message}</span>
										) : couponSuccessMessage ? (
											<span className="block text-[15px] text-sage">{couponSuccessMessage}</span>
										) : null}
									</div>
								</div>

								<div className="border-t border-slate-200 pt-4">
									<div className="flex justify-between text-sm">
										<span>Course Fee</span>
										<span>{(templateDetails.basePrice).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}</span>
									</div>

									
									<div className="mt-3 flex justify-between text-sm">
										<span>Quantity</span>
										<span>&times; {seatCount}</span>
									</div>
									<div className="mt-3 flex justify-between text-sm">
										<span>Subtotal</span>
										<span>{subtotal.toLocaleString('en-IN', {
													style: 'currency',
													currency: 'INR',
													maximumFractionDigits: 0,
												})}</span>
									</div>
									{couponSuccessMessage && (
									<div className="mt-3 flex justify-between text-sm">
										<span className='text-sage'>Coupon {couponCodeValue?.toUpperCase()}</span>
										<span className='text-terracotta'>
											-{finalDiscount.toLocaleString('en-IN', {
												style: 'currency',
												currency: 'INR',
												maximumFractionDigits: 0,
											})}
										</span>
									</div>
									)}
									<div className="mt-3 flex justify-between text-sm">
										<span>GST (govt. taxes)</span>
										<span>{taxamount.toLocaleString('en-IN', {
													style: 'currency',
													currency: 'INR',
													maximumFractionDigits: 0,
												})}</span>
									</div>
									<div className="mt-4 border-t border-slate-200 pt-4">
										<div className="flex justify-between text-lg font-semibold">
											<span className='text-terracotta'>To Pay</span>
											<span>
												{toPay.toLocaleString('en-IN', {
													style: 'currency',
													currency: 'INR',
													maximumFractionDigits: 0,
												})}
											</span>
										</div>
									</div>
									
								</div>
								{orderError && (
									<div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
										{orderError}
									</div>
								)}
								<div
									className="group relative w-full"
									onMouseMove={handleSubmitTooltipMove}
								>
									<button
										type="submit"
										disabled={isSubmitDisabled}
										className="w-full rounded-xl bg-sage py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
									>
										Continue to Payment
									</button>
									{isSubmitDisabled && !form.formState.isSubmitting && (
										<span
											className="pointer-events-none absolute hidden -translate-x-1/2 whitespace-nowrap -translate-y-full rounded-md bg-charcoal px-3 py-2 text-[11px] text-white shadow-md group-hover:block"
											style={{
												left: `${submitTooltipPosition.x}px`,
												top: `${submitTooltipPosition.y - 12}px`,
											}}
										>
											Please fill all the fields first
										</span>
									)}
								</div>
							</div>
						</aside>
					</div>
				</form>
			</div>
		</div>
	);
}

