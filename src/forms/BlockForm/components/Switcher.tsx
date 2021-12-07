import { MediaType, VoidWithArgsFn } from 'types';
import { ImageInput, NoteLink, TableEditor, TextEditor, VideoInput } from 'components';

type SwitcherProps = {
  type: MediaType;
  onChange: VoidWithArgsFn;
  initialContent?: any;
}

export const Switcher = ({ type, onChange, initialContent }: SwitcherProps) => {
  const handleChange = (event: any) => {
    onChange(event?.target?.value ?? event);
  };

  switch (type) {
    case 'IMAGE':
      return <ImageInput onChange={handleChange} initialContent={initialContent} />;
    case 'LINK':
      return <NoteLink onChange={handleChange} initialContent={initialContent}/>;
    case 'TEXT':
      return <TextEditor onChange={handleChange} initialContent={initialContent}/>;
    case 'TABLE':
      return <TableEditor onChange={handleChange} initialContent={initialContent}/>;
    case 'VIDEO':
      return <VideoInput onChange={handleChange} initialContent={initialContent}/>;
  }
};
