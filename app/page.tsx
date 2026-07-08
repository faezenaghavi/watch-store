import { Hero } from '@/components/Hero';
import { BrandCategories } from '@/components/BrandCategories';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { AboutSection } from '@/components/AboutSection';
import AssemblySceneLoader from '@/components/watch-3d/AssemblySceneLoader';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandCategories />
      <FeaturedProducts />
      <AboutSection />

      {/* 3D Watch Assembly Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#4A7BFF] mb-4">
              Engineering Excellence
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-4"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              The Art of Assembly
            </h2>
            <p className="text-[#D9D9D9] text-lg max-w-2xl mx-auto leading-relaxed">
              Witness the precision engineering behind every timepiece. Over 200 components
              assembled with Swiss precision to create mechanical perfection.
            </p>
            <div className="luxury-divider mt-8 max-w-xs mx-auto" />
          </div>

          <AssemblySceneLoader />
        </div>
      </section>
    </>
  );
}