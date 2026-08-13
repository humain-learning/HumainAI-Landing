import Image from 'next/image';

const BATCHES = [
  {
    badge: 'BATCH 1',
    title: 'Grades 3 to 5',
    description: 'Younger learners. Minimum 20 students to open the batch.',
    image: '/assets/images/AIClub/ProgrammeGlance/batch-1.png',
  },
  {
    badge: 'BATCH 2',
    title: 'Grades 6 to 8',
    description: 'Ages 11 to 14. Minimum 20 students to open the batch.',
    image: '/assets/images/AIClub/ProgrammeGlance/batch-2.png',
  },
  {
    badge: 'BATCH 3',
    title: 'Grades 9 to 12',
    description: 'Ages 15 to 18. Minimum 20 students to open the batch.',
    image: '/assets/images/AIClub/ProgrammeGlance/batch-3.png',
  },
];

const KEY_OFFERINGS = [
  {
    icon: '/assets/images/AIClub/ProgrammeGlance/weekly.png',
    title: 'Weekly class',
    description: 'One session every week, in school.',
  },
  {
    icon: '/assets/images/AIClub/ProgrammeGlance/monthly.png',
    title: 'Monthly challenge',
    description: 'A team-based problem to solve.',
  },
  {
    icon: '/assets/images/AIClub/ProgrammeGlance/LMS.png',
    title: 'LMS access',
    description: 'Videos and study material available 24/7.',
  },
  {
    icon: '/assets/images/AIClub/ProgrammeGlance/annual.png',
    title: 'Annual hackathon',
    description: 'Certified by E-Cell IIT Kharagpur.',
  },
];

const ProgrammeGlance = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-[#171717] md:text-4xl">
            The programme at a glance
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Three batches run in parallel, one class per week, in your school&apos;s computer lab.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BATCHES.map((batch, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-[#E6E6E6] bg-[#FAF6F0]"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={batch.image}
                  alt={batch.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C97D49]">
                  {batch.badge}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#171717]">{batch.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{batch.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Key offerings
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_OFFERINGS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-[#E6E6E6] bg-[#FAF6F0] p-4"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">{item.title}</h4>
                  <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeGlance;