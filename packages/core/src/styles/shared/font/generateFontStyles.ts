import { FontConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';

const generateFontStyles = ({ fontFamily }: FontConfigurableComponent) => {
  const { fonts } = themeStore.getValue();

  return `
    ${generateStylesWithCSSVariable({
      propertyName: 'font-family',
      propertyKey: fontFamily,
      themeName: CSS_VARIABLE_THEMES.font,
      propertyValue: fontFamily && fonts[fontFamily],
    })};
  `;
};

export default generateFontStyles;
