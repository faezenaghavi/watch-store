// app/products/page.tsx
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import PageHero from "@/components/PageHero"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="All Timepieces"
        subtitle="Our complete collection of luxury watches from the world's finest watchmakers."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filters Bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-[#D9D9D9]/60">
              Showing {products.length} timepieces
            </p>
            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#4A7BFF]/50">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>

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