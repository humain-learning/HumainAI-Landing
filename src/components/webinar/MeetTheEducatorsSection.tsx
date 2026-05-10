'use client';

const educators = [
  {
    id: 'rashmi',
    badge: 'Lead Host',
    badgeTheme: 'bg-terracotta',
    image: '/assets/images/Rashmieducator.png',
    name: 'Rashmi Bhaskaran',
    quote:
      '"We\'re not here to teach kids more tools. We\'re here to teach them how to think with AI as their study partner, not their crutch."',
    role: 'Lead, Curriculum & Training, Humain Learning',
    points: [
      'Designs the Humain Champs curriculum used by every student in the program.',
      'Has personally trained 500+ students directly across India.',
      'Leads instructor onboarding and ensures every classroom delivers the Humain pedagogy.',
    ],
  },
  {
    id: 'ankur',
    badge: 'Q&A Host',
    badgeTheme: 'bg-sage',
    image: '/assets/images/Rashmieducator.png',
    name: 'Ankur Dahiya',
    quote:
      '"We\'re not here to teach kids more tools. We\'re here to teach them how to think with AI as their study partner, not their crutch."',
    role: 'Program Director, Humain Learning',
    points: [
      'Has personally worked with 500+ Humain students across India.',
      'Leads the live programs, mentor coordination, and student outcomes at Humain.',
      "Speaks directly with parents every week about what works and what doesn't.",
    ],
  },
];

export default function MeetTheEducatorsSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[620px]">
          <h2 className="text-[28px] leading-[1.04] font-bold sm:text-[36px] lg:text-[44px]">
            <span className="text-terracotta">The Educators</span>
            <br />
            <span className="text-charcoal">Behind This Session.</span>
          </h2>

          <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />
        </div>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          {educators.map((educator) => (
            <article key={educator.id} className="space-y-6 lg:space-y-7">
              <div className="flex items-end gap-2 min-[360px]:gap-3 sm:gap-3.5 lg:gap-4">
                <div className="relative shrink-0">
                  <span
                    className={`font-tomorrow absolute top-1 -left-4 z-10 rounded-full px-2.5 py-1 text-[9px] font-semibold tracking-[0.08em] text-white uppercase ${educator.badgeTheme}`}
                  >
                    {educator.badge}
                  </span>
                  <img
                    src={educator.image}
                    alt={educator.name}
                    className="h-[88px] w-[88px] object-contain min-[360px]:h-[110px] min-[360px]:w-[110px] sm:h-[126px] sm:w-[126px] lg:h-[132px] lg:w-[132px]"
                  />
                </div>

                <div className="min-w-0 flex-1 pb-1">
                  <h3 className="text-charcoal max-w-[108px] text-[18px] leading-[0.98] font-bold min-[360px]:max-w-[142px] min-[360px]:text-[24px] sm:max-w-[152px] sm:text-[28px] lg:max-w-[160px] lg:text-[30px]">
                    {educator.name}
                  </h3>

                  <div className="mt-3 flex items-start gap-2 min-[360px]:mt-4 min-[360px]:gap-3">
                    <div className="bg-sage/70 h-8 w-[2px] shrink-0 min-[360px]:h-10 sm:h-11 lg:h-12" />
                    <p className="max-w-[116px] text-[8px] leading-[1.35] text-[#575757] italic min-[360px]:max-w-[150px] min-[360px]:text-[9px] sm:max-w-[160px] sm:text-[10px] lg:max-w-[170px] lg:text-[10px]">
                      {educator.quote}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4
                  className="max-w-[420px] text-[18px] leading-[1.04] font-bold !text-[#AAC191] sm:text-[21px] lg:text-[26px]"
                  style={{ color: '#AAC191' }}
                >
                  {educator.role}
                </h4>

                <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />

                <ul className="mt-5 space-y-3 text-sm leading-[1.32] text-[#404040] sm:text-[15px]">
                  {educator.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#404040]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 pt-2 sm:mt-8 sm:pt-4 lg:mt-10 lg:pt-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="max-w-[560px] self-center">
              <p className="font-tomorrow text-charcoal text-[10px] font-semibold tracking-[0.12em] uppercase">
                Meet The Founder
              </p>

              <h3
                className="mt-4 max-w-[520px] text-[28px] leading-[1.06] font-bold !text-[#AAC191] sm:text-[34px] lg:text-[40px]"
                style={{ color: '#AAC191' }}
              >
                About Humain Learning.
              </h3>

              <p
                className="mt-5 text-sm leading-[1.5] font-normal text-[#404040] sm:text-[15px]"
                style={{ fontWeight: 400 }}
              >
                Humain Learning was co-founded by <strong>Manit Jain</strong>,
                Harvard M.Ed and the founder of The Heritage Xperiential
                Learning Schools, ranked #1 in India. Our pedagogy is two
                international researcher Tom Loveless, CRED, and the European
                Commission.
              </p>
            </div>

            <div className="relative ml-auto w-full max-w-[520px] lg:-mr-10 xl:-mr-12">
              <div className="absolute top-4 right-1 h-[132px] w-[132px] rounded-full bg-[#AAC191] min-[360px]:h-[170px] min-[360px]:w-[170px] sm:h-[210px] sm:w-[210px] lg:h-[240px] lg:w-[240px]" />
              <img
                src="/assets/images/founder-img.png"
                alt="Founder"
                className="relative z-20 ml-auto h-[190px] w-auto object-contain min-[360px]:h-[250px] sm:h-[300px] lg:h-[340px]"
              />
            </div>
          </div>

          <div className="mt-5 pt-2 sm:mt-6 sm:pt-3">
            <div className="grid items-center gap-5 min-[360px]:gap-7 sm:grid-cols-[162px_1fr] sm:gap-10">
              <img
                src="/assets/images/Rashmieducator.png"
                alt="Dr. Tapaswini Sahu"
                className="h-[112px] w-[112px] object-contain min-[360px]:h-[142px] min-[360px]:w-[142px] sm:h-[154px] sm:w-[154px]"
              />

              <div>
                <h4 className="text-charcoal text-[22px] leading-[1] font-bold min-[360px]:text-[26px] sm:text-[30px]">
                  Dr. Tapaswini Sahu
                </h4>
                <p
                  className="mt-2 text-[15px] leading-[1.06] font-semibold !text-[#AAC191] min-[360px]:text-[18px] sm:text-[22px]"
                  style={{ color: '#AAC191' }}
                >
                  Academic Director,
                  <br />
                  Ph.D Cambridge, Ph.D JNU
                </p>
                <div className="bg-terracotta/90 mt-3 h-[2px] w-16" />
                <p className="mt-3 text-[11px] leading-[1.4] text-[#404040] sm:text-[12px]">
                  Backed by C-ELI, IIT Kharagpur.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[11px] leading-[1.45] text-[#404040] sm:text-[12px]">
              A pedagogy-first team. Not product-first by hackers. Not corporate
              trainers. Educators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
