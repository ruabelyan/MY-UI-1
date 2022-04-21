import { TextConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateTextStyles = ({
  textAlign,
  textDecor,
  textSize,
  textStyle,
  textTransform,
  textWeight,
}: TextConfigurableComponent) => {
  const { textSizes, textWeights } = themeStore.getValue();

  return `
    ${generateResponsiveValue({
      propertyName: 'text-align',
      responsiveValue: textAlign,
    })};

    ${
      textDecor &&
      `
        text-decoration: ${textDecor};
      `
    };

    ${generateResponsiveValue({
      responsiveValue: textSize,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'font-size',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.textSize,
          propertyValue: value && textSizes[value],
        })};
        `,
    })};

    ${
      textStyle &&
      `
        font-style: ${textStyle};
      `
    };

    ${
      textTransform &&
      `
        text-transform: ${textTransform};
      `
    };

    ${generateStylesWithCSSVariable({
      propertyName: 'font-weight',
      propertyKey: textWeight,
      themeName: CSS_VARIABLE_THEMES.textWeight,
      propertyValue: textWeight && textWeights[textWeight],
    })};
  `;
};

export default generateTextStyles;
