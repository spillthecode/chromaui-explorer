import React from 'react';
import { Thermometer, Sun, Moon, Zap, Wind } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneSmartHomeProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  theme: ThemeColors;
}

export const PhoneSmartHome: React.FC<PhoneSmartHomeProps> = ({
  color,
  contrastColor,
  rgbString,
  theme
}) => {
  const devices = [
    { label: 'Living Room', icon: Sun, active: true },
    { label: 'Bedroom', icon: Moon, active: false },
    { label: 'Kitchen', icon: Zap, active: true },
    { label: 'AC Unit', icon: Wind, active: false },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Smart Home</h3>
      <div className={cn("p-6 rounded-[2rem] border flex flex-col gap-4", theme.card, theme.borderLight)}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `rgba(${rgbString}, 0.1)`, color }}>
              <Thermometer size={20} />
            </div>
            <div>
              <p className="text-xs font-bold opacity-50">Temperature</p>
              <p className="text-lg font-bold">72°F</p>
            </div>
          </div>
          <div className={cn("w-12 h-6 rounded-full p-1 transition-colors", color)} style={{ backgroundColor: color }}>
            <div className="w-4 h-4 rounded-full bg-white translate-x-6" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {devices.map((device, i) => (
          <div key={i} className={cn("p-4 rounded-3xl border flex flex-col gap-3 transition-all", device.active ? "shadow-lg" : theme.glassMuted, theme.borderLight)} style={device.active ? { backgroundColor: color, color: contrastColor } : {}}>
            <device.icon size={20} />
            <span className="text-xs font-bold">{device.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
