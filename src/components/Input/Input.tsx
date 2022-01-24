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
  return <div className='grid grid-cols-6 gap-6'>
    {title && <span>{title}:</span>}
    <input
      className={`col-span-5 border-2 border-cyan-100 ${checked ? 'checked' : ''}`}
      {...props}
    />
  </div>;
};
