import React, { useId } from 'react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface ChartProps {
  color: string;
  rgbString: string;
  theme: ThemeColors;
  isDarkMode: boolean;
}

/** Normalized column bar chart */
export const MiniBarChart: React.FC<ChartProps & { values: number[]; labels?: string[] }> = ({
  color,
  rgbString,
  theme,
  values,
  labels
}) => {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end justify-between gap-2 h-36 pt-2">
      {values.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2 min-w-0">
          <div className="w-full flex-1 flex items-end justify-center rounded-t-lg overflow-hidden min-h-[4px]">
            <div
              className="w-full max-w-[2.5rem] rounded-t-md transition-all duration-500"
              style={{
                height: `${(v / max) * 100}%`,
                minHeight: 4,
                backgroundColor: color,
                boxShadow: `0 -4px 12px rgba(${rgbString}, 0.35)`
              }}
            />
          </div>
          {labels && (
            <span className={cn('text-[10px] font-medium truncate w-full text-center', theme.textMuted)}>
              {labels[i]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

/** SVG area-style line chart */
export const MiniLineChart: React.FC<ChartProps & { points: number[] }> = ({
  color,
  isDarkMode,
  points
}) => {
  const gid = useId();
  const w = 320;
  const h = 120;
  const pad = 8;
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const range = max - min || 1;
  const n = Math.max(points.length - 1, 1);
  const coords = points.map((p, i) => {
    const x = pad + (i / n) * (w - pad * 2);
    const y = h - pad - ((p - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });
  const lineD = `M ${coords.join(' L ')}`;
  const areaD = `${lineD} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#${gid})`} />
      <path
        d={lineD}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((p, i) => {
        const x = pad + (i / n) * (w - pad * 2);
        const y = h - pad - ((p - min) / range) * (h - pad * 2);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill={color}
            stroke="white"
            strokeWidth="1.5"
            className={cn(isDarkMode && 'stroke-slate-900')}
          />
        );
      })}
    </svg>
  );
};

/** Donut via conic gradient — wedges use main colour at stepped opacity */
export const MiniDonutChart: React.FC<ChartProps & { segments: { label: string; pct: number }[] }> = ({
  color,
  rgbString,
  theme,
  isDarkMode,
  segments
}) => {
  const muted = isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.08)';
  const wedgeColor = (i: number) => {
    if (i === 0) return color;
    if (i === 1) return `rgba(${rgbString}, 0.5)`;
    if (i === 2) return `rgba(${rgbString}, 0.28)`;
    return muted;
  };
  let acc = 0;
  const stops: string[] = [];
  segments.forEach((s, i) => {
    const start = acc;
    acc += s.pct;
    stops.push(`${wedgeColor(i)} ${start}% ${acc}%`);
  });
  const holeBg = isDarkMode ? '#171717' : '#ffffff';

  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div
        className="relative w-28 h-28 shrink-0 rounded-full"
        style={{ background: `conic-gradient(${stops.join(', ')})` }}
      >
        <div
          className={cn('absolute inset-0 m-auto w-[58%] h-[58%] rounded-full border', theme.border)}
          style={{ backgroundColor: holeBg }}
        />
      </div>
      <ul className="space-y-2 min-w-[8rem]">
        {segments.map((s, i) => (
          <li key={s.label} className="flex items-center justify-between gap-4 text-xs">
            <span className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: wedgeColor(i) }}
              />
              <span className={theme.textMuted}>{s.label}</span>
            </span>
            <span className={cn('font-bold tabular-nums', theme.text)}>{s.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/** Horizontal stacked / comparison bars */
export const MiniHorizontalBars: React.FC<
  ChartProps & { rows: { label: string; value: number; max: number }[] }
> = ({ color, rgbString, theme, isDarkMode, rows }) => (
  <div className="space-y-3">
    {rows.map((row) => (
      <div key={row.label}>
        <div className="flex justify-between text-xs mb-1">
          <span className={theme.textMuted}>{row.label}</span>
          <span className={cn('font-bold tabular-nums', theme.text)}>{row.value}</span>
        </div>
        <div className={cn('h-2 rounded-full overflow-hidden', isDarkMode ? 'bg-white/10' : 'bg-slate-200')}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${Math.min(100, (row.value / row.max) * 100)}%`,
              backgroundColor: color,
              boxShadow: `0 0 12px rgba(${rgbString}, 0.45)`
            }}
          />
        </div>
      </div>
    ))}
  </div>
);
