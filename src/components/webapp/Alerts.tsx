import React from 'react';
import { motion } from 'motion/react';
import { Bell, Info, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface AlertsProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  theme: ThemeColors;
}

export const Alerts: React.FC<AlertsProps> = ({
  color,
  contrastColor,
  rgbString,
  theme
}) => {
  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Bell size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Feedback & Alerts</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="p-4 rounded-2xl border flex gap-4 items-start transition-shadow hover:shadow-md cursor-default"
          style={{ 
            backgroundColor: `rgba(${rgbString}, 0.05)`, 
            borderColor: `rgba(${rgbString}, 0.2)`,
            color: color 
          } as any}
        >
          <Info className="mt-1 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-sm">Information Update</h4>
            <p className="text-xs opacity-80 mt-1">This is how an informative alert would look using your selected brand color.</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="p-4 rounded-2xl flex gap-4 items-center shadow-lg transition-shadow hover:shadow-xl cursor-default"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          <CheckCircle2 size={24} />
          <div>
            <h4 className="font-bold text-sm">Success!</h4>
            <p className="text-xs opacity-80">Action completed successfully.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
