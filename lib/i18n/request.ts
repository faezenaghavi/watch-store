// i18n/request.ts
import { getRequestConfig } from "next-intl/server";

// لیست زبان‌ها و زبان پیش‌فرض
export const locales = ["en", "fa"] as const;
export const defaultLocale = "en" as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // دریافت زبان درخواست شده
  let locale = await requestLocale;

  // اگر زبان نامعتبر بود، انگلیسی رو قرار بده
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  type Messages = Record<string, unknown>;

 
  const messageLoaders: Record<Locale, () => Promise<{ default: Messages }>> = {
    en: () => import("@/en.json"),
    fa: () => import("@/fa.json"),
  };

  return {
    locale,
    // دریافت فایل ترجمه مربوط به زبان فعلی
    messages: (await messageLoaders[locale as Locale]()).default,
  };
});