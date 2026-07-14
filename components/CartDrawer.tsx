"use client";

import { useEffect, useState, useMemo } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { formatPrice } from "@/lib/format";
import { getLocalizedProduct } from "@/lib/data";
import { useTranslations, useLocale } from "next-intl";

export default function CartDrawer() {
  const [hydrated, setHydrated] = useState(false);

  const emptyCart = useMemo(() => [], []);
  const cart = useStore((s) => (hydrated ? s.cart : emptyCart));

  const isCartOpen = useStore((s) => s.cartOpen);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const total = useStore((s) => (hydrated ? s.getCartTotal() : 0));

  const t = useTranslations("CartDrawer");
  const locale = useLocale();
  const isRTL = locale === "fa";

  useEffect(() => {
    setHydrated(true);
  }, []);

  useLockBodyScroll(isCartOpen);

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-[60]"
          />
        )}
      </AnimatePresence>

      <m.div
        initial={false}
        // در فارسی از چپ باز می‌شود، در انگلیسی از راست
        animate={{ x: isCartOpen ? 0 : isRTL ? "-100%" : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={`fixed top-0 h-full w-full max-w-md z-[70] bg-[#0E1629]/95 backdrop-blur-xl flex flex-col ${
          isRTL ? "left-0 border-r border-white/10" : "right-0 border-l border-white/10"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-space)" }}>
            {t("title")}
          </h3>
          <button
            onClick={() => setCartOpen(false)}
            className="hover:text-white/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-white/40">
              <p className="text-lg mb-2">{t("emptyTitle")}</p>
              <p className="text-sm">{t("emptySubtitle")}</p>
            </div>
          ) : (
            cart.map((item) => {
              // نکته: قبلاً اینجا مستقیم از item.product خونده می‌شد که
              // همیشه نسخه انگلیسی محصول بود. الان مثل ProductCard از
              // getLocalizedProduct استفاده می‌کنیم تا در حالت fa هم درست باشد.
              const localizedProduct = getLocalizedProduct(item.product, locale);

              return (
                <div
                  key={item.product.id}
                  className="flex gap-4 bg-white/[0.05] border border-white/10 rounded-xl p-3"
                >
                  <img
                    src={localizedProduct.image}
                    alt={localizedProduct.name}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">
                      {localizedProduct.name}
                    </p>
                    <p className={`text-xs text-white/40 ${isRTL ? "" : "capitalize"}`}>
                      {localizedProduct.brand}
                    </p>
                    <p className="text-sm mt-1">{formatPrice(localizedProduct.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 bg-white/[0.05] border border-white/10 rounded flex items-center justify-center text-xs hover:text-white/60"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 bg-white/[0.05] border border-white/10 rounded flex items-center justify-center text-xs hover:text-white/60"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className={`text-red-400 hover:text-red-300 text-xs ${isRTL ? "mr-auto" : "ml-auto"}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="p-6 border-t border-white/10">
          <div className="flex justify-between mb-2 text-sm text-white/40">
            <span>{t("subtotal")}</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm text-white/40">
            <span>{t("shipping")}</span>
            <span>{t("complimentary")}</span>
          </div>
          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>{t("total")}</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link
            href={`/${locale}/cart`}
            onClick={() => setCartOpen(false)}
            className={`bg-gradient-to-r from-[#4A7BFF] to-[#3360DD] text-white font-semibold w-full py-3 rounded-xl text-sm tracking-wider block text-center hover:shadow-lg hover:shadow-[#4A7BFF]/40 transition-shadow ${
              isRTL ? "" : "uppercase"
            }`}
          >
            {t("checkoutBtn")}
          </Link>
        </div>
      </m.div>
    </>
  );
}