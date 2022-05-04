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
  spacingDefaultValues,
  SpacingThemeConfig,
  textSizesDefaultValues,
  TextSizesThemeConfig,
  textWeightsDefaultValues,
  TextWeightsThemeConfig,
  transitionDefaultValues,
  TransitionThemeConfig,
  typographyDefaultValues,
  TypographyThemeConfig,
} from '../design-tokens';
import { createStore } from '../shared';

export type ThemeConfigType = {
  fonts: FontsThemeConfig;
  textSizes: TextSizesThemeConfig;
  textWeights: TextWeightsThemeConfig;
  typography: TypographyThemeConfig;
  colors: ColorsThemeConfig;
  radius: RadiusThemeConfig;
  shadow: ShadowThemeConfig;
  grid: GridThemeConfig;
  responsive: ResponsiveThemeConfig;
  transition: TransitionThemeConfig;
  presets: PresetThemeConfig;
  spacing: Partial<SpacingThemeConfig>;
  remSize: number;
  shouldGenerateCSSVariables?: boolean;
  CSSVariablesPrefix?: string;
};

export const defaultThemeConfig: ThemeConfigType = {
  textSizes: textSizesDefaultValues,
  fonts: fontsDefaultValues,
  textWeights: textWeightsDefaultValues,
  typography: typographyDefaultValues,
  colors: colorsDefaultValues,
  radius: radiusDefaultValues,
  shadow: shadowDefaultValues,
  grid: gridDefaultValues,
  responsive: responsiveDefaultValues,
  transition: transitionDefaultValues,
  presets: presetDefaultValues,
  remSize: 16,
  shouldGenerateCSSVariables: true,
  spacing: spacingDefaultValues,
};

export const getThemeStore = () =>
  createStore<ThemeConfigType>(defaultThemeConfig, generateCSSVariables);

const themeStore = getThemeStore();

export default themeStore;
