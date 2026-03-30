import React from 'react';
import { Sliders, User, Shield, Settings, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface StepperProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const Stepper: React.FC<StepperProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  const steps = [
    { label: 'Account', icon: User, done: true },
    { label: 'Security', icon: Shield, done: true },
    { label: 'Preferences', icon: Settings, done: false },
    { label: 'Finish', icon: Check, done: false },
  ];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Sliders size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Progress Steps</h2>
      </div>
      <div className={cn("p-10 rounded-[2.5rem] border", theme.card, theme.borderLight)}>
        <div className="flex items-center justify-between max-w-2xl mx-auto relative">
          <div className={cn("absolute top-5 left-0 w-full h-0.5", theme.glassMuted)}>
            <div className="h-full w-1/2" style={{ backgroundColor: color }} />
          </div>
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center gap-3">
              <div 
                className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all", step.done ? "border-transparent" : theme.border)}
                style={step.done ? { backgroundColor: color, color: contrastColor } : { backgroundColor: isDarkMode ? '#0f0f0f' : '#ffffff' }}
              >
                <step.icon size={18} />
              </div>
              <span className={cn("text-[10px] font-bold uppercase tracking-wider", step.done ? "" : "opacity-60")} style={step.done ? { color } : {}}>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
