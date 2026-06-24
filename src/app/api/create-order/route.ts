import { getAttribution } from "@/app/lib/attribution";
import { getCRMCredentials } from "@/app/lib/crmClient";
import { checkoutSchema } from "@/lib/schemas/CheckOut"

export async function POST(request: Request) {
	
	const req = await request.json();
	const body = checkoutSchema.parse(req);
	const attribution = await getAttribution();
	
	const payload = {
		...body,
		...attribution,
	}

	const { baseUrl, authHeader } = getCRMCredentials();
	const url = `${baseUrl}/api/method/humain_learning.razorpay_integration.api.create_order`;

	try {

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authHeader,
			},
			body: JSON.stringify(payload),
		});

		const data = await response.json();
		if (!response.ok) {
			return Response.json(data, {
				status: response.status,
			});
		}

		return Response.json(data);
	} catch (error) {
		console.error('CREATE ORDER ERROR:', error);

		return Response.json(
			{
			message:
				error instanceof Error
				? error.message
				: String(error),
			},
			{
			status: 500,
			}
		);
	}
}