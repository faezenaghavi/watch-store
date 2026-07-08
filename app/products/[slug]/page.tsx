import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/format";
import { ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug ?? product.id }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => (item.slug ?? item.id) === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(74,123,255,0.2),_transparent_35%),linear-gradient(135deg,_#081120_0%,_#101b31_45%,_#0d1428_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-8">
        <Link
          href="/products"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <div className="aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#1A2342] to-[#0E1629]">
              <div className="flex h-full items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-white/10">
                  <span
                    className="text-4xl font-bold text-white/10"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {product.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#4A7BFF]">
              {product.brand}
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-gradient sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-sm leading-8 text-[#D9D9D9]/80">
              {product.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-semibold text-white">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[#D9D9D9]/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#D9D9D9]/70"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[1.25rem] border border-[#4A7BFF]/20 bg-[linear-gradient(135deg,_rgba(74,123,255,0.2),_rgba(255,255,255,0.04))] p-5">
              <div className="flex items-center gap-2 text-[#D4A574]">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.3em]">
                  Luxury concierge
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#D9D9D9]/80">
                This timepiece is available for private consultation and secure
                delivery through our concierge team.
              </p>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/15 px-5 py-3 text-sm font-medium text-[#AFC5FF] transition hover:bg-[#4A7BFF]/25">
              <ShoppingBag className="h-4 w-4" />
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
