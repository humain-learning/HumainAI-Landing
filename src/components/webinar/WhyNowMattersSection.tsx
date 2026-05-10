const stats = [
  {
    value: '70%',
    title: 'of global students',
    description: 'start using AI between ages 10 and 13.',
    source: '-Stanford University',
  },
  {
    value: '3-5',
    title: 'Years',
    description:
      'is the gap between Indian students and global peers in AI exposure.',
    source: '-UNESCO',
  },
  {
    value: '90%',
    title: 'of careers',
    description: 'by 2030 will require AI literacy as a foundational skill.',
    source: '-PwC India Workforce Report',
  },
];

export default function WhyNowMattersSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[560px]">
          <h2 className="text-[28px] leading-[1.04] font-bold sm:text-[36px] lg:text-[44px]">
            <span className="text-terracotta">Why Now</span>{' '}
            <span className="text-charcoal">Matters.</span>
          </h2>

          <div className="bg-terracotta/90 mt-4 h-[2px] w-14 sm:w-16" />
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-12">
          {stats.map((item) => (
            <article key={item.value} className="max-w-[320px]">
              <div className="text-[52px] leading-none font-bold text-[#AAC191] sm:text-[58px] lg:text-[64px]">
                {item.value}
              </div>
              <h3 className="text-charcoal mt-2 text-[28px] leading-[0.95] font-bold sm:text-[30px] lg:text-[34px]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[270px] text-sm leading-[1.4] text-[#6A6A6A] sm:text-[15px]">
                {item.description}
              </p>
              <p className="text-terracotta mt-2 text-[12px] leading-[1.3] font-semibold sm:text-[13px]">
                {item.source}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 text-[#404040] sm:mt-12">
          <img
            src="/assets/icons/window-img.svg"
            alt=""
            className="mt-0.5 h-6 w-6 shrink-0 object-contain"
          />
          <p className="text-sm leading-6 sm:text-[15px]">
            The window isn&apos;t five years.{' '}
            <span className="text-terracotta font-semibold">
              It&apos;s the next twelve months.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
