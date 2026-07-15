"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/components/Toast";
import { products, getLocalizedProduct } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export default function WishlistPage() {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const t = useTranslations("WishlistPage");
  const tActions = useTranslations("ProductActions");

  const { wishlist, toggleWishlist } = useStore();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const wishlistProducts = products
    .filter((p) => wishlist.includes(p.id))
    .map((p) => getLocalizedProduct(p, locale));

  const handleAddToCart = (product: (typeof wishlistProducts)[number]) => {
    addToCart(product);
    showToast(tActions("addedToCart", { name: product.name }));
  };

  const handleRemove = (product: (typeof wishlistProducts)[number]) => {
    toggleWishlist(product.id);
    showToast(tActions("removedFromWishlist", { name: product.name }));
  };

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(74,123,255,0.2),_transparent_35%),linear-gradient(135deg,_#081120_0%,_#101b31_45%,_#0d1428_100%)] px-4 py-8 text-white sm:px-6 lg:px-8"
    >
      <section className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="glass-card luxury-shadow rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#4A7BFF]">
                {t("label")}
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-gradient">
                {t("title")}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#D9D9D9]/80">
                {t("desc")}
              </p>
            </div>
            <Link
              href={`/${locale}/account`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            >
              <ArrowLeft className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
              {t("back")}
            </Link>
          </div>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="glass-card rounded-[2rem] py-20 text-center">
            <Heart className="mx-auto mb-4 h-10 w-10 text-[#D9D9D9]/20" />
            <p className="text-[#D9D9D9]/60 mb-6">{t("empty")}</p>
            <Link
              href={`/${locale}/products`}
              className="btn-luxury rounded-xl text-white inline-flex items-center gap-2 px-6 py-3"
            >
              {t("browse")}
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-3">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="glass-card rounded-[1.5rem] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#D4A574]">
                    <Heart className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-[0.3em]">{t("saved")}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(product)}
                    className="rounded-full border border-white/10 bg-white/10 p-2 text-red-400/80 hover:text-red-400 hover:border-red-400/30 transition"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1A2342] to-[#0E1629] border border-white/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-[#4A7BFF]">
                  {product.brand}
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  {product.name}
                </h2>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-3 py-2 text-sm text-[#AFC5FF] transition hover:bg-[#4A7BFF]/20"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}