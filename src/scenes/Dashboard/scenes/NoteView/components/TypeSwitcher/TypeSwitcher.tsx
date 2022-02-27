import React, { FC, useCallback } from 'react';
import { MediaType, VoidFn } from 'types';
import { Button, Popover, Icon } from 'components';

interface TypeInputProps {
  onChange: VoidFn;
}

const options = Object.keys(MediaType);

export const TypeSwitcher: FC<TypeInputProps> = ({ onChange }) => {
  const handleChange = useCallback(
    (option: string) => {
      onChange(option);
    },
    [onChange],
  );

  return (
    <div className="pl-2 pr-14">
      <Popover controller={<Icon type="ADD" color="gray" />}>
        {options.map((option) => (
          <Button key={option} onClick={() => handleChange(option)}>
            {
              <div className={option}>
                <Icon type={option as MediaType} />
              </div>
            }
          </Button>
        ))}
      </Popover>
    </div>
  );
};
