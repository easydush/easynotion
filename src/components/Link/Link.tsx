import { FC } from 'react';
import { VoidFn } from 'types';
import { Input } from 'components';


interface LinkInputProps {
  onChange: VoidFn,
  initialContent?: string,
  title?: string,
}

export const Link: FC<LinkInputProps> = ({ onChange, initialContent, ...props }) => {
  return (
    <Input type='url' onChange={onChange} value={initialContent} {...props} />
  );
};
