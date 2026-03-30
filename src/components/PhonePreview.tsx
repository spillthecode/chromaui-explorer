import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, MessageSquare, Activity, Wallet, Music, Home, PieChart, ListTodo, Wind, Plane, BookOpen, Utensils, User, Sliders, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';
import { ThemeColors } from '../types';
import { PhoneMessages } from './phone/PhoneMessages';
import { PhoneActivity } from './phone/PhoneActivity';
import { PhoneWallet } from './phone/PhoneWallet';
import { PhoneMusic } from './phone/PhoneMusic';
import { PhoneSmartHome } from './phone/PhoneSmartHome';
import { PhonePortfolio } from './phone/PhonePortfolio';
import { PhoneFoodDelivery } from './phone/PhoneFoodDelivery';
import { PhoneTasks } from './phone/PhoneTasks';
import { PhoneMeditation } from './phone/PhoneMeditation';
import { PhoneTravel } from './phone/PhoneTravel';
import { PhoneLearning } from './phone/PhoneLearning';
import { PhoneProfile } from './phone/PhoneProfile';
import { PhoneSettings } from './phone/PhoneSettings';

interface PhonePreviewProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const PhonePreview: React.FC<PhonePreviewProps> = ({
  color,
  contrastColor,
  rgbString,
  isDarkMode,
  theme
}) => {
  const [activePhoneScreen, setActivePhoneScreen] = useState(0);

  const phoneScreens = [
    { icon: MessageSquare, component: PhoneMessages },
    { icon: Activity, component: PhoneActivity },
    { icon: Wallet, component: PhoneWallet },
    { icon: Music, component: PhoneMusic },
    { icon: Home, component: PhoneSmartHome },
    { icon: PieChart, component: PhonePortfolio },
    { icon: Zap, component: PhoneFoodDelivery }, // Using Zap as placeholder for food
    { icon: ListTodo, component: PhoneTasks },
    { icon: Wind, component: PhoneMeditation },
    { icon: Plane, component: PhoneTravel },
    { icon: BookOpen, component: PhoneLearning },
    { icon: User, component: PhoneProfile },
    { icon: Sliders, component: PhoneSettings },
  ];

  const ActiveComponent = phoneScreens[activePhoneScreen].component;

  return (
    <motion.div
      key="phone"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col lg:flex-row items-center justify-center gap-12"
    >
      {/* Phone Mockup */}
      <div className={cn(
        "relative w-[320px] h-[650px] rounded-[3.5rem] border-[12px] shadow-2xl overflow-hidden transition-colors duration-300 flex flex-col",
        isDarkMode ? "bg-[#0f0f0f] border-[#1a1a1a]" : "bg-slate-50 border-slate-200"
      )}>
        {/* Status Bar */}
        <div className={cn("h-12 px-8 flex items-center justify-between text-[11px] font-bold shrink-0", theme.textMuted)}>
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            <Zap size={12} fill="currentColor" />
            <div className={cn("w-4 h-2 rounded-sm border", theme.border)} />
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhoneScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-6 h-full"
            >
              <ActiveComponent 
                color={color} 
                contrastColor={contrastColor} 
                rgbString={rgbString} 
                isDarkMode={isDarkMode} 
                theme={theme} 
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Bar */}
        <div className={cn("h-20 border-t flex items-center justify-around px-4 shrink-0", theme.borderLight)}>
          {phoneScreens.map((screen, i) => (
            <button
              key={i}
              onClick={() => setActivePhoneScreen(i)}
              className={cn(
                "p-3 rounded-2xl transition-all",
                activePhoneScreen === i ? "shadow-lg" : "opacity-40 hover:opacity-100"
              )}
              style={activePhoneScreen === i ? { backgroundColor: color, color: contrastColor } : {}}
            >
              <screen.icon size={20} />
            </button>
          ))}
        </div>
      </div>

      {/* Screen Selector List */}
      <div className="flex flex-col gap-3 max-h-[650px] overflow-y-auto pr-4 custom-scrollbar">
        <h3 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Select Screen</h3>
        {[
          { id: 0, label: 'Messages', icon: MessageSquare },
          { id: 1, label: 'Activity', icon: Zap },
          { id: 2, label: 'Wallet', icon: CreditCard },
          { id: 3, label: 'Music Player', icon: Music },
          { id: 4, label: 'Smart Home', icon: Home },
          { id: 5, label: 'Portfolio', icon: PieChart },
          { id: 6, label: 'Food Delivery', icon: Utensils },
          { id: 7, label: 'Task Manager', icon: ListTodo },
          { id: 8, label: 'Meditation', icon: Wind },
          { id: 9, label: 'Travel/Booking', icon: Plane },
          { id: 10, label: 'Learning', icon: BookOpen },
          { id: 11, label: 'Social Profile', icon: User },
          { id: 12, label: 'Settings', icon: Sliders },
        ].map((screen) => (
          <button
            key={screen.id}
            onClick={() => setActivePhoneScreen(screen.id)}
            className={cn(
              "flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-bold transition-all border text-left whitespace-nowrap",
              activePhoneScreen === screen.id 
                ? (isDarkMode ? "bg-white/10 border-white/20 text-white" : "bg-white shadow-md border-slate-200 text-slate-900")
                : cn(theme.glass, theme.textMuted, "hover:bg-white/5")
            )}
          >
            <screen.icon size={16} style={activePhoneScreen === screen.id ? { color } : {}} />
            <span>{screen.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
