import { NextResponse } from 'next/server';
import { callHailm } from '@/app/lib/hailmHackathon';

export async function GET(req: Request) {
	const token = new URL(req.url).searchParams.get('token') ?? '';
	// Tokens are 32-char hex hashes from Frappe; reject anything else before it reaches the backend.
	if (!/^[a-f0-9]{16,64}$/i.test(token)) {
		return NextResponse.json({ error: 'Invalid link.' }, { status: 400 });
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
