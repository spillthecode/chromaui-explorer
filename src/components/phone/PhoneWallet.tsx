import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Smartphone, CupSoda } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneWalletProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const PhoneWallet: React.FC<PhoneWalletProps> = ({
  color,
  contrastColor,
  theme
}) => {
  const transactions = [
    { name: 'Apple Store', price: '-$1,299.00', icon: Smartphone },
    { name: 'Coffee Shop', price: '-$4.50', icon: CupSoda }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Wallet</h3>
      <motion.div 
        whileHover={{ scale: 1.02, rotateY: 5 }}
        className="p-5 rounded-3xl flex flex-col justify-between aspect-[1.6/1] shadow-xl cursor-pointer" 
        style={{ backgroundColor: color, color: contrastColor, perspective: '1000px' }}
      >
        <div className="flex justify-between items-start">
          <CreditCard size={24} />
          <span className="text-xs font-bold opacity-70 italic">CHROMA CARD</span>
        </div>
        <div>
          <p className="text-lg font-mono tracking-widest">**** **** **** 4242</p>
          <div className="flex justify-between items-end mt-2">
            <span className="text-sm font-bold">JOHN DOE</span>
            <span className="text-[10px] opacity-70">12/28</span>
          </div>
        </div>
      </motion.div>
      <div className="space-y-2">
        {transactions.map((t, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
            className={cn("flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-colors", theme.glassMuted)}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><t.icon size={14} /></div>
              <span className="text-xs font-bold">{t.name}</span>
            </div>
            <span className="text-xs font-bold">{t.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
