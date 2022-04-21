const generateStylesWithCSSVariable = ({
  propertyName,
  propertyValue,
  propertyKey,
  themeName,
  getValueStyles,
}: {
  propertyName: string;
  themeName: string;
  propertyValue?: string | number;
  propertyKey?: string;
  getValueStyles?(pName: string, pValue: string): string;
}) => `
      ${
        propertyValue &&
        (getValueStyles
          ? `
            ${getValueStyles(propertyName, propertyValue.toString())}
            ${getValueStyles(
              propertyName,
              `var(--my-ui-${themeName}--${propertyKey})`,
            )}
        `
          : `
            ${propertyName}: ${propertyValue};
            ${propertyName}: var(--my-ui-${themeName}--${propertyKey});
        `)
      };
    `;

export default generateStylesWithCSSVariable;
