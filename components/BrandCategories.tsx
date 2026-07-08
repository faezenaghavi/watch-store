"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { brands } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

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
  seiko: "/images/SEIKO.jpeg",
  citizen: "/images/Citizen.jpeg",
  orient: "/images/Orient.jpeg",
  longines: "/images/Longines.jpeg",
  tagheuer: "/images/TAGheuer.jpeg",
  fossil: "/images/Fossil.jpeg",
};

export function BrandCategories() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#4A7BFF] opacity-[0.03] blur-[180px]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Browse by Brand"
          title="Legendary Maisons"
          subtitle="Explore timepieces from the world's most prestigious watchmakers. Each brand represents decades of horological excellence."
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
              <Link href={`/brands/${brand.id}`} className="group block">
                <div className="relative rounded-full overflow-hidden aspect-square flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.35)] hover:border-white/10 bg-[#0e1629] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  {/* تصویر — تاریک */}
                  <img
                    src={BRAND_IMAGES[brand.id] ?? ""}
                    alt={brand.name}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.3] saturate-20 scale-110 transition-all duration-700 ease-out group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* لایه تاریک */}
                  <div className="absolute inset-0 bg-[#0e1629]/75 transition-all duration-700 ease-out group-hover:bg-[#0e1629]/0" />

                 

                  {/* نام برند و توضیحات */}
                  <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-3">
                    <h3
                      className="text-lg md:text-xl font-bold text-white transition-all duration-300 drop-shadow-lg"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      {brand.name}
                    </h3>
                    <div className="w-6 h-[1px] bg-[#4A7BFF]/50 my-2 transition-all duration-500" />
                    <p className="text-[10px] md:text-xs text-[#D9D9D9]/70 font-light tracking-wider uppercase">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* حاشیه دایره‌ای */}
                  <div className="absolute inset-0 rounded-full border border-white/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
