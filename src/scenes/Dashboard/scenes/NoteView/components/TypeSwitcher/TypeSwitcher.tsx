import { ReactElement } from 'react';
import { MediaType, VoidFn } from 'types';
import { Button, Popover, Icon } from 'components';
import { convertString2SelectOption } from './tools';

const TYPES = ['VIDEO', 'LINK', 'TEXT', 'IMAGE', 'TABLE'];

interface TypeInputProps {
  content: ReactElement;
  onChange: VoidFn;
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
        <Button key={option.label} onClick={() => handleChange(option)}>
          {<Icon type={option.value as MediaType} />}
        </Button>)}
    </>
  </Popover>;
};
