import React from 'react';
import { VoidWithArgsFn } from 'types';

import './button.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  outlined?: boolean;
  label?: string;
  onClick?: VoidWithArgsFn;
  children?: React.ReactElement;
}

export const Button = ({
                         type = 'button',
                         size = 'medium',
                         backgroundColor,
                         outlined,
                         label,
                         children,
                         ...props
                       }: ButtonProps) => {
  return (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, 'storybook-button--secondary' , outlined && `storybook-button--outlined`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {children}
    </button>
  );
};
