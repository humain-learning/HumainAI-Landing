import { Metadata } from 'next';
import HeroPH from "@/components/parent-hub/Hero/HeroPH";
import FoundationPH from "@/components/parent-hub/Foundation/FoundationPH";
import ShouldChildLearnAIPH from "@/components/parent-hub/ShouldChildLearnAI/ShouldChildLearnAIPH";
import WillAIReplaceJobPH from "@/components/parent-hub/WillAIReplaceJob/WillAIReplaceJobPH";
import FrameworkPH from "@/components/parent-hub/Framework/FrameworkPH";
import FiveQuestionsPH from "@/components/parent-hub/FiveQuestions/FiveQuestionsPH";
import IsAISafePH from "@/components/parent-hub/IsAISafe/IsAISafePH";
import RulesToAllowPH from "@/components/parent-hub/RulesToAllow/RulesToAllowPH";
import DPDPActPH from "@/components/parent-hub/DPDPAct/DPDPActPH";
import BoardExamsPH from "@/components/parent-hub/BoardExams/BoardExamsPH";
import AICoursesForDaughtersPH from "@/components/parent-hub/AICoursesForDaughters/AICoursesForDaughtersPH";
import TestimonialsPH from "@/components/parent-hub/Testimonials/TestimonialsPH";
import DownloadsPH from "@/components/parent-hub/Downloads/DownloadsPH";
import FAQPH from "@/components/parent-hub/FAQ/FAQPH";
import FinalBannerPH from "@/components/parent-hub/FinalBanner/FinalBannerPH";

export const metadata: Metadata = {
  // ... metadata remains the same ...
  title: "Parents Guide to AI in India: For Class 8-12 | Humain",
  description: "A parents guide to AI in India. Help your child use AI safely, Class 8 to 12. Free 12-page guide for Indian parents. DPDP-compliant. English & Hindi.",
  alternates: {
    canonical: "https://humainlearning.ai/parents/guide-to-ai-for-children-india",
    languages: {
      "en-in": "https://humainlearning.ai/parents/guide-to-ai-for-children-india",
      "hi": "https://humainlearning.ai/hi/parents/guide-to-ai-for-children-india",
      "x-default": "https://humainlearning.ai/parents/guide-to-ai-for-children-india",
    },
  },
  openGraph: {
    title: "Parents Guide to AI in India | Humain Learning",
    description: "AI for Indian parents. Free 12-page Parents Guide. DPDP-compliant. English and Hindi.",
    images: ["https://humainlearning.ai/og/parent-hub-family.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ParentHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://humainlearning.ai/parents/guide-to-ai-for-children-india#article",
        "headline": "Parents Guide to AI in India",
        "description": "Parents guide to AI in India for parents of K-12 children, Class 8 to 12.",
        "url": "https://humainlearning.ai/parents/guide-to-ai-for-children-india",
        "datePublished": "2026-05-28",
        "dateModified": "2026-06-10",
        "inLanguage": ["en-IN","hi-IN"],
        "author": {
          "@type": "Person",
          "name": "Ankur Dahiya",
          "jobTitle": "Program Head",
          "alumniOf": "Delhi Technological University"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Dr. Tapaswini Sahu",
          "jobTitle": "Academic Director",
          "alumniOf": ["JNU","University of Cambridge"]
        },
        "publisher": {
          "@id": "https://humainlearning.ai/#org"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://humainlearning.ai/"},
          {"@type":"ListItem","position":2,"name":"For Parents","item":"https://humainlearning.ai/parents/guide-to-ai-for-children-india"}
        ]
      },
      {
        "@type": "LearningResource",
        "name": "Parents Guide to AI",
        "learningResourceType": "Guide",
        "educationalLevel": "Parent of K-12 child",
        "inLanguage": ["en-IN","hi-IN"],
        "url": "https://humainlearning.ai/resources/parents-guide",
        "publisher": {"@id":"https://humainlearning.ai/#org"}
      }
      // FAQPage schema will be added later when Section 23 is built
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroPH />
      <FoundationPH />
      <ShouldChildLearnAIPH />
      <WillAIReplaceJobPH />
      <FrameworkPH />
      <FiveQuestionsPH />
      <IsAISafePH />
      <RulesToAllowPH />
      <DPDPActPH />
      <BoardExamsPH />
      <AICoursesForDaughtersPH />
      <TestimonialsPH />
      {/* <DownloadsPH /> */}
      <FAQPH />
      <FinalBannerPH />
    </>
  );
}


