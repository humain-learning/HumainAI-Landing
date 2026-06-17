import { z } from "zod";
import { getCRMCredentials } from "@/app/lib/crmClient";
const verifyPaymentSchema = z.object({
	receipt: z.string().min(1),
	razorpay_order_id: z.string().min(1),
	razorpay_payment_id: z.string().min(1),
	razorpay_signature: z.string().min(1),
});


export async function POST(request: Request) {
	const req = await request.json();
	const payload = verifyPaymentSchema.safeParse(req);

	if (!payload.success) {
		return Response.json(
			{ error: "Invalid request payload" },
			{ status: 400 }
		);
	}

	const { baseUrl, authHeader } = getCRMCredentials();

	const url = `${baseUrl}/api/method/humain_learning.razorpay_integration.api.verify_payment`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authHeader,
			},
			body: JSON.stringify(payload.data),
		})

		const data = await response.json();
		if (!response.ok) {
			return Response.json(data, {
				status: response.status,
			});
		}
		
		return Response.json(data)
	} catch (error) {
		console.error('VERIFY PAYMENT ERROR:', error);

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