import React from 'react';
import { VoidFn } from 'types';

import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  outlined?: boolean;
  onClick?: VoidFn;
  children?: React.ReactElement | string;
}

export const Button = ({
                         type = 'button',
                         outlined,
                         children,
                         ...props
                       }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${outlined && styles.outlined}`}
      {...props}
    >
      {children}
    </button>
  );
};
