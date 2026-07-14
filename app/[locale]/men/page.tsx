import { getProductsByGender, getLocalizedProduct } from '@/lib/data';
import { ProductCard } from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Men's Watches | CHRONOS",
};

export default async function MenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const products = getProductsByGender('men');

  const copy =
    locale === "fa"
      ? {
          title: "کالکشن مردانه",
          subtitle: "مهندسی دقیق و طراحی متمایز برای ساعت‌های مردانه.",
          breadcrumb: "ساعت مردانه",
        }
      : {
          title: "Men's Collection",
          subtitle:
            "Precision engineering meets refined masculinity. Discover timepieces built for distinction.",
          breadcrumb: "Men's Watches",
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