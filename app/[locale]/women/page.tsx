import { getProductsByGender, getLocalizedProduct } from '@/lib/data';
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";

export default async function WomenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const products = getProductsByGender('women');

  const copy =
    locale === "fa"
      ? {
          label: "کالکشن زنانه",
          title: "ساعت زنانه",
          description: "ساعت‌های ظریف و شیک برای استایلی ماندگار.",
          breadcrumb: "ساعت زنانه",
        }
      : {
          label: "Lady's Collection",
          title: "Women's Watches",
          description:
            "Elegant timepieces that grace the wrist with sophistication and beauty.",
          breadcrumb: "Women's Watches",
        };

  return (
    <>
      <PageHero
        label={copy.label}
        title={copy.title}
        description={copy.description}
        breadcrumbs={[{ label: copy.breadcrumb }]}
      />
      <div className="pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => {
            const localizedProduct = getLocalizedProduct(product, locale);
            return (
              <ProductCard key={product.id} product={localizedProduct} index={i} />
            );
          })}
        </div>
      </div>
    </>
  );
}