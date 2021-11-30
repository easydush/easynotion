import React from 'react';


import '../Header/header.css';
import { Link} from 'components/Link';

interface VideoInputProps {
  onLoad: any;
}


export const VideoInput = ({ onLoad }: VideoInputProps) => {
// TODO: add spinner and validator
  return (
      <Link onLoad={onLoad} />
  );
};
