import { CheckOutV2 } from "@/components/checkout-page/CheckOut";
import { getBatchDetailsOfTemplate, getBillingDetails, getTemplateDetails } from "@/app/lib/crmClient";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function CheckOutPage({
	searchParams,
}: {
	searchParams: Promise<{ courseId?: string }>;
}) {
	const params = await searchParams;
	const templateId = Number(params.courseId);
	const cookieStore = await cookies();
	const leadId = cookieStore.get('leadId')?.value;
	let billingDetails = { firstName: '', lastName: '', email: '', mobile: '', city: '' };

	if (!templateId) {
		redirect('https://pages.razorpay.com/humainchamps');
	}

	try {
		var batchesData = await getBatchDetailsOfTemplate(templateId);
	} catch (e) {
		console.log("Batches could not be fetched:", e)
		batchesData = { message: [] }
	}
	const batches = batchesData.message;

	let courseData;

	try {
		courseData = await getTemplateDetails(templateId);
	} catch (e) {
		console.log("Course details could not be fetched:", e)
		redirect('https://pages.razorpay.com/humainchamps');
	}
	
	if (leadId) {
		try {
			billingDetails = await getBillingDetails(leadId);
		} catch (e) {
			console.log("Billing details could not be fetched:", e)
		}
	}
	return (
		<CheckOutV2
			templateDetails={{
				courseName: courseData.course_name ?? courseData.name ?? 'Humain Champs',
				courseId: templateId,
				basePrice: courseData.price ?? 0,
			}}
			availableBatches={batches}
			billingDetails={billingDetails}
		/>
	);
}