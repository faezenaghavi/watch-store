"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  label?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  align?: "left" | "center";
}

export default function PageHero({
  title,
  subtitle,
  description,
  label,
  breadcrumbs,
  className,
  align = "center",
}: PageHeroProps) {
  const locale = useLocale();
  const t = useTranslations("PageHero");
  const homeHref = `/${locale}`;

  const localize = (href: string) => {
    if (!href.startsWith("/")) return href;
    if (/^\/(en|fa)(\/|$)/.test(href)) return href;
    return href === "/" ? `/${locale}` : `/${locale}${href}`;
  };

  return (
    <div
      className={cn(
        "pt-28 pb-16 px-4 md:px-8",
        align === "center" && "text-center",
        className,
      )}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#D9D9D9]/60 mb-6">
          <Link href={homeHref} className="hover:text-white transition-colors">
            {t("home")}
          </Link>
          <span>/</span>
          {breadcrumbs.map((crumb, index) => {
            if (crumb.href) {
              return (
                <Link
                  key={index}
                  href={localize(crumb.href)}
                  className={cn(
                    index === breadcrumbs.length - 1
                      ? "text-[#4A7BFF]"
                      : "hover:text-white transition-colors",
                  )}
                >
                  {crumb.label}
                </Link>
              );
            }
            return (
              <span
                key={index}
                className={cn(
                  index === breadcrumbs.length - 1
                    ? "text-[#4A7BFF]"
                    : "hover:text-white transition-colors",
                )}
              >
                {crumb.label}
              </span>
            );
          })}
        </div>
      )}

      {label && (
        <p className="text-[#4A7BFF] text-sm tracking-[0.3em] uppercase mb-3">
          {label}
        </p>
      )}

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gradient break-words">
        {title}
      </h1>

      {(subtitle || description) && (
        <p className="text-[#D9D9D9] mt-4 max-w-xl mx-auto font-light leading-relaxed px-2">
          {subtitle || description}
        </p>
      )}
    </div>
  );
}   