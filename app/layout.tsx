import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { AppProviders } from "@/components/providers/AppProviders";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: {
    default: "CHRONOS | Premium Luxury Timepieces",
    template: "%s | CHRONOS",
  },
  description:
    "Discover the world's finest luxury timepieces. Curated collections from Rolex, Omega, Patek Philippe and more.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // دریافت پیام‌های انگلیسی به عنوان پیش‌فرض برای صفحاتی که زبان ندارند
  const messages = await getMessages({ locale: 'en' });

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <Navbar />
            <CartDrawer />
            <main className="min-h-screen pt-28">{children}</main>
            <Footer />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}