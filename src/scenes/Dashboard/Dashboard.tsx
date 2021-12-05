import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CREATE_NOTE, EDIT_NOTE, Note, RootState } from 'types';
import { NoteEdit, NoteView } from './scenes';
import { deactivateAll } from '../../store/actions/ui';


export const Dashboard = () => {
  const location = useLocation();
  const noteId = location.pathname.split('/')[2];
  const note = useSelector<RootState, Note[]>((state) => state.note.notes.filter((note) => note.id === noteId || note.uri === noteId))[0];

  const isActive = useSelector<RootState, string[]>((state) => state.ui.flows.filter((flow) => flow === EDIT_NOTE || flow === CREATE_NOTE)).length > 0;

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(deactivateAll());
  };

  return <div>
    <NoteView noteId={note.id} />
    <NoteEdit visible={isActive} onClose={handleClose} initialData={note} />
  </div>;
};
