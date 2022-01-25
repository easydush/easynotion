import { BaseSyntheticEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { MediaType, Note, RootState } from 'types';
import { ContentEditor, ImageInput, VideoInput, NoteSelector } from 'components';
import { noteSelectors } from 'store/selectors';

type SwitcherProps = {
  type: MediaType;
  onChange: (value: string) => void;
  initialContent?: string;
}

export const Switcher = ({ type, onChange, initialContent }: SwitcherProps) => {
  const note = useSelector<RootState, Note | null>(noteSelectors.current);

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

    case MediaType.LINK: {
      return <NoteSelector noteId={note?.id ?? ''} onChange={handleChange} initialContent={initialContent} />;
    }

    case MediaType.TEXT:
    case MediaType.TABLE: {
      return <ContentEditor onChange={handleChange} initialContent={initialContent} type={type} />;
    }
  }

  return <Component onChange={handleChange} initialContent={initialContent} />;
};
