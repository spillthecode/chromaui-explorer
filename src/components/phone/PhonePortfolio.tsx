import React from 'react';
import { TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhonePortfolioProps {
  theme: ThemeColors;
}

export const PhonePortfolio: React.FC<PhonePortfolioProps> = ({
  theme
}) => {
  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$64,240', change: '+4.2%', icon: '₿' },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,450', change: '+2.1%', icon: 'Ξ' },
    { name: 'Solana', symbol: 'SOL', price: '$145', change: '-1.5%', icon: 'S' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Portfolio</h3>
      <div className={cn("p-6 rounded-[2rem] border", theme.card, theme.borderLight)}>
        <p className="text-xs font-bold opacity-50 mb-1">Total Balance</p>
        <h4 className="text-3xl font-bold tracking-tighter">$12,450.80</h4>
        <div className="flex items-center gap-2 mt-2 text-green-500 font-bold text-xs">
          <TrendingUp size={14} />
          <span>+12.5% this month</span>
        </div>
      </div>
      <div className="space-y-3">
        {assets.map((asset, i) => (
          <div key={i} className={cn("flex items-center justify-between p-4 rounded-2xl", theme.glassMuted)}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-white/10">{asset.icon}</div>
              <div>
                <p className="text-sm font-bold">{asset.name}</p>
                <p className="text-[10px] opacity-50">{asset.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">{asset.price}</p>
              <p className={cn("text-[10px] font-bold", asset.change.startsWith('+') ? "text-green-500" : "text-red-500")}>{asset.change}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
