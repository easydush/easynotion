import { convertString2SelectOption } from 'components/NoteLink/tools';
import { VoidWithArgsFn } from 'types';
import { Button } from 'components';

const TYPES = ['VIDEO', 'LINK', 'TEXT', 'IMAGE', 'TABLE'];

interface TypeInputProps {
  onChange: VoidWithArgsFn;
}

type Option = {
  value: any;
  label: string;
}

export const TypeSwitcher = ({ onChange }: TypeInputProps) => {
  const options = convertString2SelectOption(TYPES);

  const handleChange = (option: any) => {
    onChange((option as Option).value);
  };

  return <div>{options.map(option=><Button label={option.label} onClick={()=>handleChange(option)}/>)}</div>
};
