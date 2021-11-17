import React from 'react';


import '../Header/header.css';
import { LinkInput } from '../LinkInput/LinkInput';

interface VideoInputProps {
  onLoad: any;
}


export const VideoInput = ({ onLoad }: VideoInputProps) => {
// TODO: add spinner and validator
  return (
      <LinkInput onLoad={onLoad} />
  );
};
