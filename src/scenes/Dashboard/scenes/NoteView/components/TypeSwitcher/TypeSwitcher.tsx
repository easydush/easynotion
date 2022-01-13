import { FC, ReactElement, useCallback } from 'react';
import { MediaType, VoidFn } from 'types';
import { Button, Popover, Icon } from 'components';
import { convertString2SelectOption } from './tools';

interface TypeInputProps {
  content: ReactElement;
  onChange: VoidFn;
}

type Option = {
  value: string;
  label: string;
}

const options = convertString2SelectOption(Object.keys(MediaType));

export const TypeSwitcher: FC<TypeInputProps> = ({ content, onChange }) => {
  const handleChange = useCallback((option: Option) => {
    onChange(option.value);
  }, [onChange]);

  return <Popover content={content}>
    <>
      {options.map(option =>
        <Button key={option.label} onClick={() => handleChange(option)}>
          {<Icon type={option.value as MediaType} />}
        </Button>)}
    </>
  </Popover>;
};
