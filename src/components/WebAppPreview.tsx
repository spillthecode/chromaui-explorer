import React from 'react';
import { motion } from 'motion/react';
import { ThemeColors } from '../types';
import { Navigation } from './webapp/Navigation';
import { Pricing } from './webapp/Pricing';
import { Profile } from './webapp/Profile';
import { Buttons } from './webapp/Buttons';
import { Alerts } from './webapp/Alerts';
import { Stats } from './webapp/Stats';
import { DataTable } from './webapp/DataTable';
import { Newsletter } from './webapp/Newsletter';
import { Testimonials } from './webapp/Testimonials';
import { FileUpload } from './webapp/FileUpload';
import { Scheduler } from './webapp/Scheduler';
import { Messaging } from './webapp/Messaging';
import { Ecommerce } from './webapp/Ecommerce';
import { Stepper } from './webapp/Stepper';
import { SearchFilters } from './webapp/SearchFilters';

interface WebAppPreviewProps {
  color: string;
  contrastColor: string;
  rgbString: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const WebAppPreview: React.FC<WebAppPreviewProps> = ({
  color,
  contrastColor,
  rgbString,
  isDarkMode,
  theme
}) => {
  return (
    <motion.div
      key="webapp"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <Navigation color={color} contrastColor={contrastColor} isDarkMode={isDarkMode} theme={theme} />
      <Pricing color={color} contrastColor={contrastColor} theme={theme} />
      <Profile color={color} contrastColor={contrastColor} isDarkMode={isDarkMode} theme={theme} />
      <Buttons color={color} contrastColor={contrastColor} rgbString={rgbString} theme={theme} />
      <Alerts color={color} contrastColor={contrastColor} rgbString={rgbString} theme={theme} />
      <Stats color={color} rgbString={rgbString} theme={theme} />
      <DataTable color={color} contrastColor={contrastColor} isDarkMode={isDarkMode} theme={theme} />
      <Newsletter color={color} contrastColor={contrastColor} theme={theme} />
      <Testimonials color={color} theme={theme} />
      <FileUpload color={color} contrastColor={contrastColor} theme={theme} />
      <Scheduler color={color} contrastColor={contrastColor} isDarkMode={isDarkMode} theme={theme} />
      <Messaging color={color} contrastColor={contrastColor} theme={theme} />
      <Ecommerce color={color} contrastColor={contrastColor} theme={theme} />
      <Stepper color={color} contrastColor={contrastColor} isDarkMode={isDarkMode} theme={theme} />
      <SearchFilters color={color} contrastColor={contrastColor} rgbString={rgbString} theme={theme} />
    </motion.div>
  );
};
