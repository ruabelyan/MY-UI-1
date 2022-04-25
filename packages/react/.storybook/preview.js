import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { StyleReset, ThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  Story => (
    <ThemeProvider
      theme={{
        presets: {
          Div: {
            myCustomDiv: {
              cursor: 'pointer',
              hoverBg: 'blue',
              display: 'flex',
              justify: 'center',
              width: '20rem',
              fontFamily: 'default',
              radius: 'circle',
              shadow: 'sm',
              padding: { xlg: '20px', lg: '10px' },
              textTransform: 'uppercase',
              transition: 'default',
              hoverColor: 'white',
              margin: { b: '20px' },
            },
            blueDiv: {
              color: 'white',
              bg: 'blue',
            },
          },
        },
      }}
    >
      <StyleReset />

      <Story />
    </ThemeProvider>
  ),
];
