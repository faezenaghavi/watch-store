// app/[locale]/contact/page.tsx
import ContactPage from "../../contact/page";

export default async function LocaleContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactPage locale={locale === "fa" ? "fa" : "en"} />;
}