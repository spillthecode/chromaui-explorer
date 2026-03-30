import { useState } from 'react';
import { TabType, DesignTrend } from '../types';
import { useTheme } from './useTheme';
import { useThemes } from './useThemes';
import { useColorData } from './useColorData';
import { useMoodGenerator } from './useMoodGenerator';
import { useClipboard } from './useClipboard';

export const useAppState = () => {
  const [color, setColor] = useState('#6366f1');
  const [activeTab, setActiveTab] = useState<TabType>('webapp');
  const [activePhoneScreen, setActivePhoneScreen] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [designTrend, setDesignTrend] = useState<DesignTrend>('modern');

  const { themes, saveTheme, deleteTheme } = useThemes(color);
  const { contrastColor, rgbString, accessibility, harmonies } = useColorData(color);
  const { mood, setMood, isGenerating, generateMoodPalette } = useMoodGenerator(setColor);
  const { copied, copyToClipboard } = useClipboard();
  const theme = useTheme(designTrend, isDarkMode, color, rgbString);

  return {
    color, setColor,
    activeTab, setActiveTab,
    activePhoneScreen, setActivePhoneScreen,
    isDarkMode, setIsDarkMode,
    designTrend, setDesignTrend,
    themes, saveTheme, deleteTheme,
    contrastColor, rgbString, accessibility, harmonies,
    mood, setMood, isGenerating, generateMoodPalette,
    copied, copyToClipboard,
    theme
  };
};
