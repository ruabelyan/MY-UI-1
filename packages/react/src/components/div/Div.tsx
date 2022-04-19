import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DivProps } from '@core/components-props';
import { componentStyles } from '@my-ui/core';
import cx from 'classnames';
import React, { FC, useContext } from 'react';

const Div: FC<DivProps> = ({
  children,
  component: Component = 'div',
  className,
  ...divProps
}) => {
  const divStyles = componentStyles.generateDivStyles(divProps);

  useContext(ThemeContext);

  return (
    <Component className={cx(divStyles.Div, className)}>{children}</Component>
  );
};

export default typedMemo(Div);
