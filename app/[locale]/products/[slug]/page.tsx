import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import ProductDetailPage, {
  generateStaticParams as generateProductStaticParams,
} from "@/app/products/[slug]/page";

interface LocaleProductDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const productParams = await generateProductStaticParams();

  return locales.flatMap((locale) =>
    productParams.map(({ slug }) => ({ locale, slug }))
  );
}

export default async function LocaleProductDetailPage({
  params,
}: LocaleProductDetailPageProps) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <ProductDetailPage params={Promise.resolve({ slug })} />;
}
