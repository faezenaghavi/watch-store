// components/AboutSection.tsx
'use client';

import { m } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineSparkles, HiOutlineGlobe } from 'react-icons/hi';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '10K+', label: 'Timepieces Sold' },
  { value: '50+', label: 'Luxury Brands' },
  { value: '99%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: HiOutlineShieldCheck,
    title: 'Authenticated',
    description: 'Every timepiece is verified by our certified horologists for absolute authenticity.',
  },
  {
    icon: HiOutlineClock,
    title: 'Timeless',
    description: 'We curate watches that transcend trends — pieces that appreciate with time.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Exquisite',
    description: 'Only the finest materials and most precise movements earn a place in our collection.',
  },
  {
    icon: HiOutlineGlobe,
    title: 'Worldwide',
    description: 'Free insured shipping to over 120 countries with white-glove delivery service.',
  },
];

export function AboutSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4A7BFF] opacity-[0.03] blur-[180px]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Story"
          title="A Legacy of Precision"
          subtitle="For over two decades, CHRONOS has been the destination for discerning collectors who demand nothing less than perfection."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <m.div
              key={stat.label}
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
                {stat.label}
              </span>
            </m.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <m.div
              key={value.title}
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
                {value.title}
              </h3>
              <p className="text-sm text-[#D9D9D9]/70 leading-relaxed">
                {value.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}