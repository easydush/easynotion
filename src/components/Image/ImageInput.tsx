import { VoidFn } from 'types';
import { Link } from 'components';
import { Image } from './Image';

interface ImageInputProps {
  onChange: VoidFn;
  initialContent?: string;
}

export const ImageInput = ({ onChange, initialContent = '' }: ImageInputProps) => {
  return (
    <>
      <Link onChange={onChange} initialContent={initialContent} />
      <Image src={initialContent} alt='' />
    </>

  );
};
