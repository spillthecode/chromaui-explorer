import React from 'react';
import { MessageSquare, Search, Settings, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface MessagingProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const Messaging: React.FC<MessagingProps> = ({
  color,
  contrastColor,
  theme
}) => {
  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <MessageSquare size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Messaging</h2>
      </div>
      <div className={cn("max-w-2xl mx-auto h-[400px] rounded-[2.5rem] border flex flex-col overflow-hidden shadow-2xl", theme.card, theme.borderLight)}>
        <div className={cn("p-4 border-b flex items-center justify-between", theme.borderLight)}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10" />
            <div>
              <p className="font-bold text-sm">Support Team</p>
              <p className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-current" /> Online
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className={cn("p-2 rounded-lg", theme.glassMuted)}><Search size={14} /></button>
            <button className={cn("p-2 rounded-lg", theme.glassMuted)}><Settings size={14} /></button>
          </div>
        </div>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          <div className="flex justify-start">
            <div className={cn("max-w-[80%] p-4 rounded-2xl rounded-tl-none text-sm", theme.glassMuted)}>
              Hello! How can we help you with Color Visualization Tool today?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] p-4 rounded-2xl rounded-tr-none text-sm shadow-lg" style={{ backgroundColor: color, color: contrastColor }}>
              I'm trying to figure out the best contrast for my primary buttons.
            </div>
          </div>
          <div className="flex justify-start">
            <div className={cn("max-w-[80%] p-4 rounded-2xl rounded-tl-none text-sm", theme.glassMuted)}>
              Great question! You can use our accessibility checker in the sidebar to verify WCAG compliance.
            </div>
          </div>
        </div>
        <div className={cn("p-4 border-t flex gap-3", theme.borderLight)}>
          <input type="text" placeholder="Type a message..." className={cn("flex-1 bg-transparent border-none outline-none text-sm", theme.textMuted)} />
          <button className="p-2 rounded-xl shadow-lg" style={{ backgroundColor: color, color: contrastColor }}>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
