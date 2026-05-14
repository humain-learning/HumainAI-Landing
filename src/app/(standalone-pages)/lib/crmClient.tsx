import 'server-only';


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
};

export type WebinarLeadState = {
	ok: boolean;
	message: string | null;
	errors?: string[];
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const simpleTextRegex = /^[a-zA-Z0-9 ]+$/;
const allowedRoles = new Set(['parent', 'student']);

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

function isValidGrade(value: string) {
	return ['8', '9', '10', '11', '12'].includes(value);
}

function validateLead(payload: WebinarLeadPayload) {
	const errors: string[] = [];

	if (!simpleTextRegex.test(payload.firstname)) {
		errors.push('First name is invalid.');
	}
	if (!simpleTextRegex.test(payload.lastname)) {
		errors.push('Last name is invalid.');
	}
	if (!emailRegex.test(payload.email)) {
		errors.push('Email is invalid.');
	}
	if (!phoneRegex.test(payload.mobile)) {
		errors.push('Mobile number must be 10 digits.');
	}
	if (!allowedRoles.has(payload.role)) {
		errors.push('Role is invalid.');
	}
	if (!isValidGrade(payload.childGrade)) {
		errors.push('Grade must be between 8 and 12.');
	}
	if (!simpleTextRegex.test(payload.school)) {
		errors.push('School is invalid.');
	}
	if (!simpleTextRegex.test(payload.city)) {
		errors.push('City is invalid.');
	}

	return errors;
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
		role: normalize(formData.get('role')).toLowerCase(),
		childGrade: normalize(formData.get('childGrade')),
		school: normalize(formData.get('school')),
		city: normalize(formData.get('city')),
	};

	const errors = validateLead(payload);
	if (errors.length > 0) {
		return { ok: false, message: 'Validation failed.', errors };
	}

	try {
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
		return { ok: false, message: 'Server error while submitting lead.' };
	}
}