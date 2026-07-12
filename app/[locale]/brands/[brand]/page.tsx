// app/[locale]/brands/[brand]/page.tsx
import BrandPage from "../../../brands/[brand]/page";

export default async function LocaleBrandPage({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}) {
  return <BrandPage params={params} />;
}