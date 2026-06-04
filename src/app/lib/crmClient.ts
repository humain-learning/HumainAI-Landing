import 'server-only';
import { cookies } from 'next/headers';
import { webinarLeadSchema, flattenZodErrors, type FieldErrors } from '@/lib/schemas/webinarLead';
import { extractFbclidFromFbc } from '@/app/lib/attribution';

type TemplateId = number;

export type WebinarLeadState = {
	ok: boolean;
	message: string | null;
	fieldErrors?: FieldErrors;
};

export type WebinarLeadAction = (
	prevState: WebinarLeadState,
	formData: FormData
) => Promise<WebinarLeadState>;

export function getCRMCredentials() {
	// const baseUrl = process.env.LOCAL_APP_URL;
	// const key = process.env.LOCAL_CRM_KEY;
	// const secret = process.env.LOCAL_CRM_SECRET;
	const baseUrl = process.env.FRAPPE_BASE_URL;
	const key = process.env.FRAPPE_API_KEY;
	const secret = process.env.FRAPPE_API_SECRET;

	if (!baseUrl || !key || !secret) {
		throw new Error('Environment Variables Set to Dev Defaults');
	}

	return {
		baseUrl,
		authHeader: `token ${key}:${secret}`,
	};
}

function getTodayIstDateString() {
	return new Intl.DateTimeFormat('en-CA', {
		timeZone: 'Asia/Kolkata',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(new Date());
}

export async function getWebinarDetails(templateId: TemplateId) {
	const { baseUrl, authHeader } = getCRMCredentials();

	const params = new URLSearchParams({
		template_id: String(templateId),
	});

	const url = `${baseUrl}/api/method/humain_learning.zoom_autoregistration.api.latest_webinar_details?${params}`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: authHeader,
		},
		cache: 'no-store',
	});

	const data = await response.json();
	const message = data.message;
	return message;
}

function normalize(value: FormDataEntryValue | null) {
	return typeof value === 'string' ? value.trim() : '';
}

export async function submitWebinarLead(
	_prevState: WebinarLeadState,
	formData: FormData
): Promise<WebinarLeadState> {
	'use server';

	const raw = {
		firstname: normalize(formData.get('firstname')),
		lastname: normalize(formData.get('lastname')),
		email: normalize(formData.get('email')),
		mobile: normalize(formData.get('mobile')),
		role: normalize(formData.get('role')).toLowerCase(),
		childGrade: normalize(formData.get('childGrade')),
		school: normalize(formData.get('school')),
		city: normalize(formData.get('city')),
	};

	const parsed = webinarLeadSchema.safeParse(raw);
	if (!parsed.success) {
		return {
			ok: false,
			message: 'Please fix the errors below.',
			fieldErrors: flattenZodErrors(parsed.error),
		};
	}

	const payload = parsed.data;
	const fbclid = normalize(formData.get('fbclid'));
	const utmSource = normalize(formData.get('utm_source'));
	const utmMedium = normalize(formData.get('utm_medium'));
	const utmCampaign = normalize(formData.get('utm_campaign'));
	const utmTerm = normalize(formData.get('utm_term'));
	const utmContent = normalize(formData.get('utm_content'));

	try {
		const cookieStore = await cookies();
		const fbpCookie = cookieStore.get('_fbp')?.value ?? '';
		const fbcCookie = cookieStore.get('_fbc')?.value ?? '';
		const effectiveFbclid = fbclid || extractFbclidFromFbc(fbcCookie);

		const { baseUrl, authHeader } = getCRMCredentials();
		const url = `${baseUrl.replace(/\/$/, '')}/api/resource/CRM Lead`;

		const frappePayload = {
			doctype: 'CRM Lead',
			first_name: payload.firstname,
			last_name: payload.lastname,
			email: payload.email,
			mobile_no: payload.mobile,
			custom_lead_type: payload.role,
			custom_grade: payload.childGrade,
			custom_school: payload.school,
			custom_city: payload.city,
			custom_actionable: 'Webinar',
			custom_fbp: fbpCookie || undefined,
			custom_fbc: fbcCookie || undefined,
			custom_fbclid: effectiveFbclid || undefined,
			custom_utm_source: utmSource || undefined,
			custom_utm_medium: utmMedium || undefined,
			custom_utm_campaign: utmCampaign || undefined,
			custom_utm_term: utmTerm || undefined,
			custom_utm_content: utmContent || undefined,
			source: 'Webinar Landing',
		};

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authHeader,
			},
			body: JSON.stringify(frappePayload),
		});

		if (!response.ok) {
			const responseText = await response.text();
			console.error('CRM lead create failed:', response.status, responseText);
			return { ok: false, message: 'Failed to submit lead.' };
		}

		return { ok: true, message: 'Lead created.' };
	} catch (error) {
		console.error(
			'Webinar lead submit error:',
			error instanceof Error ? error.message : String(error)
		);
		return { ok: false, message: 'An error occured, please try again. If issue persists, call us at +918130023688' };
	}
}

export async function getBatchDetailsOfTemplate(templateId: TemplateId) {
	const { baseUrl, authHeader } = getCRMCredentials();

	const params = new URLSearchParams({
		template_id: String(templateId),
		start_date: getTodayIstDateString(),
	});

	const url = `${baseUrl}/api/method/humain_learning.humain_learning.api.web.batch_details_of_template?${params}`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: authHeader,
		},
		cache: 'no-store',
	});

	const data = await response.json();
	return data;
}

export async function getCurrentActiveDiscount(templateId: TemplateId) {
	const { baseUrl, authHeader } = getCRMCredentials();

	const params = new URLSearchParams({
		template_id: String(templateId),
	});

	const url = `${baseUrl}/api/method/humain_learning.humain_learning.api.web.current_active_discount?${params}`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: authHeader,
		},
		cache: 'no-store',
	});

	const data = await response.json();
	return data;
}


export async function getTemplateDetails(templateId: TemplateId) {
	const { baseUrl, authHeader } = getCRMCredentials();

	const url = `${baseUrl}/api/resource/Template Course/${templateId}`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: authHeader,
		},
		cache: 'no-store',
	});

	const data = await response.json();

	return data.data;
};


export async function getBasePrice(templateId: TemplateId) {
	const { baseUrl, authHeader } = getCRMCredentials();

	const url = `${baseUrl}/api/resource/Template Course/${templateId}?fields=["price"]`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: authHeader,
		},
	});
	const data = await response.json();
	return data.data.price;
}