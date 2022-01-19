import { FC } from 'react';
import { VoidFn } from 'types';

type InputProps = {
  type: string,
  name?: string,
  value?: any,
  title?: string,
  required?: boolean,
  onChange?: VoidFn,
  className?: string,
  checked?: boolean,
}

export const Input: FC<InputProps> = ({ title, className, required = false, checked, ...props }) => {
  return <div className={`flex justify-between w-72 ${className}`}>
    {title && <span>{title}:</span>}
    <input
      className={`border-2 border-cyan-100 ${checked ? 'checked' : ''}`}
      {...props}
    />
  </div>;
};
