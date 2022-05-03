import { ButtonProps } from '@core/components-props';
import { calculateRem } from '@core/shared';

const getButtonDefaultProps = (): Partial<ButtonProps> => ({
  color: 'white',
  minWidth: calculateRem(112),
  minHeight: calculateRem(48),
  padding: { x: calculateRem(20) },
  cursor: 'pointer',
  radius: 'xs',
  disabledBg: 'gray200',
  disabledColor: 'white',
  presets: 'primary',
});

export default getButtonDefaultProps;
