import { useMemo } from 'react';
import { DesignTrend, ThemeColors } from '../types';

export const useTheme = (designTrend: DesignTrend, isDarkMode: boolean, color: string, rgbString: string): ThemeColors => {
  return useMemo(() => {
    const isModern = designTrend === 'modern';
    const isGlass = designTrend === 'glass';
    const isNeumorphic = designTrend === 'neumorphic';
    const isBrutalist = designTrend === 'brutalist';

    return {
      bg: isDarkMode 
        ? (isBrutalist ? '#ffffff' : '#0f0f0f') 
        : (isBrutalist ? '#ffffff' : '#f8fafc'),
      sidebar: isDarkMode 
        ? (isBrutalist ? '#ffffff' : '#1a1a1a') 
        : (isBrutalist ? '#ffffff' : '#ffffff'),
      card: isDarkMode 
        ? (isBrutalist ? 'bg-white' : (isGlass ? 'bg-white/5 backdrop-blur-xl' : 'bg-[#1a1a1a]')) 
        : (isBrutalist ? 'bg-white' : (isGlass ? 'bg-white/40 backdrop-blur-xl' : 'bg-white')),
      text: isDarkMode 
        ? (isBrutalist ? 'text-black' : 'text-white') 
        : (isBrutalist ? 'text-black' : 'text-slate-900'),
      textMuted: isDarkMode 
        ? (isBrutalist ? 'text-black/70' : 'text-white/70') 
        : (isBrutalist ? 'text-black/70' : 'text-slate-600'),
      textMutedLg: isDarkMode 
        ? (isBrutalist ? 'text-black/50' : 'text-white/50') 
        : (isBrutalist ? 'text-black/50' : 'text-slate-500'),
      border: isDarkMode 
        ? (isBrutalist ? 'border-black border-2' : 'border-white/10') 
        : (isBrutalist ? 'border-black border-2' : 'border-slate-200'),
      borderLight: isDarkMode 
        ? (isBrutalist ? 'border-black border' : 'border-white/5') 
        : (isBrutalist ? 'border-black border' : 'border-slate-100'),
      glass: isDarkMode 
        ? (isBrutalist ? 'bg-white border-black border-2' : 'bg-white/5 border-white/10 backdrop-blur-md') 
        : (isBrutalist ? 'bg-white border-black border-2' : 'bg-white/50 border-slate-200 backdrop-blur-md'),
      glassMuted: isDarkMode 
        ? (isBrutalist ? 'bg-slate-100 border-black border' : 'bg-white/5') 
        : (isBrutalist ? 'bg-slate-100 border-black border' : 'bg-slate-50'),
      rounded: isBrutalist ? 'rounded-none' : (isModern ? 'rounded-2xl' : 'rounded-3xl'),
      roundedLg: isBrutalist ? 'rounded-none' : (isModern ? 'rounded-3xl' : 'rounded-[2.5rem]'),
      roundedXl: isBrutalist ? 'rounded-none' : (isModern ? 'rounded-[2.5rem]' : 'rounded-[3.5rem]'),
    };
  }, [designTrend, isDarkMode, color, rgbString]);
};
