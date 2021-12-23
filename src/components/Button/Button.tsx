import React from 'react';
import './button.css';

interface ButtonProps {
  type?:  'button' | 'submit' | 'reset' | undefined;
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  outlined?: boolean;
  label?: string;
  onClick?: () => void;
  children?: React.ReactElement;
}

export const Button = ({
                        type='button',
                         primary = false,
                         size = 'medium',
                         backgroundColor,
                         outlined,
                         label,
                         children,
                         ...props
                       }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode, outlined && `storybook-button--outlined`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {children}
    </button>
  );
};
