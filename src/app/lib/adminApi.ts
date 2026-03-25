import 'server-only';

type TemplateId = string | number;

function getAdminCredentials() {
	const baseUrl = process.env.ADMIN_BASE_URL;
	const key = process.env.ADMIN_API_KEY;
	const secret = process.env.ADMIN_API_SECRET;

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

export async function getBatchDetailsOfTemplate(templateId: TemplateId) {
	const { baseUrl, authHeader } = getAdminCredentials();

	const params = new URLSearchParams({
		template_id: String(templateId),
		start_date: getTodayIstDateString(),
	});

	const url = `${baseUrl}/method/admin.admin.api.web.batch_details_of_template?${params}`;

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
	const { baseUrl, authHeader } = getAdminCredentials();

	const params = new URLSearchParams({
		template_id: String(templateId),
	});

	const url = `${baseUrl}/method/admin.admin.api.web.current_active_discount?${params}`;

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
