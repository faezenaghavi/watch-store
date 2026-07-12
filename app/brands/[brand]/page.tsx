import { brands, getProductsByBrand } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";
import type { Metadata } from "next";


interface Props {
  params: Promise<{ brand: string }>;
}

// تولید متادیتای پویا برای سئو
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand: brandId } = await params;
  const brand = brands.find((b) => b.id === brandId);

  if (!brand) {
    return { title: "Brand Not Found | CHRONOS" };
  }

  return {
    title: `${brand.name} Luxury Timepieces | CHRONOS`,
    description: brand.description,
  };
}

// تولید مسیرهای استاتیک برای ساخت سریع‌تر صفحات
export async function generateStaticParams() {
  return brands.map((b) => ({ brand: b.id }));
}

export default async function BrandPage({ params }: Props) {
  // دریافت پارامترها به صورت Async
  const { brand: brandId } = await params;
  const brand = brands.find((b) => b.id === brandId);

  // اگر برند در دیتابیس ما نبود، صفحه 404 نمایش داده شود
  if (!brand) {
    notFound();
  }

  // دریافت محصولات مربوط به این برند
  const products = getProductsByBrand(brandId);

  return (
    <>
      {/* بخش هدر برند با تصویر پس‌زمینه */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={brand.image}
          alt={brand.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629] via-[#0E1629]/70 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#4A7BFF] text-sm tracking-[0.3em] uppercase mb-4">
            {brand.origin} — Est. {brand.founded}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-4">
            {brand.name}
          </h1>
          <p className="text-[#D9D9D9] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {brand.tagline}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* کارت اطلاعات برند */}
          <div className="glass-card rounded-2xl p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-20">
            <div className="text-center md:text-start">
              <span className="text-xs tracking-[0.2em] uppercase text-[#4A7BFF] block mb-2">
                Founded
              </span>
              <p className="text-2xl font-bold text-white">{brand.founded}</p>
            </div>
            <div className="text-center md:text-start border-t md:border-t-0 md:border-x border-white/10 pt-6 md:pt-0">
              <span className="text-xs tracking-[0.2em] uppercase text-[#4A7BFF] block mb-2">
                Origin
              </span>
              <p className="text-2xl font-bold text-white">{brand.origin}</p>
            </div>
            <div className="text-center md:text-end">
              <span className="text-xs tracking-[0.2em] uppercase text-[#4A7BFF] block mb-2">
                Collection Size
              </span>
              <p className="text-2xl font-bold text-white">
                {products.length} Timepieces
              </p>
            </div>
          </div>

          {/* توضیحات برند */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#D9D9D9]/80 text-lg font-light leading-relaxed">
              {brand.description}
            </p>
          </div>

          {/* خط جداکننده لوکس */}
          <div className="luxury-divider mb-16 max-w-xs mx-auto" />

          {/* عنوان بخش محصولات */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">{brand.name}</span> Collection
            </h2>
            <p className="text-[#D9D9D9]/60 mt-2 text-sm">
              Explore our curated selection of {brand.name} timepieces
            </p>
          </div>

          {/* گرید محصولات */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  showDetails
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass-card rounded-2xl">
              <p className="text-[#D9D9D9]/60 text-lg">
                No timepieces available for this brand yet.
              </p>
              <p className="text-[#D9D9D9]/40 text-sm mt-2">
                Check back soon for new arrivals.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
