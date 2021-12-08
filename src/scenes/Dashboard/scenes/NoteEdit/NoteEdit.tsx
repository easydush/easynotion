import { useHistory } from 'react-router-dom';
import { EDIT_NOTE, Note, RootState, VoidFn } from 'types';
import { Modal } from 'components';
import { NoteForm } from 'forms/NoteForm';
import { getNoteUrl } from 'tools';
import { useDispatch, useSelector } from 'react-redux';
import { create, update } from '../../../../store/actions/note';
import { deactivateAll } from '../../../../store/actions/ui';

type NoteProps = {
  visible: boolean,
  onClose: VoidFn;
  initialData?: Note;
  sectionId: string;
}

export const NoteEdit = ({ visible, onClose, initialData, sectionId }: NoteProps) => {
  const isEditFlow = useSelector<RootState, string[]>((state) => state.ui.flows.filter((flow) => flow === EDIT_NOTE)).length > 0;

  const isEdit = !!initialData?.id && isEditFlow;
  const history = useHistory();

  const dispatch = useDispatch();

  const handleFinish = (note: Note) => {
    if (isEdit) {
      dispatch(update(note));
    } else {
      dispatch(create(note));
    }
    dispatch(deactivateAll());
    history.push(`/note/${getNoteUrl(note)}`);
  };

  return <Modal visible={visible} title={isEdit ? 'Edit note' : 'Create new note'} onClose={onClose}>
    <NoteForm initialData={isEdit ? initialData : undefined} onFinish={handleFinish} sectionId={sectionId} />
  </Modal>;
};
