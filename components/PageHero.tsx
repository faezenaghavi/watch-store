import { cn } from '@/lib/utils';

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
  align?: 'left' | 'center';
}

export default function PageHero({
  title,
  subtitle,
  description,
  label,
  breadcrumbs,
  className,
  align = 'center',
}: PageHeroProps) {
  return (
    <div
      className={cn(
        'pt-28 pb-16 px-4 md:px-8',
        align === 'center' && 'text-center',
        className
      )}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center justify-center gap-2 text-sm text-[#D9D9D9]/60 mb-6">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <span>/</span>
          {breadcrumbs.map((crumb, index) => (
            <span
              key={index}
              className={cn(
                index === breadcrumbs.length - 1 ? 'text-[#4A7BFF]' : 'hover:text-white transition-colors'
              )}
            >
              {crumb.label}
            </span>
          ))}
        </div>
      )}

      {label && (
        <p className="text-[#4A7BFF] text-sm tracking-[0.3em] uppercase mb-3">
          {label}
        </p>
      )}
      
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient">
        {title}
      </h1>
      
      {(subtitle || description) && (
        <p className="text-[#D9D9D9] mt-4 max-w-xl mx-auto font-light leading-relaxed">
          {subtitle || description}
        </p>
      )}
    </div>
  );
}