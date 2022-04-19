import { css } from '@emotion/css';
import { createStore } from '../shared';

export type CoreLibsConfigType = {
  css: typeof css;
};

const defaultConfig: CoreLibsConfigType = {
  css,
};

const coreLibsStore = createStore<CoreLibsConfigType>(defaultConfig);

export default coreLibsStore;
