import { ReactElement } from 'react';
import { Button, Popover, Icon } from 'components';
import { MediaType, VoidWithArgsFn } from 'types';
import { convertString2SelectOption } from './tools';

const TYPES = ['VIDEO', 'LINK', 'TEXT', 'IMAGE', 'TABLE'];

interface TypeInputProps {
  content: ReactElement;
  onChange: VoidWithArgsFn;
}

type Option = {
  value: string;
  label: string;
}

export const TypeSwitcher = ({ content, onChange }: TypeInputProps) => {
  const options = convertString2SelectOption(TYPES);

  const handleChange = (option: Option) => {
    onChange(option.value);
  };

  return <Popover content={content}>
    <>
      {options.map(option =>
        <Button onClick={() => handleChange(option)} size='small'>
          {<Icon type={option.value as MediaType} />}
        </Button>)}
    </>
  </Popover>;
};
