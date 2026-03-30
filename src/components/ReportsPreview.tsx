import React from 'react';
import { motion } from 'motion/react';
import { FileBarChart } from 'lucide-react';
import { cn } from '../lib/utils';
import { ThemeColors } from '../types';
import {
  ExecutiveSummaryReport,
  FinancePnlReport,
  MarketingPerformanceReport,
  OperationsThroughputReport,
  SalesPipelineReport
} from './reports/BusinessReportDashboards';

interface ReportsPreviewProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const ReportsPreview: React.FC<ReportsPreviewProps> = (props) => {
  const { theme } = props;

  return (
    <motion.div
      key="reports"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-10 pb-12"
    >
      <div className={cn('flex items-center gap-2 text-xs font-bold uppercase tracking-widest', theme.textMuted)}>
        <FileBarChart size={14} />
        <p>Business reports & dashboards — accent uses your main colour</p>
      </div>
      <ExecutiveSummaryReport {...props} />
      <SalesPipelineReport {...props} />
      <MarketingPerformanceReport {...props} />
      <OperationsThroughputReport {...props} />
      <FinancePnlReport {...props} />
    </motion.div>
  );
};
