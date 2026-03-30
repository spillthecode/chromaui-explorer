import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface SchedulerProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  const events = [
    { title: 'Design Review', time: '10:00 AM', type: 'Work' },
    { title: 'Lunch with Team', time: '12:30 PM', type: 'Social' },
    { title: 'Project Sync', time: '3:00 PM', type: 'Work' },
  ];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Calendar size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Scheduler</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className={cn("p-6 rounded-3xl border", theme.card, theme.borderLight)}>
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">October 2024</h4>
            <div className="flex gap-2">
              <button className={cn("p-1.5 rounded-lg", theme.glassMuted)}><ChevronRight size={14} className="rotate-180" /></button>
              <button className={cn("p-1.5 rounded-lg", theme.glassMuted)}><ChevronRight size={14} /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i} className="text-[10px] font-bold opacity-60">{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }).map((_, i) => (
              <button 
                key={i} 
                className={cn(
                  "aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all",
                  i + 1 === 24 ? "shadow-lg" : "hover:bg-white/5"
                )}
                style={i + 1 === 24 ? { backgroundColor: color, color: contrastColor } : {}}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-sm">Upcoming Events</h4>
          {events.map((event, i) => (
            <div key={i} className={cn("p-4 rounded-2xl border flex items-center justify-between", theme.card, theme.borderLight)}>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: color }} />
                <div>
                  <p className="text-sm font-bold">{event.title}</p>
                  <p className="text-[10px] opacity-70">{event.time}</p>
                </div>
              </div>
              <span className={cn("px-2 py-1 rounded-lg text-[10px] font-bold", theme.glassMuted)}>{event.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
