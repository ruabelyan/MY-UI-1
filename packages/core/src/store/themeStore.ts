import { generateCSSVariables } from '@core/styles/shared';
import {
  colorsDefaultValues,
  ColorsThemeConfig,
  fontsDefaultValues,
  FontsThemeConfig,
  gridDefaultValues,
  GridThemeConfig,
  presetDefaultValues,
  PresetThemeConfig,
  radiusDefaultValues,
  RadiusThemeConfig,
  responsiveDefaultValues,
  ResponsiveThemeConfig,
  shadowDefaultValues,
  ShadowThemeConfig,
  textSizesDefaultValues,
  TextSizesThemeConfig,
  textWeightsDefaultValues,
  TextWeightsThemeConfig,
  transitionDefaultValues,
  TransitionThemeConfig,
} from '../design-tokens';
import { createStore } from '../shared';

export type ThemeConfigType = {
  fonts: FontsThemeConfig;
  textSizes: TextSizesThemeConfig;
  textWeights: TextWeightsThemeConfig;
  colors: ColorsThemeConfig;
  radius: RadiusThemeConfig;
  shadow: ShadowThemeConfig;
  grid: GridThemeConfig;
  responsive: ResponsiveThemeConfig;
  transition: TransitionThemeConfig;
  presets: PresetThemeConfig;
  remSize: number;
};

const defaultConfig: ThemeConfigType = {
  textSizes: textSizesDefaultValues,
  fonts: fontsDefaultValues,
  textWeights: textWeightsDefaultValues,
  colors: colorsDefaultValues,
  radius: radiusDefaultValues,
  shadow: shadowDefaultValues,
  grid: gridDefaultValues,
  responsive: responsiveDefaultValues,
  transition: transitionDefaultValues,
  presets: presetDefaultValues,
  remSize: 16,
};

generateCSSVariables(defaultConfig);

const themeStore = createStore<ThemeConfigType>(
  defaultConfig,
  generateCSSVariables,
);

export default themeStore;
