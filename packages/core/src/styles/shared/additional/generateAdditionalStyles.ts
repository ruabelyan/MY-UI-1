import { AdditionalComponentProps } from '@core/components-props';

const generateAdditionalStyles = (
  additionalComponentProps: AdditionalComponentProps,
) => {
  const { cursor, opacity, overflow } = additionalComponentProps;

  return `
      ${
        cursor &&
        `
          cursor: ${cursor}
        `
      };

      ${
        opacity &&
        `
          opacity: ${opacity}
        `
      };

      ${
        overflow &&
        `
          overflow: ${overflow}
        `
      };
    `;
};

export default generateAdditionalStyles;
