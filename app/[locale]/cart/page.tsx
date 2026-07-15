"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useCart } from "@/hooks/useCart";
import { useStore } from "@/store/useStore";
import { useToast } from "@/components/Toast";
import { products, getLocalizedProduct } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import {
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineTrash,
  HiOutlineArrowLeft,
  HiHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi";

export default function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const isRTL = locale === "fa";
  const router = useRouter();

  const t = useTranslations("Cart");
  const tActions = useTranslations("ProductActions");

  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    count,
    addToCart,
    checkout,
  } = useCart();
  const { wishlist, toggleWishlist } = useStore();
  const { showToast } = useToast();

  /* ── ویش‌لیست: همیشه از آرایه اصلی محصولات لوکالایز می‌کنیم ── */
  const wishlistProducts = products
    .filter((p) => wishlist.includes(p.id))
    .map((p) => getLocalizedProduct(p, locale));

  const handleCheckout = () => {
    if (cart.length === 0) return;
    checkout();
    router.push(`/${locale}/account`);
  };

  const handleMoveToCart = (product: (typeof wishlistProducts)[number]) => {
    addToCart(product);
    showToast(tActions("addedToCart", { name: product.name }));
  };

  const handleRemoveFromWishlist = (product: (typeof wishlistProducts)[number]) => {
    toggleWishlist(product.id);
    showToast(tActions("removedFromWishlist", { name: product.name }));
  };

  return (
    <>
      <PageHero title={t("title")} breadcrumbs={[{ label: t("breadcrumb") }]} />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {cart.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-2xl">
              <div className="text-6xl mb-6 opacity-20">🛍️</div>
              <p className="text-xl text-[#D9D9D9]/60 mb-6">{t("empty")}</p>
              <Link
                href={`/${locale}/products`}
                className="btn-luxury rounded-xl text-white inline-flex items-center gap-2"
              >
                <HiOutlineArrowLeft className="w-4 h-4 rtl:rotate-180" />
                {t("continueShopping")}
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* ── لیست آیتم‌های سبد خرید ── */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#D9D9D9]/60 tracking-wider">
                    {t("itemsInBag", { count })}
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <HiOutlineTrash className="w-3.5 h-3.5" />
                    {t("clearAll")}
                  </button>
                </div>

                {cart.map((item) => {
                  /*
                   * ✅ رفع باگ: به جای استفاده از item.product که ممکن است
                   * از قبل لوکالایز شده باشد، محصول اصلی را از آرایه products
                   * با id پیدا کرده و سپس لوکالایز می‌کنیم.
                   */
                  const originalProduct = products.find(
                    (p) => p.id === item.product.id
                  );
                  if (!originalProduct) return null;

                  const localizedProduct = getLocalizedProduct(
                    originalProduct,
                    locale
                  );

                  return (
                    <div
                      key={item.product.id}
                      className="glass-card rounded-2xl p-6 flex gap-6"
                    >
                      <div className="w-24 h-28 rounded-xl bg-gradient-to-br from-[#1A2342] to-[#0E1629] flex items-center justify-center flex-shrink-0 border border-white/5">
                        <img
                          src={localizedProduct.image}
                          alt={localizedProduct.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs tracking-[0.15em] uppercase text-[#4A7BFF] mb-1">
                          {localizedProduct.brand}
                        </p>
                        <h3
                          className="text-lg font-semibold truncate"
                          style={{ fontFamily: "var(--font-space)" }}
                        >
                          {localizedProduct.name}
                        </h3>
                        <p className="text-[#D9D9D9] text-sm mt-1 font-medium">
                          {formatPrice(localizedProduct.price, locale)}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 glass-strong rounded-lg px-1 py-1">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="p-1.5 hover:text-[#4A7BFF] transition-colors text-[#D9D9D9]"
                            >
                              <HiOutlineMinus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="p-1.5 hover:text-[#4A7BFF] transition-colors text-[#D9D9D9]"
                            >
                              <HiOutlinePlus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-white">
                              {formatPrice(
                                localizedProduct.price * item.quantity,
                                locale
                              )}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-400/70 hover:text-red-400 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <HiOutlineTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── خلاصه سفارش ── */}
              <div className="lg:col-span-1">
                <div className="glass-card rounded-2xl p-8 sticky top-32">
                  <h2
                    className="text-xl font-semibold mb-6"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {t("orderSummary")}
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>{t("subtotal")}</span>
                      <span>{formatPrice(total, locale)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>{t("shipping")}</span>
                      <span className="text-green-400">{t("complimentary")}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>{t("estimatedTax")}</span>
                      <span>{locale === "fa" ? "۰" : "$0"}</span>
                    </div>
                  </div>

                  <div className="luxury-divider mb-6" />

                  <div className="flex justify-between text-lg font-bold mb-8">
                    <span>{t("total")}</span>
                    <span className="text-gradient">
                      {formatPrice(total, locale)}
                    </span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="btn-primary rounded-xl w-full text-center block py-4 text-sm tracking-wider font-semibold"
                  >
                    {t("checkout")}
                  </button>

                  <Link
                    href={`/${locale}/products`}
                    className="text-center mt-4 text-sm text-[#D9D9D9]/60 hover:text-[#4A7BFF] transition-colors flex items-center justify-center gap-2"
                  >
                    <HiOutlineArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                    {t("continueShopping")}
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ── بخش ویش‌لیست ── */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-xl font-semibold flex items-center gap-2"
                style={{ fontFamily: "var(--font-space)" }}
              >
                <HiHeart className="w-5 h-5 text-red-400" />
                {t("wishlistTitle")}
              </h2>
              {wishlistProducts.length > 0 && (
                <span className="text-sm text-[#D9D9D9]/60">
                  {t("itemsInWishlist", { count: wishlistProducts.length })}
                </span>
              )}
            </div>

            {wishlistProducts.length === 0 ? (
              <div className="glass-card rounded-2xl py-12 text-center text-[#D9D9D9]/50 text-sm">
                {t("wishlistEmpty")}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlistProducts.map((product) => (
                  <div
                    key={product.id}
                    className="glass-card rounded-2xl p-4 flex gap-4"
                  >
                    <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-[#1A2342] to-[#0E1629] flex-shrink-0 overflow-hidden border border-white/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#4A7BFF] mb-1">
                        {product.brand}
                      </p>
                      <h3 className="text-sm font-semibold truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-white mt-1">
                        {formatPrice(product.price, locale)}
                      </p>

                      <div className="mt-auto flex items-center gap-2 pt-3">
                        <button
                          onClick={() => handleMoveToCart(product)}
                          className="flex-1 py-2 rounded-lg bg-[#4A7BFF] hover:bg-[#3A6BEE] text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <HiOutlineShoppingBag className="w-3.5 h-3.5" />
                          {t("moveToCart")}
                        </button>
                        <button
                          onClick={() => handleRemoveFromWishlist(product)}
                          className="p-2 rounded-lg text-red-400/70 hover:text-red-400 transition-colors"
                          aria-label="Remove from wishlist"
                        >
                          <HiOutlineTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}