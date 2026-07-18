import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === "fa";
  const prefix = `/${locale}`;

  const copy = isRTL
    ? {
        title: "بلاگ کرونوس",
        subtitle:
          "راهنماهای عملی برای نگهداری، انتخاب و خرید بهتر ساعت‌های لوکس.",
        back: "بازگشت به خانه",
      }
    : {
        title: "CHRONOS Blog",
        subtitle:
          "Practical guides to help you maintain, choose, and buy luxury watches with confidence.",
        back: "Back to home",
      };

  const posts = isRTL
    ? [
        {
          title: "۵ نکته مهم برای نگهداری روزانه از ساعت لوکس",
          excerpt:
            "از تمیز کردن صحیح تا دور نگه‌داشتن ساعت از رطوبت و ضربه؛ این نکات عمر ساعت شما را بیشتر می‌کنند.",
        },
        {
          title: "اولین ساعت لوکس خود را چطور انتخاب کنیم؟",
          excerpt:
            "قبل از خرید، به سایز، نوع موتور، جنس بدنه و سبک پوشش خود توجه کنید تا انتخاب دقیق‌تری داشته باشید.",
        },
        {
          title: "موتور مکانیکی، اتوماتیک یا کوارتز؟",
          excerpt:
            "تفاوت این سه نوع موتور را بشناسید تا بدانید کدام مدل برای استفاده روزمره یا کلکسیونی مناسب‌تر است.",
        },
      ]
    : [
        {
          title: "5 essential tips for daily watch care",
          excerpt:
            "From proper cleaning to protecting your watch from moisture and impact, these habits help extend its life.",
        },
        {
          title: "How to choose your first luxury watch",
          excerpt:
            "Before buying, consider case size, movement type, material, and personal style to make a smarter choice.",
        },
        {
          title: "Mechanical, automatic, or quartz?",
          excerpt:
            "Learn the difference between the three main movement types and decide which one fits your needs best.",
        },
      ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <Link href={prefix} className="text-[#4A7BFF] text-sm">
            {copy.back}
          </Link>
          <h1
            className="text-4xl md:text-6xl font-bold text-gradient mt-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {copy.title}
          </h1>
          <p className="text-[#D9D9D9] mt-4 max-w-2xl">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article key={index} className="glass-card rounded-3xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">
                {post.title}
              </h2>
              <p className="text-[#D9D9D9]/80 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}