import React from 'react';
import { motion } from 'motion/react';
import { MousePointer2, Layers } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface ButtonsProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  theme: ThemeColors;
}

export const Buttons: React.FC<ButtonsProps> = ({
  color,
  contrastColor,
  rgbString,
  theme
}) => {
  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <MousePointer2 size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Buttons & Actions</h2>
      </div>
      <div className={cn("flex flex-wrap gap-4 p-8 rounded-3xl border", theme.card, theme.borderLight)}>
        <motion.button 
          whileHover={{ scale: 1.05, translateY: -4 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-bold text-sm shadow-lg transition-shadow hover:shadow-xl"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          Primary Button
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: `rgba(${rgbString}, 0.05)` }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-bold text-sm border-2 transition-colors"
          style={{ borderColor: color, color: color }}
        >
          Outline Button
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: `rgba(${rgbString}, 0.2)` }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors"
          style={{ 
            backgroundColor: `rgba(${rgbString}, 0.1)`, 
            color: color,
            border: `1px solid rgba(${rgbString}, 0.2)`
          } as any}
        >
          <Layers size={18} />
          Soft Button
        </motion.button>
      </div>
    </section>
  );
};
