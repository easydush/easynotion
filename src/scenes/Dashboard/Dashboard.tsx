import { useSelector } from 'react-redux';
import { Note, RootState } from 'types';
import { NoteEdit, NoteView } from './scenes';


export const Dashboard = () => {
  const note = useSelector<RootState, Note | undefined>((state) => state.note.notes.find(note => note.id === state.ui.currentNoteId));

  return <div>
    {note?.id && <NoteView noteId={note.id} />}
    <NoteEdit initialData={note} parentId={note?.id} />
  </div>;
};
