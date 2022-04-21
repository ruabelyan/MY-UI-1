import * as additionalStylesStyles from './additional';
import * as backgroundStyles from './background';
import * as borderStyles from './border';
import * as colorStyles from './color';
import * as displayStyles from './display';
import * as fontStyles from './font';
import * as positionStyles from './position';
import * as radiusStyles from './radius';
import * as shadowStyles from './shadow';
import * as sizeStyles from './size';
import * as spacingStyles from './spacing';
import * as textStyles from './text';
import * as transitionStyles from './transition';

const sharedStyles = {
  ...colorStyles,
  ...additionalStylesStyles,
  ...backgroundStyles,
  ...borderStyles,
  ...displayStyles,
  ...fontStyles,
  ...positionStyles,
  ...radiusStyles,
  ...shadowStyles,
  ...sizeStyles,
  ...spacingStyles,
  ...textStyles,
  ...transitionStyles,
};

export default sharedStyles;

export * from './css-variables';
export * from './preset';
