import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { ButtonProps, componentStyles } from '@my-ui/core';
import cx from 'classnames';
import React, { FC, useContext } from 'react';

const Button: FC<ButtonProps> = ({
  children,
  component: Component = 'button',
  className,
  ...divProps
}) => {
  const divStyles = componentStyles.generateButtonStyles(divProps);

  useContext(ThemeContext);

  return (
    <Component className={cx(divStyles.Button, className)}>
      {children}
    </Component>
  );
};

export default typedMemo(Button);
