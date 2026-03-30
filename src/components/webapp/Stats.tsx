import React from 'react';
import { TrendingUp, User, Plus, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface StatsProps {
  color: string;
  rgbString: string;
  theme: ThemeColors;
}

export const Stats: React.FC<StatsProps> = ({
  color,
  rgbString,
  theme
}) => {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', trend: '+12%', icon: TrendingUp },
    { label: 'Active Users', value: '2,345', trend: '+5%', icon: User },
    { label: 'New Signups', value: '124', trend: '+18%', icon: Plus },
    { label: 'Conversion', value: '3.2%', trend: '-2%', icon: Zap },
  ];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <TrendingUp size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Dashboard Stats</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className={cn("p-5 rounded-2xl border", theme.card, theme.borderLight)}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `rgba(${rgbString}, 0.1)`, color }}>
                <stat.icon size={18} />
              </div>
              <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", stat.trend.startsWith('+') ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500")}>
                {stat.trend}
              </span>
            </div>
            <p className={cn("text-xs font-medium", theme.textMuted)}>{stat.label}</p>
            <h4 className="text-xl font-bold mt-1">{stat.value}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
