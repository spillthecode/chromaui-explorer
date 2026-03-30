import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TabType, ThemeColors, DesignTrend, AccessibilityScore } from '../types';
import { cn } from '../lib/utils';
import { WebAppPreview } from './WebAppPreview';
import { PhonePreview } from './PhonePreview';
import { WidgetsPreview } from './WidgetsPreview';
import { WebsitesPreview } from './WebsitesPreview';
import { ReportsPreview } from './ReportsPreview';

interface MainContentProps {
  activeTab: TabType;
  color: string;
  contrastColor: string;
  rgbString: string;
  accessibility: {
    white: AccessibilityScore;
    black: AccessibilityScore;
  };
  theme: ThemeColors;
  isDarkMode: boolean;
  designTrend: DesignTrend;
  activePhoneScreen: number;
  setActivePhoneScreen: (screen: number) => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  activeTab,
  color,
  contrastColor,
  rgbString,
  accessibility,
  theme,
  isDarkMode,
  designTrend,
  activePhoneScreen,
  setActivePhoneScreen
}) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'mx-auto w-full',
            activeTab === 'widgets' ? 'max-w-[90rem]' : 'max-w-6xl'
          )}
        >
          {activeTab === 'webapp' && (
            <WebAppPreview 
              color={color} 
              contrastColor={contrastColor} 
              rgbString={rgbString} 
              theme={theme} 
              isDarkMode={isDarkMode} 
            />
          )}
          {activeTab === 'phone' && (
            <PhonePreview 
              color={color} 
              contrastColor={contrastColor} 
              rgbString={rgbString} 
              theme={theme} 
              isDarkMode={isDarkMode} 
            />
          )}
          {activeTab === 'widgets' && (
            <WidgetsPreview 
              color={color} 
              contrastColor={contrastColor} 
              rgbString={rgbString} 
              theme={theme} 
              isDarkMode={isDarkMode} 
              accessibility={accessibility}
            />
          )}
          {activeTab === 'websites' && (
            <WebsitesPreview
              color={color}
              contrastColor={contrastColor}
              theme={theme}
              isDarkMode={isDarkMode}
            />
          )}
          {activeTab === 'reports' && (
            <ReportsPreview
              color={color}
              contrastColor={contrastColor}
              rgbString={rgbString}
              theme={theme}
              isDarkMode={isDarkMode}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};
