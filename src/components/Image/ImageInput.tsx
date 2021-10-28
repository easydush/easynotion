import React from 'react';

import { LinkInput } from '../LinkInput/LinkInput';

interface ImageInputProps {
  onLoad: any;
}

export const ImageInput = ({ onLoad }: ImageInputProps) => {
  // TODO: add spinner and validator
  return (
    <div className='wrapper'>
      <LinkInput onLoad={onLoad} />
    </div>
  );
};
