import { Metadata } from 'next';
import HeaderFW from "@/components/framework/HeaderFW";
import HeroFramework from "@/components/framework/HeroFramework";
import WhatIsFramework from "@/components/framework/WhatIsFramework";
import WhyWeBuiltFramework from "@/components/framework/WhyWeBuiltFramework";
import SixPillarsAtGlance from "@/components/framework/SixPillarsAtGlance";
import Pillar1AIFoundations from "@/components/framework/Pillar1AIFoundations";
import Pillar2EthicsSafety from "@/components/framework/Pillar2EthicsSafety";
import Pillar3LearningWithAI from "@/components/framework/Pillar3LearningWithAI";
import Pillar4CreatingWithAI from "@/components/framework/Pillar4CreatingWithAI";
import Pillar5AgentsAutomation from "@/components/framework/Pillar5AgentsAutomation";
import Pillar6HumanIntelligence from "@/components/framework/Pillar6HumanIntelligence";
import FrameworkComparison from "@/components/framework/FrameworkComparison";
import ResearchFoundations from "@/components/framework/ResearchFoundations";
import IndianCurriculumMapping from "@/components/framework/IndianCurriculumMapping";
import HowToUseFramework from "@/components/framework/HowToUseFramework";
import ThreePhaseLearningPathway from "@/components/framework/ThreePhaseLearningPathway";
import RealOutcomesStudentWork from "@/components/framework/RealOutcomesStudentWork";
import DownloadFramework from "@/components/framework/DownloadFramework";
import FrameworkFAQ from "@/components/framework/FrameworkFAQ";
import FinalConversionBanner from "@/components/framework/FinalConversionBanner";

export const metadata: Metadata = {
  title: "AI Literacy Framework for K-12 in India | Humain Learning",
  description: "The Humain AI Literacy Framework: six pillars, built on OECD, UNESCO, and EU frameworks. Aligned with NEP 2020, CBSE, and ICSE. Free download in English and Hindi.",
  alternates: {
    canonical: "https://humainlearning.ai/framework",
    languages: {
      "en-in": "https://humainlearning.ai/framework",
      "hi": "https://humainlearning.ai/hi/framework",
      "x-default": "https://humainlearning.ai/framework"
    }
  },
  openGraph: {
    title: "The Humain AI Literacy Framework for K-12 in India",
    description: "Six pillars. Built on OECD, UNESCO, and EU. Aligned with NEP 2020 and NCF 2023. Free download.",
    images: ["https://humainlearning.ai/og/framework-hexagram.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function FrameworkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "The Humain AI Literacy Framework",
        "author": [
          {
            "@type": "Person",
            "name": "Manit Jain",
            "jobTitle": "Co-founder",
            "alumniOf": "Harvard Graduate School of Education"
          },
          {
            "@type": "Person",
            "name": "Ankur Dahiya",
            "jobTitle": "Program Head",
            "alumniOf": "Delhi Technological University"
          }
        ],
        "reviewedBy": {
          "@type": "Person",
          "name": "Dr. Tapaswini Sahu",
          "jobTitle": "Academic Director",
          "alumniOf": ["JNU", "University of Cambridge"]
        },
        "datePublished": "2026-05-28",
        "dateModified": "2026-05-28",
        "inLanguage": ["en-IN", "hi-IN"],
        "publisher": { "@id": "https://humainlearning.ai/#org" },
        "url": "https://humainlearning.ai/framework"
      },
      {
        "@type": "DefinedTermSet",
        "name": "Humain AI Literacy Framework Pillars",
        "hasDefinedTerm": [
          { "@type": "DefinedTerm", "name": "AI Foundations", "termCode": "pillar-1" },
          { "@type": "DefinedTerm", "name": "Ethics, Safety and Responsibility", "termCode": "pillar-2" },
          { "@type": "DefinedTerm", "name": "Learning with AI", "termCode": "pillar-3" },
          { "@type": "DefinedTerm", "name": "Creating with AI", "termCode": "pillar-4" },
          { "@type": "DefinedTerm", "name": "Agents and Automation", "termCode": "pillar-5" },
          { "@type": "DefinedTerm", "name": "Human Intelligence in the Age of AI", "termCode": "pillar-6" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://humainlearning.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Framework", "item": "https://humainlearning.ai/framework" }
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
      <HeaderFW />
      <HeroFramework />
      <WhatIsFramework />
      <WhyWeBuiltFramework />
      <SixPillarsAtGlance />
      <Pillar1AIFoundations />
      <Pillar2EthicsSafety />
      <Pillar3LearningWithAI />
      <Pillar4CreatingWithAI />
      <Pillar5AgentsAutomation />
      <Pillar6HumanIntelligence />
      <FrameworkComparison />
      <ResearchFoundations />
      <IndianCurriculumMapping />
      <HowToUseFramework />
      <ThreePhaseLearningPathway />
      <RealOutcomesStudentWork />
      <DownloadFramework />
      <FrameworkFAQ />
      <FinalConversionBanner />
      
    </>
  );
}
