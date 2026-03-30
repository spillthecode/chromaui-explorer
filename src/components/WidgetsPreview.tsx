import React from 'react';
import { motion } from 'motion/react';
import { ThemeColors, AccessibilityScore } from '../types';
import { WidgetsHero } from './widgets/widgetPrimitives';
import { WidgetsGallery } from './widgets/WidgetsGallery';

interface WidgetsPreviewProps {
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

export const WidgetsPreview: React.FC<WidgetsPreviewProps> = (props) => {
  const { color, contrastColor, rgbString, theme, isDarkMode } = props;

  return (
    <motion.div
      key="widgets"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12 pb-16 w-full"
    >
      <WidgetsHero
        color={color}
        contrastColor={contrastColor}
        rgbString={rgbString}
        theme={theme}
        isDarkMode={isDarkMode}
      />
      <WidgetsGallery {...props} />
    </motion.div>
  );
};
