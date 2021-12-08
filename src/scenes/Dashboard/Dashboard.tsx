import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CREATE_NOTE, CREATE_SECTION, EDIT_NOTE, Note, RootState, Section } from 'types';
import { NoteEdit, NoteView } from './scenes';
import { deactivateAll } from '../../store/actions/ui';
import { SectionCreate } from './scenes/SectionCreate';
import { SectionView } from './scenes/SectionView';


export const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname

  let sectionId: Section['id'] = '';
  let noteId: Note['id'] = '';

  const checkSection = /section\/(.+)/i.exec(path);

  if (checkSection) {
    sectionId = String(checkSection[1]);
  }

  const checkNote = /note\/(.+)/i.exec(path);

  if (checkNote) {
    noteId = String(checkNote[1]);
  }

  const section  = useSelector<RootState, Section[]>((state) => state.section.sections.filter((section) => section.id === sectionId))[0];
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
    {section?.id && <SectionView /> }
    <SectionCreate visible={isSectionFlowActive} onClose={handleClose} />
    <NoteEdit visible={isNoteFlowActive} onClose={handleClose} initialData={note} sectionId={sectionId} />
  </div>;
};
