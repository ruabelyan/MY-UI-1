import { calculateEm } from '@core/shared';
import { TypographyThemeConfig } from './types';

const TypographyDefaultValues: TypographyThemeConfig = {
  'display1-bold': {
    textSize: 'display1',
    lineHeight: calculateEm(60, 40),
    textWeight: 'bold',
    letterSpacing: `-${calculateEm(0.8, 40)}`,
  },
};

export default TypographyDefaultValues;
