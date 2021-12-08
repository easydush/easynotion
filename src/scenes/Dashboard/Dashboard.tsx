import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CREATE_NOTE, CREATE_SECTION, EDIT_NOTE, Note, RootState } from 'types';
import { NoteEdit, NoteView } from './scenes';
import { deactivateAll } from '../../store/actions/ui';
import { SectionCreate } from './scenes/SectionCreate';


export const Dashboard = () => {
  const location = useLocation();
  const noteId = location.pathname.split('/')[2];
  const note = useSelector<RootState, Note[]>((state) => state.note.notes.filter((note) => note.id === noteId || note.uri === noteId))[0];

  const flows = useSelector<RootState, string[]>((state) => state.ui.flows);

  const isSectionFlowActive = flows.includes(CREATE_SECTION);
  const isNoteFlowActive = flows.includes(CREATE_NOTE||EDIT_NOTE)

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(deactivateAll());
  };

  return <div>
    {note?.id &&<NoteView noteId={note.id} />}
    <SectionCreate visible={isSectionFlowActive} onClose={handleClose} />
    <NoteEdit visible={isNoteFlowActive} onClose={handleClose} initialData={note} />
  </div>;
};
