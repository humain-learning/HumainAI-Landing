import { Check } from 'lucide-react';

const checklistItems = [
  'Built for Indian classrooms, not adapted as an afterthought.',
  'Covers responsible AI and data privacy.',
  'Focuses on learning and creating with AI, not just theory.',
  'Develops the human skills AI cannot replace.',
];

export default function FrameworkWhatIsIt() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E9A772]">
              WHAT IT IS
            </p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-4xl">
              What is the Humain Learning{' '}
              <span className="text-[#E9A772]">AI</span> methodology?
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
            <p className="mt-6 text-lg text-gray-600">
              A structured learning framework that helps school students and teachers understand,
              use, evaluate, and create with artificial intelligence responsibly.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Built on leading global AI education frameworks and adapted for Indian schools, it
              aligns with NEP 2020, NCF 2023, CBSE, and ICSE curricula. It develops AI
              knowledge, critical thinking, digital citizenship, and future-ready skills — and is
              the foundation of the{' '}
              <span className="font-bold text-[#1A1A1A]">Humain Champs</span> programme.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F1F5EA] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              WHY WE BUILT IT
            </p>
            <p className="mt-3 text-gray-700">
              Most AI literacy frameworks were not designed for Indian schools. Humain combines
              global best practices with the realities of Indian classrooms.
            </p>

            <div className="mt-6 space-y-4">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#AAC191] text-white">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
