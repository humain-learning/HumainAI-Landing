import 'server-only';
import { hcLeadSchema, heLeadSchema } from '@/lib/schemas/crmLead';
import { getAttribution } from './attribution';
import { cookies } from 'next/headers';

type TemplateId = number;

export function getCRMCredentials() {
	let baseUrl: string | undefined;
	let key: string | undefined;
	let secret: string | undefined;
	if (process.env.MODE === 'prod') {
		baseUrl = process.env.FRAPPE_BASE_URL;
		key = process.env.FRAPPE_API_KEY;
		secret = process.env.FRAPPE_API_SECRET;
	} else {
		baseUrl = process.env.LOCAL_APP_URL;
		key = process.env.LOCAL_CRM_KEY;
		secret = process.env.LOCAL_CRM_SECRET;
	}


	if (!baseUrl || !key || !secret) {
		throw new Error('Environment Variables Missing');
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


export async function submitLead(values: unknown, teacher: boolean) {
	const lead = teacher ? heLeadSchema.parse(values) : hcLeadSchema.parse(values);

	const leadData = {
		first_name: lead.firstName,
		last_name: lead.lastName,
		email: lead.email,
		mobile_no: lead.mobile,
		custom_lead_type: lead.leadType,
		custom_grade: lead.grade,
		custom_school: lead.school,
		custom_city: lead.city,
		custom_actionable: lead.actionable,
	};

	const attribution = await getAttribution();
	const payload = {
		...leadData,
		...attribution,
	}

	const { baseUrl, authHeader } = getCRMCredentials();

	const url = `${baseUrl}/api/method/humain_learning.humain_learning.api.web.submit_lead`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: authHeader
		},
		body: JSON.stringify(payload),
	
	});

	const result = await response.json();
	const cookieStore = await cookies();
	cookieStore.set('leadId', result.message.leadId, { path: '/' });

	return result.message;
}


export async function getBillingDetails(leadId: string) {
	const { baseUrl, authHeader } = getCRMCredentials();
	const url = `${baseUrl}/api/resource/CRM Lead/${leadId}?fields=["first_name","last_name","email","mobile_no","custom_city"]`

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: authHeader,
		},
	})

	const data = await response.json();
	return {
		firstName: data.data.first_name,
		lastName: data.data.last_name,
		email: data.data.email,
		mobile: data.data.mobile_no,
		city: data.data.custom_city,
	}
}