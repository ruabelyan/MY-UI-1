import { coreLibsStore, ThemeConfigType } from '@core/store';
import { CSS_VARIABLE_THEMES } from './constants';

const generateCSSVariablesForTheme = ({
  theme,
  themeName,
}: {
  themeName: string;
  theme: Record<string, string | number>;
}) => `
    ${Object.entries(theme).reduce(
      (prevVariables, [colorKey, colorValue]) => `
          ${prevVariables}
          
          --my-ui-${themeName}--${colorKey}: ${colorValue};
        `,
      '',
    )}
    `;

const generateCSSVariables = (themeConfig: ThemeConfigType) => {
  const { injectGlobal } = coreLibsStore.getValue();

  return injectGlobal`
    :root {
        ${generateCSSVariablesForTheme({
          theme: themeConfig.colors,
          themeName: CSS_VARIABLE_THEMES.color,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.fonts,
          themeName: CSS_VARIABLE_THEMES.font,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.radius,
          themeName: CSS_VARIABLE_THEMES.radius,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.shadow,
          themeName: CSS_VARIABLE_THEMES.shadow,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.textSizes,
          themeName: CSS_VARIABLE_THEMES.textSize,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.textWeights,
          themeName: CSS_VARIABLE_THEMES.textWeight,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.transition,
          themeName: CSS_VARIABLE_THEMES.transition,
        })}
    }
  `;
};

export default generateCSSVariables;
