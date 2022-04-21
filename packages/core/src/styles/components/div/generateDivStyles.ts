import { DivProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore } from '@core/store';
import { cx } from '@emotion/css';

const generateDivStyles = (divProps: DivProps) => {
  const { css } = coreLibsStore.getValue();

  return {
    Div: cx(
      css`
        ${sharedStyles.generateAdditionalStyles(divProps)}

        ${sharedStyles.generateColorStyles(divProps)}

        ${sharedStyles.generateBackgroundStyles(divProps)}

        ${sharedStyles.generateBorderStyles(divProps)}

        ${sharedStyles.generateDisplayStyles(divProps)}

        ${sharedStyles.generateFontStyles(divProps)}

        ${sharedStyles.generateRadiusStyles(divProps)}

        ${sharedStyles.generateShadowStyles(divProps)}

        ${sharedStyles.generateSizeStyles(divProps)}

        ${sharedStyles.generateSpacingStyles(divProps)}

        ${sharedStyles.generateTextStyles(divProps)}

        ${sharedStyles.generateTransitionStyles(divProps)}
      `,
    ),
  };
};

export default generateDivStyles;
