import { DivProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { deepMergeFlatten } from '@core/shared';
import { coreLibsStore } from '@core/store';
import { includePresetStyles } from '@core/styles/shared';
import getDivDefaultProps from './getDivDefaultProps';

const generateDivStyles = (divProps: DivProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const divDefaultProps = getDivDefaultProps();

  divProps = includePresetStyles({
    componentName: 'Div',
    presets:
      divProps.presets !== undefined
        ? divProps.presets
        : divDefaultProps.presets,
    props: divProps,
  });

  if (divProps.disableDefaultStyles)
    divProps = deepMergeFlatten(divDefaultProps, divProps);

  return {
    Div: cx(
      css`
        ${sharedStyles.generateAdditionalStyles(divProps)}

        ${sharedStyles.generateColorStyles(divProps)}

        ${sharedStyles.generateBackgroundStyles(divProps)}

        ${sharedStyles.generateBorderStyles(divProps)}

        ${sharedStyles.generateDisplayStyles(divProps)}

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
