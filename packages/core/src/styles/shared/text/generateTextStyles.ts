import { TextConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateTextStyles = ({
  typography,
  textAlign,
  textDecor,
  textSize,
  textStyle,
  textTransform,
  textWeight,
  letterSpacing,
  lineHeight,
}: TextConfigurableComponent) => {
  const { textSizes, textWeights } = themeStore.getValue();

  return `
    ${generateResponsiveValue({
      propertyName: 'text-align',
      responsiveValue: textAlign,
    })};

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
      textDecor &&
      `
        text-decoration: ${textDecor};
      `
    };

    ${
      textStyle &&
      `
        font-style: ${textStyle};
      `
    };

    ${
      letterSpacing &&
      `
        letter-spacing: ${letterSpacing};
      `
    };

    ${
      letterSpacing &&
      `
        letter-spacing: ${letterSpacing};
      `
    };

    ${
      lineHeight &&
      `
        line-height: ${lineHeight};
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
