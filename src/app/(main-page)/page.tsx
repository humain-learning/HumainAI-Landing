import LandingPage from '@/components/landing/page';
import { homepageGraphSchema } from '@/lib/schema-bundle';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageGraphSchema) }}
      />
      <LandingPage />
    </>
  );
}
