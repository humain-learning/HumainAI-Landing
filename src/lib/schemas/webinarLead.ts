import { z } from 'zod';

// Allows letters, numbers, spaces, and characters common in real names/places
const textField = z
  .string()
  .min(1, 'This field is required.')
  .regex(
    /^[a-zA-Z0-9 ',.\-&]+$/,
    "Special Characters are not allowed"
  );

export const webinarLeadSchema = z.object({
  firstname: textField,
  lastname: textField,
  email: z
    .string()
    .min(1, 'This field is required.')
    .email('Enter a valid email.'),
  mobile: z
    .string()
    .min(1, 'This field is required.')
    .transform((val) => val.replace(/^(\+91|0)/, '').trim())
    .pipe(z.string().regex(/^\d{10}$/, 'Enter a 10 digit mobile number.')),
  role: z.enum(['parent', 'child'], {
    error: () => 'Select Parent or Child.',
  }),
  childGrade: z.enum(['8', '9', '10', '11', '12'], {
    error: () => 'Select a grade between 8 and 12.',
  }),
  school: textField,
  city: textField,
});

export type WebinarLeadFormValues = z.input<typeof webinarLeadSchema>;
export type WebinarLeadParsed = z.output<typeof webinarLeadSchema>;
export type FieldName = keyof WebinarLeadFormValues;
export type FieldErrors = Partial<Record<FieldName, string>>;

export const initialValues: WebinarLeadFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  mobile: '',
  role: '' as 'parent',
  childGrade: '' as '8',
  school: '',
  city: '',
};

export const fieldNames = Object.keys(initialValues) as FieldName[];

/** Returns the first error message per field from a Zod parse failure. */
export function flattenZodErrors(
  error: z.ZodError<WebinarLeadFormValues>
): FieldErrors {
  const fieldErrors: FieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as FieldName;
    if (field && !fieldErrors[field]) {
      fieldErrors[field] = issue.message;
    }
  }
  return fieldErrors;
}
