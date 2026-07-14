import { products, getLocalizedProduct } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import PageHero from "@/components/PageHero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products',
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const copy =
    locale === "fa"
      ? {
          title: "همه ساعت‌ها",
          subtitle: "مجموعه کامل ساعت‌های منتخب کرونوس.",
          breadcrumb: "محصولات",
          showing: "نمایش",
          unit: "ساعت",
          featured: "منتخب",
          priceAsc: "قیمت: کم به زیاد",
          priceDesc: "قیمت: زیاد به کم",
          rating: "بالاترین امتیاز",
          newest: "جدیدترین",
        }
      : {
          title: "All Timepieces",
          subtitle:
            "Our complete collection of luxury watches from the world's finest watchmakers.",
          breadcrumb: "Products",
          showing: "Showing",
          unit: "timepieces",
          featured: "Featured",
          priceAsc: "Price: Low to High",
          priceDesc: "Price: High to Low",
          rating: "Top Rated",
          newest: "Newest",
        };

  return (
    <>
      <PageHero
        title={copy.title}
        subtitle={copy.subtitle}
        breadcrumbs={[{ label: copy.breadcrumb }]}
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-[#D9D9D9]/60">
              {copy.showing} {products.length} {copy.unit}
            </p>
            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#4A7BFF]/50">
              <option value="featured">{copy.featured}</option>
              <option value="price-asc">{copy.priceAsc}</option>
              <option value="price-desc">{copy.priceDesc}</option>
              <option value="rating">{copy.rating}</option>
              <option value="newest">{copy.newest}</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, i) => {
              const localizedProduct = getLocalizedProduct(product, locale);
              return (
                <ProductCard key={product.id} product={localizedProduct} index={i} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}