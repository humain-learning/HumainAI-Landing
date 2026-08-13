import Image from 'next/image';

const HackathonCertificate = () => {
  return (
    <section className="w-full bg-[#FAF6F0] py-16 px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-[#171717] md:text-4xl">
              The E-Cell IIT Kharagpur certified{' '}
              <span className="text-[#E9A772]">AI hackathon</span>
            </h2>

            <p className="mt-6 text-gray-600">
              Every enrolled student takes part in one annual hackathon, organised by Humain
              Learning in collaboration with E-Cell IIT Kharagpur, and receives an official
              E-Cell IIT Kharagpur certificate.
            </p>

            <p className="mt-4 text-gray-600">
              Teams work on real AI problems over 24 to 48 hours, mentored by E-Cell IIT
              Kharagpur mentors and Humain coaches.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-2 text-gray-600">
                <span className="text-[#E9A772]">—</span>
                <span>
                  Every participating student receives a nationally and internationally
                  recognised certificate.
                </span>
              </li>
              <li className="flex gap-2 text-gray-600">
                <span className="text-[#E9A772]">—</span>
                <span>
                  Winners are featured across Humain Learning&apos;s network and your
                  school&apos;s channels.
                </span>
              </li>
            </ul>

            <p className="mt-8 text-lg font-bold text-[#171717]">
              One hackathon. One certificate.{' '}
              <span className="text-[#E9A772]">One credential that follows your students for life.</span>
            </p>
          </div>

          <div className="mx-auto w-full max-w-[420px]">
            <Image
              src="/assets/images/AIClub/HackathonCertificate/certificate.png"
              alt="AI Hackathon certificate"
              width={420}
              height={480}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonCertificate;