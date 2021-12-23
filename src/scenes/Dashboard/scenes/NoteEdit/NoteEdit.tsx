import { useNavigate } from 'react-router-dom';
import { CREATE_NOTE, CREATE_SUBNOTE, EDIT_NOTE, Note, RootState } from 'types';
import { Modal } from 'components';
import { NoteForm } from 'forms/NoteForm';
import { getNoteUrl } from 'tools';
import { useDispatch, useSelector } from 'react-redux';
import { create, update } from 'store/actions/note';
import { create as createBlock } from 'store/actions/block';
import { deactivateAll } from 'store/actions/ui';
import cuid from 'cuid';

type NoteProps = {
  initialData?: Note;
  parentId?: string;
}

export const NoteEdit = ({ initialData, parentId }: NoteProps) => {
  const activeFlows = useSelector<RootState, string[]>((state) => state.ui.flows);

  const isNoteFlow = activeFlows.includes(CREATE_NOTE);
  const isSubNoteFlow = activeFlows.includes(CREATE_SUBNOTE);
  const isEditFlow = activeFlows.includes(EDIT_NOTE);

  const isNoteFlowActive = isSubNoteFlow || isNoteFlow || isEditFlow;

  const isEdit = !!initialData?.id && isEditFlow;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(deactivateAll());
  };

  const handleFinish = (note: Note) => {
    if (isEdit) {
      dispatch(update(note));
    } else {
      dispatch(create(note));
    }

    if(isSubNoteFlow && parentId){
      dispatch(createBlock({ id: cuid(), noteId: parentId, type: 'LINK', content: note.id }));
    }
    handleClose();
    navigate(`/note/${getNoteUrl(note)}`);
  };

  return <Modal visible={isNoteFlowActive} title={isEdit ? 'Edit note' : 'Create new note'} onClose={handleClose} >
    <NoteForm initialData={isEdit ? initialData : undefined} onFinish={handleFinish} parentId={isSubNoteFlow ? parentId : undefined} />
  </Modal>;
};
