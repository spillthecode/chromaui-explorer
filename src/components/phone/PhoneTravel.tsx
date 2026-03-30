import React from 'react';
import { Plane } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneTravelProps {
  color: string;
  theme: ThemeColors;
}

export const PhoneTravel: React.FC<PhoneTravelProps> = ({
  color,
  theme
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Travel</h3>
      <div className={cn("p-6 rounded-[2rem] border relative overflow-hidden", theme.card, theme.borderLight)}>
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold">SFO</p>
            <p className="text-[10px] opacity-50">San Francisco</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-4">
            <div className="h-[1px] flex-1 bg-current opacity-20" />
            <Plane size={16} style={{ color }} />
            <div className="h-[1px] flex-1 bg-current opacity-20" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">LHR</p>
            <p className="text-[10px] opacity-50">London</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="opacity-50 font-bold uppercase text-[8px]">Date</p>
            <p className="font-bold">24 Oct 2024</p>
          </div>
          <div>
            <p className="opacity-50 font-bold uppercase text-[8px]">Gate</p>
            <p className="font-bold">A12</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-dashed border-current opacity-20" />
        <div className="flex justify-between items-center mt-4">
          <div className="w-32 h-8 bg-current opacity-10 rounded" />
          <p className="text-sm font-mono font-bold">#BA249</p>
        </div>
      </div>
    </div>
  );
};
