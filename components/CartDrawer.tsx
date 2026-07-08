"use client";

import { useEffect, useState, useMemo } from "react"; // ۱. useMemo اضافه شد
import { m, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { formatPrice } from "@/lib/format";

export default function CartDrawer() {
  const [hydrated, setHydrated] = useState(false);
  
  // ۲. آرایه خالی را کش کردیم تا رفرنس آن همیشه ثابت بماند
  const emptyCart = useMemo(() => [], []);
  
  // ۳. به جای [] از emptyCart استفاده شد
  const cart = useStore((s) => (hydrated ? s.cart : emptyCart));
  
  const isCartOpen = useStore((s) => s.cartOpen);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const total = useStore((s) => (hydrated ? s.getCartTotal() : 0));

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
        animate={{ x: isCartOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-[#0E1629]/95 backdrop-blur-xl border-l border-white/10 flex flex-col"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Shopping Bag
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
              <p className="text-lg mb-2">Your bag is empty</p>
              <p className="text-sm">
                Explore our collection to find your timepiece.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-white/[0.05] border border-white/10 rounded-xl p-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-white/40 capitalize">
                    {item.product.brand}
                  </p>
                  <p className="text-sm mt-1">
                    {formatPrice(item.product.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-6 h-6 bg-white/[0.05] border border-white/10 rounded flex items-center justify-center text-xs hover:text-white/60"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-6 h-6 bg-white/[0.05] border border-white/10 rounded flex items-center justify-center text-xs hover:text-white/60"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="ml-auto text-red-400 hover:text-red-300 text-xs"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-white/10">
          <div className="flex justify-between mb-2 text-sm text-white/40">
            <span>Subtotal</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm text-white/40">
            <span>Shipping</span>
            <span>Complimentary</span>
          </div>
          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link
            href="/cart"
            onClick={() => setCartOpen(false)}
            className="bg-gradient-to-r from-[#4A7BFF] to-[#3360DD] text-white font-semibold w-full py-3 rounded-xl text-sm tracking-wider block text-center hover:shadow-lg hover:shadow-[#4A7BFF]/40 transition-shadow"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </m.div>
    </>
  );
}