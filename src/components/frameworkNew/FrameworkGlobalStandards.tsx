const standardsRows = [
  {
    capacity: 'Technical understanding and ethics',
    further:
      'Covered by the OECD-EU and UNESCO frameworks, and by Humain Pillars 1 and 2.',
  },
  {
    capacity: 'Using AI to learn',
    further: 'Named as Pillar 3. Only partially covered by the global frameworks.',
  },
  {
    capacity: 'Creating with AI',
    further:
      'Named as Pillar 4. Emphasised as a hands-on, human-first creative pillar.',
  },
  {
    capacity: 'Building agents and automation',
    further: 'Named as Pillar 5. Largely absent from the global frameworks.',
  },
  {
    capacity: 'Human intelligence in the age of AI',
    further: 'Named as Pillar 6. Not named by either global framework.',
  },
];

export default function FrameworkGlobalStandards() {
  return (
    <section className="w-full bg-[#FAF6F0] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E9A772] md:text-sm">
          BUILT ON GLOBAL STANDARDS
        </p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
          OECD-EU and UNESCO, <span className="text-[#E9A772]">then further</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
        <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600 md:text-lg">
          Informed by the joint OECD-EU AI Literacy Framework (AILit, 2026) and UNESCO&apos;s AI
          Competency Framework for Students (2024) — a globally recognised standard, not an
          in-house invention.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white md:mt-12">
          <div className="grid grid-cols-2">
            <div className="bg-[#AAC191] px-4 py-4 text-left text-sm font-bold text-white md:px-6 md:text-base">
              Capacity
            </div>
            <div className="bg-[#DAA873] px-4 py-4 text-left text-sm font-bold text-white md:px-6 md:text-base">
              Where Humain goes further
            </div>
          </div>

          <div className="divide-y divide-[#E6E6E6]">
            {standardsRows.map((row) => (
              <div key={row.capacity} className="grid grid-cols-2 bg-white">
                <div className="px-4 py-4 text-left text-sm font-bold text-[#1A1A1A] md:px-6 md:py-5 md:text-base">
                  {row.capacity}
                </div>
                <div className="border-l border-[#E6E6E6] px-4 py-4 text-left text-sm text-gray-600 md:px-6 md:py-5 md:text-base">
                  {row.further}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}