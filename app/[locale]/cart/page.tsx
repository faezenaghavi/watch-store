"use client";

import { use } from "react";
import { useCart } from "@/hooks/useCart";
import PageHero from "@/components/PageHero";
import { formatPrice } from "@/lib/format";
import { getLocalizedProduct } from "@/lib/data";
import Link from "next/link";
import {
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineTrash,
  HiOutlineArrowLeft,
} from "react-icons/hi";

// نکته: این صفحه قبلاً هیچ منطق ترجمه‌ای نداشت (همه چیز انگلیسی هاردکد بود)
// و مستقیم از item.product می‌خواند که همیشه نسخه انگلیسی محصول است.
// هر دو مشکل اینجا رفع شده‌اند.
export default function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const isRTL = locale === "fa";
  const { cart, removeFromCart, updateQuantity, clearCart, total, count } = useCart();

  const t = isRTL
    ? {
        bagTitle: "سبد خرید",
        breadcrumb: "سبد خرید",
        emptyMsg: "سبد خرید شما خالی است",
        continueShopping: "ادامه خرید",
        itemsInBag: (n: number) => `${n} کالا در سبد`,
        clearAll: "پاک کردن همه",
        orderSummary: "خلاصه سفارش",
        subtotal: "جمع کل",
        shipping: "هزینه ارسال",
        complimentary: "رایگان",
        estimatedTax: "مالیات تخمینی",
        total: "مبلغ نهایی",
        checkout: "ادامه فرآیند خرید",
      }
    : {
        bagTitle: "Shopping Bag",
        breadcrumb: "Cart",
        emptyMsg: "Your bag is empty",
        continueShopping: "Continue Shopping",
        itemsInBag: (n: number) => `${n} items in bag`,
        clearAll: "Clear All",
        orderSummary: "Order Summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        complimentary: "Complimentary",
        estimatedTax: "Estimated Tax",
        total: "Total",
        checkout: "Proceed to Checkout",
      };

  return (
    <>
      <PageHero title={t.bagTitle} breadcrumbs={[{ label: t.breadcrumb }]} />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {cart.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-2xl">
              <div className="text-6xl mb-6 opacity-20">🛍️</div>
              <p className="text-xl text-[#D9D9D9]/60 mb-6">{t.emptyMsg}</p>
              <Link
                href={`/${locale}/products`}
                className="btn-luxury rounded-xl text-white inline-flex items-center gap-2"
              >
                <HiOutlineArrowLeft className="w-4 h-4 rtl:rotate-180" />
                {t.continueShopping}
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#D9D9D9]/60 tracking-wider">
                    {t.itemsInBag(count)}
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <HiOutlineTrash className="w-3.5 h-3.5" />
                    {t.clearAll}
                  </button>
                </div>

                {cart.map((item) => {
                  const localizedProduct = getLocalizedProduct(item.product, locale);
                  return (
                    <div key={item.product.id} className="glass-card rounded-2xl p-6 flex gap-6">
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
                        <h3 className="text-lg font-semibold truncate" style={{ fontFamily: "var(--font-space)" }}>
                          {localizedProduct.name}
                        </h3>
                        <p className="text-[#D9D9D9] text-sm mt-1 font-medium">
                          {formatPrice(localizedProduct.price)}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 glass-strong rounded-lg px-1 py-1">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 hover:text-[#4A7BFF] transition-colors text-[#D9D9D9]"
                            >
                              <HiOutlineMinus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 hover:text-[#4A7BFF] transition-colors text-[#D9D9D9]"
                            >
                              <HiOutlinePlus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-white">
                              {formatPrice(localizedProduct.price * item.quantity)}
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

              <div className="lg:col-span-1">
                <div className="glass-card rounded-2xl p-8 sticky top-32">
                  <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-space)" }}>
                    {t.orderSummary}
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>{t.subtotal}</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>{t.shipping}</span>
                      <span className="text-green-400">{t.complimentary}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>{t.estimatedTax}</span>
                      <span>$0</span>
                    </div>
                  </div>

                  <div className="luxury-divider mb-6" />

                  <div className="flex justify-between text-lg font-bold mb-8">
                    <span>{t.total}</span>
                    <span className="text-gradient">{formatPrice(total)}</span>
                  </div>

                  <button className="btn-primary rounded-xl w-full text-center block py-4 text-sm tracking-wider font-semibold">
                    {t.checkout}
                  </button>

                  <Link
                    href={`/${locale}/products`}
                    className="text-center mt-4 text-sm text-[#D9D9D9]/60 hover:text-[#4A7BFF] transition-colors flex items-center justify-center gap-2"
                  >
                    <HiOutlineArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                    {t.continueShopping}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
