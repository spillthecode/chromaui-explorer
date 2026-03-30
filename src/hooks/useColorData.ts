import { useMemo } from 'react';
import { getLuminance, getContrastRatio, getWCAGScore, getHarmonies, getContrastColor, hexToRgb } from '../utils/color';

export const useColorData = (color: string) => {
  const contrastColor = useMemo(() => getContrastColor(color), [color]);
  const rgbString = useMemo(() => hexToRgb(color), [color]);

  const accessibility = useMemo(() => {
    const colorLum = getLuminance(color);
    const whiteLum = getLuminance('#ffffff');
    const blackLum = getLuminance('#000000');
    
    const ratioWhite = getContrastRatio(colorLum, whiteLum);
    const ratioBlack = getContrastRatio(colorLum, blackLum);
    
    return {
      white: { 
        ratio: ratioWhite, 
        scores: getWCAGScore(ratioWhite),
        isLight: colorLum > 0.5
      },
      black: { 
        ratio: ratioBlack, 
        scores: getWCAGScore(ratioBlack),
        isLight: colorLum > 0.5
      }
    };
  }, [color]);

  const harmonies = useMemo(() => getHarmonies(color), [color]);

  return { contrastColor, rgbString, accessibility, harmonies };
};
