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
import { getBatchDetailsOfTemplate, getCurrentActiveDiscount } from "@/app/lib/crmClient";
import { Parents } from "components/courses-students/humain-champs-v2/Parents/Parents";
import { ContactUs } from "components/courses-students/humain-champs-v2/ContactUs/ContactUs";
import { Founder } from "components/courses-students/humain-champs-v2/Founder/Founder";

// Force dynamic rendering: batches + discount data are fetched per-request from the
// admin API. Static prerendering breaks `npm run build` in environments where the
// admin API env vars (ADMIN_BASE_URL / ADMIN_API_KEY / ADMIN_API_SECRET) are not set,
// and we want the live batch list anyway.
// export const dynamic = 'force-dynamic';

export default async function HumainChampsV2() {
	const template_id = 1;
	let batchesData: any = null;
	let discountData: any = null;
	try {
		[batchesData, discountData] = await Promise.all([
			getBatchDetailsOfTemplate(template_id),
			getCurrentActiveDiscount(template_id),
		]);
	} catch (err) {
		// Build-safe + runtime-safe fallback: if the admin API is unavailable or
		// env vars are missing, render the page without the dynamic batch picker
		// instead of crashing. The static sections (Hero, Hackathon, Tools, etc.)
		// continue to render so the page is still discoverable and usable.
		console.warn('humain-champs: admin API unavailable, rendering without batch picker', err);
	}

	const batches = Array.isArray(batchesData?.message) ? batchesData.message : [];
	return (
		<>
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
		</>
	)
}
