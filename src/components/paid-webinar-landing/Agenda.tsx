import Image from 'next/image';
import Link from 'next/link';

const agendaCards = [
  {
    id: 'part-1',
    accentColor: '#E7A572',
    eyebrow: 'PART 1 · CREATE WITH AI',
    eyebrowColor: '#C97D49',
    iconBg: '#FDF3EB',
    icon: '/assets/webinar/inside-webinar/part1icon.svg',
    title: 'Build a 30-second family tribute video — and send it that night',
    desc: 'Your child writes heartfelt lyrics with AI, turns them into a real song, and directs a finished video — a gift for someone they love, made entirely by them.',
    chips: ['Write', 'Score', 'Film'],
    chipBg: '#EFF5E9',
    chipText: '#5e714e',
    imageSrc: '/assets/webinar/inside-webinar/part1.png',
    imageAlt: 'Students creating with AI',
    imageSide: 'right',
  },
  {
    id: 'part-2',
    accentColor: '#AAC191',
    eyebrow: 'PART 2 · LEARN WITH AI',
    eyebrowColor: '#5e714e',
    iconBg: '#EFF5E9',
    icon: '/assets/webinar/inside-webinar/part2icon.svg',
    title: 'Study smarter, not longer — turn any chapter into a podcast',
    desc: 'A patient AI tutor that quizzes instead of spoon-feeding, notes that become two hosts chatting about your exact chapter, and research answers with sources you can check.',
    chips: ['Study Mode', 'Absorb', 'Verify'],
    chipBg: '#FDF3EB',
    chipText: '#C97D49',
    imageSrc: '/assets/webinar/inside-webinar/part2.png',
    imageAlt: 'Student studying with AI',
    imageSide: 'left',
  },
];

export default function Agenda() {
  return (
    <section className="bg-white px-5 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-[#333333] md:text-4xl">
            What happens inside the webinar
          </h2>
          <p className="mt-3 text-center text-[#333333]/60">
            Not a lecture. A build-along. Six free tools, two big wins, lots of &quot;your turn&quot; moments.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {agendaCards.map((card) => (
            <article
              key={card.id}
              className="overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
            >
              <div className="grid grid-cols-1 items-center md:grid-cols-2">
                <div className="p-8">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      <Image src={card.icon} alt="" width={20} height={20} className="h-5 w-5" />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: card.eyebrowColor }}
                    >
                      {card.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-extrabold leading-snug text-[#333333]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#333333]/60">
                    {card.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.chips.map((chip) => (
                      <Link
                        key={chip}
                        href="/404"
                        className="rounded-full px-4 py-1.5 text-sm font-semibold transition-opacity hover:opacity-90"
                        style={{ backgroundColor: card.chipBg, color: card.chipText }}
                      >
                        {chip}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={`relative w-full ${card.imageSide === 'left' ? 'md:order-first' : ''}`}>
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={600}
                    height={400}
                    className="h-full min-h-[300px] w-full object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
