import { ButtonProps } from '@core/components-props';
import { defaultColorNames, getColorKey } from '@core/design-tokens';

const buttonDefaultPresets: Record<string, ButtonProps> = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        bg: getColorKey(color, 300),
        hoverBg: getColorKey(color, 400),
        focusBg: getColorKey(color, 500),
      },
      [`outlined-${color}`]: {
        borderColor: getColorKey(color, 300),
        hoverBorderColor: getColorKey(color, 400),
        focusBorderColor: getColorKey(color, 500),
        color: getColorKey(color, 700),

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
