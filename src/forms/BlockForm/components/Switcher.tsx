import { BaseSyntheticEvent, useCallback } from 'react';
import { MediaType } from 'types';
import { ImageInput, TableEditor, TextEditor, VideoInput } from 'components';

type SwitcherProps = {
  type: Exclude<MediaType, MediaType.LINK>;
  onChange: (value: string) => void;
  initialContent?: string;
}

export const Switcher = ({ type, onChange, initialContent }: SwitcherProps) => {
  const handleChange = useCallback((event: BaseSyntheticEvent) => {
    onChange(event?.target?.value ?? event);
  }, [onChange]);

  let Component;

  switch (type) {
    case MediaType.IMAGE: {
      Component = ImageInput;
      break;
    }

    case MediaType.TEXT: {
      Component = TextEditor;
      break;
    }

    case MediaType.TABLE: {
      Component = TableEditor;
      break;
    }

    case MediaType.VIDEO: {
      Component = VideoInput;
      break;
    }
  }

  return <Component onChange={handleChange} initialContent={initialContent} />;
};
