import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blogs';

export const generateStaticParams = () => {
  return getAllBlogSlugs().map((slug) => ({ slug }));
};

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article className="w-full bg-[#FAF6F0] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block w-fit rounded-full bg-[#E9A772] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {frontmatter.categoryLabel}
        </span>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#171717] md:text-4xl">
          {frontmatter.title}
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <Image
            src={frontmatter.authorAvatar}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <p className="text-sm font-medium text-[#171717]">{frontmatter.authorName}</p>
          <time className="text-sm text-gray-500">{frontmatter.date}</time>
        </div>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            sizes="(max-width: 767px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg prose-headings:font-display prose-headings:font-extrabold prose-img:rounded-xl prose-table:text-sm mt-10 max-w-none text-gray-600">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
