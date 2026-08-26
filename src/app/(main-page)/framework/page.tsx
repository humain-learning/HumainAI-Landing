import type { Metadata } from 'next';
import FrameworkComplianceCards from '@/components/frameworkNew/FrameworkComplianceCards';
import FrameworkCTA from '@/components/frameworkNew/FrameworkCTA';
import FrameworkFAQ from '@/components/frameworkNew/FrameworkFAQ';
import FrameworkHeader from '@/components/frameworkNew/FrameworkHeader';
import FrameworkGlobalStandards from '@/components/frameworkNew/FrameworkGlobalStandards';
import FrameworkHero from '@/components/frameworkNew/FrameworkHero';
import FrameworkWhatIsIt from '@/components/frameworkNew/FrameworkWhatIsIt';
import PillarsOfTheFramework from '@/components/landing/PillarsOfTheFramework/PillarsOfTheFramework';

export const metadata: Metadata = {
  title: 'Framework New | Humain Learning',
  description:
    'Framework New standalone page.',
};

export default function FrameworkNewPage() {
  return (
    <>
      <FrameworkHeader />
      <FrameworkHero />
      <FrameworkWhatIsIt />
      <PillarsOfTheFramework />
      <FrameworkGlobalStandards />
      <FrameworkComplianceCards />
      <FrameworkFAQ />
      <FrameworkCTA />

      
    </>
  );
}
