import { BaseSyntheticEvent, useCallback } from 'react';
import { MediaType } from 'types';
import { ImageInput, TableEditor, TextEditor, VideoInput } from 'components';

type SwitcherProps = {
  type: Exclude<MediaType, 'LINK'>;
  onChange: (value: string) => void;
  initialContent?: string;
}

export const Switcher = ({ type, onChange, initialContent }: SwitcherProps) => {
  const handleChange = useCallback((event: BaseSyntheticEvent) => {
    onChange(event?.target?.value ?? event);
  }, [onChange]);

  let Component;

  switch (type) {
    case 'IMAGE': {
      Component = ImageInput;
      break;
    }

    case 'TEXT': {
      Component = TextEditor;
      break;
    }

    case 'TABLE': {
      Component = TableEditor;
      break;
    }

    case 'VIDEO': {
      Component = VideoInput;
      break;
    }
  }

  return <Component onChange={handleChange} initialContent={initialContent} />;
};
