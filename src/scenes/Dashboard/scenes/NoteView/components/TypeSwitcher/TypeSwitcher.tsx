import React, { FC, useCallback } from 'react';
import { MediaType, VoidFn } from 'types';
import { Button, Popover, Icon } from 'components';
import { convertString2SelectOption } from './tools';

interface TypeInputProps {
  onChange: VoidFn;
}

type Option = {
  value: string;
  label: string;
};

const options = convertString2SelectOption(Object.keys(MediaType));

export const TypeSwitcher: FC<TypeInputProps> = ({ onChange }) => {
  const handleChange = useCallback(
    (option: Option) => {
      onChange(option.value);
    },
    [onChange],
  );

  return (
    <>
      <div className="pl-2 pr-14">
        <Popover controller={<Icon type="ADD" />}>
          <>
            {options.map((option) => (
              <Button
                key={option.label}
                onClick={() => handleChange(option)}
                title={option.label}
              >
                {<Icon type={option.value as MediaType} />}
              </Button>
            ))}
          </>
        </Popover>
      </div>
    </>
  );
};
