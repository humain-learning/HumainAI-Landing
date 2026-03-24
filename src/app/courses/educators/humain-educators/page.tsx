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



export default async function HumainEducators() {

	const template_id = 2;
	const baseUrl = process.env.VERCEL_URL

    const [batchesRes, discountRes] = await Promise.all([
        fetch(`${baseUrl}/api/fetch-batches?template_id=${template_id}`, {
            cache: 'no-store',
        }),
        fetch(`${baseUrl}/api/fetch-discount?template_id=${template_id}`, {
            cache: 'no-store',
        }),
    ]);


    const batchesData = await batchesRes.json();
    const discountData = await discountRes.json();

	return (
        <>
		<Hero discountData={discountData.message} />
        <Band />
        <GameChanger />
        <Testimonials />
        <AiRoadmap />
        <WhoWeAre />
        <Instructors />
		<ChooseBatch Batches={batchesData.message} discountData={discountData.message}/>
        <VideoTestimonials />
        <TeacherShowcase />
        <Founder />
        <Certificate />
        </>
    );
}