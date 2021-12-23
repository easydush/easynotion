import React from 'react';
import { VoidWithArgsFn } from '../../types';
import { Input } from '../Input';


interface LinkInputProps {
  onChange: VoidWithArgsFn;
  initialContent?: string;
}

export const Link = ({ onChange, initialContent }: LinkInputProps) => {
  return (
    <Input type='url' onChange={onChange} value={initialContent} />
  );
};