import React from 'react';

import { Link } from 'components/Link';
import { VoidFn } from '../../types';
import { Video } from './Video';

interface VideoInputProps {
  onChange: VoidFn;
  initialContent?: any;
}


export const VideoInput = ({ onChange, initialContent }: VideoInputProps) => {
  return (
    <>
      <Link onChange={onChange} initialContent={initialContent} />
      <Video src={initialContent} />
    </>
  );
};
