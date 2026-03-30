import React from 'react';
import { Palette, Sun, Moon, RefreshCcw } from 'lucide-react';
import { cn } from '../lib/utils';
import { DesignTrend, ThemeColors, AccessibilityScore, Harmonies as HarmoniesType } from '../types';
import { ColorPicker } from './sidebar/ColorPicker';
import { TrendToggles } from './sidebar/TrendToggles';
import { MoodGenerator } from './sidebar/MoodGenerator';
import { SavedThemes } from './sidebar/SavedThemes';
import { Harmonies } from './sidebar/Harmonies';
import { AccessibilityChecker } from './sidebar/AccessibilityChecker';

interface SidebarProps {
  color: string;
  setColor: (color: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  designTrend: DesignTrend;
  setDesignTrend: (trend: DesignTrend) => void;
  mood: string;
  setMood: (mood: string) => void;
  isGenerating: boolean;
  generateMoodPalette: () => void;
  themes: { id: string; name: string; color: string }[];
  saveTheme: () => void;
  deleteTheme: (id: string, e: React.MouseEvent) => void;
  harmonies: HarmoniesType;
  accessibility: {
    white: AccessibilityScore;
    black: AccessibilityScore;
  };
  theme: ThemeColors;
  contrastColor: string;
  rgbString: string;
  copied: boolean;
  copyToClipboard: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  color,
  setColor,
  isDarkMode,
  setIsDarkMode,
  designTrend,
  setDesignTrend,
  mood,
  setMood,
  isGenerating,
  generateMoodPalette,
  themes,
  saveTheme,
  deleteTheme,
  harmonies,
  accessibility,
  theme,
  contrastColor,
  rgbString,
  copied,
  copyToClipboard
}) => {
  return (
    <aside className={cn("w-full lg:w-80 border-b lg:border-b-0 lg:border-r p-6 flex flex-col gap-8 z-10 transition-colors duration-300", theme.sidebar, theme.border)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: color, color: contrastColor }}
          >
            <Palette size={20} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">Color Visualization</h1>
            <p className={cn("text-xs", theme.textMuted)}>Color Behavior Explorer</p>
          </div>
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={cn("p-2 rounded-xl transition-all hover:scale-110", theme.glass)}
        >
          {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
        </button>
      </div>

      <ColorPicker 
        color={color} 
        setColor={setColor} 
        isDarkMode={isDarkMode} 
        theme={theme} 
        copyToClipboard={copyToClipboard} 
        copied={copied} 
      />

      <AccessibilityChecker 
        accessibility={accessibility} 
        color={color} 
        isDarkMode={isDarkMode} 
        theme={theme} 
        rgbString={rgbString} 
        contrastColor={contrastColor} 
      />

      <TrendToggles 
        designTrend={designTrend} 
        setDesignTrend={setDesignTrend} 
        theme={theme} 
        color={color} 
      />

      <MoodGenerator 
        mood={mood} 
        setMood={setMood} 
        isGenerating={isGenerating} 
        generateMoodPalette={generateMoodPalette} 
        isDarkMode={isDarkMode} 
        theme={theme} 
        color={color} 
        contrastColor={contrastColor} 
      />

      <SavedThemes 
        themes={themes} 
        setColor={setColor} 
        saveTheme={saveTheme} 
        deleteTheme={deleteTheme} 
        theme={theme} 
        color={color} 
      />

      <Harmonies 
        harmonies={harmonies} 
        setColor={setColor} 
        theme={theme} 
      />

      <button 
        onClick={() => setColor('#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'))}
        className={cn("w-full flex items-center justify-center gap-2 py-3 rounded-xl border transition-all text-sm font-medium", theme.glass, isDarkMode ? "hover:bg-white/10" : "hover:bg-slate-200")}
      >
        <RefreshCcw size={16} />
        Randomize
      </button>
    </aside>
  );
};
