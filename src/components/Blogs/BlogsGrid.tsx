'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogsFilter from './BlogsFilter';
import type { BlogFrontmatter } from '@/lib/blogs';

type BlogsGridProps = {
  blogs: BlogFrontmatter[];
};

const BlogsGrid = ({ blogs }: BlogsGridProps) => {
  const [selected, setSelected] = useState('All');

  const filtered =
    selected === 'All' ? blogs : blogs.filter((blog) => blog.category === selected);

  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

  return (
    <section className="w-full bg-[#FAF6F0] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <BlogsFilter selected={selected} onSelect={setSelected} categories={categories} />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full">
                <span className="absolute left-3 top-3 z-10 w-fit rounded-full bg-[#A8C090] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#1A3A1A] md:left-4 md:top-4 md:px-3 md:py-1 md:text-xs">
                  {blog.categoryLabel}
                </span>
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="rounded-t-2xl object-cover"
                />
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={blog.authorAvatar}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                  <p className="text-sm font-medium text-[#171717]">{blog.authorName}</p>
                  <time className="ml-auto text-sm text-gray-500">{blog.date}</time>
                </div>

                <h3 className="mt-4 line-clamp-2 font-display text-lg font-extrabold text-[#171717] md:text-xl">
                  {blog.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsGrid;
