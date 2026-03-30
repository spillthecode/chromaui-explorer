import React from 'react';
import { Globe } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface WebsiteBrowserFrameProps {
  label: string;
  hostname: string;
  theme: ThemeColors;
  isDarkMode: boolean;
  children: React.ReactNode;
}

export const WebsiteBrowserFrame: React.FC<WebsiteBrowserFrameProps> = ({
  label,
  hostname,
  theme,
  isDarkMode,
  children
}) => {
  return (
    <section className="space-y-3">
      <div className={cn('flex items-center gap-2 text-xs font-bold uppercase tracking-widest', theme.textMuted)}>
        <Globe size={14} />
        <h2>{label}</h2>
      </div>
      <div
        className={cn(
          'rounded-2xl border overflow-hidden shadow-2xl transition-colors',
          theme.border,
          isDarkMode ? 'bg-[#141414]' : 'bg-white'
        )}
      >
        <div
          className={cn(
            'flex items-center gap-3 px-4 py-2.5 border-b',
            theme.borderLight,
            isDarkMode ? 'bg-black/50' : 'bg-slate-100/90'
          )}
        >
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-400/90" />
            <span className="w-3 h-3 rounded-full bg-amber-400/90" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
          </div>
          <div
            className={cn(
              'flex-1 text-center text-[11px] font-mono rounded-lg px-3 py-1.5 truncate min-w-0',
              isDarkMode ? 'bg-black/40 text-white/65' : 'bg-white text-slate-500 shadow-sm border border-slate-200/80'
            )}
          >
            https://{hostname}
          </div>
        </div>
        <div
          className={cn(
            isDarkMode ? 'bg-slate-950' : 'bg-slate-50',
            'max-h-[min(78vh,820px)] overflow-y-auto overflow-x-hidden custom-scrollbar'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
