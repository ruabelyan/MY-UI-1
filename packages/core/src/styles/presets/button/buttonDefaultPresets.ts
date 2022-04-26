import { ButtonProps } from '@core/components-props';
import { defaultColorNames } from '@core/design-tokens';

const buttonDefaultPresets: Record<string, ButtonProps> = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        bg: `${color}300`,
        hoverBg: `${color}400`,
        focusBg: `${color}500`,
      },
      [`outlined-${color}`]: {
        borderColor: `${color}300`,
        hoverBorderColor: `${color}400`,
        focusBorderColor: `${color}500`,
        color: `${color}700`,

        bg: 'white',
        hoverBg: 'white',
        focusBg: 'white',
        borderWidth: '1px',
        borderStyle: 'solid',
      },
    }),
    {},
  ),
};

export default buttonDefaultPresets;
