"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BellRing,
  ChevronRight,
  Clock3,
  Gift,
  Heart,
  PackageCheck,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useStore } from "@/store/useStore";

export default function AccountPage() {
  const { user } = useStore();
  const displayName = user?.name ?? "Alexander";

  const pathname = usePathname();
  const match = pathname?.match(/^\/(en|fa)(?=\/|$)/);
  const locale = (match && match[1]) || "en";
  const isRTL = locale === "fa";

  const t = isRTL
    ? {
        welcomeBack: "خوش آمدید",
        greeting: `سلام، ${displayName}`,
        heroDesc:
          "داشبورد حساب کاربری شما آماده است. سفارش‌ها، تخفیف‌ها و آیتم‌های علاقه‌مندی همگی در یک تجربه لوکس و شیشه‌ای اینجا مدیریت می‌شوند.",
        vipActive: "عضویت VIP فعال است",
        lastOrder: "آخرین سفارش شما ۲ روز پیش بوده است",
        recentOrders: "سفارش‌های اخیر",
        latestOrders: "آخرین سفارش‌های شما",
        viewAll: "مشاهده همه",
        quickAccess: "دسترسی سریع",
        membership: "عضویت",
        performanceTitle: "عملکرد شما در این ماه",
        performanceValue: "+۱۲٪",
        membershipDesc:
          "با عضویت VIP از تخفیف‌های ویژه، ارسال سریع‌تر و پشتیبانی اختصاصی بهره‌مند شوید.",
        stats: [
          { label: "سفارش‌های فعال", value: "۰۳", hint: "در حال آماده‌سازی برای ارسال", icon: PackageCheck },
          { label: "امتیاز VIP", value: "۲,۴۸۰", hint: "قابل استفاده در سطح VIP شما", icon: Award },
          { label: "علاقه‌مندی‌ها", value: "۱۲", hint: "ساعت‌های منتخب", icon: Heart },
          { label: "اعلان‌های جدید", value: "۰۴", hint: "پیشنهادهای اختصاصی در انتظار", icon: BellRing },
        ],
        orders: [
          { id: "ORD-2847", title: "Audemars Piguet Royal Oak", status: "امروز تحویل داده شد", time: "۲ ساعت پیش" },
          { id: "ORD-1921", title: "Rolex Oyster Perpetual", status: "در حال بسته‌بندی", time: "۱ روز پیش" },
          { id: "ORD-1184", title: "Cartier Tank Must", status: "تحویل داده شد", time: "۳ روز پیش" },
        ],
        quickLinks: [
          { title: "سفارش‌ها", description: "پیگیری و مدیریت خریدهای اخیر شما", href: "/account/orders", icon: PackageCheck },
          { title: "تخفیف‌ها", description: "کدهای اختصاصی و پیشنهادهای ویژه", href: "/account/discounts", icon: Gift },
          { title: "علاقه‌مندی‌ها", description: "ساعت‌های ذخیره‌شده برای خرید بعدی", href: "/account/wishlist", icon: Heart },
          { title: "تنظیمات", description: "ویرایش اطلاعات و دسترسی حساب شما", href: "/account/settings", icon: Settings },
        ],
      }
    : {
        welcomeBack: "Welcome back",
        greeting: `Hi, ${displayName}`,
        heroDesc:
          "Your account dashboard is ready. Orders, discounts, and wishlist items are all managed here through a refined glassy luxury experience.",
        vipActive: "VIP membership active",
        lastOrder: "Your last order was 2 days ago",
        recentOrders: "Recent Orders",
        latestOrders: "Your latest orders",
        viewAll: "View all",
        quickAccess: "Quick Access",
        membership: "Membership",
        performanceTitle: "Your performance this month",
        performanceValue: "+12%",
        membershipDesc:
          "With VIP membership, you get exclusive discounts, faster delivery, and dedicated concierge support.",
        stats: [
          { label: "Active Orders", value: "03", hint: "Preparing for shipment", icon: PackageCheck },
          { label: "VIP Points", value: "2,480", hint: "Available in your VIP tier", icon: Award },
          { label: "Wishlist", value: "12", hint: "Curated timepieces", icon: Heart },
          { label: "New Alerts", value: "04", hint: "Private offers waiting", icon: BellRing },
        ],
        orders: [
          { id: "ORD-2847", title: "Audemars Piguet Royal Oak", status: "Delivered today", time: "2 hours ago" },
          { id: "ORD-1921", title: "Rolex Oyster Perpetual", status: "Packing in progress", time: "1 day ago" },
          { id: "ORD-1184", title: "Cartier Tank Must", status: "Delivered", time: "3 days ago" },
        ],
        quickLinks: [
          { title: "Orders", description: "Track and manage your recent purchases", href: "/account/orders", icon: PackageCheck },
          { title: "Discounts", description: "Exclusive codes and special offers", href: "/account/discounts", icon: Gift },
          { title: "Wishlist", description: "Saved watches for your next purchase", href: "/account/wishlist", icon: Heart },
          { title: "Settings", description: "Edit your account details and access", href: "/account/settings", icon: Settings },
        ],
      };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(74,123,255,0.2),_transparent_35%),linear-gradient(135deg,_#081120_0%,_#101b31_45%,_#0d1428_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="glass-card luxury-shadow relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,165,116,0.25),_transparent_30%)]" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <UserRound className="h-8 w-8 text-[#D4A574]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#4A7BFF]">
                  {t.welcomeBack}
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-gradient sm:text-4xl">
                  {t.greeting}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#D9D9D9]/80 sm:text-base">
                  {t.heroDesc}
                </p>
              </div>
            </div>

            <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-[#F5E6CC]">
              <ShieldCheck className="h-5 w-5 text-[#D4A574]" />
              <div>
                <p className="font-medium">{t.vipActive}</p>
                <p className="text-xs text-white/60">{t.lastOrder}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="glass-card rounded-[1.4rem] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#D9D9D9]/70">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                    <Icon className="h-5 w-5 text-[#4A7BFF]" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#D9D9D9]/70">{item.hint}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card rounded-[1.75rem] p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#4A7BFF]">
                  {t.recentOrders}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {t.latestOrders}
                </h2>
              </div>
              <Link
                href="/account/orders"
                className="flex items-center gap-2 text-sm text-[#D9D9D9]/70 transition-colors hover:text-white"
              >
                {t.viewAll}
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {t.orders.map((order) => (
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
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-3 py-1 text-xs text-[#AFC5FF]">
                      {order.status}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#D9D9D9]/60">
                      <Clock3 className="h-4 w-4" />
                      {order.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-[1.75rem] p-6">
              <div className="flex items-center gap-2 text-[#D4A574]">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.3em]">
                  {t.quickAccess}
                </p>
              </div>
              <div className="mt-5 space-y-3">
                {t.quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-[#4A7BFF]/50 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/10 p-2">
                          <Icon className="h-4 w-4 text-[#4A7BFF]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {item.title}
                          </p>
                          <p className="text-xs text-[#D9D9D9]/60">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-[#D9D9D9]/40 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-[1.75rem] p-6">
              <div className="flex items-center gap-2 text-[#D4A574]">
                <Award className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.3em]">{t.membership}</p>
              </div>
              <div className="mt-4 rounded-2xl border border-[#4A7BFF]/20 bg-[linear-gradient(135deg,_rgba(74,123,255,0.2),_rgba(255,255,255,0.04))] p-4">
                <p className="text-lg font-semibold text-white">
                  {t.performanceTitle}
                </p>
                <p className="mt-2 text-3xl font-semibold text-gradient">
                  {t.performanceValue}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#D9D9D9]/70">
                  {t.membershipDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}