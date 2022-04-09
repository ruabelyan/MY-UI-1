import { MainContext } from '@/index';
import { BaseComponent } from '@/typization/interfaces';
import { getButtonStyles } from '@my-ui/core';
import React, { useContext } from 'react';

export type ButtonProps = BaseComponent;

const Button = ({
  color,
  direction: directionProp,
  size = 'md',
}: ButtonProps) => {
  const { direction } = useContext(MainContext);

  console.log(directionProp, direction);

  return <div className={getButtonStyles({ size })}>Button - {size}</div>;
};

export default Button;
