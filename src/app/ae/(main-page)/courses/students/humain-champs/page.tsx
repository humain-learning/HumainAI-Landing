import Herolp from "@/components/ae/hc-landing/Hero/Herolp";
import GapSolution from "@/components/ae/hc-landing/GapSolution/GapSolution";
import Curriculum from "@/components/ae/hc-landing/Curriculum/Curriculum";
import StudentWork from "@/components/ae/hc-landing/StudentWork/StudentWork";
import Credential from "@/components/ae/hc-landing/Credential/Credential";
import InstructorsCollage from "@/components/ae/hc-landing/Instructors/InstructorsCollage";
import Founder from "@/components/ae/hc-landing/Founder/Founder";
import ParentsSaying from "@/components/ae/hc-landing/Parents/ParentsSaying";
import { Band } from "@/components/ae/hc-landing/Band/Band";
import { ChooseBatch } from "@/components/ae/hc-landing/ChooseBatch/ChooseBatch";
import ParentQuestionsSection from "@/components/ae/hc-landing/Questions/ParentQuestionsSection";
import { Tools } from "@/components/ae/hc-landing/Tools/Tools";
import { getBatchDetailsOfTemplate, getCurrentActiveDiscount, getBasePrice } from "@/app/lib/crmClient";

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
	const batches = batchesData.message

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
			{/* <BottomCTA targetTime={new Date('2026-06-06T00:00:00').getTime()} basePrice={basePrice} /> */}
			<Band targetTime={new Date('2026-06-06T00:00:00').getTime()} />
		</>
	)
}