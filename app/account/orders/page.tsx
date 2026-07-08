import Link from "next/link";
import { ArrowLeft, Clock3, PackageCheck, Sparkles } from "lucide-react";

const orders = [
  {
    id: "ORD-2847",
    title: "Audemars Piguet Royal Oak",
    status: "Delivered",
    date: "May 28, 2026",
    amount: "$14,800",
  },
  {
    id: "ORD-1921",
    title: "Rolex Oyster Perpetual",
    status: "Packing",
    date: "May 20, 2026",
    amount: "$8,950",
  },
  {
    id: "ORD-1184",
    title: "Cartier Tank Must",
    status: "Completed",
    date: "May 10, 2026",
    amount: "$6,300",
  },
];

export default function OrdersPage() {
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
                Order History
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#D9D9D9]/80">
                Review every completed and active order in one elegant
                dashboard.
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

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card rounded-[1.5rem] p-6">
            <div className="flex items-center gap-2 text-[#D4A574]">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">Overview</p>
            </div>
            <div className="mt-5 rounded-2xl border border-[#4A7BFF]/20 bg-[linear-gradient(135deg,_rgba(74,123,255,0.2),_rgba(255,255,255,0.04))] p-4">
              <p className="text-sm text-[#D9D9D9]/70">Total orders</p>
              <p className="mt-2 text-3xl font-semibold text-white">24</p>
              <p className="mt-3 text-sm leading-7 text-[#D9D9D9]/70">
                Your luxury collection is growing steadily with premium delivery
                service.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6">
            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {order.title}
                    </p>
                    <p className="mt-1 text-sm text-[#D9D9D9]/70">{order.id}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-3 py-1 text-xs text-[#AFC5FF]">
                      {order.status}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#D9D9D9]/60">
                      <Clock3 className="h-4 w-4" />
                      {order.date}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {order.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
