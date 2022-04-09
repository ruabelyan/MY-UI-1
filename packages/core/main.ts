import { css, cx } from '@emotion/css';

// eslint-disable-next-line import/prefer-default-export
export const getButtonStyles = ({ size }) =>
  cx(
    css`
      color: red;

      ${size === 'sm' &&
      `
        font-size: 50px;
        color: green;
      `}
    `,
    'button',
    {
      [`button--${size}`]: size,
    },
  );
