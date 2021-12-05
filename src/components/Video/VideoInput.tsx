import React from 'react';


import '../Header/header.css';
import { Link} from 'components/Link';
import { VoidWithArgsFn } from '../../types';

interface VideoInputProps {
  onChange: VoidWithArgsFn;
}


export const VideoInput = ({ onChange }: VideoInputProps) => {
// TODO: add spinner and validator
  return (
      <Link onChange={onChange} />
  );
};
