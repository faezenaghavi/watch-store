"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { brands } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { useTranslations, useLocale } from "next-intl"; 

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const BRAND_IMAGES: Record<string, string> = {
  rolex: "/images/Rolex.jpeg",
  omega: "/images/Omega.jpeg",
  tissot: "/images/TISSOT.jpeg",
  casio: "/images/CASIO.jpeg",
  seiko: "/images/seiko1.jpeg",
  citizen: "/images/Citizen.jpeg",
  orient: "/images/Orient.jpeg",
  longines: "/images/Longines.jpeg",
  tagheuer: "/images/TAGheuer.jpeg",
  fossil: "/images/Fossil.jpeg",
};

export function BrandCategories() {
  // دریافت تابع ترجمه و زبان فعلی
  const t = useTranslations('BrandCategories');
  const locale = useLocale();

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#4A7BFF] opacity-[0.03] blur-[180px]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label={t('label')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {brands.map((brand, i) => (
            <m.div
              key={brand.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              {/* اصلاح لینک برای پشتیبانی از زبان فارسی */}
              <Link href={`/${locale}/brands/${brand.id}`} className="group block">
                <div className="relative rounded-full overflow-hidden aspect-square flex items-center justify-center transition-all duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(0,0,0,0.35)] hover:border-white/10 bg-[#0e1629] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  
                  {/* تصویر — بلوری و تاریک */}
                  <img
                    src={BRAND_IMAGES[brand.id] ?? ""}
                    alt={brand.name}
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg brightness-[0.3] saturate-20 transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:blur-none group-hover:brightness-100 group-hover:saturate-100"
                    loading="lazy"
                  />

                  {/* نام برند و توضیحات (محو شدن آهسته) */}
                  <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center transition-all duration-700 ease-out group-hover:opacity-0 group-hover:-translate-y-3 group-hover:drop-shadow-none">
                    <h3
                      className="text-lg md:text-xl font-bold text-white transition-all duration-700 ease-out drop-shadow-lg"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      {brand.name}
                    </h3>
                    <div className="w-6 h-[1px] bg-[#4A7BFF]/50 my-2 transition-all duration-700 ease-out" />
                    <p className="text-[10px] md:text-xs text-[#D9D9D9]/70 font-light tracking-wider uppercase">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* حاشیه دایره‌ای */}
                  <div className="absolute inset-0 rounded-full border border-white/10 transition-all duration-700 ease-in-out pointer-events-none" />
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}