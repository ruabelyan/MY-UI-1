import { ButtonProps, DivProps } from '@core/components-props';

export type PresetThemeConfig = {
  Div?: Record<string, DivProps>;
  Button?: Record<string, ButtonProps>;
};
