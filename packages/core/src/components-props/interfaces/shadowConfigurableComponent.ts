import { ShadowType } from '../types';

export interface ShadowConfigurableComponent {
  shadow?: ShadowType;
  hoverShadow?: ShadowType;
}

export interface FocusableShadowConfigurableComponent {
  focusShadow?: ShadowType;
  activeShadow?: ShadowType;
}
