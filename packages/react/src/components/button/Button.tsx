import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { ButtonProps, componentStyles } from '@my-ui/core';
import cx from 'classnames';
import React, { FC, useContext } from 'react';

const Button: FC<ButtonProps> = ({
  children,
  component: Component = 'button',
  className,
  ...buttonProps
}) => {
  const buttonStyles = componentStyles.generateButtonStyles(buttonProps);

  useContext(ThemeContext);

  return (
    <Component className={cx(buttonStyles.Button, className)}>
      {children}
    </Component>
  );
};

export default typedMemo(Button);
