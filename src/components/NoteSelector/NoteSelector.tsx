import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Note, RootState, VoidFn } from 'types';
import { noteSelectors } from 'store/selectors';

type NoteSelectorProps = {
  noteId: Note['id'];
  onChange: VoidFn;
  initialContent?: string;
}

export const NoteSelector: FC<NoteSelectorProps> = ({ noteId, onChange, initialContent }) => {
  const notes = useSelector<RootState, Note[]>(noteSelectors.all).filter(note => note.id != noteId);

  return <select onChange={onChange} defaultValue={initialContent}>
    {notes.map(note => <option key={note.id} value={note.id}>{note.title}</option>)}
  </select>;
};
