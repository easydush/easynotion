import { BaseSyntheticEvent, useCallback } from 'react';
import { MediaType } from 'types';
import { ContentEditor, ImageInput, VideoInput } from 'components';

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

    case MediaType.VIDEO: {
      Component = VideoInput;
      break;
    }

    case MediaType.TEXT:
    case MediaType.TABLE: {
      return <ContentEditor onChange={handleChange} initialContent={initialContent} type={type} />;
    }
  }

  return <Component onChange={handleChange} initialContent={initialContent} />;
};
