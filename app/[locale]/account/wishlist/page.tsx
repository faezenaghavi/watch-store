import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag, Sparkles } from "lucide-react";

const wishlistItems = [
  {
    name: "Patek Philippe Nautilus",
    type: "Rose Gold",
    price: "$38,500",
  },
  {
    name: "Omega Speedmaster",
    type: "Moonwatch Edition",
    price: "$7,400",
  },
  {
    name: "Tissot PRX Powermatic",
    type: "Steel Bracelet",
    price: "$950",
  },
];

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(74,123,255,0.2),_transparent_35%),linear-gradient(135deg,_#081120_0%,_#101b31_45%,_#0d1428_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="glass-card luxury-shadow rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#4A7BFF]">
                Account
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-gradient">
                Wishlist
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#D9D9D9]/80">
                Save your favorite watches and move them to your cart whenever
                you are ready.
              </p>
            </div>
            <Link
              href="/account"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to dashboard
            </Link>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <div key={item.name} className="glass-card rounded-[1.5rem] p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D4A574]">
                  <Heart className="h-5 w-5" />
                  <p className="text-sm uppercase tracking-[0.3em]">Saved</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 p-2">
                  <Sparkles className="h-4 w-4 text-[#4A7BFF]" />
                </div>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                {item.name}
              </h2>
              <p className="mt-2 text-sm text-[#D9D9D9]/70">{item.type}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-white">
                  {item.price}
                </span>
                <button className="inline-flex items-center gap-2 rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-3 py-2 text-sm text-[#AFC5FF] transition hover:bg-[#4A7BFF]/20">
                  <ShoppingBag className="h-4 w-4" />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}