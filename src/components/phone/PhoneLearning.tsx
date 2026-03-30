import React from 'react';
import { BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneLearningProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const PhoneLearning: React.FC<PhoneLearningProps> = ({
  color,
  contrastColor,
  theme
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Learning</h3>
      <div className={cn("p-5 rounded-[2rem] border", theme.card, theme.borderLight)}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: color, color: contrastColor }}>
            <BookOpen size={24} />
          </div>
          <div>
            <h4 className="font-bold text-sm">UI Design Masterclass</h4>
            <p className="text-[10px] opacity-50">Module 4: Color Theory</p>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <div className="flex justify-between text-[10px] font-bold">
            <span>Progress</span>
            <span>65%</span>
          </div>
          <div className={cn("h-1.5 rounded-full overflow-hidden", theme.glassMuted)}>
            <div className="h-full w-[65%]" style={{ backgroundColor: color }} />
          </div>
        </div>
      </div>
    </div>
  );
};
