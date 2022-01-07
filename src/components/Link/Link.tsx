import { VoidFn } from 'types';
import { Input } from 'components';


interface LinkInputProps {
  onChange: VoidFn;
  initialContent?: string;
}

export const Link = ({ onChange, initialContent }: LinkInputProps) => {
  return (
    <Input type='url' onChange={onChange} value={initialContent} />
  );
};
