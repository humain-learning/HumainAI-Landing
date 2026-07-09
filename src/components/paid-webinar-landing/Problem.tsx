import Image from 'next/image';

const problemCards = [
  {
    id: 1,
    title: 'From consumer → creator',
    description:
      'Most teens only consume AI content. Yours will write, score and film a real video — in the session itself.',
    image: '/assets/webinar/second/creator.png',
  },
  {
    id: 2,
    title: 'From cheating → learning',
    description:
      'We teach the smart AI study method — a tutor that quizzes, notes that become podcasts, and answers you can verify.',
    image: '/assets/webinar/second/learning.png',
  },
  {
    id: 3,
    title: 'From risky → responsible',
    description:
      'Consent, kindness and fact-checking are built into every activity. Parents are welcome to sit in.',
    image: '/assets/webinar/second/responsible.png',
  },
];

export default function Problem() {
  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#333333] leading-tight mb-6">
          Every student is using AI.
          <br />
          Very few are using it <span className="text-[#E7A572]">right</span>.
        </h2>
        <p className="text-[#333333]/60 max-w-2xl mx-auto text-base leading-relaxed">
          There's a difference between copying answers from a chatbot and creating, learning and thinking with AI. This
          webinar teaches the second one — the skill that will define your child's future.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
        {problemCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl border border-[#E6E6E6] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="mb-4 flex items-start justify-start">
              <div className="w-14 h-14 overflow-hidden rounded-xl bg-[#F7F7F3] p-1">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h3 className="font-display font-bold text-[#333333]">{card.title}</h3>

            <p className="text-sm text-[#333333]/60 mt-2 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
