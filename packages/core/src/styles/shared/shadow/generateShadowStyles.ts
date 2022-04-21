import {
  FocusableShadowConfigurableComponent,
  ShadowConfigurableComponent,
} from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';

const generateShadowStyles = ({
  activeShadow,
  focusShadow,
  hoverShadow,
  shadow,
}: ShadowConfigurableComponent & FocusableShadowConfigurableComponent) => {
  const { shadow: shadowTheme } = themeStore.getValue();

  return `
    ${generateStylesWithCSSVariable({
      propertyName: 'box-shadow',
      propertyKey: shadow,
      themeName: CSS_VARIABLE_THEMES.shadow,
      propertyValue: shadow && shadowTheme[shadow],
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'box-shadow',
      propertyKey: hoverShadow,
      themeName: CSS_VARIABLE_THEMES.shadow,
      propertyValue: hoverShadow && shadowTheme[hoverShadow],
      getValueStyles: (pName, pValue) => `
        &:hover {
            ${pName}: ${pValue};
        }
      `,
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'box-shadow',
      propertyKey: activeShadow,
      themeName: CSS_VARIABLE_THEMES.shadow,
      propertyValue: activeShadow && shadowTheme[activeShadow],
      getValueStyles: (pName, pValue) => `
        &:active {
            ${pName}: ${pValue};
        }
      `,
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'box-shadow',
      propertyKey: focusShadow,
      themeName: CSS_VARIABLE_THEMES.shadow,
      propertyValue: focusShadow && shadowTheme[focusShadow],
      getValueStyles: (pName, pValue) => `
        &:focus {
            ${pName}: ${pValue};
        }
      `,
    })};
  `;
};

export default generateShadowStyles;
