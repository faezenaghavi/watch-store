// components/AboutSection.tsx
'use client';

import { m } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineSparkles, HiOutlineGlobe } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('AboutSection');

  const stats = [
    { value: '25+', labelKey: 'statsYears' },
    { value: '10K+', labelKey: 'statsSold' },
    { value: '50+', labelKey: 'statsBrands' },
    { value: '99%', labelKey: 'statsSatisfaction' },
  ] as const;

  const values = [
    { icon: HiOutlineShieldCheck, titleKey: 'val1Title', descKey: 'val1Desc' },
    { icon: HiOutlineClock, titleKey: 'val2Title', descKey: 'val2Desc' },
    { icon: HiOutlineSparkles, titleKey: 'val3Title', descKey: 'val3Desc' },
    { icon: HiOutlineGlobe, titleKey: 'val4Title', descKey: 'val4Desc' },
  ] as const;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 end-0 w-[500px] h-[500px] rounded-full bg-[#4A7BFF] opacity-[0.03] blur-[180px]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <m.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-gradient block mb-2" style={{ fontFamily: 'var(--font-space)' }}>
                {stat.value}
              </span>
              <span className="text-xs tracking-[0.15em] uppercase text-[#D9D9D9]/60">
                {t(stat.labelKey)}
              </span>
            </m.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <m.div
              key={value.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 group hover:border-white/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-5 group-hover:bg-[#4A7BFF]/20 transition-colors duration-500">
                <value.icon className="w-5 h-5 text-[#4A7BFF]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-space)' }}>
                {t(value.titleKey)}
              </h3>
              <p className="text-sm text-[#D9D9D9]/70 leading-relaxed">
                {t(value.descKey)}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}