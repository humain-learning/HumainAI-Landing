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
import { getBatchDetailsOfTemplate, getCurrentActiveDiscount } from "@/app/lib/adminApi";





export default async function CoursePage() {
	const template_id = 1;
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
			<StudentCreations />
			<SneakPeek />
			<Roadmap />
			<ChooseBatch Batches={batches} discountData={discountData.message}/>
			<Tools />
			<Instructors />
			<Certificate />
			<Founder />
			<Parents />
			<ContactUs />
		</>
	);
};
