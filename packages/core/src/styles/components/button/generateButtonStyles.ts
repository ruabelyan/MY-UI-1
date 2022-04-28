import { ButtonProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { deepMergeFlatten } from '@core/shared';
import { coreLibsStore, themeStore } from '@core/store';
import { includePresetStyles } from '@core/styles/shared';
import getButtonDefaultProps from './getButtonDefaultProps';

const generateButtonStyles = (buttonProps: ButtonProps) => {
  const { css, cx } = coreLibsStore.getValue();
  const { colors } = themeStore.getValue();

  const buttonDefaultProps = getButtonDefaultProps();

  buttonProps = includePresetStyles({
    componentName: 'Button',
    presets:
      buttonProps.disableDefaultStyles || buttonProps.presets !== undefined
        ? buttonProps.presets
        : buttonDefaultProps.presets,
    props: buttonProps,
  });

  if (!buttonProps.disableDefaultStyles)
    buttonProps = deepMergeFlatten(buttonDefaultProps, buttonProps);

  const { disabledBg, disabledColor } = buttonProps;

  return {
    Button: cx(
      css`
        ${sharedStyles.generateAdditionalStyles(buttonProps)}

        ${sharedStyles.generateColorStyles(buttonProps)}

        ${sharedStyles.generateBackgroundStyles(buttonProps)}

        ${sharedStyles.generateBorderStyles(buttonProps)}

        ${sharedStyles.generateDisplayStyles(buttonProps)}

        ${sharedStyles.generateFontStyles(buttonProps)}

        ${sharedStyles.generateRadiusStyles(buttonProps)}

        ${sharedStyles.generateShadowStyles(buttonProps)}

        ${sharedStyles.generateSizeStyles(buttonProps)}

        ${sharedStyles.generateSpacingStyles(buttonProps)}

        ${sharedStyles.generateTextStyles(buttonProps)}

        ${sharedStyles.generateTransitionStyles(buttonProps)}

        &:disabled {
          ${disabledColor &&
          colors[disabledColor] &&
          `color: ${colors[disabledColor]}`};

          ${disabledBg &&
          colors[disabledBg] &&
          `background-color: ${colors[disabledBg]}`};
        }
      `,
    ),
  };
};

export default generateButtonStyles;
