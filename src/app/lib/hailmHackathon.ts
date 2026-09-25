import 'server-only';

// Lives in the hailm Frappe app (humain-learning/hailm), which runs on the HAILM CRM site — not
// the Humain Learning CRM that crmClient talks to — so it has its own credentials.
const METHOD = 'hailm.hailm.hackathon';

function hailmCredentials() {
	const baseUrl = process.env.HAILM_FRAPPE_BASE_URL;
	const key = process.env.HAILM_FRAPPE_API_KEY;
	const secret = process.env.HAILM_FRAPPE_API_SECRET;
	if (!baseUrl || !key || !secret) throw new Error('HAILM_FRAPPE_* environment variables missing');
	return { baseUrl: baseUrl.replace(/\/$/, ''), authHeader: `token ${key}:${secret}` };
}

/** Holds the registration token so the confirmation page works after Razorpay's redirect. */
export const HAILM_TOKEN_COOKIE = 'hh_reg';

// Tokens are 32-char hex hashes from Frappe; reject anything else before it reaches the backend.
export const isHailmToken = (token: string) => /^[a-f0-9]{16,64}$/i.test(token);

export type HailmOffer = {
	active: boolean;
	amount: number | null;
	currency: 'INR';
};

const INACTIVE: HailmOffer = { active: false, amount: null, currency: 'INR' };

/**
 * The price lives in the hailm site_config (`hailm_hackathon_amount`) so it can change without a
 * deploy. If Frappe is unreachable the page renders with registrations closed rather than
 * showing a wrong price.
 *
 * Local preview only: set HAILM_HACKATHON_PREVIEW_AMOUNT to render the open state without a
 * Frappe backend. Ignored in production.
 */
export async function getHailmHackathonOffer(): Promise<HailmOffer> {
	const preview = Number(process.env.HAILM_HACKATHON_PREVIEW_AMOUNT);
	try {
		const { baseUrl, authHeader } = hailmCredentials();
		const res = await fetch(`${baseUrl}/api/method/${METHOD}.get_offer`, {
			headers: { Authorization: authHeader },
			cache: 'no-store',
		});
		if (!res.ok) throw new Error(`get_offer ${res.status}`);
		const data = await res.json();
		const offer = data?.message ?? {};
		return {
			active: Boolean(offer.active && offer.amount),
			amount: offer.amount ? Number(offer.amount) : null,
			currency: 'INR',
		};
	} catch (error) {
		if (process.env.MODE !== 'prod' && preview > 0) {
			return { active: true, amount: preview, currency: 'INR' };
		}
		console.error('HAILM offer unavailable:', error);
		return INACTIVE;
	}
}

export async function callHailm(path: 'register' | 'status', init: { method: 'GET' | 'POST'; query?: string; body?: unknown }) {
	const { baseUrl, authHeader } = hailmCredentials();
	const url = `${baseUrl}/api/method/${METHOD}.${path}${init.query ? `?${init.query}` : ''}`;
	const res = await fetch(url, {
		method: init.method,
		headers: {
			Authorization: authHeader,
			...(init.body ? { 'Content-Type': 'application/json' } : {}),
		},
		body: init.body ? JSON.stringify(init.body) : undefined,
		cache: 'no-store',
	});
	const data = await res.json().catch(() => ({}));
	return { ok: res.ok, status: res.status, message: data?.message, raw: data };
}
