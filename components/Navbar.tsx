"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";
import { m, AnimatePresence } from "framer-motion";
import { useScrollNav } from "@/hooks/useScrollNav";
import { useStore } from "@/store/useStore";
import { NAV_ITEMS } from "@/lib/constants";
import {
  getFeaturedProducts,
  getNewArrivals,
  getProductsByGender,
  products,
} from "@/lib/data";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";
import { UserMenu } from "./UserMenu";
import {
  HiOutlineMenuAlt3,
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineX,
} from "react-icons/hi";

const NAV_PREVIEW_LIMIT = 4;

const NAV_LABELS: Record<string, Record<string, string>> = {
  en: {
    "/": "Home",
    "/men": "Men's Watches",
    "/women": "Women's Watches",
    "/products": "All Products",
    "/brands": "Brands",
    "/contact": "Contact",
    wishlist: "Wishlist",
    account: "My Account",
  },
  fa: {
    "/": "خانه",
    "/men": "ساعت مردانه",
    "/women": "ساعت زنانه",
    "/products": "همه محصولات",
    "/brands": "برندها",
    "/contact": "تماس",
    wishlist: "علاقه‌مندی‌ها",
    account: "حساب کاربری",
  },
};

export function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const match = pathname?.match(/^\/(en|fa)(?=\/|$)/);
  const locale = (match?.[1] as "en" | "fa" | undefined) ?? defaultLocale;
  const resolvedLocale = locale === "fa" ? "fa" : "en";
  const { scrolled } = useScrollNav(50);
  const {
    setCartOpen,
    setMobileMenuOpen,
    mobileMenuOpen,
    wishlist,
    searchOpen,
    setSearchOpen,
  } = useStore();
  const [mounted, setMounted] = useState(false);
  const [activePreviewHref, setActivePreviewHref] = useState<string | null>(
    null
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  const cartCount = useStore((s) => s.cart.reduce((a, b) => a + b.quantity, 0));
  const currentSearch = searchParams?.toString()
    ? `?${searchParams.toString()}`
    : "";
  const localePathname = pathname ?? "/";
  const normalizedPath =
    localePathname.replace(/^\/(fa|en)(?=\/|$)/, "") || "/";
  const otherLocale = resolvedLocale === "fa" ? "en" : "fa";
  const switchHref =
    otherLocale === "fa"
      ? `/fa${normalizedPath === "/" ? "" : normalizedPath}`
      : `/en${normalizedPath === "/" ? "" : normalizedPath}`;

  const localize = (href: string) => {
    if (!href || !href.startsWith("/")) return href;
    if (/^\/(en|fa)(\/|$)/.test(href)) return href;
    if (resolvedLocale === "fa") return `/fa${href === "/" ? "" : href}`;
    if (resolvedLocale === "en" && localePathname.startsWith("/en")) {
      return `/en${href === "/" ? "" : href}`;
    }
    return href;
  };

  const copy =
    resolvedLocale === "fa"
      ? {
          featured: "منتخب کرونوس",
          men: "ساعت‌های مردانه",
          women: "ساعت‌های زنانه",
          products: "همه محصولات",
          brands: "منتخب برندها",
          contact: "پیشنهادهای مشاوره",
          inStock: "موجود",
          outOfStock: "ناموجود",
          view: "مشاهده",
          search: "جستجو",
          searchPlaceholder: "نام، برند یا توضیح محصول...",
          noResults: "محصولی پیدا نشد",
        }
      : {
          featured: "Featured picks",
          men: "Men's watches",
          women: "Women's watches",
          products: "All products",
          brands: "Brand highlights",
          contact: "Concierge picks",
          inStock: "In stock",
          outOfStock: "Out of stock",
          view: "View",
          search: "Search",
          searchPlaceholder: "Search name, brand, or description...",
          noResults: "No products found",
        };

  const navPreviewProducts = useMemo<Record<string, Product[]>>(
    () => ({
      "/": getFeaturedProducts().slice(0, NAV_PREVIEW_LIMIT),
      "/men": getProductsByGender("men").slice(0, NAV_PREVIEW_LIMIT),
      "/women": getProductsByGender("women").slice(0, NAV_PREVIEW_LIMIT),
      "/products": products.slice(0, NAV_PREVIEW_LIMIT),
      "/brands": getNewArrivals().slice(0, NAV_PREVIEW_LIMIT),
      "/contact": getFeaturedProducts().slice(0, NAV_PREVIEW_LIMIT),
    }),
    []
  );
  const previewTitles: Record<string, string> = {
    "/": copy.featured,
    "/men": copy.men,
    "/women": copy.women,
    "/products": copy.products,
    "/brands": copy.brands,
    "/contact": copy.contact,
  };
  const activePreviewProducts = activePreviewHref
    ? navPreviewProducts[activePreviewHref] ?? []
    : [];
  const activePreviewTitle = activePreviewHref
    ? previewTitles[activePreviewHref]
    : "";
  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return products.slice(0, 6);

    return products
      .filter((product) =>
        [product.name, product.brand, product.description]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedQuery))
      )
      .slice(0, 6);
  }, [query]);
  const getProductHref = (product: Product) =>
    localize(`/products/${product.slug ?? product.id}`);
  const getProductImage = (product: Product) => product.image || "";
  const getProductInitial = (product: Product) =>
    (product.name || product.brand || "?").charAt(0);
  const getNavLabel = (key: string, fallback: string) =>
    NAV_LABELS[resolvedLocale]?.[key] ?? fallback;
  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <>
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 transition-all duration-500 pointer-events-auto"
      >
               <nav
          className={`max-w-7xl mx-4 md:mx-auto md:px-8 transition-all duration-500 glass-strong backdrop-blur-3xl bg-white/10 border border-white/20 rounded-2xl py-4 ${
            scrolled ? "luxury-shadow" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href={localize("/")} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#4A7BFF] to-[#3360DD] flex items-center justify-center shadow-lg shadow-[#4A7BFF]/20 group-hover:shadow-[#4A7BFF]/40 transition-shadow">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  C
                </span>
              </div>
              <span
                className="text-xl font-bold tracking-wider text-white"
                style={{ fontFamily: "var(--font-space)" }}
              >
                CHRONOS
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  normalizedPath === item.href ||
                  (item.href !== "/" && normalizedPath.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={localize(item.href)}
                    onMouseEnter={() => setActivePreviewHref(item.href)}
                    onFocus={() => setActivePreviewHref(item.href)}
                    className={`relative px-4 py-2 text-sm transition-colors duration-300 hourglass-hover ${
                      isActive
                        ? "hourglass-active text-white"
                        : "text-[#D9D9D9] hover:text-white"
                    }`}
                  >
                    {getNavLabel(item.href, item.label)}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-xl text-[#D9D9D9] hover:text-white hover:bg-white/5 transition-all"
                aria-label={copy.search}
              >
                <HiOutlineSearch className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-xl text-[#D9D9D9] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Cart"
              >
                <HiOutlineShoppingBag className="w-5 h-5" />
                {mounted && cartCount > 0 && (
                  <m.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    lang="en"
                    dir="ltr"
                    style={{ fontFeatureSettings: '"locl" 0, "tnum" 1' }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#4A7BFF] rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                  >
                    {cartCount}
                  </m.span>
                )}
              </button>

              <Link
                href={switchHref + currentSearch}
                className="hidden lg:inline-flex items-center rounded-xl px-3 py-2 text-sm text-[#D9D9D9] border border-white/10 hover:text-white hover:bg-white/5 transition-all"
              >
                {otherLocale === "en" ? "English" : "فارسی"}
              </Link>

              <UserMenu />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-[#D9D9D9] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <HiOutlineX className="w-5 h-5" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {activePreviewProducts.length > 0 && (
              <m.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                onMouseLeave={() => setActivePreviewHref(null)}
                className="hidden lg:block border-t border-white/10 mt-4 pt-4"
                dir={resolvedLocale === "fa" ? "rtl" : "ltr"}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#4A7BFF]">
                    {activePreviewTitle}
                  </p>
                  {activePreviewHref && (
                    <Link
                      href={localize(activePreviewHref)}
                      className="text-xs text-[#D9D9D9]/70 hover:text-white transition-colors"
                    >
                      {copy.view}
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {activePreviewProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={getProductHref(product)}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-[#4A7BFF]/40 hover:bg-white/[0.06]"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-[#1A2342] to-[#0E1629]">
                        {getProductImage(product) ? (
                          <img
                            src={getProductImage(product)}
                            alt={product.name || product.brand}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-white/20">
                            {getProductInitial(product)}
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white group-hover:text-[#AFC5FF]">
                          {product.name || product.id}
                        </p>
                        <p className="truncate text-xs uppercase tracking-[0.16em] text-[#D9D9D9]/50">
                          {product.brand}
                        </p>
                        <div className="mt-1 flex items-center justify-between gap-2 text-xs">
                          <span className="font-semibold text-white">
                            {formatPrice(product.price)}
                          </span>
                          <span
                            className={
                              product.inStock
                                ? "text-emerald-300"
                                : "text-red-300"
                            }
                          >
                            {product.inStock ? copy.inStock : copy.outOfStock}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </nav>
      </m.header>

      <AnimatePresence>
        {searchOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 px-4 py-24 backdrop-blur-sm"
            dir={resolvedLocale === "fa" ? "rtl" : "ltr"}
          >
            <button
              className="absolute inset-0 cursor-default"
              onClick={closeSearch}
              aria-label="Close search"
            />
            <m.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              className="relative mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#0E1629] p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <HiOutlineSearch className="h-5 w-5 shrink-0 text-[#4A7BFF]" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={copy.searchPlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-[#D9D9D9]/40"
                />
                <button
                  onClick={closeSearch}
                  className="rounded-xl p-2 text-[#D9D9D9] transition hover:bg-white/5 hover:text-white"
                  aria-label="Close search"
                >
                  <HiOutlineX className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 max-h-[60vh] overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  <div className="grid gap-2">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={getProductHref(product)}
                        onClick={closeSearch}
                        className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-white/5"
                      >
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#1A2342]">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-white/30">
                              {getProductInitial(product)}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-white">
                            {product.name}
                          </p>
                          <p className="truncate text-xs uppercase tracking-[0.16em] text-[#D9D9D9]/50">
                            {product.brand}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-white">
                          {formatPrice(product.price)}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="py-8 text-center text-sm text-[#D9D9D9]/60">
                    {copy.noResults}
                  </p>
                )}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#0E1629] border-l border-white/10 p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => {
                  const isActive =
                    normalizedPath === item.href ||
                    (item.href !== "/" && normalizedPath.startsWith(item.href));

                  return (
                    <m.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={localize(item.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-lg rounded-xl transition-all ${
                          isActive
                            ? "text-white bg-[#4A7BFF]/20 border-l-2 border-[#4A7BFF]"
                            : "text-[#D9D9D9] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {getNavLabel(item.href, item.label)}
                      </Link>
                    </m.div>
                  );
                })}
              </div>

              <div className="luxury-divider my-8" />

              <div className="flex flex-col gap-2">
                <Link
                  href={switchHref + currentSearch}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#D9D9D9] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {otherLocale === "en" ? "English" : "فارسی"}
                </Link>
                <Link
                  href={localize("/account/wishlist")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#D9D9D9] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {getNavLabel("wishlist", "Wishlist")}{" "}
                  {mounted && wishlist.length > 0 && (
                    <span lang="en" dir="ltr" style={{ fontFeatureSettings: '"locl" 0, "tnum" 1' }}>
                      ({wishlist.length})
                    </span>
                  )}
                </Link>
                <Link
                  href={localize("/account")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#D9D9D9] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {getNavLabel("account", "My Account")}
                </Link>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}