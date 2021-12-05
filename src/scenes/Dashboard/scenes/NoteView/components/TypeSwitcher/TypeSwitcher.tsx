import { useState } from 'react';
import Select from 'react-select';
import { convertString2SelectOption } from 'components/NoteLink/tools';
import { VoidWithArgsFn } from 'types';

const TYPES = ['VIDEO', 'LINK', 'TEXT', 'IMAGE', 'TABLE'];

interface TypeInputProps {
  onChange: VoidWithArgsFn;
  defaultValue: string;
}

type Option = {
  value: any;
  label: string;
}

export const TypeSwitcher = ({ onChange, defaultValue }: TypeInputProps) => {
  const options = convertString2SelectOption(TYPES);
  const initial = { value: defaultValue, label: String(defaultValue).toLowerCase() };
  const [selectedOption, setSelectedOption] = useState<Option>(initial);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    onChange((selectedOption as Option).value);
  };

  return <Select defaultValue={initial} onChange={handleChange} options={options} />;
};
