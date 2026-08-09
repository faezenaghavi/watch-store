import LoadingScreen from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { ToastProvider } from "@/components/Toast";
import { Suspense } from "react";

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
    <ToastProvider>
      <div dir={dir}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LoadingScreen />

          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          <CartDrawer />

          <main className="min-h-screen pt-28">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </div>
    </ToastProvider>
  );
}