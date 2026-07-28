import Link from 'next/link';

const blogDesktop = ({ BLOG_INSIGHTS }: { BLOG_INSIGHTS: { eyebrow: string; title: string; description: string; href: string; }[] }) => {
    return (
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
    );
};
export default blogDesktop;