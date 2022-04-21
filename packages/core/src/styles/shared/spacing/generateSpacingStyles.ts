import { SpacingConfigurableComponent } from '@core/components-props';
import { generateResponsiveValue } from '../responsive';

const generateSpacingStyles = ({
  margin,
  padding,
}: SpacingConfigurableComponent) => `
  ${generateResponsiveValue({
    responsiveValue: margin,
    getValueStyles: value =>
      value
        ? `
          ${
            typeof value === 'string'
              ? `margin: ${value}`
              : `
                  ${
                    value.x &&
                    `margin-right: ${value.x}; margin-left: ${value.x};`
                  };

                  ${
                    value.y &&
                    `margin-top: ${value.y}; margin-bottom: ${value.y};`
                  };

                  ${value.t && `margin-top: ${value.t};`};
                  ${value.b && `margin-bottom: ${value.b};`};

                  ${value.r && `margin-right: ${value.r};`};
                  ${value.l && `margin-left: ${value.l};`};
                `
          }
        `
        : '',
  })};

  ${generateResponsiveValue({
    responsiveValue: padding,
    getValueStyles: value =>
      value
        ? `
          ${
            typeof value === 'string'
              ? `padding: ${value}`
              : `
                  ${
                    value.x &&
                    `padding-right: ${value.x}; padding-left: ${value.x};`
                  };

                  ${
                    value.y &&
                    `padding-top: ${value.y}; padding-bottom: ${value.y};`
                  };

                  ${value.t && `padding-top: ${value.t};`};
                  ${value.b && `padding-bottom: ${value.b};`};

                  ${value.r && `padding-right: ${value.r};`};
                  ${value.l && `padding-left: ${value.l};`};
                `
          }
        `
        : '',
  })};
`;

export default generateSpacingStyles;
