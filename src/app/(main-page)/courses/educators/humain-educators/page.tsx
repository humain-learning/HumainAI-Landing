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



export default async function HumainEducators() {

	const template_id = 2;
    const [batchesData, discountData] = await Promise.all([
        getBatchDetailsOfTemplate(template_id),
        getCurrentActiveDiscount(template_id),
    ]);

    const batches = Array.isArray(batchesData?.message) ? batchesData.message : [];

	return (
        <>
		<Hero discountData={discountData.message} />
        <Band />
        <GameChanger />
        <Testimonials />
        <AiRoadmap />
        <WhoWeAre />
        <Instructors />
		<ChooseBatch Batches={batches} discountData={discountData.message}/>
        <VideoTestimonials />
        <TeacherShowcase />
        <Founder />
        <Certificate />
        </>
    );
}