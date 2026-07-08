import { getProductsByGender } from '@/lib/data';
import { ProductCard } from "@/components/ProductCard"
import PageHero from "@/components/PageHero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Men's Watches | CHRONOS",
};

export default function MenPage() {
  const products = getProductsByGender('men');

  return (
    <>
      <PageHero
        title="Men's Collection"
        subtitle="Precision engineering meets refined masculinity. Discover timepieces built for distinction."
        breadcrumbs={[{ label: "Men's Watches" }]}
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}