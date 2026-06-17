'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-number-input';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { hcLeadSchema } from '@/lib/schemas/crmLead';
import 'react-phone-number-input/style.css'


type LeadFormValues = z.input<typeof hcLeadSchema>;
type LeadFormSubmitResult = unknown;

type LeadFormProps = {
	onSubmit?: (values: LeadFormValues, teacher: boolean) => LeadFormSubmitResult | Promise<LeadFormSubmitResult>;
	destination?: string | ((result: LeadFormSubmitResult) => string | null | undefined);
	heading: string;
	source: string;
	actionable: LeadFormValues['actionable'];
	subHeading?: string;
	buttonText: string;
	submitError?: string;
	setSubmitError: (error: string) => void;
};

export default function LeadForm({
	onSubmit,
	actionable,
	destination,
	heading,
	subHeading,
	buttonText,
	submitError,
	setSubmitError,
}: LeadFormProps) {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<LeadFormValues>({
		resolver: zodResolver(hcLeadSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			mobile: '',
			leadType: 'parent',
			grade: '',
			school: '',
			city: '',
			actionable,
		},
		mode: 'all',
		reValidateMode: 'onChange',
	});

	return (
		<div className="mx-auto w-full">
			<h1 className="text-2xl font-bold text-charcoal mb-4">{heading}</h1>
			<form
				className="mt-6 grid gap-4"
				onSubmit={handleSubmit(async (values) => {
					let submitResult: LeadFormSubmitResult = undefined;
					if (onSubmit) {
						submitResult = await onSubmit(values, false);
					}

					if (destination) {
						const nextDestination =
							typeof destination === 'function'
								? destination(submitResult)
								: destination;

						if (nextDestination) {
							router.push(nextDestination);
						}
					}
				})}
			>
				<input type="hidden" {...register('actionable')} />

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
						First Name
						<input
							{...register('firstName')}
							required
							autoComplete="given-name"
							placeholder="First name"
							className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
						/>
						{errors.firstName?.message && (
							<span className="text-[11px] text-red-600">{errors.firstName.message}</span>
						)}
					</label>

					<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
						Last Name
						<input
							{...register('lastName')}
							required
							autoComplete="family-name"
							placeholder="Last name"
							className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
						/>
						{errors.lastName?.message && (
							<span className="text-[11px] text-red-600">{errors.lastName.message}</span>
						)}
					</label>
				</div>

				
					<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
						Email
						<input
							{...register('email')}
							required
							type="email"
							autoComplete="email"
							placeholder="you@example.com"
							className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
						/>
						{errors.email?.message && (
							<span className="text-[11px] text-red-600">{errors.email.message}</span>
						)}
					</label>

					<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
						Mobile Number
						<Controller
							name="mobile"
							control={control}
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
						{errors.mobile?.message && (
							<span className="text-[11px] text-red-600">{errors.mobile.message}</span>
						)}
					</label>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
						I am a
						<select
							{...register('leadType')}
							required
							className="h-11 rounded-[10px] border border-[#dddddd] bg-white px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
						>
							<option value="parent">Parent</option>
							<option value="child">Child</option>
						</select>
						{errors.leadType?.message && (
							<span className="text-[11px] text-red-600">{errors.leadType.message}</span>
						)}
					</label>

					<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
						Grade of child
						<select
							{...register('grade')}
							required
							className="h-11 rounded-[10px] border border-[#dddddd] bg-white px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
						>
							<option value="" disabled>Select</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
						{errors.grade?.message && (
							<span className="text-[11px] text-red-600">{errors.grade.message}</span>
						)}
					</label>
				</div>

				<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
					School
					<input
						{...register('school', {
							setValueAs: (value: string) => {
								return value.trim();
							},
						})}
						required
						placeholder="School name"
						className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
					/>
					{errors.school?.message && (
						<span className="text-[11px] text-red-600">{errors.school.message}</span>
					)}
				</label>

				<label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
					City
					<input
						{...register('city', {
							setValueAs: (value: string) => {
								return value.trim();
							},
						})}
						required
						placeholder="City"
						className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
					/>
					{errors.city?.message && (
						<span className="text-[11px] text-red-600">{errors.city.message}</span>
					)}
				</label>

				<button
					type="submit"
					disabled={isSubmitting}
					className="mt-2 h-11 rounded-full bg-sage px-5 text-sm font-bold text-white transition hover:bg-sage/90 disabled:cursor-not-allowed disabled:opacity-70"
					onClick={()=>setSubmitError('')}
				>
					{isSubmitting ? 'Please wait...' : buttonText}
				</button>
				{submitError && (
					<span className="text-[11px] text-red-600">{submitError}</span>
				)}
			</form>

		</div>
	);
}
