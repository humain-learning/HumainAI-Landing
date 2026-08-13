import Image from 'next/image';

const WHY_ITEMS = [
  {
    icon: '/assets/images/AIClub/AIClubWhySchool/Curriculum.png',
    title: 'Curriculum shift',
    description: 'AI is now entering the school curriculum.',
  },
  {
    icon: '/assets/images/AIClub/AIClubWhySchool/gap.png',
    title: 'The gap',
    description: 'Schools teach AI basics, but students need depth and practice.',
  },
  {
    icon: '/assets/images/AIClub/AIClubWhySchool/competetive-edge.png',
    title: 'Competitive edge',
    description: 'An E-Cell IIT Kharagpur certificate sets your students apart.',
  },
  {
    icon: '/assets/images/AIClub/AIClubWhySchool/future-ready.png',
    title: 'Future-ready',
    description: 'AI skills now rank first in university admission essays.',
  },
];

const WhySchool = () => {
  return (
    <section className="w-full bg-[#FAF6F0] py-12 px-6 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-2xl font-extrabold text-[#171717] md:text-4xl">
          Why does your school need an AI club now?
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />

        <div className="mt-8 flex flex-col gap-4 sm:hidden">
          {WHY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-left"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 object-contain"
              />
              <div>
                <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 hidden grid-cols-1 gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <h3 className="mt-4 text-lg font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySchool;