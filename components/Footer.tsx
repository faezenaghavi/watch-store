// components/Footer.tsx
'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaInstagram, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';

const footerLinks = {
  shop: [
    { label: "Men's Watches", href: '/men' },
    { label: "Women's Watches", href: '/women' },
    { label: 'All Products', href: '/products' },
    { label: 'New Arrivals', href: '/products?filter=new' },
    { label: 'Limited Editions', href: '/products?filter=limited' },
  ],
  brands: [
    { label: 'Rolex', href: '/brands/rolex' },
    { label: 'Omega', href: '/brands/omega' },
    { label: 'TAG Heuer', href: '/brands/tag-heuer' },
    { label: 'Seiko', href: '/brands/seiko' },
    { label: 'All Brands', href: '/brands' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Sustainability', href: '#' },
  ],
  support: [
    { label: 'FAQ', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Warranty', href: '#' },
    { label: 'Size Guide', href: '#' },
  ],
};

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaPinterestP, href: '#', label: 'Pinterest' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}
        <div className="py-16 border-b border-white/5">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gradient mb-3" style={{ fontFamily: 'var(--font-space)' }}>
              Stay in Time
            </h3>
            <p className="text-sm text-[#D9D9D9]/60 mb-6">
              Subscribe for exclusive previews, new arrivals and insider access.
            </p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-xl glass text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#4A7BFF]/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-primary rounded-xl px-6 text-white flex items-center gap-2"
              >
                <span className="hidden sm:inline">Subscribe</span>
                <HiOutlineArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#D9D9D9]/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A7BFF] to-[#3360DD] flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-space)' }}>C</span>
            </div>
            <span className="text-sm text-[#D9D9D9]/40">
              © {new Date().getFullYear()} CHRONOS. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-[#D9D9D9]/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}