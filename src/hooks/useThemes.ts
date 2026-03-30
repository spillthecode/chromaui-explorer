import React, { useState, useEffect } from 'react';

export const useThemes = (initialColor: string) => {
  const [themes, setThemes] = useState<{ id: string; name: string; color: string }[]>(() => {
    const saved = localStorage.getItem('cvt-themes');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Indigo', color: '#6366f1' },
      { id: '2', name: 'Emerald', color: '#10b981' },
      { id: '3', name: 'Rose', color: '#f43f5e' }
    ];
  });

  const saveTheme = (color: string) => {
    const name = prompt('Enter theme name:', `Theme ${themes.length + 1}`);
    if (name) {
      const newThemes = [...themes, { id: Date.now().toString(), name, color }];
      setThemes(newThemes);
      localStorage.setItem('cvt-themes', JSON.stringify(newThemes));
    }
  };

  const deleteTheme = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newThemes = themes.filter(t => t.id !== id);
    setThemes(newThemes);
    localStorage.setItem('cvt-themes', JSON.stringify(newThemes));
  };

  return { themes, saveTheme, deleteTheme };
};
