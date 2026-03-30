import React from 'react';
import { Component, Layers, MousePointer2, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import { DesignTrend, ThemeColors } from '../../types';

interface TrendTogglesProps {
  designTrend: DesignTrend;
  setDesignTrend: (trend: DesignTrend) => void;
  theme: ThemeColors;
  color: string;
}

export const TrendToggles: React.FC<TrendTogglesProps> = ({
  designTrend,
  setDesignTrend,
  theme,
  color
}) => {
  const trends = [
    { id: 'modern' as const, label: 'Modern', icon: Component },
    { id: 'glass' as const, label: 'Glass', icon: Layers },
    { id: 'neumorphic' as const, label: 'Neumorphic', icon: MousePointer2 },
    { id: 'brutalist' as const, label: 'Brutalist', icon: Zap },
  ];

  return (
    <div className={cn("space-y-4 pb-8 border-b", theme.borderLight)}>
      <label className={cn("text-xs font-semibold uppercase tracking-widest", theme.textMuted)}>Design Trend</label>
      <div className="grid grid-cols-2 gap-2">
        {trends.map((trend) => (
          <button
            key={trend.id}
            onClick={() => setDesignTrend(trend.id)}
            className={cn(
              "flex items-center gap-2 p-2 rounded-xl border transition-all text-[10px] font-medium",
              designTrend === trend.id 
                ? "border-white/40 bg-white/10 shadow-lg scale-[1.02]" 
                : cn(theme.card, theme.borderLight, "opacity-60 hover:opacity-100")
            )}
          >
            <trend.icon size={14} style={designTrend === trend.id ? { color } : {}} />
            <span>{trend.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
