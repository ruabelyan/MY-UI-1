import deepMergeFlatten from './deepMergeFlatten';

const createStore = <T>(defaultValue: T) => {
  let value = defaultValue;

  return {
    value,
    getValue: () => value,
    changeValue: (updatedValue: T) => {
      value = updatedValue;
    },
    updateValue: (updatedValue: Partial<T>) => {
      if (typeof value === 'object' && typeof updatedValue === 'object')
        value = deepMergeFlatten(value, updatedValue);
    },
  };
};

export default createStore;
