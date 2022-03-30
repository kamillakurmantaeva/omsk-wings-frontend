import React, { ReactElement, ReactNode, Ref } from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

interface IProps {
  children?: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  icon?: string;
  disabled?: boolean;
  [key: string]: any;
}

const Button = (
  { children, className, icon, type = 'button', disabled, ...props }: IProps,
  ref: Ref<HTMLButtonElement>
): ReactElement => (
  <button
    ref={ref}
    className={clsx(classes['btn'], icon ? 'icon-' + icon : '', className)}
    type={type}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default React.forwardRef(Button);
