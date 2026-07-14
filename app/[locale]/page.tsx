// app/[locale]/page.tsx
import { Hero } from '@/components/Hero';
import { BrandCategories } from '@/components/BrandCategories';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { AboutSection } from '@/components/AboutSection';
import AssemblySceneLoader from '@/components/watch-3d/AssemblySceneLoader';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const isRTL = locale === 'fa';

  const copy = isRTL
    ? {
        tag: 'تعالی مهندسی',
        title: 'هنر مونتاژ',
        description:
          'شاهد مهندسی دقیق پشت هر ساعت باشید. بیش از ۲۰۰ قطعه با دقت سوئیسی برای خلق کمال مکانیکی مونتاژ می‌شوند.',
      }
    : {
        tag: 'Engineering Excellence',
        title: 'The Art of Assembly',
        description:
          'Witness the precision engineering behind every timepiece. Over 200 components assembled with Swiss precision to create mechanical perfection.',
      };

  return (
    <>
      <Hero />
      <BrandCategories />
      <FeaturedProducts />
      <AboutSection />

           {/* Video Demo Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#4A7BFF] mb-4">
              {copy.tag}
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-4"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              {copy.title}
            </h2>
            <p className="text-[#D9D9D9] text-lg max-w-2xl mx-auto leading-relaxed">
              {copy.description}
            </p>
            <div className="luxury-divider mt-8 max-w-xs mx-auto" />
          </div>

          {/* کانتینر ویدیو با استایل لوکس و شیشه‌ای */}
          <div className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl luxury-shadow">
            
            {/* یک گرادیان ظریف برای ترکیب بهتر لبه‌های ویدیو با بک‌گراند تیره سایت */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629]/60 via-transparent to-transparent z-10 pointer-events-none" />

            {/* خود ویدیو */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/watch-demo.mp4" type="video/mp4" />
              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
