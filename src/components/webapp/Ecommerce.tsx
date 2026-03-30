import React from 'react';
import { Component, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface EcommerceProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const Ecommerce: React.FC<EcommerceProps> = ({
  color,
  contrastColor,
  theme
}) => {
  const products = [
    { name: 'Chroma Headset', price: '$299', img: 'headset' },
    { name: 'Smart Watch Pro', price: '$199', img: 'watch' },
    { name: 'Wireless Speaker', price: '$149', img: 'speaker' },
  ];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Component size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">E-commerce</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div key={i} className={cn("group rounded-[2rem] border overflow-hidden transition-all hover:shadow-2xl", theme.card, theme.borderLight)}>
            <div className="relative h-48 overflow-hidden">
              <img src={`https://picsum.photos/seed/${product.img}/400/400`} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart size={16} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold">{product.name}</h4>
                  <p className={theme.textMutedLg}>Premium Audio</p>
                </div>
                <span className="text-lg font-bold" style={{ color }}>{product.price}</span>
              </div>
              <button 
                className="w-full py-3 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95"
                style={{ backgroundColor: color, color: contrastColor }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
