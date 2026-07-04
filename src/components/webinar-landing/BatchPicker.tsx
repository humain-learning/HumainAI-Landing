import Link from 'next/link';

const batches = [
  {
    id: 1,
    accent: '#AAC191',
    label: ['OPTION 1', 'WEEKDAY SPLIT'],
    title: 'Two Evening Sessions',
    date: 'Fri 10 July + Sat 11 July',
    time: '6:00 PM – 7:00 PM (both days)',
    bullets: [
      'Day 1: Create with AI — build your family tribute video',
      'Day 2: Learn with AI — the smart study system',
      'Easy 1-hour sittings after school',
    ],
    buttonLabel: 'Choose My Batch → ₹199',
    buttonTextColor: 'text-white',
  },
  {
    id: 2,
    accent: '#E7A572',
    label: ['OPTION 2', 'WEEKEND IMMERSIVE'],
    title: 'One Power Session',
    date: 'Sun 12 July',
    time: '11:00 AM – 1:00 PM',
    bullets: [
      'Both halves in one immersive sitting',
      'Perfect for busy school weeks',
      'Parents can join for the full experience',
    ],
    buttonLabel: 'Choose My Batch → ₹199',
    buttonTextColor: 'text-white',
  },
];

export default function BatchPicker() {
  return (
    <section className="bg-[#EFF5E9] py-16 md:py-24 px-5 md:px-16">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#333333]">
          Pick the batch that fits your week
        </h2>
        <p className="text-[#333333]/60 mt-3">Same content, same energy, same bonuses. Choose one.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row"
          >
            <div className="md:w-[40%] p-6 md:p-8" style={{ backgroundColor: batch.accent }}>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 leading-relaxed">
                {batch.label[0]}
                <br />
                {batch.label[1]}
              </div>
              <h3 className="font-display font-extrabold text-white text-xl mt-3">{batch.title}</h3>
              <p className="font-display font-extrabold text-white mt-4">{batch.date}</p>
              <p className="text-sm text-white/80 mt-2">{batch.time}</p>
            </div>

            <div className="flex-1 bg-white p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                {batch.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: batch.accent }}>
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-white fill-none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#333333]/75 leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/404"
                className="mt-6 block w-full rounded-lg py-3 text-center font-semibold text-white"
                style={{ backgroundColor: batch.accent }}
              >
                {batch.buttonLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
