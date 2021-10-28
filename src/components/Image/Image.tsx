import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <img src={src} alt={alt} />
  );
};
