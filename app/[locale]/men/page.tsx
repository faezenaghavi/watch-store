// app/[locale]/men/page.tsx
import MenPage from "../../men/page";

interface LocaleMenPageProps {
  params: Promise<{ locale: "en" | "fa" }>;
}

export default async function LocaleMenPage({ params }: LocaleMenPageProps) {
  const { locale } = await params;

  return <MenPage locale={locale} />;
}
