import React from 'react';
import { VoidWithArgsFn } from '../../types';


interface LinkInputProps {
  onChange: VoidWithArgsFn;
}

export const Link = ({ onChange }: LinkInputProps) => {
  return (
    <input type='url' onChange={onChange} />
  );
};
