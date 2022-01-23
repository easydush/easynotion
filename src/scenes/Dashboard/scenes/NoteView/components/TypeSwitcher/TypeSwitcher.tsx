import React, { FC, useCallback } from 'react';
import { MediaType, VoidFn } from 'types';
import { Button, Popover, Icon } from 'components';
import { convertString2SelectOption } from './tools';

interface TypeInputProps {
  label: string;
  onChange: VoidFn;
}

type Option = {
  value: string;
  label: string;
}

const options = convertString2SelectOption(Object.keys(MediaType));

export const TypeSwitcher: FC<TypeInputProps> = ({ label, onChange }) => {

  const handleChange = useCallback((option: Option) => {
    onChange(option.value);
  }, [onChange]);

  return <>
    <div className='pt-3'>
      <Popover controller={<Button children={label} outlined />}>
        <>
          {options.map(option =>
            <Button key={option.label} onClick={() => handleChange(option)} title={option.label}>
              {<Icon type={option.value as MediaType} />}
            </Button>)}
        </>
      </Popover>
    </div>
  </>;
};
