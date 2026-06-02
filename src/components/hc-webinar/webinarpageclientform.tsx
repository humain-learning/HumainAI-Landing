'use client';

import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import type { WebinarLeadState } from '@/app/(standalone-pages)/lib/crmClient';

type WebinarPageClientFormProps = {
  open: boolean;
  onClose: () => void;
  onSubmitLead: (
    prevState: WebinarLeadState,
    formData: FormData
  ) => Promise<WebinarLeadState>;
};

const initialState: WebinarLeadState = {
  ok: false,
  message: null,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const simpleTextRegex = /^[a-zA-Z0-9 ]+$/;
const gradeOptions = new Set(['8', '9', '10', '11', '12']);

type FieldName =
  | 'firstname'
  | 'lastname'
  | 'email'
  | 'mobile'
  | 'role'
  | 'childGrade'
  | 'school'
  | 'city';

type FieldValues = Record<FieldName, string>;
type FieldErrors = Partial<Record<FieldName, string>>;

const initialValues: FieldValues = {
  firstname: '',
  lastname: '',
  email: '',
  mobile: '',
  role: '',
  childGrade: '',
  school: '',
  city: '',
};

const initialTouched: Record<FieldName, boolean> = {
  firstname: false,
  lastname: false,
  email: false,
  mobile: false,
  role: false,
  childGrade: false,
  school: false,
  city: false,
};

function getCookieValue(name: string) {
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
}

function extractFbclidFromFbc(fbc: string) {
  if (!fbc) return '';
  const parts = fbc.split('.');
  return parts.length >= 4 ? parts.slice(3).join('.') : '';
}

function validateField(name: FieldName, value: string): string | undefined {
  if (!value) {
    return 'This field is required.';
  }

  switch (name) {
    case 'firstname':
    case 'lastname':
    case 'school':
    case 'city':
      return simpleTextRegex.test(value)
        ? undefined
        : 'Only letters, numbers, and spaces are allowed.';
    case 'email':
      return emailRegex.test(value) ? undefined : 'Enter a valid email.';
    case 'mobile':
      return phoneRegex.test(value)
        ? undefined
        : 'Enter a 10 digit mobile number.';
    case 'role':
      return value === 'parent' || value === 'child'
        ? undefined
        : 'Select Parent or Child.';
    case 'childGrade':
      return gradeOptions.has(value)
        ? undefined
        : 'Select a grade between 8 and 12.';
    default:
      return undefined;
  }
}

function validateAll(values: FieldValues): FieldErrors {
  return Object.keys(values).reduce<FieldErrors>((errors, key) => {
    const name = key as FieldName;
    const error = validateField(name, values[name]);
    if (error) {
      errors[name] = error;
    }
    return errors;
  }, {});
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-2 h-11 rounded-full bg-sage px-5 text-sm font-bold text-white transition hover:bg-sage/90 disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export default function WebinarPageClientForm({
  open,
  onClose,
  onSubmitLead,
}: WebinarPageClientFormProps) {
  const router = useRouter();
  const [state, formAction] = useActionState(onSubmitLead, initialState);
  const [values, setValues] = useState<FieldValues>(initialValues);
  const [touched, setTouched] = useState<Record<FieldName, boolean>>(
    initialTouched
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [attribution, setAttribution] = useState({
    fbclid: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  });


  useEffect(() => {
    if (!open) return;

    setValues(initialValues);
    setTouched(initialTouched);
    setErrors({});
    setHasSubmitted(false);

    const params = new URLSearchParams(window.location.search);
    const fbclidFromUrl = params.get('fbclid') ?? '';
    const fbclidFromFbc = extractFbclidFromFbc(getCookieValue('_fbc'));
    let fbclidFromSession = '';

    try {
      fbclidFromSession = window.sessionStorage.getItem('fbclid') ?? '';
    } catch {
      fbclidFromSession = '';
    }

    const resolvedFbclid = fbclidFromUrl || fbclidFromSession || fbclidFromFbc;

    try {
      if (resolvedFbclid) {
        window.sessionStorage.setItem('fbclid', resolvedFbclid);
      }
    } catch {
      // Ignore storage errors and continue with in-memory resolved value.
    }

    setAttribution({
      fbclid: resolvedFbclid,
      utm_source: params.get('utm_source') ?? '',
      utm_medium: params.get('utm_medium') ?? '',
      utm_campaign: params.get('utm_campaign') ?? '',
      utm_term: params.get('utm_term') ?? '',
      utm_content: params.get('utm_content') ?? '',
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (state.ok) {
      const returnTo = `${window.location.pathname}${window.location.search}`;
      router.push(
        `/submission-received?returnTo=${encodeURIComponent(returnTo)}`
      );
    }
  }, [state.ok, router]);

  if (!open) return null;

  const handleChange = (name: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (name: FieldName, value: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-seat-form-title"
      className="learn-scrollbar fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/45 px-4 py-6 sm:items-center"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="learn-scrollbar relative my-2 max-h-[calc(100dvh-1rem)] w-full max-w-[460px] overflow-y-auto rounded-[20px] bg-white px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:my-6 sm:max-h-[calc(100dvh-3rem)] sm:px-7 sm:py-7">
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] text-charcoal transition hover:bg-[#ebebeb]"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>

        {!state.ok && (
          <>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-sage uppercase">
              Free live webinar
            </p>

            <h2
              id="reserve-seat-form-title"
              className="mt-2 max-w-[360px] text-[26px] leading-[1.05] font-bold text-charcoal sm:text-[32px]"
            >
              Reserve Your Free Seat
            </h2>

            <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#666666]">
              Share your details and our team will confirm your webinar seat.
            </p>
          </>
        )}

        {state.ok ? (
          <div className="mt-6 rounded-[14px] bg-sage/15 px-4 py-4 text-sm leading-6 text-charcoal">
            Your response has reached us and we will be in touch soon!
          </div>
        ) : (
          <form
            className="mt-6 grid gap-4"
            action={formAction}
            onSubmit={(event) => {
              setHasSubmitted(true);
              const nextTouched = Object.keys(touched).reduce(
                (acc, key) => ({ ...acc, [key]: true }),
                {} as Record<FieldName, boolean>
              );
              setTouched(nextTouched);

              const nextErrors = validateAll(values);
              setErrors(nextErrors);

              if (Object.values(nextErrors).some(Boolean)) {
                event.preventDefault();
              }
            }}
          >
            <input type="hidden" name="fbclid" value={attribution.fbclid} />
            <input type="hidden" name="utm_source" value={attribution.utm_source} />
            <input type="hidden" name="utm_medium" value={attribution.utm_medium} />
            <input type="hidden" name="utm_campaign" value={attribution.utm_campaign} />
            <input type="hidden" name="utm_term" value={attribution.utm_term} />
            <input type="hidden" name="utm_content" value={attribution.utm_content} />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
                First Name
                <input
                  required
                  name="firstname"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={values.firstname}
                  onChange={(event) => handleChange('firstname', event.target.value)}
                  onBlur={(event) => handleBlur('firstname', event.target.value)}
                  className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
                {touched.firstname && errors.firstname && (
                  <span className="text-[11px] text-red-600">
                    {errors.firstname}
                  </span>
                )}
              </label>

              <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
                Last Name
                <input
                  required
                  name="lastname"
                  autoComplete="family-name"
                  placeholder="Last name"
                  value={values.lastname}
                  onChange={(event) => handleChange('lastname', event.target.value)}
                  onBlur={(event) => handleBlur('lastname', event.target.value)}
                  className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
                {touched.lastname && errors.lastname && (
                  <span className="text-[11px] text-red-600">
                    {errors.lastname}
                  </span>
                )}
              </label>
            </div>

            <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={(event) => handleChange('email', event.target.value)}
                onBlur={(event) => handleBlur('email', event.target.value)}
                className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
              {touched.email && errors.email && (
                <span className="text-[11px] text-red-600">{errors.email}</span>
              )}
            </label>

            <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
              Mobile Number
              <input
                required
                type="tel"
                name="mobile"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Mobile number"
                value={values.mobile}
                onChange={(event) => handleChange('mobile', event.target.value)}
                onBlur={(event) => handleBlur('mobile', event.target.value)}
                className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
              {touched.mobile && errors.mobile && (
                <span className="text-[11px] text-red-600">{errors.mobile}</span>
              )}
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
                I am a
                <select
                  required
                  name="role"
                  value={values.role}
                  onChange={(event) => handleChange('role', event.target.value)}
                  onBlur={(event) => handleBlur('role', event.target.value)}
                  className="h-11 rounded-[10px] border border-[#dddddd] bg-white px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="parent">Parent</option>
                  <option value="child">Child</option>
                </select>
                {touched.role && errors.role && (
                  <span className="text-[11px] text-red-600">{errors.role}</span>
                )}
              </label>

              <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
                Grade of child
                <select
                  required
                  name="childGrade"
                  value={values.childGrade}
                  onChange={(event) => handleChange('childGrade', event.target.value)}
                  onBlur={(event) => handleBlur('childGrade', event.target.value)}
                  className="h-11 rounded-[10px] border border-[#dddddd] bg-white px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                {touched.childGrade && errors.childGrade && (
                  <span className="text-[11px] text-red-600">
                    {errors.childGrade}
                  </span>
                )}
              </label>
            </div>

            <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
              School
              <input
                required
                name="school"
                placeholder="School name"
                value={values.school}
                onChange={(event) => handleChange('school', event.target.value)}
                onBlur={(event) => handleBlur('school', event.target.value)}
                className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
              {touched.school && errors.school && (
                <span className="text-[11px] text-red-600">{errors.school}</span>
              )}
            </label>

            <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
              City
              <input
                required
                name="city"
                placeholder="City"
                value={values.city}
                onChange={(event) => handleChange('city', event.target.value)}
                onBlur={(event) => handleBlur('city', event.target.value)}
                className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
              {touched.city && errors.city && (
                <span className="text-[11px] text-red-600">{errors.city}</span>
              )}
            </label>

            {hasSubmitted && state.message && !state.ok && (
              <div className="rounded-[10px] bg-red-50 px-3 py-2 text-xs text-red-700">
                {state.message}
              </div>
            )}

            <SubmitButton />
          </form>
        )}
      </div>
    </div>
  );
}
