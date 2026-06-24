import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js/mobile';


const textField = z
.string()
.min(1, 'This field is required.')
.regex(
	/^[a-zA-Z0-9 ]+$/, 
	"Special Characters are not allowed"
);


const mobileField = z.string()
	.min(1, 'Mobile number is required')
	.trim()
	.refine((val) => isValidPhoneNumber(val), {
		message: 'Mobile number is invalid',
	})
	
export const crmLeadSchema = z.object({
	firstName: textField,
	lastName: textField,
	email: z
		.string()
		.trim()
		.min(1, 'Email is required.')
		.pipe(z.email({ error: 'Please enter a valid email address.' })),
	mobile: mobileField,
	grade: z
		.string()
		.min(1, 'Grade is required.')
		.pipe(z.enum(['','8', '9', '10', '11', '12'], { error: 'Grade is required.' })),
	school: textField,
	city: textField,
	actionable: z.enum(["Webinar", "Direct Sale"]),
	source: z.string().optional(),
})

export const hcLeadSchema = crmLeadSchema.extend({
		leadType: z.enum(['parent', 'child'], { error: 'Please select one' }),
})

export const heLeadSchema = crmLeadSchema.extend({
		leadType: z.literal('teacher'),
})

