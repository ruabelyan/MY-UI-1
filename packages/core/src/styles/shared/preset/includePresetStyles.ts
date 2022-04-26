import { PresetThemeConfig } from '@core/design-tokens';
import { themeStore } from '@core/store';

const includePresetStyles = <T extends keyof PresetThemeConfig>({
  componentName,
  presets,
  props,
}: {
  props: Required<PresetThemeConfig>[T][keyof PresetThemeConfig[T]];
  presets?: string | string[];
  componentName: T;
}) => {
  const { presets: presetsTheme } = themeStore.getValue();

  if (!presets || !presetsTheme[componentName]) return props;

  const presetProps = (
    typeof presets === 'string' ? [presets] : presets
  ).reduce((acc, preset) => {
    const componentPresets = presetsTheme[componentName];

    return componentPresets && componentPresets[preset]
      ? {
          ...acc,
          ...componentPresets[preset],
        }
      : acc;
  }, {});

  console.log(
    '🚀 ~ file: includePresetStyles.ts ~ line 31 ~ presetProps',
    presetProps,
  );
  return {
    ...presetProps,
    ...props,
  };
};

export default includePresetStyles;
