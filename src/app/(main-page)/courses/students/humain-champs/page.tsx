import Headerlp from "@/components/hc-landing/Header/Headerlp";
import Herolp from "@/components/hc-landing/Hero/Herolp";
import GapSolution from "@/components/hc-landing/GapSolution/GapSolution";
import Toolkit from "@/components/hc-landing/Toolkit/Toolkit";
import Curriculum from "@/components/hc-landing/Curriculum/Curriculum";
import StudentWork from "@/components/hc-landing/StudentWork/StudentWork";
import Credential from "@/components/hc-landing/Credential/Credential";
import InstructorsCollage from "@/components/hc-landing/Instructors/InstructorsCollage";
import Founder from "@/components/hc-landing/Founder/Founder";
import ParentsSaying from "@/components/hc-landing/Parents/ParentsSaying";
import { Band } from "@/components/hc-landing/Band/Band";
import { ChooseBatch } from "@/components/hc-landing/ChooseBatch/ChooseBatch";
import ParentQuestionsSection from "@/components/hc-landing/Questions/ParentQuestionsSection";
import BottomCTA from "@/components/hc-landing/BottomCTA/BottomCTA";
import { Tools } from "@/components/hc-landing/Tools/Tools";
import { getBatchDetailsOfTemplate, getCurrentActiveDiscount, getBasePrice } from "@/app/lib/crmClient";
import { Batches } from 'components/hc-landing/ChooseBatch/data';

export default async function HumainChampsLanding() {

	const template_id = 1;
	
	try {
		var batchesData = await getBatchDetailsOfTemplate(template_id); 
	} catch (e) {
		console.log("Batches could not be fetched:", e)
		batchesData = {
			message: []
		}
	}
	const batches = Batches

	try {
		var discountData = await getCurrentActiveDiscount(template_id);
	} catch (e) {
		console.log("Discount could not be fetched:", e)
		discountData = {
			message: {
				template_id: String(template_id),
				has_discount: false,
				active_tier: null,
			}
		}
	}

	try {
		var basePrice = await getBasePrice(template_id);
	} catch (e) {
		console.log("Base Price could not be fetched:", e)
		basePrice = 12500
	}


	return (
		<>
			{/* <Headerlp basePrice={basePrice}/> */}
			<Herolp basePrice={basePrice}/>
			<GapSolution />
			<Tools />
			<Curriculum />
			<StudentWork />
			<Credential />
			<InstructorsCollage />
			<Founder />
			<ParentsSaying />
			{batches.length > 0 && (
				<ChooseBatch Batches={batches} discountData={discountData.message} />
			)}
			<ParentQuestionsSection />
			<BottomCTA targetTime={new Date('2026-06-06T00:00:00').getTime()} basePrice={basePrice} />
			{/* <Band targetTime={new Date('2026-06-06T00:00:00').getTime()} /> */}
		</>
	)
}