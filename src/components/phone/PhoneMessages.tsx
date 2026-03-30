import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneMessagesProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const PhoneMessages: React.FC<PhoneMessagesProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  const chats = [
    { name: 'Alex Rivera', msg: 'The design looks amazing!', time: '2m' },
    { name: 'Sarah Chen', msg: 'Can we try the blue palette?', time: '15m' },
    { name: 'Jordan Smith', msg: 'Meeting at 3 PM today.', time: '1h' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold tracking-tight">Messages</h3>
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", theme.glassMuted)}>
          <Search size={18} className={theme.textMuted} />
        </div>
      </div>
      <div className="space-y-4">
        {chats.map((chat, i) => (
          <div key={i} className={cn("flex gap-4 items-center p-3 rounded-2xl transition-colors", isDarkMode ? "hover:bg-white/5" : "hover:bg-slate-100")}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: color, color: contrastColor }}>{chat.name[0]}</div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <span className="font-bold text-sm">{chat.name}</span>
                <span className={cn("text-[10px]", theme.textMuted)}>{chat.time}</span>
              </div>
              <p className={cn("text-xs line-clamp-1", theme.textMutedLg)}>{chat.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
