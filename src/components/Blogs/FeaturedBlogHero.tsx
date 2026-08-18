import Image from 'next/image';
import Link from 'next/link';

export type FeaturedBlog = {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  href: string;
};

type FeaturedBlogHeroProps = {
  blog?: FeaturedBlog;
};

const DEFAULT_BLOG: FeaturedBlog = {
  image: '/assets/images/AIClub/ProgrammeGlance/batch-2.png',
  category: 'vibe coding for students',
  title: 'Vibe Coding for Students: Build Your First App Without Writing Code',
  excerpt:
    'Build app without coding; no-code app for students; AI coding for beginners.',
  authorName: 'Humain Learning',
  authorAvatar: '/assets/images/blogbrain.png',
  date: '29 Jul 2026',
  href: '/blogs/vibe-coding-for-students',
};

const FeaturedBlogHero = ({ blog = DEFAULT_BLOG }: FeaturedBlogHeroProps) => {
  return (
    <section className="bg-[#FAF6F0] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href={blog.href}
          className="grid overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white transition-shadow hover:shadow-lg lg:grid-cols-[45%_55%]"
        >
          <div className="relative min-h-[280px] lg:min-h-[440px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="rounded-t-3xl object-cover lg:rounded-l-3xl lg:rounded-t-none"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <span className="w-fit rounded-full bg-[#E9A772] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {blog.category}
            </span>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-[#171717] md:text-4xl">
              {blog.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Image
                src={blog.authorAvatar}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />

              <p className="text-sm font-medium text-[#171717]">{blog.authorName}</p>

              <time className="ml-auto text-sm text-gray-500">{blog.date}</time>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBlogHero;