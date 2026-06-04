import { Hero } from "humain-educators/Hero";
import { Band } from "humain-educators/Band";
import { GameChanger } from "humain-educators/Benefits";
import { Founder }  from "humain-educators/Founder";
import { Certificate } from "humain-educators/Certificate";
import { Testimonials } from "humain-educators/Testimonials";
import { AiRoadmap } from "humain-educators/AiRoadmap";
import { WhoWeAre } from "humain-educators/WhoWeAre";
import { Instructors } from "humain-educators/Instructors";
import { TeacherShowcase } from "humain-educators/TeacherShowcase";
import { VideoTestimonials } from "humain-educators/VideoTestimonials";
import { ChooseBatch } from "humain-educators/ChooseBatch";
import { getBatchDetailsOfTemplate, getCurrentActiveDiscount } from "@/app/lib/adminApi";

// Force dynamic rendering: see humain-champs/page.tsx for the rationale (admin API
// fetched per-request; static prerender breaks the build without env vars).
export const dynamic = 'force-dynamic';

export default async function HumainEducators() {

	const template_id = 2;
    let batchesData: any = null;
    let discountData: any = null;
    try {
        [batchesData, discountData] = await Promise.all([
            getBatchDetailsOfTemplate(template_id),
            getCurrentActiveDiscount(template_id),
        ]);
    } catch (err) {
        console.warn('humain-educators: admin API unavailable, rendering without batch picker', err);
    }

    const batches = Array.isArray(batchesData?.message) ? batchesData.message : [];
    const discountMessage = discountData?.message;

	return (
        <>
		<Hero discountData={discountMessage} />
        <Band />
        <GameChanger />
        <Testimonials />
        <AiRoadmap />
        <WhoWeAre />
        <Instructors />
		{batches.length > 0 && (
			<ChooseBatch Batches={batches} discountData={discountMessage}/>
		)}
        <VideoTestimonials />
        <TeacherShowcase />
        <Founder />
        <Certificate />
        </>
    );
}
