// app/[locale]/brands/page.tsx
import BrandsPage from "../../brands/page";

export default async function LocaleBrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BrandsPage locale={locale} />;
}