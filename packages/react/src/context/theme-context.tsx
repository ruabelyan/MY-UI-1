import { ThemeConfigType, themeStore } from '@my-ui/core';
import { createContext, FC } from 'react';

export const ThemeContext = createContext<Partial<ThemeConfigType>>({});

ThemeContext.displayName = 'ThemeContext';

export const ThemeProvider: FC<{ theme: Partial<ThemeConfigType> }> = ({
  children,
  theme,
}) => {
  themeStore.updateValue(theme);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
