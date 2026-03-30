import React from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Battery,
  Bell,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Coffee,
  CreditCard,
  Cpu,
  Database,
  DownloadCloud,
  Droplets,
  Facebook,
  Gamepad2,
  Globe,
  HardDrive,
  Heart,
  Home,
  Instagram,
  Layers,
  Lightbulb,
  Mail,
  MessageSquare,
  Moon,
  Orbit,
  Plane,
  Play,
  Plus,
  Shield,
  SkipBack,
  SkipForward,
  StickyNote,
  Sun,
  Target,
  Thermometer,
  Ticket,
  Timer,
  Trophy,
  Twitter,
  Type,
  Volume1,
  Wifi,
  Zap
} from 'lucide-react';
import { ThemeColors, AccessibilityScore } from '../../types';
import { cn } from '../../lib/utils';
import { BentoCard, WidgetSection } from './widgetPrimitives';

const CPU_BAR_OPACITIES = [0.35, 0.22, 0.48, 0.18, 0.42, 0.28, 0.38, 0.15];
const BARCODE_HEIGHTS = [
  38, 55, 32, 64, 41, 58, 29, 67, 45, 52, 36, 61, 44, 73, 33, 56, 48, 62, 39, 71, 42, 54, 37, 59
];

export interface WidgetsGalleryProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  isDarkMode: boolean;
  theme: ThemeColors;
  accessibility: {
    white: AccessibilityScore;
    black: AccessibilityScore;
  };
}

