import { FC } from 'react';
import { VoidFn } from 'types';
import { Link } from 'components';
import { Video } from './Video';

interface VideoInputProps {
  onChange: VoidFn;
  initialContent?: string;
}

const DEFAULT_VIDEO_LINK = 'https://www.youtube.com/watch?v=AalAw9Fqhyo';

export const VideoInput: FC<VideoInputProps> = ({
                                                  onChange,
                                                  initialContent = DEFAULT_VIDEO_LINK,
                                                }: VideoInputProps) => {
  return (
    <>
      <Link onChange={onChange} initialContent={initialContent} title='Video link' />
      <Video src={initialContent} />
    </>
  );
};
