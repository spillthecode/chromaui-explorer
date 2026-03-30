import React from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  CreditCard,
  Megaphone,
  Package,
  Users,
  Wallet
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';
import { MiniBarChart, MiniDonutChart, MiniHorizontalBars, MiniLineChart } from './ReportCharts';

export interface ReportDashboardProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  theme: ThemeColors;
  isDarkMode: boolean;
}

const ReportShell: React.FC<{
  title: string;
  subtitle: string;
  theme: ThemeColors;
  isDarkMode: boolean;
  children: React.ReactNode;
}> = ({ title, subtitle, theme, isDarkMode, children }) => (
  <section
    className={cn(
      'rounded-2xl border overflow-hidden shadow-lg',
      theme.border,
      isDarkMode ? 'bg-white/[0.03]' : 'bg-white'
    )}
  >
    <div
      className={cn(
        'px-5 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2',
        theme.borderLight
      )}
    >
      <div>
        <h2 className={cn('text-sm font-bold tracking-tight', theme.text)}>{title}</h2>
        <p className={cn('text-xs mt-0.5', theme.textMuted)}>{subtitle}</p>
      </div>
      <span
        className={cn(
          'text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg w-fit',
          isDarkMode ? 'bg-white/10 text-white/80' : 'bg-slate-100 text-slate-600'
        )}
      >
        Sample data
      </span>
    </div>
    <div className="p-5 md:p-6">{children}</div>
  </section>
);

