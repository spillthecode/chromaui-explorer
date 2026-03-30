import React from 'react';
import { Mail } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface NewsletterProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  color,
  contrastColor,
  theme
}) => {
  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Mail size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Newsletter CTA</h2>
      </div>
      <div className={cn("p-10 rounded-[2.5rem] border text-center relative overflow-hidden", theme.card, theme.borderLight)}>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-20" style={{ backgroundColor: color }} />
        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold tracking-tight">Stay in the loop</h3>
          <p className={theme.textMutedLg}>Get the latest design updates and color trends delivered straight to your inbox every week.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={cn("flex-1 px-6 py-3 rounded-xl border outline-none focus:ring-2 transition-all", theme.glass)}
              style={{ '--tw-ring-color': color } as any}
            />
            <button 
              className="px-8 py-3 rounded-xl font-bold text-sm shadow-xl transition-transform active:scale-95"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
