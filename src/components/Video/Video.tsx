import React from 'react';
import { extractId } from './utils';

interface VideoProps {
  src: string;
}

export const Video = ({src}: VideoProps) => {
  const embedId = extractId(src);

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
