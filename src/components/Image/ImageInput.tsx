import React from 'react';

import { Link } from 'components/Link';
import { VoidFn } from '../../types';
import { Image } from './Image';

interface ImageInputProps {
  onChange: VoidFn;
  initialContent?: any;
}

export const ImageInput = ({ onChange, initialContent }: ImageInputProps) => {
  return (
    <>
      <Link onChange={onChange} initialContent={initialContent} />
      <Image src={initialContent} alt='' />
    </>

  );
};
