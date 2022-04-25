import { typedMemo } from '@/shared/helpers';
import { sharedStyles } from '@my-ui/core';
import { useEffect } from 'react';

const StyleReset = () => {
  useEffect(() => {
    sharedStyles.generateResetStyles();
  }, []);
};

export default typedMemo(StyleReset);
