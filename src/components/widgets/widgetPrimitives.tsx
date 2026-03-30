import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

export type BentoSpan = 'full' | 'wide' | 'half' | 'third' | 'quarter';

const bentoSpanClass: Record<BentoSpan, string> = {
  full: 'col-span-12',
  wide: 'col-span-12 lg:col-span-8',
  half: 'col-span-12 sm:col-span-6 xl:col-span-6',
  third: 'col-span-12 sm:col-span-6 xl:col-span-4',
  quarter: 'col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'
};

interface BentoCardProps {
  children: React.ReactNode;
  theme: ThemeColors;
  span?: BentoSpan;
  /** When set, replaces the default span-based column classes */
  spanClassName?: string;
  className?: string;
  innerClassName?: string;
  accentLine?: boolean;
  color?: string;
  delay?: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  theme,
  span = 'third',
  spanClassName,
  className,
  innerClassName,
  accentLine,
  color,
  delay = 0
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -3 }}
    className={cn(
      spanClassName ?? bentoSpanClass[span],
      'group relative rounded-[1.65rem] border overflow-hidden transition-[box-shadow,transform] duration-300',
      'hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)]',
      theme.borderLight,
      theme.card,
      accentLine && color && 'border-t-[3px]',
      className
    )}
    style={accentLine && color ? { borderTopColor: color } : undefined}
  >
    <div className={cn('relative z-10 p-5 sm:p-6 h-full flex flex-col', innerClassName)}>{children}</div>
    {color && (
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.12] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.2]"
        style={{ backgroundColor: color }}
      />
    )}
  </motion.div>
);

interface WidgetSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  theme: ThemeColors;
  children: React.ReactNode;
}

export const WidgetSection: React.FC<WidgetSectionProps> = ({
  eyebrow,
  title,
  description,
  theme,
  children
}) => (
  <section className="space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
      <div>
        <p
          className={cn(
            'text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2',
            theme.textMuted
          )}
        >
          <Sparkles size={12} style={{ opacity: 0.7 }} />
          {eyebrow}
        </p>
        <h2 className={cn('text-xl sm:text-2xl font-bold tracking-tight', theme.text)}>{title}</h2>
        {description && <p className={cn('text-sm mt-1 max-w-xl', theme.textMuted)}>{description}</p>}
      </div>
    </div>
    <div className="grid grid-cols-12 gap-4 md:gap-5">{children}</div>
  </section>
);

interface WidgetsHeroProps {
  color: string;
  rgbString: string;
  contrastColor: string;
  theme: ThemeColors;
  isDarkMode: boolean;
}

export const WidgetsHero: React.FC<WidgetsHeroProps> = ({ color, rgbString, contrastColor, theme, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn(
      'relative overflow-hidden rounded-[1.75rem] border px-6 py-8 sm:px-10 sm:py-10',
      theme.borderLight,
      isDarkMode ? 'bg-black/25' : 'bg-white/80'
    )}
    style={{
      boxShadow: `0 0 0 1px rgba(${rgbString}, 0.08), 0 20px 50px -20px rgba(${rgbString}, 0.35)`
    }}
  >
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        background: `radial-gradient(1200px circle at 10% -20%, ${color}, transparent 55%),
          radial-gradient(800px circle at 90% 120%, ${color}, transparent 45%)`
      }}
    />
    <div className="relative z-10 max-w-2xl">
      <p className={cn('text-[10px] font-bold uppercase tracking-[0.25em] mb-3', theme.textMuted)}>Widget lab</p>
      <h1 className={cn('text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-4', theme.text)}>
        Micro-interfaces,{' '}
        <span style={{ color }}>one accent</span>.
      </h1>
      <p className={cn('text-sm sm:text-base leading-relaxed', theme.textMuted)}>
        A bento of controls, cards, and casual data viz — everything here inherits your main colour for quick brand
        stress tests.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span
          className="text-xs font-bold px-4 py-2 rounded-full"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          Live palette
        </span>
        <span className={cn('text-xs font-medium px-4 py-2 rounded-full border', theme.border, theme.textMuted)}>
          {isDarkMode ? 'Dark canvas' : 'Light canvas'}
        </span>
      </div>
    </div>
  </motion.div>
);
