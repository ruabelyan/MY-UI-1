import { ColorType, Direction, SizeType } from '../types';

export interface BaseComponent {
  direction?: Direction;
  color?: ColorType;
  size?: SizeType;
}
