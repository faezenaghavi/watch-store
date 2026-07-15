"use client";

import { useCart } from "@/hooks/useCart";
import { useStore } from "@/store/useStore";
import { useToast } from "@/components/Toast";
import { useLocale } from "next-intl";
import { Product } from "@/types/product";
import { HiHeart, HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";

interface ProductActionsProps {
  product: Product;
  addToCartLabel: string;
  wishlistLabel: string;
}

export default function ProductActions({
  product,
  addToCartLabel,
  wishlistLabel,
}: ProductActionsProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useStore();
  const { showToast } = useToast();
  const locale = useLocale();
  const isRTL = locale === "fa";
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    showToast(
      isRTL ? `${product.name} به سبد خرید اضافه شد` : `${product.name} added to cart`,
    );
  };

  const handleToggleWishlist = () => {
    const wasWishlisted = isWishlisted;
    toggleWishlist(product.id);
    showToast(
      wasWishlisted
        ? isRTL
          ? `${product.name} از علاقه‌مندی‌ها حذف شد`
          : `${product.name} removed from wishlist`
        : isRTL
        ? `${product.name} به علاقه‌مندی‌ها اضافه شد`
        : `${product.name} added to wishlist`,
    );
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleAddToCart}
        className="bg-[#4A7BFF] hover:bg-[#3A6BEE] text-white px-8 py-3.5 rounded-xl font-medium transition-colors flex-1 lg:flex-none flex items-center justify-center gap-2"
      >
        <HiOutlineShoppingBag className="w-4 h-4" />
        {addToCartLabel}
      </button>
      <button
        onClick={handleToggleWishlist}
        className="bg-white/5 border border-white/10 hover:border-white/20 text-white px-6 py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
      >
        {isWishlisted ? (
          <HiHeart className="w-4 h-4 text-red-400" />
        ) : (
          <HiOutlineHeart className="w-4 h-4" />
        )}
        {wishlistLabel}
      </button>
    </div>
  );
}