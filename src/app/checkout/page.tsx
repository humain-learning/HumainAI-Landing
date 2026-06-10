import { redirect } from 'next/navigation';
import { CheckOut } from 'components/checkout-page/checkOut';
import { getBatchDetailsOfTemplate } from '../lib/crmClient';
type CheckOutPageProps = {
	searchParams: Promise<{
		courseId?: number;
	}>;
};

export default async function CheckOutPage({ searchParams }: CheckOutPageProps) {
	const { courseId } = await searchParams;

	if (!courseId) {
		redirect('/');
	}
	const batches = await getBatchDetailsOfTemplate(courseId);


	return <CheckOut courseId={courseId} />;
}