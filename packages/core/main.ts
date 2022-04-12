import { css, cx } from '@emotion/css';
import { themeStore } from './store';

// eslint-disable-next-line import/prefer-default-export
export const getButtonStyles = ({ size } = { size: 'md' }): string => {
  const globalConfigs = themeStore.getValue();

  console.log(
    '🚀 ~ file: main.ts ~ line 7 ~ getButtonStyles ~ globalConfigs',
    globalConfigs,
  );

  return cx(
    css`
      color: red;

      ${size === 'sm' &&
      `
        font-size: 50px;
        color: green;
      `}
    `,
    'button',
    `button--${size}`,
  );
};

export * from './store';
