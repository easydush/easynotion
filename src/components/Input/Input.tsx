import { FC } from 'react';
import { VoidFn } from 'types';

type InputProps = {
  type: string,
  name?: string,
  value?: any,
  label?: string,
  required?: boolean,
  onChange?: VoidFn,
}

export const Input: FC<InputProps> = ({ label, required = false,  ...props }) => {
  return <div>
    {label && <div>{label}:</div>}
    <div>
      <input
        className='border-2 border-cyan-100'
        {...props}
      />
    </div>
  </div>;
};
