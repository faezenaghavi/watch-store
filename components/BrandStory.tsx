"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface BrandStoryProps {
  /** برچسب کوچک بالای عنوان، مثلاً "OUR STORY" */
  label: string;
  /** عنوان اصلی بخش */
  title: string;
  /** توضیح زیر عنوان */
  description: string;
  /** متن دکمه */
  buttonText: string;
  /** لینک دکمه (اگر onAction ندهید از این استفاده می‌شود) */
  buttonHref?: string;
  /** مسیر تصویر */
  imageSrc: string;
  /** متن جایگزین تصویر - الزامی برای دسترس‌پذیری */
  imageAlt: string;
  /** اگر بدهید دکمه به‌صورت <button> رندر می‌شود و این تابع صدا زده می‌شود */
  onAction?: () => void;
  /** جهت متن؛ پیش‌فرض ltr */
  dir?: "ltr" | "rtl";
  /** کلاس دلخواه برای override یا فاصله‌گذاری بیرونی */
  className?: string;
  /** id برای اسکرول/انکر، اختیاری */
  id?: string;
}

export default function BrandStory({
  label,
  title,
  description,
  buttonText,
  buttonHref = "#",
  imageSrc,
  imageAlt,
  onAction,
  dir = "ltr",
  className,
  id,
}: BrandStoryProps) {
  const titleId = id ? `${id}-title` : undefined;
  const isRTL = dir === "rtl";

  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;

    // اگر کاربر انیمیشن کم‌تر را ترجیح می‌دهد، مستقیم حالت نهایی را نشان بده
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      dir={dir}
      aria-labelledby={titleId}
      className={["py-24 px-6 relative", className].filter(Boolean).join(" ")}
    >
      <div
        className={[
          "max-w-7xl mx-auto flex items-center gap-16 lg:gap-20",
          isRTL
            ? "flex-col-reverse lg:flex-row-reverse"
            : "flex-col-reverse lg:flex-row",
        ].join(" ")}
      >
        {/* تصویر */}
        <div
          ref={imageWrapRef}
          className="relative w-full max-w-[480px] lg:w-[560px] h-[420px] lg:h-[520px] shrink-0"
        >
          {/* بلوک گرادیان پشتی به‌جای رنگ نارنجی تخت */}
          <div
            aria-hidden="true"
            className={[
              "absolute bottom-0 w-3/4 h-3/4 lg:w-[420px] lg:h-[420px] rounded-2xl",
              "bg-gradient-to-br from-[#4A7BFF]/25 via-[#D4A574]/20 to-transparent",
              "blur-[2px] transition-opacity duration-700 ease-out",
              isVisible ? "opacity-100" : "opacity-0",
              isRTL ? "right-0" : "left-0",
            ].join(" ")}
            style={{ transitionDelay: "450ms" }}
          />
          {/* کارت تصویر - از روی متن رد می‌شود و در جای اصلی می‌نشیند */}
          <div
            className={[
              "absolute top-0 w-3/4 h-3/4 lg:w-[420px] lg:h-[420px] overflow-hidden",
              "rounded-2xl border border-white/10 luxury-shadow z-20",
              "transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isRTL
                ? "right-[10%] lg:right-[70px]"
                : "left-[10%] lg:left-[70px]",
            ].join(" ")}
            style={{
              transform: isVisible
                ? "translateX(0)"
                : `translateX(${isRTL ? "-" : ""}115%)`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629]/50 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/images/brandbg.png"
              alt="Brand background"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* متن */}
        <div className="max-w-[430px] text-center lg:text-start">
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#4A7BFF] mb-4">
            {label}
          </span>
          <h2
            id={titleId}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {title}
          </h2>
          <p className="text-[#D9D9D9] text-lg leading-relaxed mb-8">
            {description}
          </p>
          <div className="luxury-divider mb-8 max-w-xs mx-auto lg:mx-0" />

          {onAction ? (
            <button type="button" className="btn-primary" onClick={onAction}>
              {buttonText}
            </button>
          ) : (
            <a href={buttonHref} className="btn-primary">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
