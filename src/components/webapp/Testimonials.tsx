import React from 'react';
import { Heart, Star } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface TestimonialsProps {
  color: string;
  theme: ThemeColors;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  color,
  theme
}) => {
  const testimonials = [
    { name: 'Sarah Jenkins', role: 'CEO at TechFlow', quote: 'Color Visualization Tool has completely transformed our design workflow. The color behavior exploration is unmatched.' },
    { name: 'Michael Chen', role: 'Senior Developer', quote: 'Finally a tool that understands how colors actually behave in real-world components. A must-have for any dev.' },
  ];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Heart size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Social Proof</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className={cn("p-6 rounded-3xl border flex flex-col gap-4", theme.card, theme.borderLight)}>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill={color} className="text-transparent" />)}
            </div>
            <p className="text-sm italic leading-relaxed opacity-90">"{t.quote}"</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-[10px] opacity-70">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
