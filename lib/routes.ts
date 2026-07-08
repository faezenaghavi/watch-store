// lib/routes.ts
export const ROUTES = {
  HOME: '/',
  MEN: '/men',
  WOMEN: '/women',
  PRODUCTS: '/products',
  BRANDS: '/brands',
  BRAND: (slug: string) => `/brands/${slug}`,
  CONTACT: '/contact',
  CART: '/cart',
  ACCOUNT: '/account',
  ACCOUNT_ORDERS: '/account/orders',
  ACCOUNT_DISCOUNTS: '/account/discounts',
  ACCOUNT_WISHLIST: '/account/wishlist',
  ACCOUNT_SETTINGS: '/account/settings',
} as const;