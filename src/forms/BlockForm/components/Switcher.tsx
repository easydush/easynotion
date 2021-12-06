import { MediaType, VoidWithArgsFn } from 'types';
import { ImageInput, NoteLink, TableEditor, TextEditor, VideoInput } from 'components';

type SwitcherProps = {
  type: MediaType;
  onChange: VoidWithArgsFn;
}

export const Switcher = ({ type, onChange }: SwitcherProps) => {
  const handleChange = (event: any) => {
    onChange(event?.target?.value ?? event);
  };

  switch (type) {
    case 'IMAGE':
      return <ImageInput onChange={handleChange} />;
    case 'LINK':
      return <NoteLink onChange={handleChange} />;
    case 'TEXT':
      return <TextEditor onChange={handleChange} />;
    case 'TABLE':
      return <TableEditor onChange={handleChange} />;
    case 'VIDEO':
      return <VideoInput onChange={handleChange} />;
  }
};
