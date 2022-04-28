import CSS from 'csstype';
import { ResponsiveValueType, TextSizeType, TextWeightType } from '../types';

export interface TextConfigurableComponent {
  textSize?: ResponsiveValueType<TextSizeType>;
  textWeight?: TextWeightType;

  textAlign?: ResponsiveValueType<CSS.Properties['textAlign']>;
  textStyle?: CSS.Properties['fontStyle'];
  textDecor?: CSS.Properties['textDecoration'];
  textTransform?: CSS.Properties['textTransform'];
  lineHeight?: CSS.Properties['lineHeight'];
  letterSpacing?: CSS.Properties['letterSpacing'];
}
