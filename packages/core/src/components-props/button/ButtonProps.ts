import {
  AdditionalComponentProps,
  BackgroundConfigurableComponent,
  BorderConfigurableComponent,
  ColorConfigurableComponent,
  ColorType,
  DisplayConfigurableComponent,
  DynamicComponent,
  FocusableBackgroundConfigurableComponent,
  FocusableBorderConfigurableComponent,
  FocusableColorConfigurableComponent,
  PositionConfigurableComponent,
  PresetConfigurableComponent,
  RadiusConfigurableComponent,
  ShadowConfigurableComponent,
  SizeConfigurableComponent,
  SpacingConfigurableComponent,
  TextConfigurableComponent,
  TransitionConfigurableComponent,
} from '../interfaces';

export default interface ButtonProps
  extends AdditionalComponentProps,
    BackgroundConfigurableComponent,
    FocusableBackgroundConfigurableComponent,
    BorderConfigurableComponent,
    FocusableBorderConfigurableComponent,
    DisplayConfigurableComponent,
    DynamicComponent,
    PositionConfigurableComponent,
    RadiusConfigurableComponent,
    ShadowConfigurableComponent,
    SizeConfigurableComponent,
    SpacingConfigurableComponent,
    TextConfigurableComponent,
    TransitionConfigurableComponent,
    ColorConfigurableComponent,
    FocusableColorConfigurableComponent,
    PresetConfigurableComponent {
  disabledColor?: ColorType;
  disabledBg?: ColorType;
}
