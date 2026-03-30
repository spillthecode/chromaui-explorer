import React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface NavigationProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const Navigation: React.FC<NavigationProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Menu size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Navigation</h2>
      </div>
      <div className="grid gap-4">
        <nav 
          className="w-full p-4 rounded-2xl flex items-center justify-between shadow-xl"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          <div className="flex items-center gap-4">
            <div className="font-bold tracking-tighter text-xl">BRAND</div>
            <div className="hidden md:flex gap-6 text-sm font-medium opacity-90">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-black/10 hover:bg-black/20 transition-colors text-sm font-bold">
            Get Started
          </button>
        </nav>

        <nav className={cn("w-full p-4 rounded-2xl flex items-center justify-between border backdrop-blur-md", theme.glass)}>
          <div className="flex items-center gap-4">
            <div className="font-bold tracking-tighter text-xl" style={{ color }}>CHROMA</div>
            <div className={cn("hidden md:flex gap-6 text-sm font-medium", theme.textMutedLg)}>
              <a href="#" className={cn("transition-colors", isDarkMode ? "hover:text-white" : "hover:text-slate-900")}>Explore</a>
              <a href="#" className={cn("transition-colors", isDarkMode ? "hover:text-white" : "hover:text-slate-900")}>Docs</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm font-bold transition-all" style={{ color }}>Login</button>
            <button 
              className="px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-transform active:scale-95"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};
