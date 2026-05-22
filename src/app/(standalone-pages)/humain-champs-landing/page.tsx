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
import { Batches } from "@/components/courses-teachers/humain-educators/data/batchData";
import { Tools } from "@/components/hc-landing/Tools/Tools";

export default function HumainChampsLanding() {
	return (
		<>
			<Headerlp />
			<Herolp />
			<GapSolution />
			<Tools />
			<Curriculum />
			<StudentWork />
			<Credential />
			{/* <Tools /> */}
			<InstructorsCollage />
			<Founder />
			<ParentsSaying />
			<ChooseBatch Batches={Batches} />
			<ParentQuestionsSection />
			<BottomCTA />
			<Band />
		</>
	)
}