'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // اضافه شد
import { m, AnimatePresence } from 'framer-motion';
import { useScrollNav } from '@/hooks/useScrollNav';
import { useStore } from '@/store/useStore';
import { NAV_ITEMS } from '@/lib/constants';
import { UserMenu } from './UserMenu';
import {
  HiOutlineShoppingBag,
  HiOutlineSearch,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from 'react-icons/hi';

export function Navbar() {
  const { scrolled } = useScrollNav(50); 
  const { setCartOpen, setMobileMenuOpen, mobileMenuOpen, wishlist } = useStore();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // دریافت مسیر فعلی

  useEffect(() => setMounted(true), []);

  const cartCount = useStore((s) => s.cart.reduce((a, b) => a + b.quantity, 0));

  return (
    <>
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }} 
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'top-4 px-4'
            : 'top-0 px-4 md:px-8'
        }`}
      >
        <nav
          className={`max-w-7xl mx-auto transition-all duration-500 ${
            scrolled
              ? 'glass-strong rounded-2xl px-6 py-3 luxury-shadow'
              : 'bg-transparent px-6 py-5'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A7BFF] to-[#3360DD] flex items-center justify-center shadow-lg shadow-[#4A7BFF]/20 group-hover:shadow-[#4A7BFF]/40 transition-shadow">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-space)' }}>C</span>
              </div>
              <span
                className="text-xl font-bold tracking-wider text-white"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                CHRONOS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                // بررسی اینکه آیا لینک فعلی، صفحه جاری است
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm transition-colors duration-300 hourglass-hover ${
                      isActive ? 'hourglass-active text-white' : 'text-[#D9D9D9] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => useStore.getState().setSearchOpen(true)}
                className="p-2.5 rounded-xl text-[#D9D9D9] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Search"
              >
                <HiOutlineSearch className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-xl text-[#D9D9D9] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Cart"
              >
                <HiOutlineShoppingBag className="w-5 h-5" />
                {mounted && cartCount > 0 && (
                  <m.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#4A7BFF] rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                  >
                    {cartCount}
                  </m.span>
                )}
              </button>

              <UserMenu />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-[#D9D9D9] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <HiOutlineX className="w-5 h-5" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </m.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <m.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#0E1629] border-l border-white/10 p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  
                  return (
                    <m.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-lg rounded-xl transition-all ${
                          isActive 
                            ? 'text-white bg-[#4A7BFF]/20 border-l-2 border-[#4A7BFF]' 
                            : 'text-[#D9D9D9] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </m.div>
                  );
                })}
              </div>

              <div className="luxury-divider my-8" />

              <div className="flex flex-col gap-2">
                <Link
                  href="/account/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#D9D9D9] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  Wishlist {mounted && wishlist.length > 0 && `(${wishlist.length})`}
                </Link>
                <Link
                  href="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#D9D9D9] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  My Account
                </Link>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}