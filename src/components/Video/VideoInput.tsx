import { VoidFn } from 'types';
import { Link } from 'components';
import { Video } from './Video';

interface VideoInputProps {
  onChange: VoidFn;
  initialContent?: string;
}


export const VideoInput = ({ onChange, initialContent = '' }: VideoInputProps) => {
  return (
    <>
      <Link onChange={onChange} initialContent={initialContent} />
      <Video src={initialContent} />
    </>
  );
};
