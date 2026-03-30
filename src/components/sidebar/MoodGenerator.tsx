import React from 'react';
import { Sparkles, Loader2, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface MoodGeneratorProps {
  mood: string;
  setMood: (mood: string) => void;
  isGenerating: boolean;
  generateMoodPalette: () => void;
  isDarkMode: boolean;
  theme: ThemeColors;
  color: string;
  contrastColor: string;
}

export const MoodGenerator: React.FC<MoodGeneratorProps> = ({
  mood,
  setMood,
  isGenerating,
  generateMoodPalette,
  isDarkMode,
  theme,
  color,
  contrastColor
}) => {
  return (
    <div className={cn("space-y-4 pb-8 border-b", theme.borderLight)}>
      <div className="flex items-center justify-between">
        <label className={cn("text-xs font-semibold uppercase tracking-widest flex items-center gap-2", theme.textMuted)}>
          GenUI Mood <Sparkles size={12} className="text-amber-400" />
        </label>
      </div>
      <div className="relative group">
        <input 
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && generateMoodPalette()}
          placeholder="e.g. Midnight in Paris"
          className={cn(
            "w-full pl-4 pr-12 py-3 rounded-xl border text-xs transition-all focus:outline-none focus:ring-2",
            isDarkMode ? "bg-white/5 border-white/10 focus:ring-white/20" : "bg-slate-50 border-slate-200 focus:ring-slate-300",
            theme.text
          )}
        />
        <button 
          onClick={generateMoodPalette}
          disabled={!mood.trim() || isGenerating}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all",
            mood.trim() && !isGenerating ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
          )}
          style={{ backgroundColor: color, color: contrastColor }}
        >
          {isGenerating ? <Loader2 size={14} className="animate-spin" /> : <ChevronRight size={14} />}
        </button>
      </div>
      <p className="text-[9px] opacity-60 leading-tight">
        AI will generate a color that matches your mood description.
      </p>
    </div>
  );
};
