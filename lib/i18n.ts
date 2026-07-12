export const locales = ['en', 'fa'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];