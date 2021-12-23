import { Note, RootState } from 'types';
import { Button } from '../Button';
import { readNotesTemplate } from '../../tools';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

type LinkItem = {
  key: string,
  label: string,
}

type NoteLinkProps = {
  noteId: Note['id'];
}

export const NoteLinkButton = ({noteId}: NoteLinkProps) => {
  const note = useSelector<RootState, Note[]>((state) => state.note.notes.filter((item) => item.id === noteId))[0];

  const navigate = useNavigate();
  const item: LinkItem = readNotesTemplate([note])[0];

  const handleClick = useCallback(
    () => {
     navigate(`/note/${item.key}`);
    },
    [item],
  );

  return <Button label={item.label} onClick={handleClick} />
};
