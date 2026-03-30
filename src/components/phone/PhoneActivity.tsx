import React from 'react';
import { motion } from 'motion/react';
import { Zap, Play } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneActivityProps {
  color: string;
  theme: ThemeColors;
}

export const PhoneActivity: React.FC<PhoneActivityProps> = ({
  color,
  theme
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Activity</h3>
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn("p-4 rounded-3xl border flex flex-col gap-2 transition-shadow hover:shadow-lg cursor-pointer", theme.glassMuted, theme.borderLight)}
        >
          <Zap size={20} style={{ color }} />
          <span className="text-2xl font-bold">1,240</span>
          <span className="text-[10px] font-bold uppercase opacity-70">Calories</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn("p-4 rounded-3xl border flex flex-col gap-2 transition-shadow hover:shadow-lg cursor-pointer", theme.glassMuted, theme.borderLight)}
        >
          <Play size={20} style={{ color }} />
          <span className="text-2xl font-bold">45m</span>
          <span className="text-[10px] font-bold uppercase opacity-70">Exercise</span>
        </motion.div>
      </div>
      <motion.div 
        whileHover={{ y: -5 }}
        className={cn("p-5 rounded-[2rem] border relative overflow-hidden transition-shadow hover:shadow-xl", theme.card, theme.borderLight)}
      >
        <p className="text-[10px] font-bold uppercase opacity-70 mb-1">Daily Goal</p>
        <h4 className="text-lg font-bold">8,420 / 10,000 steps</h4>
        <div className={cn("h-2 rounded-full mt-4 overflow-hidden", theme.glassMuted)}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '84%' }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full" 
            style={{ backgroundColor: color }} 
          />
        </div>
      </motion.div>
    </div>
  );
};
