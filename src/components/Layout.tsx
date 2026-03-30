import React from 'react';
import { cn } from '../lib/utils';
import { ThemeColors } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  theme: ThemeColors;
}

export const Layout: React.FC<LayoutProps> = ({ children, theme }) => {
  return (
    <div 
      className={cn("min-h-screen flex flex-col lg:flex-row font-sans transition-colors duration-500", theme.text)}
      style={{ backgroundColor: theme.bg }}
    >
      {children}
    </div>
  );
};
