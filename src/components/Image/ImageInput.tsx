import { VoidFn } from 'types';
import { Link } from 'components';
import { Image } from './Image';
import { FC } from 'react';

interface ImageInputProps {
  onChange: VoidFn;
  initialContent?: string;
}

export const ImageInput: FC<ImageInputProps> = ({
  onChange,
  initialContent = '',
}: ImageInputProps) => {
  return (
    <>
      <Link
        onChange={onChange}
        initialContent={initialContent}
        title="Image link"
      />
      <Image src={initialContent} alt="" />
    </>
  );
};
