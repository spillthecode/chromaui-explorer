import React from 'react';
import { User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface ProfileProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const Profile: React.FC<ProfileProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <User size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">User Profile</h2>
      </div>
      <div className={cn("p-8 rounded-[2.5rem] border relative overflow-hidden", theme.card, theme.borderLight)}>
        <div 
          className="absolute top-0 left-0 w-full h-32 opacity-20"
          style={{ backgroundColor: color }}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6">
          <div 
            className="w-32 h-32 rounded-3xl border-4 shadow-2xl flex items-center justify-center text-4xl font-bold"
            style={{ backgroundColor: color, color: contrastColor, borderColor: isDarkMode ? '#0f0f0f' : '#ffffff' }}
          >
            JD
          </div>
          <div className="flex-1 text-center md:text-left pb-2">
            <h3 className="text-3xl font-bold tracking-tight">John Doe</h3>
            <p className={theme.textMutedLg}>Senior Product Designer</p>
          </div>
          <div className="flex gap-3 pb-2">
            <button className={cn("px-6 py-2.5 rounded-xl font-bold text-sm border", theme.glass)}>Message</button>
            <button 
              className="px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
