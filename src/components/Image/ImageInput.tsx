import React from 'react';

import { Link } from 'components/Link';
import { VoidWithArgsFn } from '../../types';

interface ImageInputProps {
  onChange: VoidWithArgsFn;
  initialContent?: any;
}

export const ImageInput = ({ onChange, initialContent }: ImageInputProps) => {
  // TODO: add spinner and validator
  return (
      <Link onChange={onChange} initialContent={initialContent}/>
  );
};
