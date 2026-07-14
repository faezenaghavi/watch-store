"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, BellRing, Lock, UserRound } from "lucide-react";
import { useStore } from "@/store/useStore";

type ProfileForm = {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

const emptyForm: ProfileForm = {
  name: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

export default function SettingsPage() {
  const { user, isAuthenticated, signIn, signOut, updateUserProfile } =
    useStore();
  const [form, setForm] = useState<ProfileForm>(emptyForm);
  const [saved, setSaved] = useState(false);

  const pathname = usePathname();
  const match = pathname?.match(/^\/(en|fa)(?=\/|$)/);
  const locale = (match && match[1]) || "en";
  const isRTL = locale === "fa";

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name ?? "",
        email: user.email ?? "",
        phone: user.phone ?? "",
        street: user.address?.street ?? "",
        city: user.address?.city ?? "",
        state: user.address?.state ?? "",
        zip: user.address?.zip ?? "",
        country: user.address?.country ?? "",
      });
    }
  }, [user]);

  const handleChange = (field: keyof ProfileForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSave = () => {
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: {
        street: form.street,
        city: form.city,
        state: form.state,
        zip: form.zip,
        country: form.country,
      },
    };

    if (!isAuthenticated) {
      signIn(payload);
    } else {
      updateUserProfile(payload);
    }

    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  const t = isRTL
    ? {
        account: "حساب کاربری",
        title: "تنظیمات حساب",
        desc: "اطلاعات پروفایل خود را به‌روزرسانی کنید و جزئیات حساب لوکس خود را به‌روز نگه دارید.",
        back: "بازگشت به داشبورد",
        signOut: "خروج از حساب",
        signIn: "ورود به حساب",
        profile: "پروفایل",
        fullName: "نام و نام خانوادگی",
        fullNamePlaceholder: "نام کامل شما",
        email: "ایمیل",
        emailPlaceholder: "your@email.com",
        phone: "شماره تماس",
        phonePlaceholder: "+98 912 000 0000",
        security: "امنیت",
        password: "رمز عبور",
        passwordUpdated: "آخرین به‌روزرسانی: ۳ ماه پیش",
        twoFactor: "احراز هویت دو مرحله‌ای",
        twoFactorEnabled: "برای حساب شما فعال است",
        addressPrefs: "آدرس و تنظیمات",
        street: "خیابان",
        streetPlaceholder: "آدرس خیابان",
        city: "شهر",
        cityPlaceholder: "شهر",
        state: "استان",
        statePlaceholder: "استان",
        zip: "کد پستی",
        zipPlaceholder: "کد پستی",
        country: "کشور",
        countryPlaceholder: "کشور",
        savedMsg: "پروفایل با موفقیت به‌روزرسانی شد.",
        idleMsg: "تغییرات بلافاصله در سراسر تجربه حساب کاربری اعمال می‌شود.",
        save: "ذخیره تغییرات",
      }
    : {
        account: "Account",
        title: "Account Settings",
        desc: "Update your profile information and keep your luxury account details current.",
        back: "Back to dashboard",
        signOut: "Sign out",
        signIn: "Sign in",
        profile: "Profile",
        fullName: "Full name",
        fullNamePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        phonePlaceholder: "+1 555 0000",
        security: "Security",
        password: "Password",
        passwordUpdated: "Last updated 3 months ago",
        twoFactor: "Two-factor authentication",
        twoFactorEnabled: "Enabled for your account",
        addressPrefs: "Address & preferences",
        street: "Street",
        streetPlaceholder: "Street address",
        city: "City",
        cityPlaceholder: "City",
        state: "State",
        statePlaceholder: "State",
        zip: "ZIP / Postal",
        zipPlaceholder: "ZIP",
        country: "Country",
        countryPlaceholder: "Country",
        savedMsg: "Profile updated successfully.",
        idleMsg: "Changes update instantly across the account experience.",
        save: "Save changes",
      };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(74,123,255,0.2),_transparent_35%),linear-gradient(135deg,_#081120_0%,_#101b31_45%,_#0d1428_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="glass-card luxury-shadow rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#4A7BFF]">
                {t.account}
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-gradient">
                {t.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#D9D9D9]/80">
                {t.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/account"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                {t.back}
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={() => signOut()}
                  className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500/20"
                >
                  {t.signOut}
                </button>
              ) : (
                <button
                  onClick={() => signIn(form)}
                  className="rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-4 py-2 text-sm text-[#AFC5FF] transition hover:bg-[#4A7BFF]/20"
                >
                  {t.signIn}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-[1.5rem] p-6">
            <div className="flex items-center gap-2 text-[#D4A574]">
              <UserRound className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">{t.profile}</p>
            </div>
            <div className="mt-5 grid gap-4 text-sm text-[#D9D9D9]/80">
              <label className="flex flex-col gap-2">
                <span className="text-white">{t.fullName}</span>
                <input
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.fullNamePlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">{t.email}</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.emailPlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">{t.phone}</span>
                <input
                  value={form.phone}
                  onChange={(event) =>
                    handleChange("phone", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.phonePlaceholder}
                />
              </label>
            </div>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6">
            <div className="flex items-center gap-2 text-[#D4A574]">
              <Lock className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">{t.security}</p>
            </div>
            <div className="mt-5 space-y-4 text-sm text-[#D9D9D9]/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white">{t.password}</p>
                <p className="mt-1">{t.passwordUpdated}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white">{t.twoFactor}</p>
                <p className="mt-1">{t.twoFactorEnabled}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6 lg:col-span-2">
            <div className="flex items-center gap-2 text-[#D4A574]">
              <BellRing className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">
                {t.addressPrefs}
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-white">{t.street}</span>
                <input
                  value={form.street}
                  onChange={(event) =>
                    handleChange("street", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.streetPlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">{t.city}</span>
                <input
                  value={form.city}
                  onChange={(event) => handleChange("city", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.cityPlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">{t.state}</span>
                <input
                  value={form.state}
                  onChange={(event) =>
                    handleChange("state", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.statePlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">{t.zip}</span>
                <input
                  value={form.zip}
                  onChange={(event) => handleChange("zip", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.zipPlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-white">{t.country}</span>
                <input
                  value={form.country}
                  onChange={(event) =>
                    handleChange("country", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.countryPlaceholder}
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#D9D9D9]/70">
                {saved ? t.savedMsg : t.idleMsg}
              </p>
              <button
                onClick={handleSave}
                className="rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/15 px-5 py-2.5 text-sm font-medium text-[#AFC5FF] transition hover:bg-[#4A7BFF]/25"
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}