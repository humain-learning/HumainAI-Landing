import { z } from 'zod';

// Indian mobile: 10 digits starting 6-9. The Frappe side re-validates and normalises to +91.
export const INDIAN_MOBILE = /^[6-9]\d{9}$/;

export const hailmRegisterSchema = z.object({
	fullName: z
		.string()
		.trim()
		.min(2, "Enter the student's full name.")
		.max(120, 'That name is too long.'),
	mobile: z
		.string()
		.transform((v) => v.replace(/\D/g, '').replace(/^(?:91|0)(?=\d{10}$)/, ''))
		.pipe(z.string().regex(INDIAN_MOBILE, 'Enter a valid 10-digit WhatsApp number.')),
});

export type HailmRegisterInput = z.input<typeof hailmRegisterSchema>;
