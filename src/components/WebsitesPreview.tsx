import React from 'react';
import { motion } from 'motion/react';
import { ThemeColors } from '../types';
import { WebsiteBrowserFrame } from './websites/WebsiteBrowserFrame';
import {
  AgencyBusinessSite,
  FitnessBusinessSite,
  LegalBusinessSite,
  RestaurantBusinessSite,
  RetailBusinessSite,
  SaasBusinessSite
} from './websites/BusinessSites';

interface WebsitesPreviewProps {
  color: string;
  contrastColor: string;
  isDarkMode: boolean;
  theme: ThemeColors;
}

export const WebsitesPreview: React.FC<WebsitesPreviewProps> = ({
  color,
  contrastColor,
  isDarkMode,
  theme
}) => {
  const siteProps = { color, contrastColor, theme, isDarkMode };

  return (
    <motion.div
      key="websites"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12 pb-12"
    >
      <WebsiteBrowserFrame
        label="Creative agency"
        hostname="apexcreative.studio"
        theme={theme}
        isDarkMode={isDarkMode}
      >
        <AgencyBusinessSite {...siteProps} />
      </WebsiteBrowserFrame>

      <WebsiteBrowserFrame
        label="B2B SaaS"
        hostname="northline.app"
        theme={theme}
        isDarkMode={isDarkMode}
      >
        <SaasBusinessSite {...siteProps} />
      </WebsiteBrowserFrame>

      <WebsiteBrowserFrame
        label="Restaurant"
        hostname="harborandhearth.com"
        theme={theme}
        isDarkMode={isDarkMode}
      >
        <RestaurantBusinessSite {...siteProps} />
      </WebsiteBrowserFrame>

      <WebsiteBrowserFrame
        label="Law firm"
        hostname="morrisonhale.com"
        theme={theme}
        isDarkMode={isDarkMode}
      >
        <LegalBusinessSite {...siteProps} />
      </WebsiteBrowserFrame>

      <WebsiteBrowserFrame
        label="Fitness studio"
        hostname="forgelab.fit"
        theme={theme}
        isDarkMode={isDarkMode}
      >
        <FitnessBusinessSite {...siteProps} />
      </WebsiteBrowserFrame>

      <WebsiteBrowserFrame
        label="Retail / e‑commerce"
        hostname="lumensupply.co"
        theme={theme}
        isDarkMode={isDarkMode}
      >
        <RetailBusinessSite {...siteProps} />
      </WebsiteBrowserFrame>
    </motion.div>
  );
};
