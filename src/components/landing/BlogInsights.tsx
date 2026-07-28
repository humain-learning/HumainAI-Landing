'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const BLOG_INSIGHTS = [
  {
    eyebrow: 'FOR STUDENTS',
    title: 'Studying for Board Exams with AI — Without Cheating Yourself',
    description: 'A revision method that uses AI for retrieval practice, not ready-made answers.',
    href: '/blog',
  },
  {
    eyebrow: 'FOR PARENTS',
    title: "A Parent's Guide to Safe AI Use at Home",
    description: 'Practical ground rules for chatbots, homework, and privacy — no fear-mongering.',
    href: '/blog',
  },
  {
    eyebrow: 'FOR EDUCATORS',
    title: 'Five Questions to Ask Before Trusting an AI Answer',
    description: "A classroom-ready checklist for evaluating any model's output.",
    href: '/blog',
  },
];

const BlogInsights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const setWidth = () => {
      setViewportWidth(viewportRef.current?.clientWidth ?? 0);
    };

    setWidth();
    window.addEventListener('resize', setWidth);

    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, []);

  const maxIndex = BLOG_INSIGHTS.length - 1;
  const cardWidth = viewportWidth * 0.85;
  const step = cardWidth + 16;

  return (
    <section className="mx-auto w-full max-w-7xl bg-transparent px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E9A772]">
            FROM THE HUMAIN BLOG
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-[#011813] md:text-5xl">
            AI Learning Insights
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-3 rounded-full border border-[#E0E0E0] bg-white px-5 py-3 text-sm font-semibold text-[#011813] transition-colors hover:bg-[#F8F8F8]"
        >
          <span>View All Blogs</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#AAC191] text-[#011813]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="mt-10 hidden grid-cols-1 gap-6 md:grid md:grid-cols-3">
        {BLOG_INSIGHTS.map((item) => (
          <article
            key={item.title}
            className="flex min-h-[250px] flex-col rounded-2xl border border-[#E0E0E0] bg-[#FAF6F0] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E5255]">{item.eyebrow}</p>
            <h3 className="mt-3 text-xl font-bold text-[#011813]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4E5255]">{item.description}</p>
            <Link href={item.href} className="mt-auto pt-6 text-sm font-semibold text-[#E9A772] hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <div ref={viewportRef} className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${activeIndex * step}px)` }}
          >
            {BLOG_INSIGHTS.map((item) => (
              <article
                key={item.title}
                className="w-[85%] shrink-0 flex min-h-[250px] flex-col rounded-2xl border border-[#E0E0E0] bg-[#FAF6F0] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E5255]">{item.eyebrow}</p>
                <h3 className="mt-3 text-xl font-bold text-[#011813]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4E5255]">{item.description}</p>
                <Link href={item.href} className="mt-auto pt-6 text-sm font-semibold text-[#E9A772] hover:underline">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous blog card"
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C97D49]/40 text-[#C97D49] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next blog card"
            onClick={() => setActiveIndex((prev) => Math.min(prev + 1, maxIndex))}
            disabled={activeIndex === maxIndex}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C97D49]/40 text-[#C97D49] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
