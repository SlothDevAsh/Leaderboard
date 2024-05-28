import {Dimensions, PixelRatio} from 'react-native';

/**
 * Guideline sizes are based on
 * standard ~5" screen mobile device
 */

const {width, height} = Dimensions.get('window');

export const baseWidth = 350;
export const baseHeight = 680;

export const screenWidth = width;
export const screenHeight = height;

export function xscale(size: number): number {
  return (width / baseWidth) * size;
}

/**
 * Vertical scale
 */
export function yScale(size: number): number {
  return (height / baseHeight) * size;
}

/**
 * Moderate scale
 */
export function mScale(size: number, factor = 0.1): number {
  return size + (xscale(size) - size) * factor;
}

/**
 * Convert pixel to dp
 */
export function toDp(px: number) {
  return px / PixelRatio.get();
}

const fontSize = {
  xs: mScale(10),
  sm: mScale(12),
  base: mScale(14),
  base2: mScale(16),
  lg: mScale(18),
  xl: mScale(24),
  // below values are not used in the original ui file
  xl2: mScale(28),
  xl3: mScale(32),
  xl4: mScale(48),
  xl5: mScale(56),
  xl6: mScale(64),
};

export default {
  xscale,
  yScale,
  mScale,
  toDp,
  screenWidth,
  screenHeight,
  baseWidth,
  baseHeight,
  fontSize,
};
