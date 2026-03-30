import React from 'react';
import { Filter, Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface SearchFiltersProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  theme: ThemeColors;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  color,
  contrastColor,
  rgbString,
  theme
}) => {
  const tags = ['Design', 'Development', 'Marketing', 'Sales', 'Product'];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Filter size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Search & Filters</h2>
      </div>
      <div className={cn("p-6 rounded-[2rem] border space-y-6", theme.card, theme.borderLight)}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className={cn("flex-1 flex items-center gap-3 px-6 py-3 rounded-xl border", theme.glass)}>
            <Search size={18} className="opacity-60" />
            <input type="text" placeholder="Search projects, files, users..." className="bg-transparent border-none outline-none text-sm w-full" />
          </div>
          <button className={cn("flex items-center gap-2 px-6 py-3 rounded-xl border font-bold text-sm", theme.glass)}>
            <Filter size={16} />
            Filters
          </button>
          <button 
            className="px-8 py-3 rounded-xl font-bold text-sm shadow-lg"
            style={{ backgroundColor: color, color: contrastColor }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button 
              key={tag} 
              className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold border transition-all", theme.glass)}
              style={{ borderColor: `rgba(${rgbString}, 0.2)`, color }}
            >
              {tag}
            </button>
          ))}
          <button className="px-4 py-1.5 rounded-full text-[10px] font-bold opacity-70 hover:opacity-100 transition-opacity">+ Add Filter</button>
        </div>
      </div>
    </section>
  );
};
