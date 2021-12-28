import { useNavigate } from 'react-router-dom';
import cuid from 'cuid';
import { Note, RootState } from 'types';
import { Modal } from 'components';
import { NoteForm } from 'forms/NoteForm';
import { getNoteUrl } from 'tools';
import { useDispatch, useSelector } from 'react-redux';
import { create, update } from 'store/actions/note';
import { create as createBlock } from 'store/actions/block';
import { deactivateAll } from 'store/actions/ui';
import { FLOWS } from 'constants/flows';
import { uiSelectors } from 'store/selectors';

type NoteProps = {
  initialData?: Note | null;
  parentId?: string;
}

export const NoteEdit = ({ initialData, parentId }: NoteProps) => {
  const activeFlows = useSelector<RootState, string[]>(uiSelectors.all);
  const isNoteFlow = activeFlows.includes(FLOWS.CREATE_NOTE);
  const isSubNoteFlow = activeFlows.includes(FLOWS.CREATE_SUBNOTE);
  const isEditFlow = activeFlows.includes(FLOWS.EDIT_NOTE);

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

    if (isSubNoteFlow && parentId) {
      dispatch(createBlock({ id: cuid(), noteId: parentId, type: 'LINK', content: note.id }));
    }
    handleClose();
    navigate(getNoteUrl(note));
  };

  return <Modal visible={isNoteFlowActive} title={isEdit ? 'Edit note' : 'Create new note'} onClose={handleClose}>
    <NoteForm initialData={isEdit ? initialData : undefined} onFinish={handleFinish}
              parentId={isSubNoteFlow ? parentId : undefined} />
  </Modal>;
};
