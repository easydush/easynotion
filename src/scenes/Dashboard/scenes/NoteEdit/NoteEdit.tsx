import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cuid from 'cuid';
import { MediaType, Note, RootState } from 'types';
import { Modal } from 'components';
import { getNoteUrl } from 'tools';
import { FLOWS } from 'constants/flows';
import { NoteForm } from 'forms/NoteForm';
import { deactivateAllFlows, createBlock, createNote, updateNote } from 'store/actions';
import { noteSelectors, uiSelectors } from 'store/selectors';

export const NoteEdit: FC = () => {
  const initialData = useSelector<RootState, Note | null>(noteSelectors.current);
  const parentId = initialData?.id;

  const activeFlows = useSelector<RootState, FLOWS[]>(uiSelectors.all);
  const isNoteFlow = activeFlows.includes(FLOWS.CREATE_NOTE);
  const isSubNoteFlow = activeFlows.includes(FLOWS.CREATE_SUBNOTE);
  const isEditFlow = activeFlows.includes(FLOWS.EDIT_NOTE);

  const isNoteFlowActive = isSubNoteFlow || isNoteFlow || isEditFlow;

  const isEdit = !!initialData?.id && isEditFlow;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(deactivateAllFlows());
  }, [dispatch]);

  const handleFinish = useCallback((note: Note) => {
    if (isEdit) {
      dispatch(updateNote(note));
    } else {
      dispatch(createNote(note));
    }

    if (isSubNoteFlow && parentId) {
      dispatch(createBlock({ id: cuid(), noteId: parentId, type: MediaType.LINK, content: note.id }));
    }
    handleClose();
    navigate(getNoteUrl(note));
  }, [dispatch, handleClose, isSubNoteFlow, isEdit, navigate, parentId]);

  return <Modal visible={isNoteFlowActive} title={isEdit ? 'Edit note' : 'Create new note'} onClose={handleClose}>
    <NoteForm initialData={isEdit ? initialData : undefined} onFinish={handleFinish} onCancel={handleClose}
              parentId={isSubNoteFlow ? parentId : undefined} />
  </Modal>;
};
