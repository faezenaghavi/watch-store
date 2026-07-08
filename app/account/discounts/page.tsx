import Link from "next/link";
import { ArrowLeft, BadgePercent, Sparkles } from "lucide-react";

const offers = [
  {
    title: "VIP Early Access",
    description:
      "Enjoy 10% off selected limited editions before the public launch.",
    code: "VIP10",
  },
  {
    title: "Anniversary Gift",
    description:
      "Receive complimentary engraving on premium timepieces this month.",
    code: "ENGRAVE",
  },
  {
    title: "Member Bonus",
    description: "Free express shipping on orders above $5,000.",
    code: "FASTSHIP",
  },
];

export default function DiscountsPage() {
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
                Exclusive Discounts
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#D9D9D9]/80">
                Unlock private offers crafted for your premium membership.
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
          {offers.map((offer) => (
            <div key={offer.code} className="glass-card rounded-[1.5rem] p-6">
              <div className="flex items-center gap-2 text-[#D4A574]">
                <BadgePercent className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.3em]">Offer</p>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                {offer.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#D9D9D9]/70">
                {offer.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-3 py-2 text-sm text-[#AFC5FF]">
                <Sparkles className="h-4 w-4" />
                Code: {offer.code}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
