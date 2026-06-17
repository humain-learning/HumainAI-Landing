import { getCRMCredentials } from "@/app/lib/crmClient";


export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const receipt = searchParams.get('receipt');

	const { baseUrl, authHeader } = getCRMCredentials();

	const url = `${baseUrl}/api/resource/Razorpay Order/${receipt}`;

	const response = await fetch(url, {
		headers: {
			Authorization: authHeader,
		},
		cache: 'no-store',
	});

	if (!response.ok) {
		return Response.json(
			{ error: 'Backend unavailable' },
			{ status: 502 }
		);
	}

	const data = await response.json();

	return Response.json(data.data);
}