import { FC } from 'react';
import { VoidFn } from 'types';
import { Input } from 'components';


interface LinkInputProps {
  onChange: VoidFn;
  initialContent?: string;
}

export const Link: FC<LinkInputProps> = ({ onChange, initialContent }) => {
  return (
    <Input type='url' onChange={onChange} value={initialContent} />
  );
};
