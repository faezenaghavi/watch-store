import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./lib/i18n"; // در مرحله بعد می‌سازیم

export default createMiddleware({
  locales,
  defaultLocale,
  // Make the locale prefix optional so links to both /contact and /fa/contact work
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(fa|en)/:path*"],
};
