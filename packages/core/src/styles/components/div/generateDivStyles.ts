import { DivProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore } from '@core/store';
import { cx } from '@emotion/css';

const generateDivStyles = (divProps: DivProps) => {
  const coreLibs = coreLibsStore.getValue();

  return {
    Div: cx(
      coreLibs.css`
        ${sharedStyles.generateColorStyles(divProps)}
      `,
    ),
  };
};

export default generateDivStyles;
