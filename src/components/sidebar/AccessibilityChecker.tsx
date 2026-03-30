import React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AccessibilityScore, ThemeColors } from '../../types';

interface AccessibilityCheckerProps {
  accessibility: {
    white: AccessibilityScore;
    black: AccessibilityScore;
  };
  color: string;
  isDarkMode: boolean;
  theme: ThemeColors;
  rgbString: string;
  contrastColor: string;
}

export const AccessibilityChecker: React.FC<AccessibilityCheckerProps> = ({
  accessibility,
  color,
  isDarkMode,
  theme,
  rgbString,
  contrastColor
}) => {
  return (
    <div className={cn("space-y-4 pb-8 border-b", theme.borderLight)}>
      <div className="flex items-center justify-between text-xs">
        <span className={theme.textMuted}>RGB</span>
        <span className={cn("font-mono", isDarkMode ? "text-white/80" : "text-slate-700")}>{rgbString}</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className={theme.textMuted}>Contrast</span>
        <span className={cn("font-mono", isDarkMode ? "text-white/80" : "text-slate-700")}>{contrastColor === '#000000' ? 'Light' : 'Dark'}</span>
      </div>

      <div className={cn("p-4 rounded-xl space-y-4", isDarkMode ? "bg-white/5" : "bg-slate-50")}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Accessibility Checker</span>
          <AlertCircle size={14} className="opacity-60" />
        </div>
        
        <div className="space-y-6">
          {/* White Contrast */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded border flex items-center justify-center text-[10px] font-bold bg-white text-slate-900" style={{ color }}>A</div>
                <div className="w-6 h-6 rounded border flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: color, color: '#ffffff' }}>A</div>
                <span className="text-xs font-semibold">On White</span>
              </div>
              <span className="font-mono text-xs font-bold">{accessibility.white.ratio.toFixed(2)}:1</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <p className="text-[8px] uppercase tracking-tighter opacity-70 font-bold">Normal Text</p>
                <div className="flex gap-1">
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.white.scores.aaNormal ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AA
                  </div>
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.white.scores.aaaNormal ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AAA
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] uppercase tracking-tighter opacity-70 font-bold">Large Text</p>
                <div className="flex gap-1">
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.white.scores.aaLarge ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AA
                  </div>
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.white.scores.aaaLarge ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AAA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Black Contrast */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded border flex items-center justify-center text-[10px] font-bold bg-black text-white" style={{ color }}>A</div>
                <div className="w-6 h-6 rounded border flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: color, color: '#000000' }}>A</div>
                <span className="text-xs font-semibold">On Black</span>
              </div>
              <span className="font-mono text-xs font-bold">{accessibility.black.ratio.toFixed(2)}:1</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <p className="text-[8px] uppercase tracking-tighter opacity-70 font-bold">Normal Text</p>
                <div className="flex gap-1">
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.black.scores.aaNormal ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AA
                  </div>
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.black.scores.aaaNormal ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AAA
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] uppercase tracking-tighter opacity-70 font-bold">Large Text</p>
                <div className="flex gap-1">
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.black.scores.aaLarge ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AA
                  </div>
                  <div className={cn("flex-1 px-1 py-0.5 rounded-[4px] text-[8px] font-bold text-center", accessibility.black.scores.aaaLarge ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500")}>
                    AAA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
