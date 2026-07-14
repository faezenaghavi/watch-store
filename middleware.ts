import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n/request';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  // این الگو همه مسیرها را می‌گیرد به جز فایل‌های استاتیک (عکس، css) و مسیرهای سیستمی نکست
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};