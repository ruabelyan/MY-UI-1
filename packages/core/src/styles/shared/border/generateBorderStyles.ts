import {
  BorderConfigurableComponent,
  FocusableBorderConfigurableComponent,
} from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateBorderStyles = ({
  activeBorderColor,
  borderStyle,
  borderColor,
  borderWidth,
  focusBorderColor,
  hoverBorderColor,
}: BorderConfigurableComponent & FocusableBorderConfigurableComponent) => {
  const { colors } = themeStore.getValue();

  return `
      ${generateResponsiveValue({
        propertyName: 'border-style',
        responsiveValue: borderStyle,
      })};

      ${generateResponsiveValue({
        propertyName: 'border-width',
        responsiveValue: borderWidth,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: borderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: borderColor && colors[borderColor],
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: hoverBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: hoverBorderColor && colors[hoverBorderColor],
        getValueStyles: (pName, pValue) => `
          &:hover {
              ${pName}: ${pValue};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: activeBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: activeBorderColor && colors[activeBorderColor],
        getValueStyles: (pName, pValue) => `
          &:active {
              ${pName}: ${pValue};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: focusBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: focusBorderColor && colors[focusBorderColor],
        getValueStyles: (pName, pValue) => `
          &:focus {
              ${pName}: ${pValue};
          }
        `,
      })};
    `;
};

export default generateBorderStyles;
