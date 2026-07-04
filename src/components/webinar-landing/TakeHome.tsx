import Link from 'next/link';
import { takeHomeItems, takeHomeTotals } from './data/takeHome';

const iconStyles = {
  video: {
    bg: '#EFF5E9',
    stroke: '#5e714e',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M5 7.5v9a1.5 1.5 0 0 0 2.2 1.3l7.6-4.5a1.5 1.5 0 0 0 0-2.6L7.2 6.2A1.5 1.5 0 0 0 5 7.5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  toolkit: {
    bg: '#FDF3EB',
    stroke: '#C97D49',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" strokeLinecap="round" />
        <rect x="4" y="7" width="16" height="10" rx="2" />
        <path d="M9 12h6" strokeLinecap="round" />
      </svg>
    ),
  },
  document: {
    bg: '#EFF5E9',
    stroke: '#5e714e',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M8 3h7l4 4v14H8z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  book: {
    bg: '#FDF3EB',
    stroke: '#C97D49',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H18v18H8.5A2.5 2.5 0 0 1 6 18.5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 5.5V19" />
      </svg>
    ),
  },
  briefcase: {
    bg: '#EFF5E9',
    stroke: '#5e714e',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="4" y="7" width="16" height="10" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  play: {
    bg: '#FDF3EB',
    stroke: '#C97D49',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <circle cx="12" cy="12" r="8" />
        <path d="m10.5 9 4.5 3-4.5 3Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  certificate: {
    bg: '#EFF5E9',
    stroke: '#5e714e',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M7 3h10v6l-2-1-2 1-2-1-2 1Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 15v4l2.5-1 2.5 1 2.5-1 2.5 1v-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

export default function TakeHome() {
  return (
    <section className="bg-white px-5 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-[#333333] md:text-4xl">
          Everything you take home
        </h2>
        <p className="mt-2 text-center text-[#333333]/60">
          Attend live, keep everything.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {takeHomeItems.map((item, index) => {
          const iconKey = item.icon as keyof typeof iconStyles;
          const iconConfig = iconStyles[iconKey];
          const iconBg = index % 2 === 0 ? '#EFF5E9' : '#FDF3EB';
          const iconColor = index % 2 === 0 ? '#5e714e' : '#C97D49';

          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-[#E6E6E6] bg-white px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: iconBg }}
                >
                  <div className="text-current" style={{ color: iconColor }}>
                    {iconConfig.svg}
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-[0.95rem] text-[#333333]">
                    {item.title}
                  </div>
                  <div className="text-sm text-[#333333]/55">{item.description}</div>
                </div>
              </div>

              <div className="font-display font-extrabold text-[#5e714e]">
                {item.price === 'Included' ? (
                  <span className="text-[#5e714e]">Included</span>
                ) : (
                  <span>{item.price}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-xl border-2 border-dashed border-[#E7A572]/50 py-5 text-center">
        <div className="text-[#333333]">
          Total value: <s className="text-[#888888]">{takeHomeTotals.totalValue}</s> · Today:{' '}
          <span className="font-display font-extrabold text-[#C97D49]">
            {takeHomeTotals.todayPrice}
          </span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/404"
          className="rounded-full bg-[#E7A572] px-8 py-3.5 font-display font-extrabold text-white transition-colors hover:bg-[#C97D49]"
        >
          Claim My Seat + All Bonuses → ₹199
        </Link>
      </div>
    </section>
  );
}
