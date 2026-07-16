'use client';

import { m } from 'framer-motion';
import { getFeaturedProducts, getNewArrivals } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { SectionHeading } from './SectionHeading';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export function FeaturedProducts() {
  const t = useTranslations('FeaturedProducts');
  const locale = useLocale();

  const tabs = [
    { label: t('tabFeatured'), key: 'featured' as const },
    { label: t('tabNew'), key: 'new' as const },
  ];

  const [activeTab, setActiveTab] = useState<'featured' | 'new'>('featured');
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const products = activeTab === 'featured' ? featured : newArrivals;

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
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

        <div className="relative group/scroll">
  {/* ساید سایه‌ها برای زیبایی */}
  <div className="absolute start-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0E1629] to-transparent z-10 pointer-events-none opacity-0 group-hover/scroll:opacity-100 transition-opacity" />
  <div className="absolute end-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0E1629] to-transparent z-10 pointer-events-none opacity-0 group-hover/scroll:opacity-100 transition-opacity" />

  <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
    {products.map((product, i) => (
      <div key={product.id} className="snap-start">
        <ProductCard product={product} index={i} />
      </div>
    ))}
  </div>
</div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href={`/${locale}/products`} className="btn-luxury rounded-xl text-white inline-flex">
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}