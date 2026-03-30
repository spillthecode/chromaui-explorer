export type TabType = 'phone' | 'webapp' | 'widgets' | 'websites' | 'reports';
export type DesignTrend = 'modern' | 'glass' | 'neumorphic' | 'brutalist';

export interface ThemeColors {
  bg: string;
  sidebar: string;
  card: string;
  text: string;
  textMuted: string;
  textMutedLg: string;
  border: string;
  borderLight: string;
  glass: string;
  glassMuted: string;
  rounded: string;
  roundedLg: string;
  roundedXl: string;
}

export interface AccessibilityScore {
  ratio: number;
  scores: {
    aaNormal: boolean;
    aaLarge: boolean;
    aaaNormal: boolean;
    aaaLarge: boolean;
  };
  isLight: boolean;
}

export interface Harmonies {
  complementary: string[];
  analogous: string[];
  triadic: string[];
  monochromatic: string[];
}
