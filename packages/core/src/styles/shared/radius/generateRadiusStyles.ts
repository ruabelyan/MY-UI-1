import { RadiusConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateRadiusStyles = ({ radius }: RadiusConfigurableComponent) => {
  const { radius: radiusTheme } = themeStore.getValue();

  return `
    ${generateResponsiveValue({
      responsiveValue: radius,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'border-radius',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.radius,
          propertyValue: value && radiusTheme[value],
        })};
        `,
    })}
  `;
};

export default generateRadiusStyles;
