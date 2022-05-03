import { ButtonProps } from '@core/components-props';
import { defaultColorNames, getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const buttonDefaultPresets: Record<string, ButtonProps> = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        bg: getColorKey(color, 300),
        hoverBg: getColorKey(color, 400),
        focusBg: getColorKey(color, 500),
        disabledBg: getColorKey(color, 100),
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
  sm: {
    minWidth: calculateRem(50),
    minHeight: calculateRem(20),
    padding: { x: calculateRem(10) },
  },
};

export default buttonDefaultPresets;
