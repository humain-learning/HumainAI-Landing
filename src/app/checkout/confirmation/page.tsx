import PaymentConfirmation from '@/components/checkout-page/Confirmation';

type PageProps = {
	searchParams: Promise<{
		receipt: string;
		batchName?: string;
		startDate?: string;
	}>;
};

export default async function Page({
	searchParams,
}: PageProps) {
	const { receipt,batchName,startDate } = await searchParams;

	return <PaymentConfirmation receipt={receipt} batchName={batchName} startDate={startDate} />;
}