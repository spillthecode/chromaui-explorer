import React from 'react';
import { Bell, Moon, CheckCircle2, Layers, Info, ChevronRight, Volume2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneSettingsProps {
  color: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const PhoneSettings: React.FC<PhoneSettingsProps> = ({
  color,
  isDarkMode,
  theme
}) => {
  const settings = [
    { label: 'Notifications', icon: Bell, type: 'toggle', active: true },
    { label: 'Dark Mode', icon: Moon, type: 'toggle', active: isDarkMode },
    { label: 'Privacy', icon: CheckCircle2, type: 'link' },
    { label: 'Storage', icon: Layers, type: 'link' },
    { label: 'Help & Support', icon: Info, type: 'link' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Settings</h3>
      <div className="space-y-2">
        {settings.map((item, i) => (
          <div key={i} className={cn("flex items-center justify-between p-4 rounded-2xl", theme.glassMuted)}>
            <div className="flex items-center gap-3">
              <item.icon size={18} className={theme.textMuted} />
              <span className="text-sm font-bold">{item.label}</span>
            </div>
            {item.type === 'toggle' ? (
              <div 
                className={cn("w-10 h-5 rounded-full p-1 transition-colors cursor-pointer", item.active ? "" : "bg-white/10")}
                style={item.active ? { backgroundColor: color } : {}}
              >
                <div className={cn("w-3 h-3 rounded-full bg-white transition-transform", item.active ? "translate-x-5" : "translate-x-0")} />
              </div>
            ) : (
              <ChevronRight size={16} className="opacity-30" />
            )}
          </div>
        ))}
      </div>
      <div className={cn("p-6 rounded-[2rem] border mt-4", theme.card, theme.borderLight)}>
        <p className="text-xs font-bold opacity-50 mb-4">Volume Control</p>
        <div className="flex items-center gap-4">
          <Volume2 size={18} className={theme.textMuted} />
          <div className={cn("flex-1 h-1.5 rounded-full relative", theme.glassMuted)}>
            <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: color }} />
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg border-2" style={{ backgroundColor: color, borderColor: isDarkMode ? '#0f0f0f' : '#ffffff' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
