import { getProductsByGender } from '@/lib/data';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

interface WomenPageProps {
  locale?: "en" | "fa";
}

export default function WomenPage({ locale = "en" }: WomenPageProps) {
  const products = getProductsByGender('women');
  const copy =
    locale === "fa"
      ? {
          label: "کالکشن زنانه",
          title: "ساعت زنانه",
          description: "ساعت‌های ظریف و شیک برای استایلی ماندگار.",
        }
      : {
          label: "Lady's Collection",
          title: "Women's Watches",
          description:
            "Elegant timepieces that grace the wrist with sophistication and beauty.",
        };

  return (
    <>
      <PageHero
        label={copy.label}
        title={copy.title}
        description={copy.description}
      />
      <div className="pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
