// app/[locale]/page.tsx
import { Hero } from '@/components/Hero';
import { BrandCategories } from '@/components/BrandCategories';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { AboutSection } from '@/components/AboutSection';
import AssemblySceneLoader from '@/components/watch-3d/AssemblySceneLoader';
import { BlogSection } from '@/components/BlogSection';
import BrandStory from '@/components/BrandStory';

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

  const storyCopy = isRTL
    ? {
        label: 'داستان ما',
        title: 'ساعت الهام‌بخش امسال',
        description:
          'جدیدترین و مدرن‌ترین ساعت‌های امسال، در انواع مختلف در این فروشگاه موجود است، همین حالا کشف کنید.',
        button: 'کشف کنید',
      }
    : {
        label: 'OUR STORY',
        title: 'Inspirational Watch of this year',
        description:
          'The latest and modern watches of this year, is available in various presentations in this store, discover them now.',
        button: 'Discover',
      };

  const blogCopy = isRTL
    ? {
        title: 'مطالب مفید و تخصصی',
        subtitle:
          'راهنماهای خرید، نکات نگهداری و تحلیل‌های کوتاه برای انتخاب بهتر ساعت.',
        ctaText: 'مطالعه',
      }
    : {
        title: 'Useful & Expert Articles',
        subtitle:
          'Buying guides, care tips, and short insights to help you choose better watches.',
        ctaText: 'Read',
      };

  const blogPosts = isRTL
    ? [
        {
          slug: 'watch-care-guide',
          title: 'چگونه از ساعت لوکس خود مراقبت کنیم؟',
          excerpt: 'نکات ساده برای تمیز کردن، نگهداری و افزایش عمر ساعت‌های مکانیکی.',
          tag: 'راهنما',
          date: '2026',
        },
        {
          slug: 'mechanical-vs-quartz',
          title: 'ساعت مکانیکی یا کوارتز؟',
          excerpt: 'مقایسه‌ای کوتاه برای انتخاب مناسب‌تر بر اساس سبک زندگی و بودجه.',
          tag: 'مقایسه',
          date: '2026',
        },
        {
          slug: 'strap-selection',
          title: 'انتخاب بند مناسب برای استایل شما',
          excerpt: 'چطور بند چرمی، فلزی یا رابر ظاهر ساعت را تغییر می‌دهد.',
          tag: 'استایل',
          date: '2026',
        },
      ]
    : [
        {
          slug: 'watch-care-guide',
          title: 'How to care for a luxury watch',
          excerpt: 'Simple tips to clean, maintain, and extend the life of a mechanical watch.',
          tag: 'Guide',
          date: '2026',
        },
        {
          slug: 'mechanical-vs-quartz',
          title: 'Mechanical vs Quartz',
          excerpt: 'A quick comparison to help you choose based on lifestyle and budget.',
          tag: 'Compare',
          date: '2026',
        },
        {
          slug: 'strap-selection',
          title: 'Choosing the right strap',
          excerpt: 'How leather, steel, and rubber straps change the look and feel of a watch.',
          tag: 'Style',
          date: '2026',
        },
      ];

  return (
    <>
      <Hero />
      <BrandCategories />
      <BrandStory
        id="brand-story"
        dir={isRTL ? 'rtl' : 'ltr'}
        label={isRTL ? 'داستان ما' : 'OUR STORY'}
        title={isRTL ? 'ساعت الهام‌بخش امسال' : 'Inspirational Watch of this year'}
        description={
          isRTL
            ? 'جدیدترین و مدرن‌ترین ساعت‌های امسال، در انواع مختلف در این فروشگاه موجود است، همین حالا کشف کنید.'
            : 'The latest and modern watches of this year, is available in various presentations in this store, discover them now.'
        }
        buttonText={isRTL ? 'کشف کنید' : 'Discover'}
        buttonHref="/blog"
        imageSrc="/images/rolex.jpeg"
        imageAlt={isRTL ? 'ساعت الهام‌بخش' : 'Inspirational watch'}
      />
      <FeaturedProducts />
      <AboutSection />

      <BlogSection
        title={blogCopy.title}
        subtitle={blogCopy.subtitle}
        ctaText={blogCopy.ctaText}
        ctaHref="/blog"
        posts={blogPosts}
      />

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
          <div className="relative max-w-7xl mx-auto aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl luxury-shadow">
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
              <source src="/images/ass.mp4" type="video/mp4" />
              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}