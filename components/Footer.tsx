'use client';

import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaInstagram, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaPinterestP, href: '#', label: 'Pinterest' },
];

export function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const isRTL = locale === 'fa';

  const linkGroups = [
    {
      titleKey: 'shopTitle',
      links: [
        { key: 'mensWatches', href: `/${locale}/men` },
        { key: 'womensWatches', href: `/${locale}/women` },
        { key: 'allProducts', href: `/${locale}/products` },
        { key: 'newArrivals', href: `/${locale}/products?filter=new` },
        { key: 'limitedEditions', href: `/${locale}/products?filter=limited` },
      ],
    },
    {
      titleKey: 'brandsTitle',
      links: [
        { key: null, label: 'Rolex', href: `/${locale}/brands/rolex` },
        { key: null, label: 'Omega', href: `/${locale}/brands/omega` },
        { key: null, label: 'TAG Heuer', href: `/${locale}/brands/tag-heuer` },
        { key: null, label: 'Seiko', href: `/${locale}/brands/seiko` },
        { key: 'allBrands', href: `/${locale}/brands` },
      ],
    },
    {
      titleKey: 'companyTitle',
      links: [
        { key: 'aboutUs', href: `/${locale}/#about` },
        { key: 'contact', href: `/${locale}/contact` },
        { key: 'careers', href: '#' },
        { key: 'press', href: '#' },
        { key: 'sustainability', href: '#' },
      ],
    },
    {
      titleKey: 'supportTitle',
      links: [
        { key: 'faq', href: '#' },
        { key: 'shipping', href: '#' },
        { key: 'returns', href: '#' },
        { key: 'warranty', href: '#' },
        { key: 'sizeGuide', href: '#' },
      ],
    },
  ] as const;

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Newsletter ── */}
        <div className="py-16 border-b border-white/5">
          <div className="max-w-xl mx-auto text-center">
            <h3
              className="text-2xl font-bold text-gradient mb-3"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              {t('stayInTime')}
            </h3>
            <p className="text-sm text-[#D9D9D9]/60 mb-6">
              {t('subscribeText')}
            </p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-5 py-3.5 rounded-xl glass text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#4A7BFF]/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-primary rounded-xl px-6 text-white flex items-center gap-2"
              >
                <span className="hidden sm:inline">{t('subscribeBtn')}</span>
                <HiOutlineArrowRight
                  className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── لینک‌ها و کپی‌رایت ── */}
      <div className="relative overflow-hidden">
        <img
          src="./images/footer.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(11,17,32,0.94) 0%, rgba(14,22,41,0.9) 50%, rgba(11,17,32,0.94) 100%)',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-[100px] opacity-15 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(74,123,255,0.6) 0%, transparent 70%)',
            bottom: '-20%',
            left: '-5%',
          }}
        />
        <div
          className="absolute w-56 h-56 rounded-full blur-[80px] opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,116,0.5) 0%, transparent 60%)',
            top: '-15%',
            right: '5%',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* ── لینک‌ها به صورت ردیفی + تگ ── */}
          <div className="py-12 space-y-5">
            {linkGroups.map((group) => (
              <div key={group.titleKey}>
                <h4
                  className={`text-[11px] font-medium text-[#D4A574] mb-3 ${
                    isRTL ? '' : 'tracking-[0.2em] uppercase'
                  }`}
                >
                  {t(group.titleKey)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.links.map((link, linkIndex) => (
                    <Link
                      key={`${group.titleKey}-${
                        link.key ?? (link as { label: string }).label
                      }-${linkIndex}`}
                      href={link.href}
                      className="text-[13px] text-[#D9D9D9]/50 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      {link.key
                        ? t(link.key as Parameters<typeof t>[0])
                        : (link as { label: string }).label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A7BFF] to-[#3360DD] flex items-center justify-center">
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: 'var(--font-space)' }}
                >
                  C
                </span>
              </div>
              <span className="text-sm text-[#D9D9D9]/40">
                {t('copyright', { year: new Date().getFullYear() })}
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
      </div>
    </footer>
  );
}