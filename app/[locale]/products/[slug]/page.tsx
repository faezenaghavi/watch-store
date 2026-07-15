import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { products, getLocalizedProduct } from "@/lib/data";
import ProductGallery from "@/components/ProductGallery";
import type { Metadata } from "next";
import ProductActions from "@/components/ProductActions";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id, 
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) return { title: "Not Found" };

  const localized = getLocalizedProduct(product, locale);

  return {
    title:
      locale === "fa"
        ? `${localized.name} | کرونوس`
        : `${localized.name} | CHRONOS`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const isRtl = locale === "fa";
  const localized = getLocalizedProduct(product, locale);

  const material = localized.features.find(f => 
    f.toLowerCase().includes("steel") || 
    f.toLowerCase().includes("titanium") ||
    f.includes("استیل") ||
    f.includes("تیتانیوم")
  ) || (isRtl ? "استیل ضدزنگ" : "Stainless Steel");

  const copy = isRtl
    ? {
        addToCart: "افزودن به سبد خرید",
        wishlist: "لیست علاقه‌مندی‌ها",
        materialTitle: "جنس بدنه",
        guideTitle: "راهنمای محصول",
        featuresTitle: "ویژگی‌های کلیدی",
        guide: `این ساعت مجهز به ${localized.features.join('، ')} است و برای استفاده روزمره و رسمی بهینه‌سازی شده است.`,
      }
    : {
        addToCart: "Add to Cart",
        wishlist: "Wishlist",
        materialTitle: "Case Material",
        guideTitle: "Product Guide",
        featuresTitle: "Key Features",
        guide: `This timepiece is equipped with ${localized.features.join(', ')} and is optimized for both daily and formal wear.`,
      };

  return (
    <section className="py-16 px-6" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <ProductGallery imageSrc={localized.image} isRtl={isRtl} />
          </div>

          <div className={`flex flex-col justify-center ${isRtl ? "text-right" : "text-left"}`}>
            <p className="text-sm text-[#4A7BFF] mb-2 tracking-wider uppercase">{localized.brand}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-space)" }}>
              {localized.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-3xl font-semibold text-gradient">
                ${localized.price.toLocaleString()}
              </p>
              {localized.originalPrice && (
                <p className="text-lg text-[#D9D9D9]/40 line-through">
                  ${localized.originalPrice.toLocaleString()}
                </p>
              )}
            </div>

            <div className="glass-card rounded-2xl p-5 mb-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#D9D9D9]/60">{copy.materialTitle}</span>
                <span className="text-sm font-medium text-white">{material}</span>
              </div>
              <div className="luxury-divider" />
              <div>
                <span className="text-sm text-[#D9D9D9]/60 block mb-2">{copy.guideTitle}</span>
                <p className="text-sm text-[#D9D9D9]/90 leading-relaxed">{copy.guide}</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#D9D9D9]/60 mb-3">{copy.featuresTitle}</p>
              <div className="grid grid-cols-2 gap-2">
                {localized.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-[#D9D9D9]/80 bg-white/5 rounded-lg px-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4A7BFF] flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[#D9D9D9]/60 text-base mb-8 leading-relaxed">
              {localized.description}
            </p>

           <ProductActions
              product={localized}
              addToCartLabel={copy.addToCart}
              wishlistLabel={copy.wishlist}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}