import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Note, RootState } from 'types';
import { setCurrentNote } from 'store/actions';
import { noteSelectors } from 'store/selectors';
import { NoteEdit, NoteView } from './scenes';


export const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  let noteId: Note['id'] = '';

  const checkNote = /note\/(.+)/i.exec(path);

  if (checkNote) {
    noteId = String(checkNote[1]);
  }

  useEffect(() => {
    dispatch(setCurrentNote(noteId));
  }, [path, noteId, dispatch]);

  const note = useSelector<RootState, Note | null>(noteSelectors.current);

  return <div>
    {note?.id && <NoteView noteId={note.id} />}
    <NoteEdit initialData={note} parentId={note?.id} />
  </div>;
};
