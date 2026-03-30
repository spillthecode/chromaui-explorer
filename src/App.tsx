/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Layout } from './components/Layout';
import { TabSwitcher } from './components/TabSwitcher';
import { MainContent } from './components/MainContent';
import { useAppState } from './hooks/useAppState';

export default function App() {
  const {
    color, setColor,
    activeTab, setActiveTab,
    activePhoneScreen, setActivePhoneScreen,
    isDarkMode, setIsDarkMode,
    designTrend, setDesignTrend,
    themes, saveTheme, deleteTheme,
    contrastColor, rgbString, accessibility, harmonies,
    mood, setMood, isGenerating, generateMoodPalette,
    copied, copyToClipboard,
    theme
  } = useAppState();

  const handleCopyToClipboard = () => copyToClipboard(color);

  return (
    <Layout theme={theme}>
      <Sidebar 
        color={color}
        setColor={setColor}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        designTrend={designTrend}
        setDesignTrend={setDesignTrend}
        mood={mood}
        setMood={setMood}
        isGenerating={isGenerating}
        generateMoodPalette={generateMoodPalette}
        themes={themes}
        saveTheme={() => saveTheme(color)}
        deleteTheme={deleteTheme}
        harmonies={harmonies}
        accessibility={accessibility}
        theme={theme}
        contrastColor={contrastColor}
        rgbString={rgbString}
        copied={copied}
        copyToClipboard={handleCopyToClipboard}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="p-6 lg:p-8 pb-0">
          <TabSwitcher 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            theme={theme} 
            color={color} 
          />
        </header>

        <MainContent 
          activeTab={activeTab}
          color={color}
          contrastColor={contrastColor}
          rgbString={rgbString}
          accessibility={accessibility}
          theme={theme}
          isDarkMode={isDarkMode}
          designTrend={designTrend}
          activePhoneScreen={activePhoneScreen}
          setActivePhoneScreen={setActivePhoneScreen}
        />
      </div>
    </Layout>
  );
}
