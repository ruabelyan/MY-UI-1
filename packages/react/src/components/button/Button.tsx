import { getButtonStyles } from '@my-ui/core';
import React from 'react';

const Button = () => (
  <button type="button" className={getButtonStyles()}>
    Button
  </button>
);

export default Button;
