'use client';

import { m, useReducedMotion } from 'framer-motion';

interface DiamondConfig {
  top: string;
  left: string;
  size: number;
  color: string;
  glow: string;
  duration: number;
  delay: number;
  filled?: boolean;
}

/**
 * موقعیت‌ها ثابت (نه Math.random) هستند تا با رندر سمت سرور
 * دچار hydration mismatch نشویم.
 */
const DIAMONDS: DiamondConfig[] = [
  { top: '6%', left: '10%', size: 16, color: '#FFFFFF', glow: 'rgba(255,255,255,0.55)', duration: 6, delay: 0, filled: true },
  { top: '14%', left: '80%', size: 12, color: '#F5F5F5', glow: 'rgba(255,255,255,0.5)', duration: 7, delay: 0.6 },
  { top: '30%', left: '4%', size: 20, color: '#FFFFFF', glow: 'rgba(255,255,255,0.45)', duration: 8, delay: 1.1 },
  { top: '22%', left: '93%', size: 14, color: '#FFFFFF', glow: 'rgba(255,255,255,0.5)', duration: 5.5, delay: 1.6, filled: true },
  { top: '48%', left: '16%', size: 10, color: '#EDEDED', glow: 'rgba(255,255,255,0.4)', duration: 6.5, delay: 0.2 },
  { top: '58%', left: '87%', size: 18, color: '#FFFFFF', glow: 'rgba(255,255,255,0.5)', duration: 7.5, delay: 2.1 },
  { top: '78%', left: '22%', size: 12, color: '#FFFFFF', glow: 'rgba(255,255,255,0.45)', duration: 6, delay: 1.3, filled: true },
  { top: '86%', left: '68%', size: 16, color: '#F5F5F5', glow: 'rgba(255,255,255,0.4)', duration: 8.5, delay: 0.9 },
  { top: '4%', left: '46%', size: 10, color: '#EDEDED', glow: 'rgba(255,255,255,0.35)', duration: 5, delay: 2.6 },
  { top: '42%', left: '55%', size: 14, color: '#FFFFFF', glow: 'rgba(255,255,255,0.45)', duration: 7, delay: 1.9, filled: true },
  { top: '68%', left: '43%', size: 12, color: '#FFFFFF', glow: 'rgba(255,255,255,0.4)', duration: 6.8, delay: 0.4 },
  { top: '18%', left: '33%', size: 8, color: '#F5F5F5', glow: 'rgba(255,255,255,0.35)', duration: 9, delay: 3.2 },
  { top: '90%', left: '10%', size: 13, color: '#FFFFFF', glow: 'rgba(255,255,255,0.4)', duration: 7.2, delay: 1.4 },
  { top: '10%', left: '62%', size: 10, color: '#FFFFFF', glow: 'rgba(255,255,255,0.4)', duration: 6.2, delay: 2.3, filled: true },
];

interface FloatingDiamondsProps {
  className?: string;
}

export function FloatingDiamonds({ className }: FloatingDiamondsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute inset-0 overflow-hidden', className]
        .filter(Boolean)
        .join(' ')}
    >
      {DIAMONDS.map((d, i) => (
        <m.span
          key={i}
          className="absolute block rounded-[1.5px]"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${d.color} 45%, rgba(255,255,255,0.05) 80%)`,
            boxShadow: [
              `0 0 ${d.size * 0.8}px rgba(255,255,255,0.95)`,
              `0 0 ${d.size * 2.5}px ${d.glow}`,
              `0 0 ${d.size * 5}px ${d.glow}`,
              `0 0 ${d.size * 9}px rgba(255,255,255,0.25)`,
            ].join(', '),
          }}
          initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.6, rotate: 45, scale: 1 }
              : {
                  opacity: [0.35, 0.95, 0.35],
                  scale: [0.85, 1.2, 0.85],
                  y: [0, -14, 0],
                  rotate: [45, 52, 45],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.6 }
              : {
                  duration: d.duration,
                  delay: d.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </div>
  );
}   