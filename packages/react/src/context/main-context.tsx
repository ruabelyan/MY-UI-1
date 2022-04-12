import { themeStore } from '@my-ui/core';
import { createContext, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainContextValue {}

const DEFAULT_VALUE: MainContextValue = {};

export const MainContext = createContext<MainContextValue>(DEFAULT_VALUE);

MainContext.displayName = 'MainContext';

export const Provider: FC<MainContextValue> = ({ children, ...value }) => {
  themeStore.updateValue({
    colors: {
      red: 'asdasd',
    },
  });

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

Provider.defaultProps = DEFAULT_VALUE;
