import React from 'react';


interface LinkInputProps {
  onLoad: any;
}

export const Link = ({ onLoad }: LinkInputProps) => {
  const onChange = (event: any) => {
    onLoad(event.target.value);
  };
  return (
      <input type='url' onChange={onChange} />
  );
};