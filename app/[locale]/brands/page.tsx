"use client";

import { use } from "react";
import { brands } from "@/lib/data";
import Link from "next/link";
import { m } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// نکته: این یک کامپوننت کلاینت است، پس params یک Promise است که با
// هوک `use` آن‌رول می‌شود (الگوی رسمی Next.js 15 برای client page ها).
// قبلاً locale یک prop اختیاری با مقدار پیش‌فرض "en" بود که هیچ‌وقت
// توسط Next.js پر نمی‌شد.
export default function BrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const isRTL = locale === "fa";

  const copy = isRTL
    ? {
        label: "همکاران ما",
        title: "برندهای نامدار",
        description:
          "معتبرترین ساعت‌سازان جهان را کشف کنید. هر برند نمایانگر میراثی از تعالی، نوآوری و طراحی ماندگار است.",
        explore: "مشاهده کالکشن",
      }
    : {
        label: "Our Partners",
        title: "Iconic Maisons",
        description:
          "Explore the world's most prestigious watchmakers. Each brand represents a legacy of excellence, innovation, and timeless design.",
        explore: "Explore Collection",
      };

  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://picsum.photos/seed/luxurybrands/1920/1080"
          alt={copy.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629] via-[#0E1629]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1629]/40 via-transparent to-[#0E1629]/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#4A7BFF] text-sm tracking-[0.3em] uppercase mb-4"
          >
            {copy.label}
          </m.p>
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6 break-words"
          >
            {copy.title}
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#D9D9D9] text-base sm:text-lg md:text-xl font-light leading-relaxed px-2"
          >
            {copy.description}
          </m.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {brands.map((brand) => (
              <m.div key={brand.id} variants={itemVariants}>
                <Link
                  href={`/${locale}/brands/${brand.id}`}
                  className="group relative overflow-hidden rounded-2xl block aspect-[4/5] cursor-pointer"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629] via-[#0E1629]/40 to-transparent group-hover:via-[#0E1629]/50 transition-all duration-500" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#4A7BFF]/40 transition-colors duration-500" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full rtl:translate-x-full rtl:group-hover:-translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>

                  <div className="absolute bottom-0 start-0 end-0 p-4 sm:p-5 z-10">
                    <div className="text-2xl sm:text-3xl font-bold text-white/20 mb-2 group-hover:text-[#4A7BFF]/30 transition-colors duration-300">
                      {brand.logo}
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#4A7BFF] transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <p className="text-[#D9D9D9]/60 text-xs mt-1 font-light line-clamp-1">
                      {brand.tagline}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[#4A7BFF] text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span>{copy.explore}</span>
                      <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
}
