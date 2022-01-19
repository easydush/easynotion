import React, { FC } from 'react';
import { VoidFn } from 'types';

import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  outlined?: boolean;
  title?: string;
  onClick?: VoidFn;
  children?: React.ReactElement | string;
}

export const Button: FC<ButtonProps> = ({
                                          type = 'button',
                                          outlined,
                                          title,
                                          children,
                                          ...props
                                        }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${outlined && styles.outlined}`}
      title={title}
      {...props}
    >
      {children}
    </button>
  );
};
