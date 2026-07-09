import { testimonials } from './data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-[#FDF3EB] px-5 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-[#333333] md:text-4xl">
          Families who've learned with us
        </h2>
        
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={`${item.id}-star-${index}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  style={{ color: '#E7A572' }}
                >
                  <path d="M12 2.75 14.8 8.9l6.45.94-4.67 4.55 1.1 6.43L12 18.8 6.32 20.82l1.1-6.43L2.75 9.84l6.45-.94L12 2.75Z" />
                </svg>
              ))}
            </div>

            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#333333]/80">
              “{item.quote}”
            </p>

            <div className="mt-auto flex items-center gap-3 pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AAC191] text-sm font-bold text-white">
                {item.initial}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#333333]">{item.name}</div>
                <div className="text-xs text-[#333333]/55">{item.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
