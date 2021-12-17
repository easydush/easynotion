import React from 'react';

import { Link } from 'components/Link';
import { VoidWithArgsFn } from '../../types';
import { Video } from './Video';

interface VideoInputProps {
  onChange: VoidWithArgsFn;
  initialContent?: any;
}


export const VideoInput = ({ onChange, initialContent }: VideoInputProps) => {
// TODO: add spinner and validator
  return (
    <>
      <Link onChange={onChange} initialContent={initialContent} />
      <Video src={initialContent} />
    </>
  );
};
