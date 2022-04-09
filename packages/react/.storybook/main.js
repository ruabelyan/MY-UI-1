const path = require('path');
const buildConfig = require('../build.config.json');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...config.resolve,
      alias: Object.entries(buildConfig.alias).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: path.resolve(__dirname, '../', value),
        }),
        {},
      ),
    };

    return config;
  },
};
