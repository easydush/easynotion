import { convertString2SelectOption } from 'components/NoteLink/tools';
import {  CREATE_SUBNOTE, VoidWithArgsFn } from 'types';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import { activate } from 'store/actions/ui';

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
  const dispatch = useDispatch();
  const handleChange = (option: any) => {
    onChange((option as Option).value);
    if((option as Option).value === 'LINK') dispatch(activate(CREATE_SUBNOTE))
  };

  return <div>{options.map(option=><Button label={option.label} onClick={()=>handleChange(option)}/>)}</div>
};
