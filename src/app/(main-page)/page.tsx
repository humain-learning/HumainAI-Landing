import LandingPage from '@/components/landing/page';
import {
  educationalOrganizationSchema,
  speakableSchema,
} from '@/lib/schema-bundle';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationalOrganizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <LandingPage />
    </>
  );
}
