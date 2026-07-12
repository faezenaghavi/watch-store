  // app/[locale]/products/page.tsx
  import ProductsPage from "../../products/page";

  interface LocaleProductsPageProps {
    params: Promise<{ locale: "en" | "fa" }>;
  }

  export default async function LocaleProductsPage({
    params,
  }: LocaleProductsPageProps) {
    const { locale } = await params;

    return <ProductsPage locale={locale} />;
  }
