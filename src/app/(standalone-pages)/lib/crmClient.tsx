import 'server-only';


type TemplateId = string | number;

function getCRMCredentials() {
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

	const url = `${baseUrl}/method/humain_learning.zoom_autoregistration.api.latest_webinar_details?${params}`;

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