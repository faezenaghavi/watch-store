// components/SectionHeading.tsx
'use client';

import { m } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ label, title, subtitle, center = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {label && (
        <m.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#4A7BFF] mb-4"
        >
          {label}
        </m.span>
      )}
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
          light ? 'text-gradient' : ''
        }`}
        style={{ fontFamily: 'var(--font-space)' }}
      >
        {title}
      </m.h2>
      {subtitle && (
        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#D9D9D9] text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </m.p>
      )}
      <m.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="luxury-divider mt-8 max-w-xs mx-auto"
      />
    </div>
  );
}