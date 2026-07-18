import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import localFont from "next/font/local";

const iranMarker = localFont({
  src: "./fonts/IRANMarker.ttf",
  variable: "--font-iran-marker",
  display: "swap",
});

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
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`${iranMarker.variable} font-sans antialiased`} suppressHydrationWarning>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}