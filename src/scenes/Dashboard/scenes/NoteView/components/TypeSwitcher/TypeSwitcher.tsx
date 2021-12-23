import { ReactElement } from 'react';
import { Button } from 'components';
import { MediaType, VoidFn, VoidWithArgsFn } from 'types';
import { Popover, Icon } from 'components';
import { convertString2SelectOption } from './tools';

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

  const handleChange = (option: any) => {
    onChange((option as Option).value);
    onHover();
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
