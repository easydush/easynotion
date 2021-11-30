import React from 'react';

import { Link } from 'components/Link';

interface ImageInputProps {
  onLoad: any;
}

export const ImageInput = ({ onLoad }: ImageInputProps) => {
  // TODO: add spinner and validator
  return (
      <Link onLoad={onLoad} />
  );
};
