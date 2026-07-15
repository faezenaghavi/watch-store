"use client";

import { useStore } from "@/store/useStore";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

export function useCart() {
  const cart = useStore((s) => s.cart);
  const addToCart = useStore((s) => s.addToCart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const clearCart = useStore((s) => s.clearCart);
  const getCartTotal = useStore((s) => s.getCartTotal);
  const getCartCount = useStore((s) => s.getCartCount);
  const checkout = useStore((s) => s.checkout);

  return {
    cart: cart as CartItem[],
    items: cart as CartItem[],
    addToCart: (product: Product) => addToCart(product),
    removeFromCart: (productId: string) => removeFromCart(productId),
    updateQuantity: (productId: string, quantity: number) =>
      updateQuantity(productId, quantity),
    clearCart,
    checkout,
    total: getCartTotal(),
    count: getCartCount(),
  };
}