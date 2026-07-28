import Image from 'next/image';
import SecondaryButton from 'ui/SecondaryButton';
import PrimaryButton from '../ui/PrimaryButton';

export default function FrameworkComplianceCards() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E6E6E6] bg-[#FAF6F0] p-8">
            <div className="flex h-14 w-14 items-center justify-center">
              <Image
                src="/assets/images/frameworkNew/IndianCurri.png"
                alt="Indian curriculum alignment icon"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-[#1A1A1A]">
              Aligned with the Indian curriculum
            </h3>
            <p className="mt-3 text-gray-600">
              The framework maps to NEP 2020, NCF 2023, NCERT, the CBSE Artificial Intelligence
              curriculum (subject codes 417 and 843), and ICSE learning requirements — so
              schools can integrate AI literacy within existing academic frameworks.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E6E6E6] bg-[#FAF6F0] p-8">
            <div className="flex h-14 w-14 items-center justify-center">
              <Image
                src="/assets/images/frameworkNew/BuiltinDPDP.png"
                alt="DPDP compliance icon"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-[#1A1A1A]">
              Built in line with DPDP Act 2023
            </h3>
            <p className="mt-3 text-gray-600">
              Student privacy, safety, and responsible AI use at its core: student data
              protection and secure data practices, responsible AI education and digital privacy
              awareness, and parental consent support.
            </p>
            {/* <div className="mt-6 flex flex-wrap justify-center">
              <SecondaryButton
                text="Learn how we align with DPDP Act"
                target="https://www.meity.gov.in/content/digital-personal-data-protection-act-2023"
                // target=""
                
                newTab
                // buttonClassName="w-full justify-center md:w-auto md:justify-start [&>div:first-child]:whitespace-normal [&>div:first-child]:text-center md:[&>div:first-child]:text-left"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}