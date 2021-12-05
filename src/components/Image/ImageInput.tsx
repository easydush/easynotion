import React from 'react';

import { Link } from 'components/Link';
import { VoidWithArgsFn } from '../../types';

interface ImageInputProps {
  onChange: VoidWithArgsFn;
}

export const ImageInput = ({ onChange }: ImageInputProps) => {
  // TODO: add spinner and validator
  return (
      <Link onChange={onChange} />
  );
};
