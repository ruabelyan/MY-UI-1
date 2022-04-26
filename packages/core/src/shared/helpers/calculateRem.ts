import { themeStore } from '@core/store';

const calculateRem = (px: number) => {
  const { remSize } = themeStore.getValue();

  return `${px / remSize}rem`;
};

export default calculateRem;
