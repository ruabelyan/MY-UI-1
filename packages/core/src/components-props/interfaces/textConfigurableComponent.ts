import CSS from 'csstype';
import { ResponsiveValueType, TextSizeType, TextWeightType } from '../types';

export interface TextConfigurableComponent {
  textSize?: ResponsiveValueType<TextSizeType>;
  textWeight?: TextWeightType;

  textDecor?: CSS.Properties['textDecoration'];
  textTransform?: CSS.Properties['textTransform'];
  textAlign?: CSS.Properties['textAlign'];
}
