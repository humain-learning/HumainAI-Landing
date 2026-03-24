import { CoursesPage } from '@/components/courses-students/humain-champs';
import { Hero } from "humain-champs/Hero";
import { Band } from "humain-champs/Band";
import { GameChanger } from "humain-champs/GameChanger";
import { StudentCreations } from "humain-champs/StudentCreations";
import { SneakPeek } from "humain-champs/SneakPeek";
import { Roadmap } from "humain-champs/AiRoadmap";
import { ChooseBatch } from "humain-champs/ChooseBatch";
import { Tools } from "humain-champs/Tools";
import { Instructors } from "humain-champs/Instructors";
import { Certificate } from "humain-champs/Certificate";
import { Founder } from "humain-champs/Founder";
import { Parents } from "humain-champs/Parents";
import { ContactUs } from "humain-champs/ContactUs";





export default async function CoursePage() {
	const template_id = 1;
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
			<StudentCreations />
			<SneakPeek />
			<Roadmap />
			<ChooseBatch Batches={batchesData.message} discountData={discountData.message}/>
			<Tools />
			<Instructors />
			<Certificate />
			<Founder />
			<Parents />
			<ContactUs />
		</>
	);
};


