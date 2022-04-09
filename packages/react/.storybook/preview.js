import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Provider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  Story => (
    <Provider>
      <Story />
    </Provider>
  ),
];
