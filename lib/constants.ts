// lib/constants.ts
export const SITE_NAME = 'CHRONOS';
export const SITE_DESCRIPTION = 'Premium Luxury Timepieces';
export const CURRENCY = 'USD';
export const CURRENCY_SYMBOL = '$';

export const NAV_ITEMS: import('@/types/navigation').NavItem[] = [
  { label: 'Home', href: '/' },
  { label: "Men's Watches", href: '/men' },
  { label: "Women's Watches", href: '/women' },
  { label: 'All Products', href: '/products' },
  { label: 'Brands', href: '/brands' },
  { label: 'Contact', href: '/contact' },
];


export const NAV_ITEMS_FA: import('@/types/navigation').NavItem[] = [
  { label: 'خانه', href: '/' },
  { label: 'ساعت مردانه', href: '/men' },
  { label: 'ساعت زنانه', href: '/women' },
  { label: 'همه محصولات', href: '/products' },
  { label: 'برندها', href: '/brands' },
  { label: 'تماس با ما', href: '/contact' },
];


export function getNavItems(
  locale: string,
): import('@/types/navigation').NavItem[] {
  return locale === 'fa' ? NAV_ITEMS_FA : NAV_ITEMS;
}