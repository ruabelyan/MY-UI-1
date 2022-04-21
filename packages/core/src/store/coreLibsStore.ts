import { css, injectGlobal } from '@emotion/css';
import { createStore } from '../shared';

export type CoreLibsConfigType = {
  css: typeof css;
  injectGlobal: typeof injectGlobal;
};

const defaultConfig: CoreLibsConfigType = {
  css,
  injectGlobal,
};

const coreLibsStore = createStore<CoreLibsConfigType>(defaultConfig);

export default coreLibsStore;
