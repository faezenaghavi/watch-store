import { Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";
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

  // تعیین راست‌چین یا چپ‌چین بودن صفحه
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    // نکته: اینجا دیگر تگ html و body نداریم چون در فایل بالایی است
    <div className={dir} dir={dir} lang={locale}>
      <LoadingScreen />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}