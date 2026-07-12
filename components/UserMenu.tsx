// components/UserMenu.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { HiOutlineUser } from "react-icons/hi";
import { useStore } from "@/store/useStore";

const menuItems = [
  { label: "My Account", href: "/account" },
  { label: "Orders", href: "/account/orders" },
  { label: "Wishlist", href: "/account/wishlist" },
  { label: "Discounts", href: "/account/discounts" },
  { label: "Settings", href: "/account/settings" },
];

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, signIn, signOut } = useStore();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl px-2.5 py-2 text-[#D9D9D9] transition-all hover:bg-white/5 hover:text-white"
        aria-label="User menu"
      >
        <HiOutlineUser className="h-5 w-5" />
        {isAuthenticated && user && (
          <span className="hidden text-sm font-medium text-white sm:inline-block">
            {user.name.split(" ")[0]}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-56 rounded-2xl p-2 luxury-shadow origin-top-right border border-white/10 bg-[#0e1629]/90 backdrop-blur-2xl"
          >
            <div className="mb-1 border-b border-white/10 px-3 py-3">
              <p className="text-sm font-medium text-white">
                {isAuthenticated && user ? `Hello, ${user.name}` : "Welcome"}
              </p>
              <p className="text-xs text-[#D9D9D9]">
                {isAuthenticated && user ? user.email : "guest@chronos.luxury"}
              </p>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-[#D9D9D9] hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-1 border-t border-white/10 pt-1">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="w-full rounded-xl px-3 py-2.5 text-left text-sm text-red-400 transition-all hover:bg-red-500/10"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    signIn();
                    setOpen(false);
                  }}
                  className="w-full rounded-xl px-3 py-2.5 text-left text-sm text-[#4A7BFF] transition-all hover:bg-[#4A7BFF]/10"
                >
                  Sign In
                </button>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}