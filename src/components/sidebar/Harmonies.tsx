import React from 'react';
import { cn } from '../../lib/utils';
import { Harmonies as HarmoniesType, ThemeColors } from '../../types';

interface HarmoniesProps {
  harmonies: HarmoniesType;
  setColor: (color: string) => void;
  theme: ThemeColors;
}

export const Harmonies: React.FC<HarmoniesProps> = ({
  harmonies,
  setColor,
  theme
}) => {
  const harmonyItems = [
    { label: 'Complementary', colors: harmonies.complementary },
    { label: 'Analogous', colors: harmonies.analogous },
    { label: 'Triadic', colors: harmonies.triadic },
    { label: 'Monochromatic', colors: harmonies.monochromatic },
  ];

  return (
    <div className={cn("space-y-4 pb-8 border-b", theme.borderLight)}>
      <label className={cn("text-xs font-semibold uppercase tracking-widest", theme.textMuted)}>Harmonies</label>
      <div className="space-y-3">
        {harmonyItems.map((harmony) => (
          <div key={harmony.label} className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-medium opacity-70">{harmony.label}</span>
            </div>
            <div className="flex gap-2">
              {harmony.colors.map((hColor, idx) => (
                <button
                  key={idx}
                  onClick={() => setColor(hColor)}
                  className="flex-1 h-8 rounded-lg border transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  style={{ backgroundColor: hColor, borderColor: theme.border }}
                  title={hColor.toUpperCase()}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
