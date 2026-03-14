import { ChooseBatch } from "components/hidden/ChooseBatch";
import { get_batch_details } from "@/app/api/fetch-itinerary/route";
import { get_active_discount } from "../api/fetch-discount/route";
import { Hero } from "@/components/hidden/Hero";




export default async function HiddenPage() {
    const template_id = 1;
    const batchesData = await get_batch_details(template_id);
    const discountData = await get_active_discount(template_id);
    return (
        <>
        <Hero discountData={discountData.message} />
        <ChooseBatch Batches={batchesData.message}/>
        </>
    );
}