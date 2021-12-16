import { VoidWithArgsFn } from '../../types';

type InputProps = {
  type: string,
  name: string,
  label?: string,
  required?: boolean,
  onChange?: VoidWithArgsFn,
}

export const Input = ({ type, name, label, required = false, onChange }: InputProps) => {
  return <div>
    {label && <div>{label}:</div>}
    <div >
      <input
      type={type}
      name={name}
      className='border-2 border-cyan-100'
      required={required}
      onChange={onChange}
    />
    </div>
  </div>;
};