const KpiCard: React.FC<{
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  icon: React.ElementType;
  color: string;
  rgbString: string;
  theme: ThemeColors;
}> = ({ label, value, delta, positive, icon: Icon, color, rgbString, theme }) => (
  <div className={cn('p-4 rounded-2xl border', theme.borderLight, theme.card)}>
    <div className="flex items-start justify-between gap-2 mb-3">
      <div className="p-2 rounded-xl" style={{ backgroundColor: `rgba(${rgbString}, 0.12)`, color }}>
        <Icon size={18} />
      </div>
      <span
        className={cn(
          'inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full',
          positive ? 'bg-emerald-500/15 text-emerald-500' : 'bg-rose-500/15 text-rose-500'
        )}
      >
        {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {delta}
      </span>
    </div>
    <p className={cn('text-[11px] font-medium', theme.textMuted)}>{label}</p>
    <p className={cn('text-xl font-bold tabular-nums mt-0.5', theme.text)}>{value}</p>
  </div>
);

export const ExecutiveSummaryReport: React.FC<ReportDashboardProps> = ({
  color,
  rgbString,
  theme,
  isDarkMode
}) => (
  <ReportShell
    title="Executive summary"
    subtitle="Q3 performance · consolidated view"
    theme={theme}
    isDarkMode={isDarkMode}
  >
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      <KpiCard
        label="Net revenue"
        value="$2.84M"
        delta="8.2%"
        positive
        icon={Wallet}
        color={color}
        rgbString={rgbString}
        theme={theme}
      />
      <KpiCard
        label="Active customers"
        value="18.4k"
        delta="3.1%"
        positive
        icon={Users}
        color={color}
        rgbString={rgbString}
        theme={theme}
      />
      <KpiCard
        label="Gross margin"
        value="41.2%"
        delta="0.4%"
        positive={false}
        icon={CreditCard}
        color={color}
        rgbString={rgbString}
        theme={theme}
      />
      <KpiCard
        label="NPS (rolling)"
        value="52"
        delta="12 pts"
        positive
        icon={Building2}
        color={color}
        rgbString={rgbString}
        theme={theme}
      />
    </div>
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <p className={cn('text-xs font-bold uppercase tracking-widest mb-4', theme.textMuted)}>
          Revenue by month
        </p>
        <MiniBarChart
          color={color}
          rgbString={rgbString}
          theme={theme}
          isDarkMode={isDarkMode}
          values={[62, 54, 71, 68, 82, 76, 89, 94, 88, 91, 96, 100]}
          labels={['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']}
        />
      </div>
      <div className="lg:col-span-2">
        <p className={cn('text-xs font-bold uppercase tracking-widest mb-4', theme.textMuted)}>
          Run-rate trend
        </p>
        <MiniLineChart
          color={color}
          rgbString={rgbString}
          theme={theme}
          isDarkMode={isDarkMode}
          points={[12, 18, 15, 22, 28, 34, 31, 38, 42, 45, 52, 58, 61, 67, 72]}
        />
      </div>
    </div>
  </ReportShell>
);

export const SalesPipelineReport: React.FC<ReportDashboardProps> = (props) => {
  const { color, contrastColor, rgbString, theme, isDarkMode } = props;
  return (
    <ReportShell
      title="Sales pipeline"
      subtitle="Opportunity value by stage · closing next 90 days"
      theme={theme}
      isDarkMode={isDarkMode}
    >
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div
          className={cn('md:col-span-2 p-5 rounded-2xl border', theme.borderLight)}
          style={{ borderLeftWidth: 4, borderLeftColor: color }}
        >
          <p className={cn('text-xs font-bold uppercase tracking-widest mb-1', theme.textMuted)}>
            Weighted forecast
          </p>
          <p className={cn('text-3xl font-bold tabular-nums', theme.text)}>$4.02M</p>
          <p className={cn('text-xs mt-2', theme.textMuted)}>vs $3.61M prior quarter</p>
          <div className="mt-4 flex gap-2">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-lg"
              style={{ backgroundColor: color, color: contrastColor }}
            >
              Export CSV
            </span>
            <span className={cn('text-xs font-bold px-3 py-1.5 rounded-lg border', theme.border)}>
              View CRM
            </span>
          </div>
        </div>
        <div className={cn('p-5 rounded-2xl border space-y-3', theme.borderLight, theme.card)}>
          <p className={cn('text-xs font-bold uppercase tracking-widest', theme.textMuted)}>Win rate</p>
          <p className={cn('text-2xl font-black tabular-nums', theme.text)} style={{ color }}>
            27%
          </p>
          <div className={cn('h-2 rounded-full overflow-hidden', isDarkMode ? 'bg-white/10' : 'bg-slate-200')}>
            <div
              className="h-full rounded-full w-[27%]"
              style={{ backgroundColor: color }}
            />
          </div>
          <p className={cn('text-[10px]', theme.textMuted)}>Team target: 25%</p>
        </div>
      </div>
      <p className={cn('text-xs font-bold uppercase tracking-widest mb-4', theme.textMuted)}>
        Stage distribution (count)
      </p>
      <MiniHorizontalBars
        color={color}
        rgbString={rgbString}
        theme={theme}
        isDarkMode={isDarkMode}
        rows={[
          { label: 'Qualified', value: 142, max: 160 },
          { label: 'Proposal', value: 98, max: 160 },
          { label: 'Negotiation', value: 54, max: 160 },
          { label: 'Legal / procurement', value: 31, max: 160 }
        ]}
      />
    </ReportShell>
  );
};

export const MarketingPerformanceReport: React.FC<ReportDashboardProps> = ({
  color,
  rgbString,
  theme,
  isDarkMode
}) => (
  <ReportShell
    title="Marketing performance"
    subtitle="Acquisition mix · last 30 days"
    theme={theme}
    isDarkMode={isDarkMode}
  >
    <div className="flex flex-col xl:flex-row gap-10 xl:items-center">
      <MiniDonutChart
        color={color}
        rgbString={rgbString}
        theme={theme}
        isDarkMode={isDarkMode}
        segments={[
          { label: 'Paid search', pct: 38 },
          { label: 'Organic', pct: 34 },
          { label: 'Referral', pct: 18 },
          { label: 'Direct', pct: 10 }
        ]}
      />
      <div className="flex-1 min-w-0 space-y-6">
        <div>
          <p className={cn('text-xs font-bold uppercase tracking-widest mb-3', theme.textMuted)}>
            Cost per qualified lead
          </p>
          <MiniBarChart
            color={color}
            rgbString={rgbString}
            theme={theme}
            isDarkMode={isDarkMode}
            values={[44, 62, 38, 71, 52]}
            labels={['NA', 'EMEA', 'APAC', 'LATAM', 'Retail']}
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Megaphone, label: 'CTR', val: '3.8%' },
            { icon: Users, label: 'Leads', val: '1,204' },
            { icon: ArrowUpRight, label: 'ROAS', val: '4.1×' }
          ].map((x) => (
            <div
              key={x.label}
              className={cn('p-3 rounded-xl border text-center', theme.borderLight)}
            >
              <x.icon size={16} className="mx-auto mb-2 opacity-60" style={{ color }} />
              <p className={cn('text-[10px] font-bold uppercase tracking-wider', theme.textMuted)}>{x.label}</p>
              <p className={cn('text-lg font-bold tabular-nums mt-1', theme.text)}>{x.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ReportShell>
);

export const OperationsThroughputReport: React.FC<ReportDashboardProps> = ({
  color,
  rgbString,
  theme,
  isDarkMode
}) => {
  const heat = [0.2, 0.45, 0.7, 0.35, 0.9, 0.55, 0.25, 0.8, 0.65, 0.4, 0.75, 0.5];
  return (
    <ReportShell
      title="Operations throughput"
      subtitle="Fulfillment SLA · hourly buckets (sample)"
      theme={theme}
      isDarkMode={isDarkMode}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <p className={cn('text-xs font-bold uppercase tracking-widest mb-4', theme.textMuted)}>
            Orders processed (1k units)
          </p>
          <MiniLineChart
            color={color}
            rgbString={rgbString}
            theme={theme}
            isDarkMode={isDarkMode}
            points={[8, 12, 10, 14, 22, 26, 24, 30, 35, 32, 28, 40, 38, 44, 48]}
          />
        </div>
        <div>
          <p className={cn('text-xs font-bold uppercase tracking-widest mb-4', theme.textMuted)}>
            Load heatmap (relative)
          </p>
          <div className="grid grid-cols-6 gap-1.5 max-w-xs">
            {heat.map((intensity, i) => (
              <div
                key={i}
                className="aspect-square rounded-md border transition-colors"
                style={{
                  backgroundColor: `rgba(${rgbString}, ${0.15 + intensity * 0.85})`,
                  borderColor: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.06)'
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Package size={16} style={{ color }} />
            <p className={cn('text-xs', theme.textMuted)}>
              Darker cells use your main colour at higher opacity — good for stress-testing contrast.
            </p>
          </div>
        </div>
      </div>
    </ReportShell>
  );
};

export const FinancePnlReport: React.FC<ReportDashboardProps> = ({
  color,
  rgbString,
  theme,
  isDarkMode
}) => (
  <ReportShell
    title="P&L snapshot"
    subtitle="Variance vs plan · YTD"
    theme={theme}
    isDarkMode={isDarkMode}
  >
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : undefined }}>
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className={cn('border-b', theme.borderLight, isDarkMode ? 'bg-white/5' : 'bg-slate-50')}>
            {['Line item', 'Actual', 'Plan', 'Var %'].map((h) => (
              <th key={h} className={cn('text-left font-bold px-4 py-3', theme.textMuted)}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Revenue', a: '$8.2M', p: '$7.9M', v: '+3.8%', pos: true },
            { name: 'COGS', a: '$4.1M', p: '$4.0M', v: '+2.5%', pos: false },
            { name: 'OpEx', a: '$2.9M', p: '$3.1M', v: '-6.5%', pos: true },
            { name: 'EBITDA', a: '$1.35M', p: '$1.10M', v: '+22.7%', pos: true }
          ].map((row) => (
            <tr key={row.name} className={cn('border-b last:border-0', theme.borderLight)}>
              <td className={cn('px-4 py-3 font-medium', theme.text)}>{row.name}</td>
              <td className={cn('px-4 py-3 tabular-nums', theme.text)}>{row.a}</td>
              <td className={cn('px-4 py-3 tabular-nums', theme.textMuted)}>{row.p}</td>
              <td className="px-4 py-3">
                <span
                  className="text-xs font-bold tabular-nums px-2 py-1 rounded-md"
                  style={
                    row.pos
                      ? { backgroundColor: `rgba(${rgbString}, 0.18)`, color }
                      : { backgroundColor: 'rgba(244,63,94,0.12)', color: 'rgb(244,63,94)' }
                  }
                >
                  {row.v}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className={cn('text-xs mt-4', theme.textMuted)}>
      Positive variance rows tint with your accent; negative uses a fixed rose tint for readability.
    </p>
  </ReportShell>
);
