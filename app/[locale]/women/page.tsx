// app/[locale]/women/page.tsx
import WomenPage from "../../women/page";

interface LocaleWomenPageProps {
  params: Promise<{ locale: "en" | "fa" }>;
}

export default async function LocaleWomenPage({ params }: LocaleWomenPageProps) {
  const { locale } = await params;

  return <WomenPage locale={locale} />;
}
