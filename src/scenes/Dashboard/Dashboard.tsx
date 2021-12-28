import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Note, RootState } from 'types';
import { NoteEdit, NoteView } from './scenes';
import { setCurrent } from '../../store/actions/note';
import { noteSelectors } from 'store/selectors';


export const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  let noteId: Note['id'] = '';

  const checkNote = /note\/(.+)/i.exec(path);

  if (checkNote) {
    noteId = String(checkNote[1]);
  }

  dispatch(setCurrent(noteId));

  const note = useSelector<RootState, Note | null>(noteSelectors.current);

  return <div>
    {note?.id && <NoteView noteId={note.id} />}
    <NoteEdit initialData={note} parentId={note?.id} />
  </div>;
};
