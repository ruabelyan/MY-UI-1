const createStore = <T>(defaultValue?: T) => {
  let value = defaultValue;

  return {
    value,
    getValue: () => value,
    changeValue: (updatedValue: T) => {
      value = updatedValue;
    },
    updateValue: (updatedValue: Partial<T>) => {
      console.log(
        '🚀 ~ file: createStore.ts ~ line 10 ~ updatedValue',
        updatedValue,
      );
      if (typeof value === 'object' && typeof updatedValue === 'object')
        value = {
          ...value,
          ...updatedValue,
        };

      console.log('🚀 ~ file: createStore.ts ~ line 16 ~ value', value);
    },
  };
};

export default createStore;
