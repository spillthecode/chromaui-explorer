import React from 'react';
import { Layout, MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface DataTableProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const DataTable: React.FC<DataTableProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  const rows = [
    { name: 'Alice Freeman', email: 'alice@example.com', status: 'Active', role: 'Admin' },
    { name: 'Bob Smith', email: 'bob@example.com', status: 'Pending', role: 'Editor' },
    { name: 'Charlie Brown', email: 'charlie@example.com', status: 'Inactive', role: 'Viewer' },
  ];

  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Layout size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">Data Table</h2>
      </div>
      <div className={cn("rounded-2xl border overflow-hidden", theme.card, theme.borderLight)}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={cn("border-b", theme.borderLight)}>
                <th className="p-4 text-xs font-bold uppercase opacity-70">User</th>
                <th className="p-4 text-xs font-bold uppercase opacity-70">Status</th>
                <th className="p-4 text-xs font-bold uppercase opacity-70">Role</th>
                <th className="p-4 text-xs font-bold uppercase opacity-70 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={cn("border-b last:border-0 transition-colors", isDarkMode ? "hover:bg-white/5" : "hover:bg-slate-50")}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: color, color: contrastColor }}>{row.name[0]}</div>
                      <div>
                        <p className="text-sm font-bold">{row.name}</p>
                        <p className="text-[10px] opacity-70">{row.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-[10px] font-bold",
                      row.status === 'Active' ? "bg-green-500/10 text-green-500" : 
                      row.status === 'Pending' ? "bg-yellow-500/10 text-yellow-500" : "bg-red-500/10 text-red-500"
                    )}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm opacity-90">{row.role}</td>
                  <td className="p-4 text-right">
                    <button className={cn("p-2 rounded-lg", theme.glassMuted)}>
                      <MoreHorizontal size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
