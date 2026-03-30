import React from 'react';
import { Music, SkipBack, Pause, SkipForward } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneMusicProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const PhoneMusic: React.FC<PhoneMusicProps> = ({
  color,
  contrastColor,
  theme
}) => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8 text-center">
      <div className="w-48 h-48 rounded-3xl shadow-2xl overflow-hidden relative group">
        <img src="https://picsum.photos/seed/music/400/400" alt="Album Art" className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Music size={48} className="text-white" />
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-xl font-bold">Midnight City</h4>
        <p className={theme.textMutedLg}>M83 • Hurry Up, We're Dreaming</p>
      </div>
      <div className="w-full space-y-2">
        <div className={cn("h-1.5 rounded-full overflow-hidden", theme.glassMuted)}>
          <div className="h-full w-2/3" style={{ backgroundColor: color }} />
        </div>
        <div className="flex justify-between text-[10px] font-bold opacity-50">
          <span>2:45</span>
          <span>4:03</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <SkipBack size={24} className={theme.textMuted} />
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl" style={{ backgroundColor: color, color: contrastColor }}>
          <Pause size={32} fill="currentColor" />
        </div>
        <SkipForward size={24} className={theme.textMuted} />
      </div>
    </div>
  );
};
