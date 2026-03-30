import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PricingProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const Pricing: React.FC<PricingProps> = ({
  color,
  contrastColor,
  theme
}) => {
  const plans = [
    { name: 'Starter', price: '$0', features: ['Basic Analytics', '3 Projects', 'Community Support'], popular: false },
    { name: 'Pro', price: '$29', features: ['Advanced Stats', 'Unlimited Projects', 'Priority Support', 'Custom Domains'], popular: true },
    { name: 'Enterprise', price: '$99', features: ['Full API Access', 'Team Management', '24/7 Dedicated Support', 'SLA Guarantee'], popular: false },
  ];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <CreditCard size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Pricing Tiers</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={cn(
              "p-6 rounded-3xl border transition-shadow hover:shadow-2xl", 
              plan.popular ? "ring-2" : "",
              theme.card, 
              theme.borderLight
            )}
            style={plan.popular ? { ringColor: color, borderColor: color } : {}}
          >
            <div className="mb-4">
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={theme.textMuted}>/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-xs">
                  <CheckCircle2 size={14} style={{ color }} />
                  <span className={theme.textMutedLg}>{f}</span>
                </li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl font-bold text-sm transition-colors"
              style={plan.popular ? { backgroundColor: color, color: contrastColor } : { border: `1px solid ${color}`, color: color }}
            >
              {plan.popular ? 'Get Started' : 'Choose Plan'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
