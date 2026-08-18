"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ExploreModal from '../landing/ExploreModal';

const BlogsCtaFooter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#FAF6F0]">
      <section className="w-full bg-[#E9A772]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 pt-10 pb-0 md:flex-row-reverse md:items-center md:px-8 lg:px-0">
          <div className="w-full max-w-2xl">
            <h2 className="text-center text-3xl font-black leading-tight text-white md:text-left md:text-4xl">
              Building a generation that leads the future with AI.
            </h2>

            <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#011813] transition-colors hover:bg-[#F4F0EA] md:w-auto md:max-w-none"
              >
                <span>Explore Now</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#011813] text-white">
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
              </button>

              <a href="https://wa.me/918130023688" target="_blank" rel="noopener noreferrer" className="inline-flex w-full max-w-[320px] items-center justify-center gap-3 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:w-auto md:max-w-none">
                <span>Talk to us on WhatsApp</span>
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-[420px] self-center p-0 md:hidden">
            <Image
              src="/assets/images/cta.png"
              alt="Family learning together at a laptop"
              width={420}
              height={520}
              className="h-auto w-full object-contain object-bottom"
            />
          </div>

          <div className="relative mb-0 hidden h-[280px] w-full max-w-[420px] self-end p-0 md:block">
            <Image
              src="/assets/images/cta.png"
              alt="Family learning together at a laptop"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto w-full max-w-7xl px-6 py-8 text-[#4E5255] md:px-8 lg:px-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <Link href="/" className="flex w-fit items-center gap-2" aria-label="Go to homepage">
                <Image
                  src="/assets/logo/brain-logo.png"
                  alt="Humain Learning logo"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
                <span className="text-base font-semibold text-[#4E5255]">Humain Learning</span>
              </Link>

              <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <Link href="/courses/students/humain-champs" className="transition-colors hover:text-[#011813]">
                  Humain Champs
                </Link>
                <Link href="/courses/educators/humain-educators" className="transition-colors hover:text-[#011813]">
                  Humain Educators
                </Link>
                <Link href="/schools" className="transition-colors hover:text-[#011813]">
                  For Schools
                </Link>
                <Link href="/privacy-policy" className="transition-colors hover:text-[#011813]">
                  Privacy Policy
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:hi@humainlearning.ai" className="transition-colors hover:text-[#011813]">
                hi@humainlearning.ai
              </a>
              <a href="tel:+918130023688" className="transition-colors hover:text-[#011813]">
                +91 81300 23688
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm text-[#4E5255]">&copy; 2026 Humain Learning. Operated by Eduxa Consulting.</p>
        </div>
      </footer>

      <ExploreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default BlogsCtaFooter;