import React from 'react';
import { Search, Star } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneFoodDeliveryProps {
  theme: ThemeColors;
}

export const PhoneFoodDelivery: React.FC<PhoneFoodDeliveryProps> = ({
  theme
}) => {
  const restaurants = [
    { name: 'Burger House', rating: '4.8', time: '20-30 min', img: 'burger' },
    { name: 'Sushi Zen', rating: '4.9', time: '35-45 min', img: 'sushi' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Food Delivery</h3>
      <div className={cn("flex items-center gap-2 p-3 rounded-2xl", theme.glassMuted)}>
        <Search size={16} className="opacity-50" />
        <input type="text" placeholder="Search restaurants..." className="bg-transparent border-none outline-none text-xs w-full" />
      </div>
      <div className="space-y-4">
        {restaurants.map((rest, i) => (
          <div key={i} className={cn("rounded-[2rem] overflow-hidden border", theme.card, theme.borderLight)}>
            <img src={`https://picsum.photos/seed/${rest.img}/400/200`} alt={rest.name} className="w-full h-32 object-cover" referrerPolicy="no-referrer" />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-sm">{rest.name}</h4>
                <p className="text-[10px] opacity-50">{rest.time}</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-500/10 text-yellow-500 text-[10px] font-bold">
                <Star size={10} fill="currentColor" />
                {rest.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
