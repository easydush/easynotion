import { MediaType,  VoidFn } from 'types';
import { ImageInput,  TableEditor, TextEditor, VideoInput } from 'components';

type SwitcherProps = {
  type: Exclude<MediaType, 'LINK'>;
  onChange: VoidFn;
  initialContent?: string;
}

export const Switcher = ({ type, onChange, initialContent }: SwitcherProps) => {
  const handleChange = (event: any) => {
    onChange(event?.target?.value ?? event);
  };

  switch (type) {
    case 'IMAGE':
      return <ImageInput onChange={handleChange} initialContent={initialContent} />;
    case 'TEXT':
      return <TextEditor onChange={handleChange} initialContent={initialContent}/>;
    case 'TABLE':
      return <TableEditor onChange={handleChange} initialContent={initialContent}/>;
    case 'VIDEO':
      return <VideoInput onChange={handleChange} initialContent={initialContent}/>;
  }
};
