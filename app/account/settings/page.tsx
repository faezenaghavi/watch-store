"use client";

import Link from "next/link";
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
                Account Settings
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#D9D9D9]/80">
                Update your profile information and keep your luxury account
                details current.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/account"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to dashboard
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={() => signOut()}
                  className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500/20"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => signIn(form)}
                  className="rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-4 py-2 text-sm text-[#AFC5FF] transition hover:bg-[#4A7BFF]/20"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-[1.5rem] p-6">
            <div className="flex items-center gap-2 text-[#D4A574]">
              <UserRound className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">Profile</p>
            </div>
            <div className="mt-5 grid gap-4 text-sm text-[#D9D9D9]/80">
              <label className="flex flex-col gap-2">
                <span className="text-white">Full name</span>
                <input
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="Your full name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="your@email.com"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">Phone</span>
                <input
                  value={form.phone}
                  onChange={(event) =>
                    handleChange("phone", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="+1 555 0000"
                />
              </label>
            </div>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6">
            <div className="flex items-center gap-2 text-[#D4A574]">
              <Lock className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">Security</p>
            </div>
            <div className="mt-5 space-y-4 text-sm text-[#D9D9D9]/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white">Password</p>
                <p className="mt-1">Last updated 3 months ago</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white">Two-factor authentication</p>
                <p className="mt-1">Enabled for your account</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6 lg:col-span-2">
            <div className="flex items-center gap-2 text-[#D4A574]">
              <BellRing className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">
                Address & preferences
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-white">Street</span>
                <input
                  value={form.street}
                  onChange={(event) =>
                    handleChange("street", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="Street address"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">City</span>
                <input
                  value={form.city}
                  onChange={(event) => handleChange("city", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="City"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">State</span>
                <input
                  value={form.state}
                  onChange={(event) =>
                    handleChange("state", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="State"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white">ZIP / Postal</span>
                <input
                  value={form.zip}
                  onChange={(event) => handleChange("zip", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="ZIP"
                />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-white">Country</span>
                <input
                  value={form.country}
                  onChange={(event) =>
                    handleChange("country", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder="Country"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#D9D9D9]/70">
                {saved
                  ? "Profile updated successfully."
                  : "Changes update instantly across the account experience."}
              </p>
              <button
                onClick={handleSave}
                className="rounded-full border border-[#4A7BFF]/30 bg-[#4A7BFF]/15 px-5 py-2.5 text-sm font-medium text-[#AFC5FF] transition hover:bg-[#4A7BFF]/25"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
