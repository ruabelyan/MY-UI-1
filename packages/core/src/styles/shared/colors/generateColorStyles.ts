import {
  BackgroundConfigurableComponent,
  ColorConfigurableComponent,
  FocusableBackgroundConfigurableComponent,
  FocusableColorConfigurableComponent,
} from '@core/components-props';
import { themeStore } from '@core/store';

const generateColorStyles = (
  colorProps: BackgroundConfigurableComponent &
    FocusableBackgroundConfigurableComponent &
    ColorConfigurableComponent &
    FocusableColorConfigurableComponent,
) => {
  const { colors } = themeStore.getValue();

  const {
    bg,
    hoverBg,
    activeBg,
    focusBg,
    color,
    hoverColor,
    activeColor,
    focusColor,
  } = colorProps;

  return `
      ${
        bg &&
        colors[bg] &&
        `
          background-color: ${colors[bg]}
        `
      }
  
      ${
        hoverBg &&
        colors[hoverBg] &&
        `
          &:hover {
              background-color: ${colors[hoverBg]}
          }
        `
      }
  
      ${
        activeBg &&
        colors[activeBg] &&
        `
          &:active {
              background-color: ${colors[activeBg]}
          }
        `
      }
  
      ${
        focusBg &&
        colors[focusBg] &&
        `
          &:focus {
              background-color: ${colors[focusBg]}
          }
        `
      }
  
      ${
        color &&
        colors[color] &&
        `
          color: ${colors[color]}
        `
      }
  
      ${
        hoverColor &&
        colors[hoverColor] &&
        `
          &:hover {
              color: ${colors[hoverColor]}
          }
        `
      }
      
      ${
        activeColor &&
        colors[activeColor] &&
        `
          &:active {
              color: ${colors[activeColor]}
          }
        `
      }
  
      ${
        focusColor &&
        colors[focusColor] &&
        `
          &:focus {
              color: ${colors[focusColor]}
          }
        `
      }
    `;
};

export default generateColorStyles;
