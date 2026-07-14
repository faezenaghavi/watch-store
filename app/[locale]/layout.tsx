import LoadingScreen from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

// تولید صفحات استاتیک برای هر زبان
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    // این div مرجع "dir" برای کلاس‌های rtl: تیلویند است.
    // نکته مهم: Navbar / CartDrawer / Footer اینجا، داخل همین Provider
    // و همین dir قرار گرفتند تا locale درست را ببینند (قبلاً بیرون بودند و باگ اصلی همین بود).
    <div className={dir} dir={dir} lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <LoadingScreen />
        <Navbar />
        <CartDrawer />
        <main className="min-h-screen pt-28">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
