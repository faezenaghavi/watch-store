// components/ProductCard.tsx
"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { useStore } from "@/store/useStore";
import { formatPrice, formatDiscount } from "@/lib/format";
import {
  HiHeart,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiStar,
} from "react-icons/hi";

interface ProductCardProps {
  product: Product;
  index?: number;
  showDetails?: boolean;
}

export function ProductCard({
  product,
  index = 0,
  showDetails = false,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(74,123,255,0.08)]">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1A2342] to-[#0E1629]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-white/10 flex items-center justify-center">
              <span
                className="text-4xl font-bold text-white/10"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {product.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.discount && (
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-red-500/90 text-white rounded-lg">
                -{formatDiscount(product.price, product.originalPrice!)}%
              </span>
            )}
            {product.isNew && (
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-[#4A7BFF] text-white rounded-lg">
                New
              </span>
            )}
            {product.isLimited && (
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-amber-500/90 text-white rounded-lg">
                Limited
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              }}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Toggle wishlist"
            >
              {isWishlisted ? (
                <HiHeart className="w-4 h-4 text-red-400" />
              ) : (
                <HiOutlineHeart className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="w-full py-3 rounded-xl glass-strong text-white text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <HiOutlineShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <Link href={`/products/${product.slug ?? product.id}`}>
          <div className="p-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#4A7BFF] mb-1">
              {product.brand}
            </p>
            <h3
              className="text-base font-semibold text-white mb-2 group-hover:text-[#4A7BFF] transition-colors line-clamp-1"
              style={{ fontFamily: "var(--font-space)" }}
            >
              {product.name}
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <HiStar className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-[#D9D9D9]">{product.rating}</span>
              <span className="text-xs text-[#D9D9D9]/40">
                ({product.reviews})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#D9D9D9]/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {showDetails && (
              <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
                <p className="text-sm text-[#D9D9D9]/70 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-[10px] uppercase tracking-[0.2em] rounded-full bg-white/5 text-[#D9D9D9]/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-[#D9D9D9]/60">
                  <span>{product.inStock ? "In stock" : "Out of stock"}</span>
                  <span className="capitalize">{product.gender}</span>
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>
    </m.div>
  );
}

export default ProductCard;
