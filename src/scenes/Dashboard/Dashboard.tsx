import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CREATE_NOTE, EDIT_NOTE, Note, RootState } from 'types';
import { NoteEdit, NoteView } from './scenes';
import { deactivateAll } from 'store/actions/ui';


export const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname;

  let noteId: Note['id'] = '';

  const checkNote = /note\/(.+)/i.exec(path);

  if (checkNote) {
    noteId = String(checkNote[1]);
  }

  const note = useSelector<RootState, Note[]>((state) => state.note.notes.filter((note) => note.id === noteId || note.uri === noteId))[0];

  return <div>
    {note?.id && <NoteView noteId={note.id} />}
    <NoteEdit initialData={note} parentId={note?.id} />
  </div>;
};
