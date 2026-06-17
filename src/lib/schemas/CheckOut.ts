import { z } from 'zod';
import { crmLeadSchema } from './crmLead';
import { isValidPhoneNumber } from 'libphonenumber-js/mobile';


const mobileField = z.string()
	.min(1, 'Mobile number is required')
	.trim()
	.refine((val) => isValidPhoneNumber(val), {
		message: 'Mobile number is invalid',
	})

export const learnerSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.email().min(1, 'Email is required'),
	mobile: mobileField,
});

export const checkoutSchema = z.object({
	billing: crmLeadSchema.pick({
		firstName: true,
		lastName: true,
		email: true,
		mobile: true,
		city: true,
	}),
	leadId: z.string().nullable(),
	batchId: z.coerce.number().positive('Please select a batch'),

	courseId: z.coerce.number().positive('Please select a course'),

	seatCount: z.number().min(1),

	couponCode: z.string().nullable(),

	learners: z.array(learnerSchema).min(1 ),
});
