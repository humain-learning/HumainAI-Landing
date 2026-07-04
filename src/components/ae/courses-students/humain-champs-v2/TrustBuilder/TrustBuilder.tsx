const trustBuilderCards = [
  {
    title: 'International Certification',
    description:
      "Certified in collaboration with E-Cell, IIT Kharagpur — one of India's premier innovation and entrepreneurship cells.",
    icon: '/assets/HCV2/icons/accolade.svg',
  },
  {
    title: 'Curriculum-Neutral Learning',
    description:
      'Designed to complement any academic track — IGCSE, A-Levels, IB, or MOE.',
    icon: '/assets/HCV2/icons/feature1.svg',
  },
  {
    title: 'UAE-Aligned Vision',
    description:
      'The UAE was the first country in the world to appoint a Minister of State for Artificial Intelligence. Its National AI Strategy 2031 names youth AI education as a core national priority — and this program helps your child get ahead of that curve.',
    icon: '/assets/HCV2/icons/feature2.svg',
  },
  {
    title: 'Safe, Secure Learning',
    description:
      'Live small-batch classes, secure checkout, and no data shared with third parties.',
    icon: '/assets/HCV2/icons/feature3.svg',
  },
];

export const TrustBuilder = () => {
  return (
    <section className="mx-auto mt-10 w-[90vw] max-w-6xl rounded-[28px] border border-[#E7E1D8] bg-[#FFF8F0] p-6 md:mt-16 md:p-8 lg:p-10">
      <h2 className="text-2xl font-semibold text-[#011813] md:text-3xl">
        Built on a Global AI Curriculum, Backed by Real-World Recognition
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trustBuilderCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#E8DCCF] bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F6E6D6]">
              <img src={card.icon} alt="" className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-[#011813]">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#4E5255]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
