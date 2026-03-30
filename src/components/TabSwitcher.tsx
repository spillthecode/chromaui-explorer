import React from 'react';
import { Monitor, Smartphone, Grid3X3, Globe, FileBarChart } from 'lucide-react';
import { cn } from '../lib/utils';
import { TabType, ThemeColors } from '../types';

interface TabSwitcherProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  theme: ThemeColors;
  color: string;
}

export const TabSwitcher: React.FC<TabSwitcherProps> = ({
  activeTab,
  setActiveTab,
  theme,
  color
}) => {
  const tabs: { id: TabType; icon: React.ReactNode; label: string }[] = [
    { id: 'webapp', icon: <Monitor size={18} />, label: 'Web App' },
    { id: 'phone', icon: <Smartphone size={18} />, label: 'Mobile App' },
    { id: 'widgets', icon: <Grid3X3 size={18} />, label: 'Widgets' },
    { id: 'websites', icon: <Globe size={18} />, label: 'Websites' },
    { id: 'reports', icon: <FileBarChart size={18} />, label: 'Reports' },
  ];

  return (
    <div className={cn("flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 rounded-2xl border mb-8 w-fit max-w-full mx-auto lg:mx-0", theme.glass, theme.border)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
            activeTab === tab.id 
              ? "shadow-lg scale-105" 
              : cn("hover:bg-white/10", theme.textMuted)
          )}
          style={activeTab === tab.id ? { backgroundColor: color, color: '#ffffff' } : {}}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};
