"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { useStore } from "@/store/useStore";
import { useToast } from "@/components/Toast";
import { formatPrice, formatDiscount } from "@/lib/format";
import {
  HiHeart,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiStar,
} from "react-icons/hi";
import { useTranslations, useLocale } from "next-intl";

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
  const t = useTranslations("ProductCard");
  const tActions = useTranslations("ProductActions");
  const locale = useLocale();

  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useStore();
  const { showToast } = useToast();
  const isWishlisted = wishlist.includes(product.id);

  const productName = product.name || product.id;
  const productImage = product.image || "";
  const productFeatures = product.features ?? [];

  const productHref = `/${locale}/products/${product.slug ?? product.id}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    showToast(tActions("addedToCart", { name: productName }));
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const wasWishlisted = isWishlisted;
    toggleWishlist(product.id);
    showToast(
      wasWishlisted
        ? tActions("removedFromWishlist", { name: productName })
        : tActions("addedToWishlist", { name: productName }),
    );
  };

  return (
    <m.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(74,123,255,0.08)] w-[280px] sm:w-[300px] flex-shrink-0">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1A2342] to-[#0E1629]">
          <Link
            href={productHref}
            className="absolute inset-0 z-10"
            aria-label={productName}
          />
          {productImage ? (
            <img
              src={productImage}
              alt={productName}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-white/10 flex items-center justify-center">
                <span
                  className="text-4xl font-bold text-white/10"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {productName.charAt(0)}
                </span>
              </div>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 start-3 flex flex-col gap-2">
            {product.discount && (
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider ltr:uppercase bg-red-500/90 text-white rounded-lg">
                -{formatDiscount(product.price, product.originalPrice!)}%
              </span>
            )}
            {product.isNew && (
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider ltr:uppercase bg-[#4A7BFF] text-white rounded-lg">
                {t("newBadge")}
              </span>
            )}
            {product.isLimited && (
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider ltr:uppercase bg-amber-500/90 text-white rounded-lg">
                {t("limitedBadge")}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="absolute top-3 end-3 z-20 flex flex-col gap-2">
            <button
              onClick={handleToggleWishlist}
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
          <div className="absolute bottom-0 start-0 end-0 z-20 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 rounded-xl glass-strong text-white text-xs font-medium tracking-wider ltr:uppercase flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <HiOutlineShoppingBag className="w-4 h-4" />
              {t("addToCart")}
            </button>
          </div>
        </div>

        {/* Info */}
        <Link href={productHref}>
          <div className="p-5">
            <p className="text-[10px] tracking-[0.2em] ltr:uppercase text-[#4A7BFF] mb-1">
              {product.brand}
            </p>
            <h3
              className="text-base font-semibold text-white mb-2 group-hover:text-[#4A7BFF] transition-colors line-clamp-1"
              style={{ fontFamily: "var(--font-space)" }}
            >
              {productName}
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <HiStar className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-[#D9D9D9]">{product.rating}</span>
              <span className="text-xs text-[#D9D9D9]/40">
                {t("reviews", { count: product.reviews })}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white">
                {formatPrice(product.price, locale)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#D9D9D9]/40 line-through">
                  {formatPrice(product.originalPrice, locale)}
                </span>
              )}
            </div>

            {showDetails && (
              <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
                <p className="text-sm text-[#D9D9D9]/70 leading-relaxed">
                  {product.description || ""}
                </p>

                <div className="flex flex-wrap gap-2">
                  {productFeatures.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-[10px] ltr:tracking-[0.2em] rounded-full bg-white/5 text-[#D9D9D9]/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-[#D9D9D9]/60">
                  <span>{product.inStock ? t("inStock") : t("outOfStock")}</span>
                  <span className="ltr:capitalize">{product.gender}</span>
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