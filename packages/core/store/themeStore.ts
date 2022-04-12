import { createStore } from '../shared';

export type ThemeConfigType = {
  textSizes: Record<string, string | number>;
  textWeights: Record<string, string | number>;
  colors: Record<string, string | number>;
  radius: Record<string, string | number>;
  shadow: Record<string, string | number>;
  grid: {
    columns: string | number;
    gutterWidth: string | number;
  };
  responsive: {
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
  };
  preset: {};
};

const defaultConfig: ThemeConfigType = {
  textSizes: {
    title: '24px',
  },
  textWeights: {
    '300': 300,
  },
  colors: {
    primary100: '#fff',
  },
  radius: {
    circle: '10000rem',
  },
  shadow: {
    sm: '0 0 1px 0 rgb(8 11 14 / 6%), 0 16px 16px -1px rgb(8 11 14 / 10%)',
  },
  grid: {
    columns: 12,
    gutterWidth: 16,
  },
  responsive: {
    xs: '320px',
    sm: '560px',
    md: '1366px',
    lg: '1366px',
  },
  preset: {
    button: {
      // button props
    },
  },
};

const themeStore = createStore<ThemeConfigType>(defaultConfig);

export default themeStore;
