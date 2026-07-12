'use client';

import { m } from 'framer-motion';
import { getFeaturedProducts, getNewArrivals } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { SectionHeading } from './SectionHeading';
import Link from 'next/link';
import { useState } from 'react';
import { useLocale } from 'next-intl';

export function FeaturedProducts() {
  const locale = useLocale();
  const isRTL = locale === 'fa';

  const copy = isRTL
    ? {
        label: 'کالکشن ما',
        title: 'ساعت‌های استثنایی',
        subtitle:
          'هر ساعت در کالکشن ما نمایانگر اوج هنر ساعت‌سازی و طراحی ماندگار است.',
        tabs: [
          { label: 'منتخب', key: 'featured' as const },
          { label: 'جدیدترین‌ها', key: 'new' as const },
        ],
        viewAll: 'مشاهده همه ساعت‌ها',
      }
    : {
        label: 'Our Collection',
        title: 'Exceptional Timepieces',
        subtitle:
          'Each watch in our collection represents the pinnacle of horological craftsmanship and timeless design.',
        tabs: [
          { label: 'Featured', key: 'featured' as const },
          { label: 'New Arrivals', key: 'new' as const },
        ],
        viewAll: 'View All Timepieces',
      };

  const [activeTab, setActiveTab] = useState<'featured' | 'new'>('featured');
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const products = activeTab === 'featured' ? featured : newArrivals;

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          subtitle={copy.subtitle}
        />

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {copy.tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-[#4A7BFF] text-white shadow-lg shadow-[#4A7BFF]/20'
                  : 'text-[#D9D9D9] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <m.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </m.div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-luxury rounded-xl text-white inline-flex">
            {copy.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}