// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: {
    default: "CHRONOS | Premium Luxury Timepieces",
    template: "%s | CHRONOS",
  },
  description:
    "Discover the world's finest luxury timepieces. Curated collections from Rolex, Omega, Patek Philippe and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LoadingScreen />
        <AppProviders>
          <Navbar />
          <CartDrawer />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
