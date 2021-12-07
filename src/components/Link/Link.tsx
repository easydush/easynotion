import React from 'react';
import { VoidWithArgsFn } from '../../types';


interface LinkInputProps {
  onChange: VoidWithArgsFn;
  initialContent?: any;
}

export const Link = ({ onChange, initialContent }: LinkInputProps) => {
  return (
    <input type='url' onChange={onChange} value={initialContent} />
  );
};
