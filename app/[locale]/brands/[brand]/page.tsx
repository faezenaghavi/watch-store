// app/[locale]/brands/[brand]/page.tsx
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { brands, products, getLocalizedProduct } from "@/lib/data"; // ✅ اضافه شدن تابع لوکالایز
import { ProductCard } from "@/components/ProductCard";
import type { Metadata } from "next";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}): Promise<Metadata> {
  const { locale, brand } = await params;
  const brandData = brands.find((b) => b.id === brand);

  if (!brandData) return { title: "Not Found" };

  return {
    title:
      locale === "fa"
        ? `${brandData.name} | کرونوس`
        : `${brandData.name} | CHRONOS`,
  };
}

export default async function LocaleBrandPage({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}) {
  const { locale, brand } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const brandData = brands.find((b) => b.id === brand);

  if (!brandData) notFound();

  // ✅ رفع باگ: مقایسه با id (مثل "rolex") نه name (مثل "Rolex")
  const brandProducts = products.filter((p) => p.brand === brandData.id);

  const isRtl = locale === "fa";

  const copy = isRtl
    ? {
        showing: "نمایش",
        unit: "ساعت",
        empty: "محصولی از این برند یافت نشد.",
        back: "بازگشت به برندها",
      }
    : {
        showing: "Showing",
        unit: "timepieces",
        empty: "No products found for this brand.",
        back: "Back to Brands",
      };

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={brandData.image}
          alt={brandData.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629] via-[#0E1629]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1629]/40 via-transparent to-[#0E1629]/40" />

        <div
          className={`relative z-10 px-6 max-w-4xl mx-auto ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <p className="text-[#4A7BFF] text-sm tracking-[0.3em] uppercase mb-4">
            {brandData.logo}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-4 break-words">
            {brandData.name}
          </h1>
          <p className="text-[#D9D9D9] text-base sm:text-lg md:text-xl font-light leading-relaxed">
            {brandData.tagline}
          </p>
        </div>
      </section>

      <section className="py-16 px-6" dir={isRtl ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex items-center justify-between mb-8 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <p className="text-sm text-[#D9D9D9]/60">
              {copy.showing} {brandProducts.length} {copy.unit}
            </p>

            <a
              href={`/${locale}/brands`}
              className="text-sm text-[#4A7BFF] hover:text-[#6B9BFF] transition-colors flex items-center gap-2"
            >
              <svg
                className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span>{copy.back}</span>
            </a>
          </div>

          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {brandProducts.map((product, i) => {
                // ✅ اعمال ترجمه فارسی/انگلیسی روی محصول قبل از sending به کارت
                const localizedProduct = getLocalizedProduct(product, locale);
                
                return (
                  <ProductCard key={product.id} product={localizedProduct} index={i} />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#D9D9D9]/40 text-lg">{copy.empty}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}