import { NextResponse } from 'next/server';
import { getAttribution } from '@/app/lib/attribution';
import { callHailm } from '@/app/lib/hailmHackathon';
import { hailmRegisterSchema } from '@/lib/schemas/hailmHackathon';

// _server_messages is a JSON array of JSON-encoded {message} objects, possibly containing HTML.
function frappeServerMessage(raw: unknown): string | undefined {
	if (typeof raw !== 'string') return undefined;
	try {
		const first = JSON.parse(raw)?.[0];
		const text = (typeof first === 'string' ? JSON.parse(first) : first)?.message;
		return typeof text === 'string' ? text.replace(/<[^>]+>/g, '').trim() || undefined : undefined;
	} catch {
		return undefined;
	}
}

export async function POST(req: Request) {
	const body = await req.json().catch(() => null);
	const parsed = hailmRegisterSchema.safeParse(body);
	if (!parsed.success) {
		const first = parsed.error.issues[0]?.message ?? 'Check the details and try again.';
		return NextResponse.json({ error: first }, { status: 400 });
	}

	try {
		const attribution = await getAttribution();
		const result = await callHailm('register', {
			method: 'POST',
			body: { ...parsed.data, attribution },
		});

		// Frappe reports errors two ways: our validation returns { error } with a 400, and
		// frappe.throw returns an encoded _server_messages list. Surface either as plain text.
		const message = result.message ?? {};
		if (!result.ok || message.error) {
			const error =
				message.error ??
				frappeServerMessage(result.raw?._server_messages) ??
				"We couldn't start your registration. Please try again in a minute.";
			return NextResponse.json({ error }, { status: result.status >= 400 ? result.status : 400 });
		}
		return NextResponse.json(message);
	} catch (error) {
		console.error('HAILM REGISTER ERROR:', error);
		return NextResponse.json(
			{ error: "We couldn't reach our servers. Please try again in a minute." },
			{ status: 502 },
		);
	}
}
