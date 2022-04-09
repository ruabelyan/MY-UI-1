/* eslint-disable react/default-props-match-prop-types */
import { Direction } from '@/typization/types';
import { createContext, FC } from 'react';

export interface MainContextValue {
  direction: Direction;
}

const DEFAULT_VALUE: MainContextValue = {
  direction: 'ltr',
};

export const MainContext = createContext<MainContextValue>(DEFAULT_VALUE);

MainContext.displayName = 'MainContext';

export const Provider: FC<MainContextValue> = ({ children, ...value }) => (
  <MainContext.Provider value={value}>{children}</MainContext.Provider>
);

Provider.defaultProps = DEFAULT_VALUE;
