import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components';
import { CREATE_SUBNOTE, MediaType, VoidFn, VoidWithArgsFn } from 'types';
import { Popover, Icon } from 'components';
import { convertString2SelectOption } from './tools';
import { activate } from 'store/actions/ui';

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

  return <Popover content={content}>
    <>
      {options.map(option =>
        <Button onClick={()=>handleChange(option)} size='small'>
          {<Icon type={option.value as MediaType} />}
        </Button>)}
    </>
  </Popover>
};
