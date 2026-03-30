import { useState } from 'react';
import { generateMoodColor } from '../services/aiService';

export const useMoodGenerator = (setColor: (color: string) => void) => {
  const [mood, setMood] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateMoodPalette = async () => {
    if (!mood.trim() || isGenerating) return;
    setIsGenerating(true);
    const hex = await generateMoodColor(mood);
    if (hex) {
      setColor(hex);
      setMood('');
    }
    setIsGenerating(false);
  };

  return { mood, setMood, isGenerating, generateMoodPalette };
};
