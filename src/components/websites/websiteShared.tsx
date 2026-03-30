import React from 'react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface SiteNavProps {
  brand: React.ReactNode;
  color: string;
  contrastColor: string;
  theme: ThemeColors;
  /** Third nav item — Products or Services */
  productsOrServices: 'Products' | 'Services';
  cta?: { label: string; variant?: 'solid' | 'outline' };
}

export const SiteNav: React.FC<SiteNavProps> = ({
  brand,
  color,
  contrastColor,
  theme,
  productsOrServices,
  cta
}) => (
  <nav
    className={cn(
      'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-2',
      theme.borderLight
    )}
    aria-label="Primary"
  >
    <div className="shrink-0 font-bold tracking-tight text-base">{brand}</div>
    <ul
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em]',
        theme.textMuted
      )}
    >
      <li>
        <span className="cursor-default" style={{ color }}>
          Home
        </span>
      </li>
      <li>
        <span className="cursor-default hover:opacity-80 transition-opacity">About Us</span>
      </li>
      <li>
        <span className="cursor-default hover:opacity-80 transition-opacity">{productsOrServices}</span>
      </li>
      <li>
        <span className="cursor-default hover:opacity-80 transition-opacity">Contact Us</span>
      </li>
    </ul>
    {cta && (
      <button
        type="button"
        className={cn(
          'text-[11px] font-bold px-4 py-2 rounded-full shrink-0 w-fit',
          cta.variant === 'outline' && 'border-2'
        )}
        style={
          cta.variant === 'outline'
            ? { borderColor: color, color }
            : { backgroundColor: color, color: contrastColor }
        }
      >
        {cta.label}
      </button>
    )}
  </nav>
);

interface SiteSectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  color: string;
  theme: ThemeColors;
  children: React.ReactNode;
  className?: string;
}

export const SiteSection: React.FC<SiteSectionProps> = ({
  id,
  title,
  eyebrow,
  color,
  theme,
  children,
  className
}) => (
  <section id={id} className={cn('scroll-mt-3 pt-8 first:pt-0 border-t first:border-t-0', theme.borderLight, className)}>
    {eyebrow && (
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color }}>
        {eyebrow}
      </p>
    )}
    <h2 className={cn('text-lg sm:text-xl font-bold tracking-tight mb-4', theme.text)}>{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);
