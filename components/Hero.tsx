// components/Hero.tsx
'use client';

import { m } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  });

  const fadeRight = (delay: number) => ({
    initial: { opacity: 0, x: -16 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  });

  const scaleIn = (delay: number) => ({
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 1,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  });

  const stats = [
    { value: '500+', label: 'Timepieces' },
    { value: '12', label: 'Maisons' },
    { value: '1920', label: 'Since' },
  ];

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* ─── Background Video ─── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.mp4"
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-poster.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0E1629]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1629] via-transparent to-[#0E1629]/50" />
      </div>

      {/* ─── Ambient Glow ─── */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#4A7BFF] opacity-[0.05] blur-[200px] z-0" />

      {/* ─── Left Vertical Accent ─── */}
      <m.div
        {...fadeUp(0)}
        className="absolute left-8 md:left-16 top-[18%] bottom-[18%] w-px bg-gradient-to-b from-transparent via-[#4A7BFF]/20 to-transparent z-10"
      />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full max-w-5xl">

        <m.div {...fadeRight(0.3)}>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#4A7BFF]/60" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#D9D9D9]/35 font-light">
              Chronos Collection — 2024
            </span>
          </div>
        </m.div>

        <m.h1
          {...fadeUp(0.55)}
          className="mt-8 md:mt-12"
          style={{ fontFamily: 'var(--font-space)' }}
        >
          <span className="block text-5xl md:text-7xl lg:text-[7rem] font-light text-white/75 tracking-[-0.03em] leading-[0.9]">
            Time,
          </span>
          <span className="block text-5xl md:text-7xl lg:text-[7rem] font-bold text-[#0E1629]/70  tracking-[-0.03em] leading-[0.9]">
            Redefined.
          </span>
        </m.h1>

        <m.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-white/12 mt-8 md:mt-10"
        />

        <m.p
          {...fadeUp(1.35)}
          className="text-[15px] md:text-[16px] text-[#D9D9D9]/45 max-w-[420px] leading-[1.85] font-light"
        >
          We don&apos;t sell watches. We curate moments
          that outlive the hands that wear them.
        </m.p>

        <m.div {...fadeUp(1.7)} className="flex items-center gap-10 mt-10 md:mt-12">
          <Link
            href="/products"
            className="btn-primary rounded-xl px-10 py-4 text-white text-[13px]"
          >
            Discover Collection
          </Link>
          <Link
            href="/brands"
            className="group flex items-center gap-3 text-[12px] text-[#D9D9D9]/35 hover:text-white/70 transition-colors duration-500 tracking-[0.15em] uppercase"
          >
            <span>View Lookbook</span>
            <span className="text-[#4A7BFF]/50 transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </m.div>
      </div>

      {/* ─── Right Side: Stats + Geometric Element ─── */}
      <m.div
        {...scaleIn(1.9)}
        className="hidden md:flex absolute right-16 lg:right-24 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-8"
      >
        {/* Geometric rings — abstract movement hint */}
        <div className="relative w-28 h-28 lg:w-32 lg:h-32">
          {/* Outer ring — slow CW */}
          <div
            className="absolute inset-0 rounded-full border border-dashed border-[#4A7BFF]/10"
            style={{ animation: 'heroSpin 50s linear infinite' }}
          />
          {/* Middle ring — slow CCW */}
          <div
            className="absolute inset-4 rounded-full border border-white/[0.04]"
            style={{ animation: 'heroSpin 35s linear infinite reverse' }}
          />
          {/* Inner ring */}
          <div className="absolute inset-8 rounded-full border border-[#4A7BFF]/[0.06]" />
          {/* Cross hair marks */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1.5 bg-[#4A7BFF]/15" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1.5 bg-[#4A7BFF]/15" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-1.5 bg-[#4A7BFF]/15" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-1.5 bg-[#4A7BFF]/15" />
          {/* Center diamond */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rotate-45 border border-[#D4A574]/25" />
          </div>
        </div>

        {/* Vertical stats */}
        <div className="flex flex-col items-center gap-5">
          {stats.map((stat, i) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 2.3 + i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col items-center"
            >
              <span
                className="text-xl lg:text-2xl font-light text-white/50 tracking-wide"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                {stat.value}
              </span>
              <span className="text-[8px] tracking-[0.4em] uppercase text-[#D9D9D9]/20 mt-1">
                {stat.label}
              </span>
            </m.div>
          ))}

          {/* Separator dots */}
          <div className="flex flex-col items-center gap-3 mt-1">
            <div className="w-[3px] h-[3px] rounded-full bg-[#4A7BFF]/15" />
            <div className="w-[3px] h-[3px] rounded-full bg-[#4A7BFF]/10" />
            <div className="w-[3px] h-[3px] rounded-full bg-[#4A7BFF]/[0.06]" />
          </div>
        </div>
      </m.div>

      {/* ─── Scroll Indicator ─── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#D9D9D9]/20" />
        <div className="flex items-center gap-3">
          <div className="w-4 h-px bg-[#D9D9D9]/15" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#D9D9D9]/25">
            Scroll
          </span>
          <div className="w-4 h-px bg-[#D9D9D9]/15" />
        </div>
      </m.div>

      {/* ─── Bottom Fade ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0E1629] to-transparent z-[5]" />

      <style>{`
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}