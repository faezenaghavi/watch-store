import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
};

interface BlogSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  posts: BlogPost[];
}

export function BlogSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  posts,
}: BlogSectionProps) {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#4A7BFF] mb-4">
            BLOG
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {title}
          </h2>
          <p className="text-[#D9D9D9] text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="luxury-divider mt-8 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glass-card rounded-3xl p-6 border border-white/10"
            >
              <div className="text-xs tracking-[0.25em] uppercase text-[#4A7BFF] mb-3">
                {post.tag}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-[#D9D9D9]/80 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-[#D9D9D9]/50">{post.date}</span>
                <Link href={ctaHref} className="btn-luxury text-xs">
                  {ctaText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}