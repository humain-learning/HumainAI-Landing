import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js/mobile';


const textField = z
.string()
.min(1, 'This field is required.')
.regex(
	/^[a-zA-Z0-9 ',.\-&]+$/, 
	"Special Characters are not allowed"
);
const mobileField = z.string()
	.min(1, 'Mobile No. is Required')
	.trim()
	.refine((val) => isValidPhoneNumber(val), {
		message: 'Mobile nunber is invalid',
	})

	
export const crmLeadSchema = z.object({
	firstName: textField,
	lastName: textField,
	email: z.email(),
	mobile: mobileField,
	leadType: z.enum(['parent', 'child','teacher']),
	grade: z.enum(['8', '9', '10', '11', '12']).optional(),
	school: textField.optional(),
	city: textField.optional(),
	actionable: z.enum(["Webinar", "Direct Sale"]),
})