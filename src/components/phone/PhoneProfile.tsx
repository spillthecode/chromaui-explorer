import React from 'react';
import { Camera, User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneProfileProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const PhoneProfile: React.FC<PhoneProfileProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Profile</h3>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 p-1" style={{ borderColor: color }}>
            <img src="https://picsum.photos/seed/profile/200/200" alt="Profile" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-4 flex items-center justify-center shadow-lg" style={{ backgroundColor: color, color: contrastColor, borderColor: isDarkMode ? '#0f0f0f' : '#ffffff' }}>
            <Camera size={14} />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold">John Doe</h4>
          <p className={theme.textMutedLg}>@johndoe_design</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-4 border-y" style={{ borderColor: theme.borderLight }}>
        <div className="text-center">
          <p className="font-bold">1.2k</p>
          <p className="text-[10px] opacity-50">Posts</p>
        </div>
        <div className="text-center">
          <p className="font-bold">45k</p>
          <p className="text-[10px] opacity-50">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold">890</p>
          <p className="text-[10px] opacity-50">Following</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden">
            <img src={`https://picsum.photos/seed/post${i}/200/200`} alt="Post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
    </div>
  );
};
