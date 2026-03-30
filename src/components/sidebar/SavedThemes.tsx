import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface SavedThemesProps {
  themes: { id: string; name: string; color: string }[];
  setColor: (color: string) => void;
  saveTheme: () => void;
  deleteTheme: (id: string, e: React.MouseEvent) => void;
  theme: ThemeColors;
  color: string;
}

export const SavedThemes: React.FC<SavedThemesProps> = ({
  themes,
  setColor,
  saveTheme,
  deleteTheme,
  theme,
  color
}) => {
  return (
    <div className={cn("space-y-4 pb-8 border-b", theme.borderLight)}>
      <div className="flex items-center justify-between">
        <label className={cn("text-xs font-semibold uppercase tracking-widest", theme.textMuted)}>Saved Themes</label>
        <button 
          onClick={saveTheme}
          className={cn("p-1.5 rounded-lg border transition-all hover:scale-110", theme.glass)}
          title="Save current color as theme"
        >
          <CheckCircle2 size={14} style={{ color }} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((t) => (
          <div 
            key={t.id}
            onClick={() => setColor(t.color)}
            className={cn(
              "group relative p-2 rounded-xl border cursor-pointer transition-all hover:border-white/20",
              color === t.color ? "border-white/40 ring-1 ring-white/20" : theme.borderLight,
              theme.card
            )}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: t.color }} />
              <span className="text-[10px] font-medium truncate max-w-[60px]">{t.name}</span>
            </div>
            <button 
              onClick={(e) => deleteTheme(t.id, e)}
              className="absolute -top-1 -right-1 p-1 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <X size={8} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
