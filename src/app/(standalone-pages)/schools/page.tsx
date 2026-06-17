import { Metadata } from 'next';
import HeaderSP from "@/components/schools/Header/HeaderSP";
import HeroSP from "@/components/schools/Hero/HeroSP";
import AuthorStripSP from "@/components/schools/AuthorStrip/AuthorStripSP";
import WhatIsAILiteracySP from "@/components/schools/WhatIsAILiteracy/WhatIsAILiteracySP";
import WhyAdoptNowSP from "@/components/schools/WhyAdoptNow/WhyAdoptNowSP";
import LearnerOutcomesSP from "@/components/schools/LearnerOutcomes/LearnerOutcomesSP";
import EngagementModelSP from "@/components/schools/EngagementModel/EngagementModelSP";
import CurriculumMappingSP from "@/components/schools/CurriculumMapping/CurriculumMappingSP";
import DPDPComplianceSP from "@/components/schools/DPDPCompliance/DPDPComplianceSP";
import TeacherCertificationSP from "@/components/schools/TeacherCertification/TeacherCertificationSP";
import MeasurableOutcomesSP from "@/components/schools/MeasurableOutcomes/MeasurableOutcomesSP";
import PilotModelSP from "@/components/schools/PilotModel/PilotModelSP";
import ImplementationTimelineSP from "@/components/schools/ImplementationTimeline/ImplementationTimelineSP";
import PricingModelSP from "@/components/schools/PricingModel/PricingModelSP";
import PeerReferencesSP from "@/components/schools/PeerReferences/PeerReferencesSP";
import ManitCredibilitySP from "@/components/schools/ManitCredibility/ManitCredibilitySP";
import DownloadDeckSP from "@/components/schools/DownloadDeck/DownloadDeckSP";
import FAQSchoolsSP from "@/components/schools/FAQ/FAQSchoolsSP";
import FinalBannerSP from "@/components/schools/FinalBanner/FinalBannerSP";


export const metadata: Metadata = {
  title: "AI Literacy for Schools in India | Humain Learning AI",
  description: "Humain AI Literacy Framework for Indian schools: CBSE, ICSE and state board compliant. DPDP-safe, NEP-aligned. Free 14-week pilot. Request a demo for your school.",
  alternates: {
    canonical: "https://humainlearning.ai/schools/ai-literacy-programme",
  },
  openGraph: {
    title: "AI Literacy for Indian Schools | Humain Learning AI",
    description: "The only AI literacy programme designed for Indian K-12. DPDP-safe. CBSE/ICSE/State board aligned. NEP-compliant. Free 14-week no-risk pilot.",
    images: ["https://humainlearning.ai/og/schools-for-schools.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SchoolsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://humainlearning.ai/#org",
        "name": "Humain Learning AI",
        "url": "https://humainlearning.ai",
        "sameAs": ["https://linkedin.com/company/humainlearning"],
        "description": "AI literacy programme provider for Indian K-12 schools.",
      },
      {
        "@type": "Course",
        "@id": "https://humainlearning.ai/schools/ai-literacy-programme#course",
        "name": "Humain AI Literacy Programme for Schools",
        "description": "A 14-week AI literacy programme for Indian K-12 schools. DPDP-safe, NEP-aligned, CBSE and ICSE curriculum-mapped.",
        "provider": { "@id": "https://humainlearning.ai/#org" },
        "educationalLevel": "K-12",
        "inLanguage": ["en-IN", "hi-IN"],
        "url": "https://humainlearning.ai/schools/ai-literacy-programme",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://humainlearning.ai/" },
          { "@type": "ListItem", "position": 2, "name": "For Schools", "item": "https://humainlearning.ai/schools/ai-literacy-programme" }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeaderSP />
      <HeroSP />
      <AuthorStripSP />
      <WhatIsAILiteracySP />
      <WhyAdoptNowSP />
      <LearnerOutcomesSP />
      <EngagementModelSP />
      <CurriculumMappingSP />
      <DPDPComplianceSP />
      <TeacherCertificationSP />
      <MeasurableOutcomesSP />
      <PilotModelSP />
      <ImplementationTimelineSP />
      <PricingModelSP />
      <PeerReferencesSP />
      <ManitCredibilitySP />
      <DownloadDeckSP />
      <FAQSchoolsSP />
      <FinalBannerSP />
    </>
  );
}
