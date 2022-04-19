import { ResponsiveValueType } from '../types';

export interface SpacingConfigurableComponent {
  margin?:
    | ResponsiveValueType<string>
    | { x?: ResponsiveValueType<string>; y?: ResponsiveValueType<string> };

  padding?:
    | ResponsiveValueType<string>
    | { x?: ResponsiveValueType<string>; y?: ResponsiveValueType<string> };
}
