import { VoidWithArgsFn } from '../../types';

type InputProps = {
  type: string,
  name?: string,
  value?: any,
  label?: string,
  required?: boolean,
  onChange?: VoidWithArgsFn,
}

export const Input = ({ type, name, label, value, required = false, onChange }: InputProps) => {
  return <div>
    {label && <div>{label}:</div>}
    <div >
      <input
      type={type}
      name={name}
      value={value}
      className='border-2 border-cyan-100'
      required={required}
      onChange={onChange}
    />
    </div>
  </div>;
};
