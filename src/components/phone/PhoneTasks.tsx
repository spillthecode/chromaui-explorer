import React from 'react';
import { Check, ListTodo } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface PhoneTasksProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const PhoneTasks: React.FC<PhoneTasksProps> = ({
  color,
  contrastColor,
  theme
}) => {
  const tasks = [
    { task: 'Design System Update', category: 'Work', done: true },
    { task: 'Review Brand Colors', category: 'Work', done: false },
    { task: 'Buy Groceries', category: 'Personal', done: false },
    { task: 'Workout Session', category: 'Health', done: false },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Tasks</h3>
      <div className="space-y-3">
        {tasks.map((t, i) => (
          <div key={i} className={cn("flex items-center gap-4 p-4 rounded-2xl border", theme.card, theme.borderLight)}>
            <div 
              className={cn("w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors", t.done ? "border-transparent" : theme.border)}
              style={t.done ? { backgroundColor: color } : {}}
            >
              {t.done && <Check size={14} className="text-white" />}
            </div>
            <div className="flex-1">
              <p className={cn("text-sm font-bold", t.done && "line-through opacity-50")}>{t.task}</p>
              <p className="text-[10px] opacity-50">{t.category}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-4 rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center gap-2" style={{ backgroundColor: color, color: contrastColor }}>
        <ListTodo size={18} />
        Add New Task
      </button>
    </div>
  );
};
