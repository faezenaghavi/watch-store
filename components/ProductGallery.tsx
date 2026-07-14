// components/ProductGallery.tsx
"use client";

import { useState } from "react";

interface ProductGalleryProps {
  imageSrc: string;
  isRtl: boolean;
}

const colorVariants = [
  { 
    name: "رنگ اصلی / Original", 
    filter: "none", 
  },
  { 
    name: "تنظیم آبی / Blue Tone", 
    filter: "hue-rotate(190deg) saturate(1.4) brightness(0.9)", 
  },
  { 
    name: "تنظیم رزگلد / Rose Gold Tone", 
    filter: "sepia(0.4) hue-rotate(-20deg) saturate(1.4)", 
  },
];

export default function ProductGallery({ imageSrc, isRtl }: ProductGalleryProps) {
  // این استیت مشخص می‌کنه کدوم عکس الان فعال هست (پیش‌فرض: 0 یعنی عکس اصلی)
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVariant = colorVariants[activeIndex];

  return (
    <div className="flex flex-col gap-4">
      {/* بخش عکس بزرگ */}
      <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
        <img
          src={imageSrc}
          alt="Selected variant"
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          style={{ filter: activeVariant.filter }}
        />
        {/* برچسب نام رنگ روی عکس بزرگ */}
        <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl px-3 py-2 text-center">
          <span className="text-xs text-white/80 font-medium">{activeVariant.name}</span>
        </div>
      </div>

      {/* بخش عکس‌های کوچک (تامبنیل‌ها) */}
      <div className={`flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
        {colorVariants.map((variant, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer flex-shrink-0
              ${
                activeIndex === index
                  ? "border-[#4A7BFF] scale-105 shadow-[0_0_15px_rgba(74,123,255,0.3)]"
                  : "border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"
              }
            `}
          >
            <img
              src={imageSrc}
              alt={variant.name}
              className="w-full h-full object-cover"
              style={{ filter: variant.filter }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}