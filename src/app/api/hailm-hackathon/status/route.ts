import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { callHailm, HAILM_TOKEN_COOKIE, isHailmToken } from '@/app/lib/hailmHackathon';

export async function GET(req: Request) {
	// From the link (?token=…) if present, else the cookie set at registration — the Razorpay
	// Payment Page redirects back without our token.
	const fromQuery = new URL(req.url).searchParams.get('token');
	const token = fromQuery || (await cookies()).get(HAILM_TOKEN_COOKIE)?.value || '';
	if (!isHailmToken(token)) {
		return NextResponse.json({ error: 'Registration not found.' }, { status: 404 });
	}

	try {
		const result = await callHailm('status', {
			method: 'GET',
			query: new URLSearchParams({ token }).toString(),
		});
		if (!result.ok) {
			return NextResponse.json({ error: 'Registration not found.' }, { status: result.status === 404 ? 404 : 502 });
		}
		return NextResponse.json(result.message, { headers: { 'Cache-Control': 'no-store' } });
	} catch (error) {
		console.error('HAILM STATUS ERROR:', error);
		return NextResponse.json({ error: 'Status unavailable.' }, { status: 502 });
	}
}
