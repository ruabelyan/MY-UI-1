import CSS from 'csstype';
import { ColorType, ResponsiveValueType } from '../types';

export interface BorderConfigurableComponent {
  borderColor?: ColorType;
  hoverBorderColor?: ColorType;

  border?: ResponsiveValueType<CSS.Properties['border']>;
  borderWidth?: ResponsiveValueType<CSS.Properties['borderWidth']>;
}

export interface FocusableBorderConfigurableComponent {
  focusBorderColor?: ColorType;
  activeBorderColor?: ColorType;
}