export const WidgetsGallery: React.FC<WidgetsGalleryProps> = ({
  color,
  contrastColor,
  rgbString,
  isDarkMode,
  theme,
  accessibility
}) => {
  return (
    <div className="space-y-14">
      <WidgetSection
        eyebrow="01 · Spotlight"
        title="Hero surfaces"
        description="Large tiles where gradients and typography carry your brand colour."
        theme={theme}
      >
        <BentoCard
          theme={theme}
          spanClassName="col-span-12 xl:col-span-7"
          color={color}
          delay={0.02}
          innerClassName="min-h-[220px]"
        >
          <div
            className="flex flex-col sm:flex-row sm:items-stretch justify-between gap-8 rounded-2xl p-6 -m-1 overflow-hidden relative"
            style={{ backgroundColor: color, color: contrastColor }}
          >
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Atmosphere</p>
              <h3 className="text-4xl sm:text-5xl font-bold mt-2 tracking-tight">24°</h3>
              <p className="text-sm font-semibold opacity-80 mt-1">San Francisco</p>
              <p className="text-xs opacity-60 mt-4 max-w-[12rem]">Light breeze · UV moderate · Perfect for a walking meeting.</p>
            </div>
            <div className="relative z-10 flex flex-col justify-between sm:items-end gap-4">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <Cloud className="opacity-90" size={56} strokeWidth={1.25} />
              </motion.div>
              <div className="w-full sm:w-40 space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase opacity-70">
                  <span>Comfort</span>
                  <span>High</span>
                </div>
                <div className="h-1.5 rounded-full bg-black/15 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-white/50"
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          </div>
        </BentoCard>

        <BentoCard theme={theme} spanClassName="col-span-12 xl:col-span-5" color={color} delay={0.06}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className={cn('text-[10px] font-bold uppercase tracking-widest', theme.textMuted)}>Now playing</p>
              <h3 className={cn('font-bold text-lg mt-1', theme.text)}>Chroma Beats</h3>
            </div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `rgba(${rgbString}, 0.15)`, color }}
            >
              <Zap size={22} />
            </div>
          </div>
          <div
            className={cn(
              'relative aspect-[4/3] max-h-[180px] rounded-2xl flex items-center justify-center overflow-hidden mb-5',
              isDarkMode ? 'bg-gradient-to-br from-white/[0.08] to-transparent' : 'bg-gradient-to-br from-slate-100 to-white'
            )}
          >
            <motion.div
              className="absolute inset-4 rounded-full border-2 opacity-20"
              style={{ borderColor: color }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl z-10 cursor-pointer"
              style={{ backgroundColor: color, color: contrastColor }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <Play size={28} fill="currentColor" className="ml-0.5" />
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-8 mb-4">
            <SkipBack size={20} className={cn('cursor-pointer', theme.textMuted)} />
            <SkipForward size={20} className={cn('cursor-pointer', theme.textMuted)} />
          </div>
          <div className={cn('h-1.5 rounded-full overflow-hidden', theme.glassMuted)}>
            <div className="h-full w-[42%] rounded-full relative overflow-hidden" style={{ backgroundColor: color }}>
              <motion.div
                className="absolute inset-y-0 w-8 bg-white/30"
                animate={{ x: ['-100%', '400%'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
          <p className={cn('text-[10px] text-center mt-2', theme.textMuted)}>Crystal · 03:24 remaining</p>
        </BentoCard>
      </WidgetSection>

      <WidgetSection
        eyebrow="02 · Markets"
        title="Pulse & position"
        description="Tickers and bar microcharts tinted with your accent."
        theme={theme}
      >
        <BentoCard theme={theme} span="third" color={color} delay={0.04} accentLine>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center bg-orange-500 text-white">
                ₿
              </div>
              <div>
                <p className={cn('text-sm font-bold', theme.text)}>BTC</p>
                <p className={cn('text-[10px]', theme.textMuted)}>Spot</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
              +4.2%
            </span>
          </div>
          <p className={cn('text-3xl font-bold tracking-tighter mt-4 tabular-nums', theme.text)}>$64,240</p>
          <div className="h-14 flex items-end gap-0.5 mt-3">
            {[30, 45, 35, 60, 55, 80, 75, 90, 85, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.05 * i, type: 'spring', stiffness: 120 }}
                className="flex-1 rounded-t-sm"
                style={{ backgroundColor: color, opacity: 0.12 + i * 0.07 }}
              />
            ))}
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.06}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl font-bold text-[10px] flex items-center justify-center"
                style={{ backgroundColor: `rgba(${rgbString}, 0.12)`, color }}
              >
                AAPL
              </div>
              <span className={cn('text-xs font-bold', theme.text)}>Apple Inc.</span>
            </div>
            <BarChart3 size={16} className={theme.textMutedLg} />
          </div>
          <p className={cn('text-3xl font-bold tracking-tighter mt-4', theme.text)}>$182.45</p>
          <p className="text-[10px] font-bold text-emerald-500 mt-1">+1.24% today</p>
          <div className="h-10 flex items-end gap-1 mt-3">
            {[20, 40, 30, 50, 45, 70, 60, 80, 75, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, backgroundColor: color, opacity: 0.15 + i * 0.06 }}
              />
            ))}
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.08}>
          <div className="flex items-center justify-between mb-2">
            <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', theme.glassMuted)}>
              <Activity size={20} style={{ color }} />
            </div>
            <span className={cn('text-[10px] font-bold px-2 py-1 rounded-lg', theme.glassMuted, theme.textMuted)}>
              Weekly
            </span>
          </div>
          <p className={cn('text-4xl font-bold tracking-tighter', theme.text)}>84%</p>
          <p className={cn('text-xs mt-1 mb-4', theme.textMuted)}>System efficiency</p>
          <div className="flex gap-1 h-14 items-end mt-auto">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md transition-all hover:opacity-90"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 3 ? color : `rgba(${rgbString}, 0.22)`
                }}
              />
            ))}
          </div>
        </BentoCard>
      </WidgetSection>

      <WidgetSection
        eyebrow="03 · Home cockpit"
        title="Rooms & scenes"
        theme={theme}
      >
        <BentoCard theme={theme} span="half" color={color} delay={0.03}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={cn('font-bold', theme.text)}>Smart home</h3>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { label: 'Living', icon: Sun, on: true },
              { label: 'Bedroom', icon: Moon, on: false },
              { label: 'Kitchen', icon: Zap, on: false },
              { label: 'Garage', icon: Home, on: false }
            ].map((room, i) => (
              <motion.button
                key={room.label}
                type="button"
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'p-3.5 rounded-2xl border text-left transition-all flex flex-col gap-2',
                  theme.borderLight,
                  room.on ? 'shadow-md' : theme.glassMuted
                )}
                style={
                  room.on
                    ? { backgroundColor: color, color: contrastColor, borderColor: `${color}88` }
                    : undefined
                }
              >
                <room.icon size={18} />
                <span className="text-[10px] font-bold leading-tight">{room.label}</span>
              </motion.button>
            ))}
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.05}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className={cn('font-bold text-sm', theme.text)}>Living room light</h3>
              <p className={cn('text-[10px] mt-0.5', theme.textMuted)}>Warm white · 80%</p>
            </div>
            <div
              className="w-11 h-6 rounded-full p-1 cursor-pointer flex"
              style={{ backgroundColor: color }}
            >
              <motion.div layout className="w-4 h-4 rounded-full bg-white shadow ml-auto" />
            </div>
          </div>
          <div className="flex justify-center my-6">
            <Lightbulb size={40} style={{ color }} className="drop-shadow-lg" />
          </div>
          <div className={cn('h-2 rounded-full relative', theme.glassMuted)}>
            <div className="h-full w-4/5 rounded-full" style={{ backgroundColor: color }} />
            <div
              className="absolute top-1/2 left-[80%] -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: color }}
            />
          </div>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="04 · Mix & metering" title="Levels" theme={theme}>
        <BentoCard theme={theme} span="full" color={color} delay={0.02} innerClassName="flex flex-col sm:flex-row gap-8">
          <div className="flex items-center gap-3 sm:w-48 shrink-0">
            <Volume1 size={22} style={{ color }} />
            <div>
              <h3 className={cn('font-bold text-sm', theme.text)}>Audio mixer</h3>
              <p className={cn('text-[10px]', theme.textMuted)}>Per-channel trim</p>
            </div>
          </div>
          <div className="flex flex-1 justify-around items-end h-28 gap-3">
            {[
              { label: 'Sys', val: 60 },
              { label: 'App', val: 85 },
              { label: 'Mic', val: 40 },
              { label: 'Browser', val: 72 }
            ].map((ch) => (
              <div key={ch.label} className="flex flex-col items-center gap-2 flex-1 max-w-[3.5rem]">
                <div className={cn('w-full max-w-2 h-full rounded-full relative overflow-hidden', theme.glassMuted)}>
                  <div
                    className="absolute bottom-0 left-0 right-0 rounded-full"
                    style={{ height: `${ch.val}%`, backgroundColor: color }}
                  />
                </div>
                <span className={cn('text-[9px] font-bold uppercase', theme.textMuted)}>{ch.label}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="05 · Calendar" title="Time & commitments" theme={theme}>
        <BentoCard theme={theme} span="half" color={color} delay={0.03}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} style={{ color }} />
              <span className={cn('text-sm font-bold', theme.text)}>Today</span>
            </div>
            <span
              className="text-[10px] font-bold px-2 py-1 rounded-lg"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              Now
            </span>
          </div>
          <div className="space-y-2.5">
            {[
              { time: '10:00', task: 'Design review', active: true },
              { time: '13:30', task: 'Client meeting', active: false },
              { time: '16:00', task: 'Project sync', active: false }
            ].map((item) => (
              <div key={item.task} className="flex gap-3 items-center">
                <span className={cn('text-[10px] font-mono w-11 shrink-0', theme.textMuted)}>{item.time}</span>
                <div
                  className={cn(
                    'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border border-transparent',
                    item.active ? 'shadow-lg' : cn(theme.glassMuted, theme.textMuted)
                  )}
                  style={item.active ? { backgroundColor: color, color: contrastColor } : undefined}
                >
                  {item.task}
                </div>
              </div>
            ))}
          </div>
          <div className={cn('mt-5 pt-4 border-t flex flex-wrap items-center gap-3', theme.borderLight)}>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'w-7 h-7 rounded-full border-2',
                    isDarkMode ? 'border-[#0f0f0f] bg-white/15' : 'border-white bg-slate-200'
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              className="ml-auto text-[10px] font-bold px-4 py-2 rounded-xl"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              Join strategy sync
            </button>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.06}>
          <div className="flex items-center justify-between mb-4">
            <Clock size={20} style={{ color }} />
            <Globe size={18} className={theme.textMuted} />
          </div>
          <p className={cn('text-4xl font-bold tracking-tighter tabular-nums', theme.text)}>12:45</p>
          <p className={cn('text-[10px] font-bold uppercase tracking-widest mt-1 mb-6', theme.textMuted)}>
            London · local
          </p>
          <div className="space-y-3 mt-auto">
            {[
              { city: 'New York', time: '05:45', tz: 'EST' },
              { city: 'Tokyo', time: '18:45', tz: 'JST' }
            ].map((c) => (
              <div
                key={c.city}
                className={cn('flex justify-between items-center py-2 px-3 rounded-xl border', theme.borderLight)}
              >
                <div>
                  <p className={cn('text-xs font-bold', theme.text)}>{c.city}</p>
                  <p className={cn('text-[9px]', theme.textMuted)}>{c.tz}</p>
                </div>
                <span className={cn('text-sm font-mono font-bold', theme.text)}>{c.time}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="06 · Tasks & focus" title="Momentum" theme={theme}>
        <BentoCard theme={theme} span="half" color={color} delay={0.02}>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `rgba(${rgbString}, 0.12)`, color }}
            >
              <CheckCircle2 size={20} />
            </div>
            <h3 className={cn('font-bold', theme.text)}>Tasks</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className={cn('w-5 h-5 rounded-md border-2 flex items-center justify-center', theme.border)}>
                <Check size={12} style={{ color }} />
              </div>
              <span className={cn('text-sm font-medium', theme.text)}>Update brand guidelines</span>
            </div>
            <div className="flex items-center gap-3">
              <div className={cn('w-5 h-5 rounded-md border-2', theme.border)} />
              <span className={cn('text-sm', theme.textMuted)}>Review colour contrast</span>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'w-8 h-8 rounded-full border-2',
                    isDarkMode ? 'border-[#0f0f0f] bg-white/10' : 'border-white bg-slate-200'
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.05}>
          <div className="flex justify-between items-center mb-3">
            <StickyNote size={18} style={{ color }} />
            <Plus size={16} className={theme.textMutedLg} />
          </div>
          <div
            className={cn(
              'flex-1 p-4 rounded-2xl text-xs leading-relaxed font-medium italic min-h-[100px] border border-dashed',
              theme.borderLight,
              theme.glassMuted
            )}
          >
            Remember to sync design tokens when the primary swatch shifts — especially semantic colours.
          </div>
          <p className={cn('text-[9px] font-bold text-right mt-3', theme.textMutedLg)}>Edited 2m ago</p>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.07}>
          <div className="flex justify-between items-center mb-2">
            <Timer size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Pomodoro</span>
          </div>
          <p className={cn('text-4xl font-bold tracking-tighter text-center py-2', theme.text)}>24:59</p>
          <p className={cn('text-[9px] text-center font-bold uppercase mb-4', theme.textMuted)}>Deep work</p>
          <div className="flex gap-2 mt-auto">
            <button
              type="button"
              className="flex-1 py-2.5 rounded-xl text-[10px] font-bold shadow-lg"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              Start
            </button>
            <button type="button" className={cn('px-4 py-2.5 rounded-xl text-[10px] font-bold border', theme.border)}>
              Reset
            </button>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.09}>
          <div className="flex justify-between">
            <DownloadCloud size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Download</span>
          </div>
          <p className={cn('font-bold text-xs truncate mt-4', theme.text)}>brand_assets_v2.zip</p>
          <p className={cn('text-[10px] mt-1', theme.textMuted)}>45.2 / 120 MB</p>
          <div className={cn('h-1.5 rounded-full overflow-hidden mt-4', theme.glassMuted)}>
            <div className="h-full rounded-full w-[38%]" style={{ backgroundColor: color }} />
          </div>
          <div className={cn('flex justify-between text-[9px] font-bold mt-2', theme.textMuted)}>
            <span>38%</span>
            <span>~2m left</span>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.11}>
          <div className="flex justify-between items-center mb-3">
            <Activity size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Steps</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="stroke-current opacity-10"
                  fill="none"
                  strokeWidth="3.5"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  fill="none"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="72, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{ stroke: color }}
                />
              </svg>
            </div>
            <div>
              <p className={cn('text-2xl font-bold tracking-tight', theme.text)}>7,240</p>
              <p className={cn('text-[10px]', theme.textMuted)}>/ 10,000 steps</p>
            </div>
          </div>
          <div className={cn('flex justify-between text-[9px] font-bold mt-4', theme.textMuted)}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <span key={d + i} style={i === 2 ? { color } : undefined}>
                {d}
              </span>
            ))}
          </div>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="07 · Vitals" title="Body & balance" theme={theme}>
        <BentoCard theme={theme} span="third" color={color} delay={0.02}>
          <div className="flex justify-between">
            <Heart size={22} fill={color} className="text-transparent" />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>BPM</span>
          </div>
          <p className={cn('text-4xl font-bold tracking-tighter mt-3', theme.text)}>72</p>
          <div className="h-10 flex items-center gap-px mt-4 overflow-hidden rounded-full">
            {[10, 35, 12, 58, 14, 72, 18, 48, 22, 38].map((h, i) => (
              <div key={i} className="flex-1 rounded-full" style={{ height: `${h}%`, backgroundColor: color, opacity: 0.35 }} />
            ))}
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.04}>
          <div className="flex justify-between mb-2">
            <Droplets size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Hydration</span>
          </div>
          <div
            className={cn('relative h-24 rounded-2xl overflow-hidden border', theme.borderLight)}
            style={{ backgroundColor: `rgba(${rgbString}, 0.06)` }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[65%] opacity-25" style={{ backgroundColor: color }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className={cn('text-2xl font-bold', theme.text)}>1.5L</p>
              <p className={cn('text-[9px] font-bold', theme.textMuted)}>Goal 2.5L</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.06}>
          <div className="flex justify-between mb-3">
            <Coffee size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Coffee</span>
          </div>
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-6 h-9 rounded-t-lg rounded-b-md border-2"
                  style={{
                    borderColor: i <= 2 ? color : `rgba(${rgbString}, 0.12)`,
                    backgroundColor: i <= 2 ? `rgba(${rgbString}, 0.1)` : 'transparent'
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              <Plus size={20} />
            </button>
          </div>
          <p className={cn('text-center text-[10px] font-bold', theme.textMuted)}>2 cups · cap 4</p>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="08 · System" title="Hardware telemetry" theme={theme}>
        <BentoCard theme={theme} span="quarter" color={color} delay={0.02}>
          <Battery size={18} style={{ color }} />
          <p className={cn('text-3xl font-bold mt-3', theme.text)}>85%</p>
          <p className="text-[10px] font-bold text-emerald-500 mt-1">Charging</p>
          <div className={cn('h-2 rounded-full mt-3 p-0.5 border', theme.borderLight)}>
            <div className="h-full rounded-full w-[85%]" style={{ backgroundColor: color }} />
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="quarter" color={color} delay={0.04}>
          <HardDrive size={18} style={{ color }} />
          <div className="relative w-20 h-20 mx-auto my-2">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="stroke-current opacity-10"
                fill="none"
                strokeWidth="3"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="65, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{ stroke: color }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={cn('text-sm font-bold', theme.text)}>65%</span>
              <span className={cn('text-[8px]', theme.textMuted)}>used</span>
            </div>
          </div>
          <p className={cn('text-center text-[9px] font-bold', theme.textMuted)}>128 / 256 GB</p>
        </BentoCard>

        <BentoCard theme={theme} span="quarter" color={color} delay={0.06}>
          <div className="flex justify-between items-start">
            <Wifi size={18} style={{ color }} />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-1 rounded-full"
                  style={{
                    height: i * 3 + 4,
                    backgroundColor: i <= 3 ? color : `rgba(${rgbString}, 0.12)`
                  }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <p className={cn('text-[8px] font-bold uppercase', theme.textMuted)}>Down</p>
              <p className={cn('text-lg font-bold tabular-nums', theme.text)}>124</p>
              <p className={cn('text-[8px]', theme.textMuted)}>Mbps</p>
            </div>
            <div>
              <p className={cn('text-[8px] font-bold uppercase', theme.textMuted)}>Up</p>
              <p className={cn('text-lg font-bold tabular-nums', theme.text)}>42</p>
              <p className={cn('text-[8px]', theme.textMuted)}>Mbps</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="quarter" color={color} delay={0.08}>
          <Thermometer size={18} style={{ color }} />
          <p className={cn('text-3xl font-bold mt-3', theme.text)}>42°</p>
          <p className={cn('text-[10px] font-bold', theme.textMuted)}>CPU · optimal</p>
          <div className={cn('h-1.5 rounded-full overflow-hidden mt-3', theme.glassMuted)}>
            <div className="h-full w-[42%] rounded-full" style={{ backgroundColor: color }} />
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.1}>
          <div className="flex justify-between mb-2">
            <Cpu size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>CPU</span>
          </div>
          <p className={cn('text-3xl font-bold', theme.text)}>24%</p>
          <p className={cn('text-[10px] mb-3', theme.textMuted)}>8 cores</p>
          <div className="grid grid-cols-4 gap-1">
            {CPU_BAR_OPACITIES.map((op, i) => (
              <div key={i} className="h-5 rounded-md" style={{ backgroundColor: color, opacity: op }} />
            ))}
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.12}>
          <div className="flex justify-between mb-2">
            <Layers size={20} style={{ color }} />
            <Database size={18} className={theme.textMuted} />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className={cn('text-2xl font-bold', theme.text)}>12.4 GB</p>
              <p className={cn('text-[10px]', theme.textMuted)}>of 32 GB · RAM</p>
              <div className={cn('h-1.5 rounded-full overflow-hidden mt-2', theme.glassMuted)}>
                <div className="h-full w-[38%]" style={{ backgroundColor: color }} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-[10px] font-bold mb-1">
                <span className={theme.text}>SSD</span>
                <span className={theme.textMuted}>78%</span>
              </div>
              <div className={cn('h-1.5 rounded-full overflow-hidden', theme.glassMuted)}>
                <div className="h-full w-[78%]" style={{ backgroundColor: color }} />
              </div>
              <p className={cn('text-[9px] mt-2', theme.textMuted)}>780 GB used</p>
            </div>
          </div>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="09 · Life admin" title="Inbox & travel" theme={theme}>
        <BentoCard theme={theme} span="third" color={color} delay={0.02}>
          <div className="flex justify-between">
            <Mail size={20} style={{ color }} />
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              12
            </div>
          </div>
          <h3 className={cn('font-bold text-sm mt-4', theme.text)}>Primary inbox</h3>
          <p className={cn('text-[10px] mt-1 leading-relaxed', theme.textMuted)}>Unread in priority tab — two invites waiting.</p>
          <button
            type="button"
            className={cn('w-full py-2.5 mt-4 rounded-xl text-[10px] font-bold border', theme.border)}
          >
            Open mail
          </button>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.04}>
          <div className="flex justify-between mb-3">
            <Plane size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>UA 827</span>
          </div>
          <div className="flex justify-between items-center px-2">
            <div className="text-center">
              <p className={cn('text-lg font-bold', theme.text)}>SFO</p>
              <p className={cn('text-[9px]', theme.textMuted)}>10:30</p>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <div className="w-full h-px bg-current opacity-20 relative">
                <Plane size={14} className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-50" />
              </div>
              <p className={cn('text-[9px] mt-2 font-mono', theme.textMuted)}>5h 45m</p>
            </div>
            <div className="text-center">
              <p className={cn('text-lg font-bold', theme.text)}>JFK</p>
              <p className={cn('text-[9px]', theme.textMuted)}>18:45</p>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-bold mt-4">
            <span className={theme.textMuted}>Gate A12</span>
            <span style={{ color }}>On time</span>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.06}>
          <div className="flex justify-between mb-3">
            <div className="flex gap-1.5">
              <Instagram size={15} className={theme.textMuted} />
              <Twitter size={15} className={theme.textMuted} />
              <Facebook size={15} className={theme.textMuted} />
            </div>
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Social</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className={theme.text}>Followers</span>
              <span style={{ color }}>12.4k</span>
            </div>
            <div className="flex justify-between text-xs font-bold">
              <span className={theme.text}>Engage</span>
              <span style={{ color }}>4.8%</span>
            </div>
            <div className={cn('h-1.5 rounded-full overflow-hidden mt-2', theme.glassMuted)}>
              <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: color }} />
            </div>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.08}>
          <div className="flex justify-between">
            <Bell size={20} style={{ color }} />
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          </div>
          <div className="space-y-3 mt-4">
            {[
              { title: 'New comment', time: '2m' },
              { title: 'Deploy finished', time: '15m' },
              { title: 'New follower', time: '1h' }
            ].map((n) => (
              <div key={n.title} className="flex justify-between items-center">
                <span className={cn('text-xs font-medium', theme.text)}>{n.title}</span>
                <span className={cn('text-[9px] font-bold', theme.textMutedLg)}>{n.time}</span>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.1}>
          <div className="flex justify-between mb-3">
            <CreditCard size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Recent</span>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Notion', amount: '-$12', sub: 'Mar 28' },
              { label: 'Apple Pay', amount: '-$4.50', sub: 'Mar 27' },
              { label: 'Payroll', amount: '+$4,200', sub: 'Mar 25', pos: true }
            ].map((t) => (
              <div key={t.label} className="flex justify-between items-start">
                <div>
                  <p className={cn('text-xs font-bold', theme.text)}>{t.label}</p>
                  <p className={cn('text-[9px]', theme.textMuted)}>{t.sub}</p>
                </div>
                <span
                  className={cn('text-xs font-bold tabular-nums', t.pos ? 'text-emerald-500' : theme.text)}
                >
                  {t.amount}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="10 · Trust & play" title="Safety & downtime" theme={theme}>
        <BentoCard theme={theme} span="third" color={color} delay={0.02}>
          <Shield size={22} style={{ color }} />
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto my-4"
            style={{ backgroundColor: `rgba(${rgbString}, 0.12)` }}
          >
            <CheckCircle2 size={28} style={{ color }} />
          </div>
          <h3 className={cn('font-bold text-sm text-center', theme.text)}>Protected</h3>
          <p className={cn('text-[10px] text-center mt-1', theme.textMuted)}>Last scan · 5m ago</p>
          <button type="button" className={cn('w-full py-2 mt-4 rounded-xl text-[10px] font-bold border', theme.border)}>
            Run scan
          </button>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.04}>
          <Ticket size={20} style={{ color }} />
          <h3 className={cn('font-bold text-sm mt-3', theme.text)}>Dune: Part Two</h3>
          <p className={cn('text-[10px] mt-1', theme.textMuted)}>Row F · Seat 12 · 19:30</p>
          <div
            className={cn(
              'mt-4 flex justify-center gap-px h-10 px-2 py-1 rounded-xl border border-dashed items-end',
              theme.borderLight
            )}
          >
            {BARCODE_HEIGHTS.slice(0, 20).map((h, i) => (
              <div
                key={i}
                className="w-px rounded-full bg-current opacity-40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="third" color={color} delay={0.06}>
          <div className="flex justify-between mb-2">
            <Gamepad2 size={20} style={{ color }} />
            <Trophy size={18} style={{ color }} />
          </div>
          <p className={cn('text-2xl font-bold', theme.text)}>Level 42</p>
          <p className={cn('text-[9px] font-bold uppercase tracking-wider', theme.textMuted)}>Elite explorer</p>
          <div className={cn('h-1.5 rounded-full overflow-hidden mt-4', theme.glassMuted)}>
            <div className="h-full w-[65%] rounded-full" style={{ backgroundColor: color }} />
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.08}>
          <div className="flex justify-between mb-3">
            <Target size={20} style={{ color }} />
            <span className={cn('text-[10px] font-bold', theme.textMuted)}>Goals</span>
          </div>
          {[
            { label: 'Design system', progress: 85 },
            { label: 'Documentation', progress: 40 }
          ].map((g) => (
            <div key={g.label} className="mb-4 last:mb-0">
              <div className="flex justify-between text-[10px] font-bold mb-1">
                <span className={theme.text}>{g.label}</span>
                <span style={{ color }}>{g.progress}%</span>
              </div>
              <div className={cn('h-1.5 rounded-full overflow-hidden', theme.glassMuted)}>
                <div className="h-full rounded-full transition-all" style={{ width: `${g.progress}%`, backgroundColor: color }} />
              </div>
            </div>
          ))}
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.1}>
          <div className="flex items-center gap-2 mb-4">
            <Orbit size={20} style={{ color }} />
            <h3 className={cn('font-bold text-sm', theme.text)}>Habit orbit</h3>
          </div>
          <div className="relative h-36 flex items-center justify-center">
            <div
              className="absolute inset-4 rounded-full border border-dashed opacity-30"
              style={{ borderColor: color }}
            />
            <div className="relative w-[7.5rem] h-[7.5rem]">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                const angle = (i / 7) * Math.PI * 2 - Math.PI / 2;
                const r = 42;
                const cx = 60;
                const cy = 60;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                const done = i < 4;
                return (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 shadow-md"
                    style={{
                      left: x,
                      top: y,
                      backgroundColor: done ? color : `rgba(${rgbString}, 0.15)`,
                      borderColor: isDarkMode ? 'rgba(255,255,255,0.35)' : '#fff'
                    }}
                  />
                );
              })}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black"
                style={{ backgroundColor: color, color: contrastColor }}
              >
                4/7
              </div>
            </div>
          </div>
          <p className={cn('text-[10px] text-center mt-2', theme.textMuted)}>Weekly rhythm · accent marks completed days</p>
        </BentoCard>
      </WidgetSection>

      <WidgetSection eyebrow="11 · Brand craft" title="Type & access" theme={theme}>
        <BentoCard theme={theme} span="half" color={color} delay={0.02}>
          <div className="flex items-center gap-2 mb-4">
            <Type size={20} style={{ color }} />
            <h3 className={cn('font-bold text-sm', theme.text)}>Type specimen</h3>
          </div>
          <p
            className={cn('text-[4.5rem] sm:text-[5rem] font-bold leading-none tracking-tighter select-none')}
            style={{ color }}
          >
            Gg
          </p>
          <div className="h-1 w-full rounded-full mt-4 mb-2" style={{ backgroundColor: color }} />
          <p className={cn('text-xs font-medium', theme.text)}>Display · Bold · -3% tracking</p>
          <p className={cn('text-[10px] mt-2 leading-relaxed', theme.textMuted)}>
            Use this block to judge how your accent pairs with heavy display type.
          </p>
        </BentoCard>

        <BentoCard theme={theme} span="half" color={color} delay={0.05}>
          <div className="flex items-center gap-2 mb-3">
            <Zap size={18} style={{ color }} />
            <h3 className={cn('font-bold text-sm', theme.text)}>Contrast matrix</h3>
          </div>
          <div className="grid gap-2">
            <div
              className="p-3 rounded-2xl flex justify-between items-center text-xs font-bold"
              style={{ backgroundColor: color, color: '#ffffff' }}
            >
              <span>White on brand</span>
              <span className="tabular-nums opacity-80">{accessibility.white.ratio.toFixed(2)}:1</span>
            </div>
            <div
              className="p-3 rounded-2xl flex justify-between items-center text-xs font-bold border bg-white"
              style={{ color, borderColor: `rgba(${rgbString}, 0.25)` }}
            >
              <span>Brand on white</span>
              <span className="tabular-nums opacity-80">{accessibility.white.ratio.toFixed(2)}:1</span>
            </div>
            <div
              className="p-3 rounded-2xl flex justify-between items-center text-xs font-bold border bg-black text-white"
              style={{ borderColor: `rgba(${rgbString}, 0.4)` }}
            >
              <span>Brand on black</span>
              <span className="tabular-nums opacity-80">{accessibility.black.ratio.toFixed(2)}:1</span>
            </div>
          </div>
        </BentoCard>

        <BentoCard theme={theme} span="full" color={color} delay={0.07} innerClassName="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className={cn('flex-1 flex flex-col justify-center text-center lg:text-left gap-3 italic px-2')}>
            <MessageSquare size={28} style={{ color }} className="mx-auto lg:mx-0 opacity-25" />
            <p className={cn('text-base sm:text-lg font-medium leading-relaxed', theme.text)}>
              “Colour is a power which directly influences the soul.”
            </p>
            <p className={cn('text-[10px] font-bold uppercase tracking-widest not-italic', theme.textMuted)}>
              — Wassily Kandinsky
            </p>
          </div>
          <div className="flex-1 flex items-end justify-center gap-1 h-28 lg:min-h-[7rem] px-4">
            {[44, 72, 38, 88, 55, 92, 48, 78, 62, 95, 40, 85].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 max-w-[0.65rem] rounded-t-md"
                style={{ backgroundColor: color, height: `${h}%` }}
                animate={{ height: [`${Math.max(20, h - 15)}%`, `${Math.min(100, h + 20)}%`, `${h}%`] }}
                transition={{ duration: 1.4 + i * 0.06, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <div className="lg:pl-4 flex flex-col justify-center">
            <p className={cn('text-[10px] font-bold uppercase tracking-widest mb-1', theme.textMuted)}>Live EQ</p>
            <p className={cn('text-sm font-bold', theme.text)}>Micro-viz</p>
            <p className={cn('text-xs mt-2 max-w-[14rem]', theme.textMuted)}>
              Animated bars echo your main colour — useful for motion + brand checks together.
            </p>
          </div>
        </BentoCard>
      </WidgetSection>
    </div>
  );
};
