import { Hero } from "components/courses-students/humain-champs-v2/Hero/Hero";
import { Band } from "components/courses-students/humain-champs-v2/Band/Band";
import { GameChanger } from "components/courses-students/humain-champs-v2/GameChanger/GameChanger";
import { Hackathon } from "components/courses-students/humain-champs-v2/Hackathon/Hackathon";
import { AiRoadmap } from "components/courses-students/humain-champs-v2/AiRoadmap/AiRoadmap";
import { SneakPeek } from "components/courses-students/humain-champs-v2/SneakPeek/SneakPeek";
import { Tools } from "components/courses-students/humain-champs-v2/Tools/Tools";
import { StudentCreations } from "components/courses-students/humain-champs-v2/StudentCreations/StudentCreations";
import { Instructors } from "components/courses-students/humain-champs-v2/Instructors/Instructors";
import { ChooseBatch } from "components/courses-students/humain-champs-v2/ChooseBatch/ChooseBatch";
import { getBatchDetailsOfTemplate, getCurrentActiveDiscount } from "@/app/lib/adminApi";
import { Parents } from "components/courses-students/humain-champs-v2/Parents/Parents";
import { ContactUs } from "components/courses-students/humain-champs-v2/ContactUs/ContactUs";
import { Founder } from "components/courses-students/humain-champs-v2/Founder/Founder";




export default async function HumainChampsV2() {
	const template_id = 1;
	const [batchesData, discountData] = await Promise.all([
		getBatchDetailsOfTemplate(template_id),
		getCurrentActiveDiscount(template_id),
	]);

	const batches = Array.isArray(batchesData?.message) ? batchesData.message : [];
	return (
		<div className="z-10">
		<Hero />
		<GameChanger/>
		<Hackathon/>
		<AiRoadmap/>
		<SneakPeek/>
		<Tools/>
		<StudentCreations/>
		<Instructors/>
		{batches.length > 0 && (
			<ChooseBatch Batches={batches} discountData={discountData.message} />
		)}
		<Founder />
		<Parents />
		<ContactUs />
		<Band />
		</div>
	)
}
