import { Metadata } from 'next';
import HeaderSP from "@/components/schools/Header/HeaderSP";
import HeroSP from "@/components/schools/Hero/HeroSP";
import WhatIsAILiteracySP from "@/components/schools/WhatIsAILiteracy/WhatIsAILiteracySP";
import WhyAdoptNowSP from "@/components/schools/WhyAdoptNow/WhyAdoptNowSP";
import LearnerOutcomesSP from "@/components/schools/LearnerOutcomes/LearnerOutcomesSP";
import CurriculumMappingSP from "@/components/schools/CurriculumMapping/CurriculumMappingSP";
import DPDPComplianceSP from "@/components/schools/DPDPCompliance/DPDPComplianceSP";
import EngagementModelSP from "@/components/schools/EngagementModel/EngagementModelSP";
import TeacherCertificationSP from "@/components/schools/TeacherCertification/TeacherCertificationSP";
import PricingModelSP from "@/components/schools/PricingModel/PricingModelSP";
import FAQSchoolsSP from "@/components/schools/FAQ/FAQSchoolsSP";
import FinalBannerSP from "@/components/schools/FinalBanner/FinalBannerSP";

export const metadata: Metadata = {
  title: "AI Literacy Programme for Schools in India | Humain Learning",
  description: "Institutional AI literacy for CBSE, ICSE, IB and state-board schools. Built by Heritage Schools co-founder Manit Jain. CBSE 417 mapping. DPDP compliant.",
  alternates: {
    canonical: "https://humainlearning.ai/schools/partner-with-humain",
  },
  openGraph: {
    title: "AI Literacy Programme for Schools in India | Humain Learning",
    description: "Institutional AI literacy for CBSE, ICSE, IB and state-board schools. Built by Heritage Schools co-founder Manit Jain. CBSE 417 mapping. DPDP compliant.",
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
        "@id": "https://humainlearning.ai/schools/partner-with-humain#course",
        "name": "Humain AI Literacy Programme for Schools",
        "description": "A structured AI literacy programme for CBSE, ICSE, IB and State Board schools in India.",
        "provider": { "@id": "https://humainlearning.ai/#org" },
        "educationalLevel": "K-12",
        "inLanguage": ["en-IN", "hi-IN"],
        "url": "https://humainlearning.ai/schools/partner-with-humain",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://humainlearning.ai/" },
          { "@type": "ListItem", "position": 2, "name": "For Schools", "item": "https://humainlearning.ai/schools/partner-with-humain" }
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
      <HeroSP />
      <WhatIsAILiteracySP />
      <WhyAdoptNowSP />
      <LearnerOutcomesSP />
      <CurriculumMappingSP />
      <DPDPComplianceSP />
      <EngagementModelSP />
      <TeacherCertificationSP />
      <PricingModelSP />
      <FAQSchoolsSP />
      <FinalBannerSP />
    </>
  );
}
