import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { Copy, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
  isDarkMode: boolean;
  theme: ThemeColors;
  copyToClipboard: () => void;
  copied: boolean;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  setColor,
  isDarkMode,
  theme,
  copyToClipboard,
  copied
}) => {
  return (
    <div className={cn("space-y-4 pb-8 border-b", theme.borderLight)}>
      <label className={cn("text-xs font-semibold uppercase tracking-widest", theme.textMuted)}>Select Color</label>
      <div className="custom-picker">
        <HexColorPicker color={color} onChange={setColor} className="!w-full !h-48" />
      </div>
      
      <div className={cn("flex items-center gap-2 p-3 rounded-xl border", theme.glass)}>
        <input 
          type="text" 
          value={color.toUpperCase()} 
          onChange={(e) => setColor(e.target.value)}
          className="bg-transparent border-none outline-none font-mono text-sm w-full"
        />
        <button 
          onClick={copyToClipboard}
          className={cn("p-2 rounded-lg transition-colors", theme.textMuted, isDarkMode ? "hover:text-white" : "hover:text-slate-900")}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
};
