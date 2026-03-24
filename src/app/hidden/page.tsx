import { ChooseBatch } from "components/hidden/ChooseBatch";
import { Hero } from "@/components/hidden/Hero";




export default async function HiddenPage() {
    const template_id = 1;
	const baseUrl =
        process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : 'http://localhost:3000';

    const [batchesRes, discountRes] = await Promise.all([
        fetch(`${baseUrl}/api/fetch-batches?template_id=${template_id}`, {
            cache: 'no-store',
        }),
        fetch(`${baseUrl}/api/fetch-discount?template_id=${template_id}`, {
            cache: 'no-store',
        }),
    ]);

    if (!batchesRes.ok || !discountRes.ok) {
        throw new Error('Failed to fetch data');
    }

    const batchesData = await batchesRes.json();
    const discountData = await discountRes.json();
	return (
        <>
        <Hero discountData={discountData.message} />
        <ChooseBatch Batches={batchesData.message} discountData={discountData.message}/>
        </>
    );
}