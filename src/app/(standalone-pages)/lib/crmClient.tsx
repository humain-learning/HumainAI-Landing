import 'server-only';
import { cookies } from 'next/headers';


type TemplateId = number;

type WebinarLeadPayload = {
	firstname: string;
	lastname: string;
	email: string;
	mobile: string;
	role: string;
	childGrade: string;
	school: string;
	city: string;
	fbclid: string;
	utmSource: string;
	utmMedium: string;
	utmCampaign: string;
	utmTerm: string;
	utmContent: string;
};

export type WebinarLeadState = {
	ok: boolean;
	message: string | null;
	errors?: string[];
};

const allowedLeadTypes = new Set(['teacher', 'child', 'parent']);

function getCRMCredentials() {
	// const baseUrl = process.env.LOCAL_APP_URL;
	// const key = process.env.LOCAL_CRM_KEY;
	// const secret = process.env.LOCAL_CRM_SECRET;
	const baseUrl = process.env.FRAPPE_BASE_URL;
	const key = process.env.FRAPPE_API_KEY;
	const secret = process.env.FRAPPE_API_SECRET;

	if (!baseUrl || !key || !secret) {
		throw new Error('Missing admin API environment variables');
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
	return data;
}

function normalize(value: FormDataEntryValue | null) {
	return typeof value === 'string' ? value.trim() : '';
}

function extractFbclidFromFbc(fbc: string) {
	if (!fbc) return '';
	const parts = fbc.split('.');
	// Expected format: fb.1.<timestamp>.<fbclid>
	return parts.length >= 4 ? parts.slice(3).join('.') : '';
}

function normalizeLeadType(value: string) {
	if (!value) return '';
	return allowedLeadTypes.has(value) ? value : '';
}


export async function submitWebinarLead(
	_prevState: WebinarLeadState,
	formData: FormData
): Promise<WebinarLeadState> {
	'use server';

	const payload: WebinarLeadPayload = {
		firstname: normalize(formData.get('firstname')),
		lastname: normalize(formData.get('lastname')),
		email: normalize(formData.get('email')),
		mobile: normalize(formData.get('mobile')),
		role: normalizeLeadType(normalize(formData.get('role')).toLowerCase()),
		childGrade: normalize(formData.get('childGrade')),
		school: normalize(formData.get('school')),
		city: normalize(formData.get('city')),
		fbclid: normalize(formData.get('fbclid')),
		utmSource: normalize(formData.get('utm_source')),
		utmMedium: normalize(formData.get('utm_medium')),
		utmCampaign: normalize(formData.get('utm_campaign')),
		utmTerm: normalize(formData.get('utm_term')),
		utmContent: normalize(formData.get('utm_content')),
	};

	if (!payload.role) {
		return { ok: false, message: 'Invalid role selected.' };
	}

	try {
		const cookieStore = await cookies();
		const fbpCookie = cookieStore.get('_fbp')?.value ?? '';
		const fbcCookie = cookieStore.get('_fbc')?.value ?? '';
		const fbc = fbcCookie;
		const effectiveFbclid = payload.fbclid || extractFbclidFromFbc(fbcCookie);

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
			custom_actionable: "Webinar",
			custom_fbp: fbpCookie || undefined,
			custom_fbc: fbc || undefined,
			custom_fbclid: effectiveFbclid || undefined,
			custom_utm_source: payload.utmSource || undefined,
			custom_utm_medium: payload.utmMedium || undefined,
			custom_utm_campaign: payload.utmCampaign || undefined,
			custom_utm_term: payload.utmTerm || undefined,
			custom_utm_content: payload.utmContent || undefined,
			source: "Webinar Landing"
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