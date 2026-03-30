import React from 'react';
import { Wind, Cloud } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneMeditationProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const PhoneMeditation: React.FC<PhoneMeditationProps> = ({
  color,
  contrastColor,
  theme
}) => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8 text-center">
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-4 flex items-center justify-center" style={{ borderColor: color }}>
          <div className="text-5xl font-bold tracking-tighter">15:00</div>
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-current animate-spin" style={{ color, animationDuration: '3s' } as any} />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold">Deep Meditation</h4>
        <p className={theme.textMutedLg}>Focus on your breath</p>
      </div>
      <div className="flex gap-4">
        <div className={cn("p-4 rounded-2xl border", theme.glassMuted, theme.borderLight)}>
          <Wind size={24} style={{ color }} />
        </div>
        <div className={cn("p-4 rounded-2xl border", theme.glassMuted, theme.borderLight)}>
          <Cloud size={24} style={{ color }} />
        </div>
      </div>
      <button className="px-12 py-4 rounded-full font-bold text-sm shadow-xl" style={{ backgroundColor: color, color: contrastColor }}>
        Start Session
      </button>
    </div>
  );
};
