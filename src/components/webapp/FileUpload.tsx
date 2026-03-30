import React from 'react';
import { Upload } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';

interface FileUploadProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  color,
  contrastColor,
  theme
}) => {
  return (
    <section className="space-y-4">
      <div className={cn("flex items-center gap-2", theme.textMuted)}>
        <Upload size={16} />
        <h2 className="text-xs font-bold uppercase tracking-widest">File Management</h2>
      </div>
      <div className={cn("p-12 rounded-[2rem] border-2 border-dashed flex flex-col items-center gap-4 transition-colors hover:bg-white/5", theme.borderLight)}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: color, color: contrastColor }}>
          <Upload size={32} />
        </div>
        <div className="text-center">
          <h4 className="font-bold">Click or drag to upload</h4>
          <p className={cn("text-xs mt-1", theme.textMutedLg)}>Support for PNG, JPG, or PDF (max 10MB)</p>
        </div>
        <button className={cn("px-6 py-2 rounded-lg font-bold text-xs border", theme.glass)}>Select Files</button>
      </div>
    </section>
  );
};
