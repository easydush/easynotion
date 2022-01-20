import { FC } from 'react';
import { VoidFn } from 'types';

type InputProps = {
  type: string,
  name?: string,
  value?: any,
  title?: string,
  required?: boolean,
  onChange?: VoidFn,
  checked?: boolean,
}

export const Input: FC<InputProps> = ({ title, required = false, checked, ...props }) => {
  return <>
    {title && <span>{title}:</span>}
    <input
      className={`border-2 border-cyan-100 ${checked ? 'checked' : ''}`}
      {...props}
    />
  </>;
};
