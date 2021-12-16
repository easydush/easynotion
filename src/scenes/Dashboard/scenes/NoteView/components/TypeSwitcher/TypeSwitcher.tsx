import { convertString2SelectOption } from 'components/NoteLink/tools';
import { CREATE_SUBNOTE, VoidFn, VoidWithArgsFn } from 'types';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import { activate } from 'store/actions/ui';
import { Popover } from 'components/Popover';
import { ReactElement } from 'react';

const TYPES = ['VIDEO', 'LINK', 'TEXT', 'IMAGE', 'TABLE'];

interface TypeInputProps {
  content: ReactElement;
  onHover: VoidFn;
  onChange: VoidWithArgsFn;
}

type Option = {
  value: any;
  label: string;
}

export const TypeSwitcher = ({ content, onHover, onChange }: TypeInputProps) => {
  const options = convertString2SelectOption(TYPES);
  const dispatch = useDispatch();

  const handleChange = (option: any) => {
    onChange((option as Option).value);
    onHover();
    if((option as Option).value === 'LINK') dispatch(activate(CREATE_SUBNOTE))
  };

  return <Popover content={content}><>{options.map(option=><Button label={option.label} onClick={()=>handleChange(option)}/>)}</></Popover>
};
