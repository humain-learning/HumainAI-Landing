import Hero from 'components/AIClub/Hero';
import WhatIsIt from 'components/AIClub/WhatIsIt';
import WhySchool from 'components/AIClub/WhySchool';
import ProgrammeGlance from 'components/AIClub/ProgrammeGlance';
import HowItRuns from '@/components/AIClub/HowItRuns';
import WhatStudentsLearn from '@/components/AIClub/WhatStudentsLearn';
import HackathonCertificate from '@/components/AIClub/HackathonCertificate';
import HowToStart from '@/components/AIClub/HowToStart';
import FAQ from '@/components/AIClub/FAQ';
import CTA from '@/components/AIClub/CTA';

export default function AIClubPage() {
  return (
    <div>
      <Hero />
      <WhatIsIt />
      <WhySchool />
      <ProgrammeGlance />
      <HowItRuns />
      <WhatStudentsLearn />
      <HackathonCertificate />
      <HowToStart/>
      <FAQ/>
      <CTA />
    </div>
  );
}